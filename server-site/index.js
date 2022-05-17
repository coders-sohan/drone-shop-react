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

		// get all data
		app.get("/products", async (req, res) => {
			const cursor = dataCollection.find({});
			const data = await cursor.toArray();
			res.send(data);
		});

		// post add to cart data
		app.post("/cart", async (req, res) => {
			const data = req.body;
			const cart = await cartCollection.insertOne(data);
			res.json(cart);
		});

		// get all add to cart data
		app.get("/cart", async (req, res) => {
			const cursor = cartCollection.find({});
			const data = await cursor.toArray();
			res.send(data);
		});

		// get single data
		app.get("/products/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: objectId(id) };
			const dataDetails = await dataCollection.findOne(query);
			res.json(dataDetails);
		});

		console.log("db connected");
	} finally {
		// await client.close();
	}
}

run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("running db");
});

app.listen(port, () => {
	console.log("local host running", port);
});
