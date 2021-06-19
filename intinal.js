//mongo "mongodb+srv://cluster0.c58yb.mongodb.net/myFirstDatabase" --username Adim-Matheus

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Adim-Matheus:<password>@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

const mongodb = require('mongodb')
const password = process.env.PASSWORD || "asdf";
console.log(password);

const connectionString = `mongodb+srv://Adim-Matheus:${password}@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const options = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true };

  (async()=>{
    const client = await mongodb.MongoClient.connect(connectionString, options);
    const db = client.db('myFistDatabase');
    const soundtrack = db.collection('soundtrack');
    soundtrack.find({}).toArray
  })();
