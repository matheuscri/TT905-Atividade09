const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Adim-Matheus:<password>@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
const options = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true };

  (async()=>{
    const client = await mongodb.MongoClient.connect(connectionString, options);
    const db = client.db('myFistDatabase');
    const soundtrack = db.collection('soundtrack');
    console.log(soundtrack.find({}).toArray());

    app.get('/database',async function(req,res){
      res.send( await soundtrack.find({}).toArray());
    });

    app.get('/database',
    async function(req, res){
        const id = req.params.id;
        const Music = await soundtrack.findOne({
          _id : mongodb.ObjectID(id)
        });
        console.log(soundtrack);

        if (!Music){
            res.send("Não achado");
        } else {
            res.send(Music);
        }
    }
)
app.post('/database', 
    async (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        delete soundtrack["_id"];
        soundtrack.insertOne(Music);
        res.send("Adicionado nova música")
    }
)
app.put('/database/id',
    async (req, res) => {
        const id = req.params.id;
        const Music = req.body.Music;
        console.log(soundtrack);
        delete soundtrack["_id"];
        const num_mensa = await soundtrack.countDocuments({_id : mongodb.ObjectID(id)});
        if(num_mensa !== 1){
          res.send("Não achado");
          return;
        }
        await soundtrack.updateOne({_id : mongodb.ObjectID(id)},{$set : soundtrack})
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.delete('/database/:id', 
    async (req, res) => {
        const id = req.params.id;
        await soundtrack.deleteOne({_id : mongodb.ObjectID(id)});

        res.send("Música removida da lista com sucesso");
    }
);
    });
