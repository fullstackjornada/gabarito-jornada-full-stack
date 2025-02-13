import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://fullstackjornada:qojI71xVU2aV8UKC@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const database = client.db("spotifyAula");
// const songCollection = await database.collection("songs").find({}).toArray();

// console.log(songCollection);
