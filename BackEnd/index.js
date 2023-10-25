const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");


app.use(cors());
app.use(express.json());


// MongoDB

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rezwanrahim99:4XBN3KInwtres90M@cluster0.p9q45va.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const db = client.db("redux_explorer");
        const productCollection = db.collection("products");

        app.get("/products", async (req, res) => {
            const cursor = productCollection.find({});
            const products = cursor.toArray();
            res.send({ status: true, data: products })
        })

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Server Is Running...')
})

app.listen(port, () => {
    console.log(`Server is Running on : ${port}`)
})