const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
require("dotenv").config();
const port = process.env.PORT || 5000;

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());
const objectId = require("mongodb").ObjectId;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zajjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
	// const collection = client.db("test").collection("devices");
	// // perform actions on the collection object
	// // client.close();
});

async function verifyToken(req, res, next) {
	if (req.headers?.authorization?.startsWith("Bearer ")) {
		const token = req.headers.authorization.split(" ")[1];

		try {
			const decodedUser = await admin.auth().verifyIdToken(token);
			req.decodedEmail = decodedUser.email;
		} catch (error) {}
	}
	next();
}

async function run() {
	try {
		await client.connect();
		const database = client.db("DroneShop");
		const dataCollection = database.collection("products");
		const cartCollection = database.collection("AddToCart");
		const usersCollection = database.collection("users");

		// get all data
		app.get("/products", async (req, res) => {
			const cursor = dataCollection.find({});
			const data = await cursor.toArray();
			res.send(data);
		});

		// get single product data
		app.get("/products/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: objectId(id) };
			const dataDetails = await dataCollection.findOne(query);
			res.json(dataDetails);
		});

		// delete single product data
		app.delete("/products/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: objectId(id) };
			const result = await dataCollection.deleteOne(query);
			res.json(result);
		});

		// post cart data
		app.post("/cart", async (req, res) => {
			const data = req.body;
			const cart = await cartCollection.insertOne(data);
			res.json(cart);
		});

		// get all cart data
		app.get("/cart", verifyToken, async (req, res) => {
			const email = req.query.email;
			const query = { email: email };
			const cursor = cartCollection.find(query);
			const data = await cursor.toArray();
			res.send(data);
		});

		// delete single cart data
		app.delete("/cart/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: objectId(id) };
			const result = await cartCollection.deleteOne(query);
			res.json(result);
		});

		//  get user form database
		app.get("/users/:email", async (req, res) => {
			const email = req.params.email;
			const query = { email: email };
			const user = await usersCollection.findOne(query);
			let isAdmin = false;
			if (user?.role === "admin") {
				isAdmin = true;
			}
			res.json({ admin: isAdmin });
		});

		//  post user form firebase
		app.post("/users", async (req, res) => {
			const user = req.body;
			const users = await usersCollection.insertOne(user);
			res.json(users);
		});

		// update user data
		app.put("/users", async (req, res) => {
			const user = req.body;
			const filter = { email: user.email };
			const options = { upsert: true };
			const updateDoc = { $set: user };
			const result = await usersCollection.updateOne(
				filter,
				updateDoc,
				options
			);
			res.json(result);
		});

		// update user role data
		app.put("/users/admin", verifyToken, async (req, res) => {
			const user = req.body;
			const requester = req.decodedEmail;
			if (requester) {
				const requesterAccount = await usersCollection.findOne({
					email: requester,
				});
				console.log(requesterAccount);
				if (requesterAccount.role === "admin") {
					const filter = { email: user.email };
					const updateDoc = { $set: { role: "admin" } };
					const result = await usersCollection.updateOne(filter, updateDoc);
					res.json(result);
				} else {
					res
						.status(403)
						.json({ message: "You don't have access to make an admin" });
				}
			}
		});

		console.log("Database connected");
	} finally {
		// await client.close();
	}
}

run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Database is running");
});

app.listen(port, () => {
	console.log("local host is running", port);
});
