require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

// MongoDB

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p9q45va.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("redux_explorer");
    const contentCollection = db.collection("contents");

    // Post New Contents.
    app.post("/api/add-content", async (req, res) => {
      try {
        const postData = req.body;
        const result = await contentCollection.insertOne(postData);
        res.status(201).send({ success: true, data: result });
      } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, data: error.massage });
      }
    });

    //  Get all Contents.
    app.get("/api/get-all", async (req, res) => {
      try {
        const cursor = await contentCollection.find({});
        const content = await cursor.toArray();
        res.status(201).send({ success: true, data: content });
      } catch (error) {
        res.status(500).send({ success: false, data: error.message });
      }
    });

    // Delete Content
    app.delete("/api/delete-Content/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const result = await contentCollection.find({ _id: new ObjectId(id) });

        if (result) {
          const deleteItem = await contentCollection.deleteOne({
            _id: new ObjectId(id),
          });
          if (deleteItem) {
            res.status(200).send({ success: "Item Delete Successfully" });
          } else {
            res.status(400).send({ success: "Item Was Not Found" });
          }
        }
      } catch (error) {
        res.status(500).send({ success: false, data: error });
      }
    });

    // Update Content
    app.put("/api/update-content/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            ...updateData,
          },
        };
        const result = await contentCollection.updateOne(
          filter,
          updateDoc,
          options
        );
        if (result.acknowledged === true) {
          res.status(200).send({ success: true, data: "Update Successfully" });
        } else {
          res.status(400).send({ success: false, data: "Not Update" });
        }
      } catch (error) {
        res.status(400).send({ success: false, data: error });
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server Is Running...");
});

app.listen(port, () => {
  console.log(`Server is Running on : ${port}`);
});
