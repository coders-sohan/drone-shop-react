const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

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
		app.get("/cart", async (req, res) => {
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
			const result = await usersCollection.updateOne(filter, updateDoc, options);
			res.json(result);
		});

		console.log("Database connected");
	} finally {
		// await client.close();
	}
}

run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Database is running now");
});

app.listen(port, () => {
	console.log("local host is running", port);
});
