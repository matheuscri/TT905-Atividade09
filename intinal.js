console.log("Rodando");
const express = require("express");
const app = express();
app.use(express.json());


// Permissões
var cors = require('cors');
app.use(cors());

// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3001);

app.get('/', 
    function (req, res){    
        res.send("Página Inicial ");
        //<br/>Para outras paginas digite '/' e o seguinte nome:\
        //soundtrackwaste\/cantores");
    }
);

// ===================================================================================
// ======================== Vetor de objetos Soundtrack ==============================

const soundtrack = {"Tony_Hawk_American_Wasteland":[
    "7 Seconds - We're Gonna Fight","Alkaline Trio - Wash Away (Beneath the Shadows) (T.S.O.L.)",
    "Bad Religion - We're Only Gonna Die","Black Flag - Rise Above","Circle Jerks - Wild in the Streets",
    "Dead Kennedys - California Über Alles","Emanuel - Search & Destroy (The Stooges)",
    "Fall Out Boy - Start Today (Gorilla Biscuits)","From Autumn To Ashes - Let's Have a War (Fear)",
    "Green Day - Holiday","My Chemical Romance - Astro Zombies (The Misfits)",
    "Rise Against - Fix Me (Black Flag)","Senses Fail - Institutionalized (Suicidal Tendencies)",
    "Taking Back Sunday - Suburban Home / I Like Food (Descendents)","The God Awfuls - Watch It Fall",
    "The Network - Teenagers From Mars (The Misfits)","Thrice - Seeing Red / Screaming at a Wall (Minor Threat)",
    "An Endless Sporadic - Sun of Pearl","Frank Black - Los Angeles","Nassim - Rawhide","The Faint - I Disappear",
    "Thursday - Ever Fallen In Love (The Buzzcocks)","Public Enemy feat. Ice Cube and Big Daddy Kane - Burn Hollywood Burn"
   ],
    "Madden_NFL_10": ["2Pac- Can’t See Me","Airbourne- Heads are Gonna Roll",
        "Alice In Chains- Them Bones","B.oB.- Created A Monster",
        "Bang Camero- Revolution","Beastie Boys- Sabotage",
        "Black Sabath- Paraniod","Cypress Hill- Get ‘Em Up",
        "Helmet- Unsung","Iron Maiden- Aces High",
        "Judas Priest- Painkiller","Kid Rock- I Am The Bullgod",
        "Killswitch Engage- Reckoning","Korn- Blind",
        "Mastodon- Divinations","Nas Feat. Puff Daddy- Hate Me Now",
        "Nirvana- Breed","Pantera- Walk",
        "Public Enemy- Shut Em Down","Rage Against The Machine- Guerilla Radio",
        "Set Your Goals- Gaia Bleeds (Make Way For Man)","Slipknot- Duality",
        "System Of A Down- Sugar","The Vanity Plan- Before I Die",
        "Young Dre The Truth- Cheah Beah"],

        "Guitar_hero" : ["I Love Rock & Roll - Joan Jett & the Blackhearts",
        "I Wanna Be Sedated - The Ramones",
        "Thunder Kiss 65 - White Zombie",
        "Smoke On The Water - Deep Purple",
        "Infected - Bad Religion",
        "Iron Man - Black Sabbath",
        "More Than A Feeling - Boston",
        "You've Got Another Thing Comin' - Judas Priest",
        "Take Me Out - Franz Ferdinand",
        "Sharp Dressed Man - ZZ Top"]
        
}


app.get('/soundtrack',
function (req, res){   
    res.send(soundtrack);
    }
)
app.get('/soundtrack/Tony_Hawk_American_Wasteland',
function (req, res){   
    res.send(soundtrack.Tony_Hawk_American_Wasteland);
    }
)
app.get('/soundtrack/Madden_NFL_10',
function (req, res){   
    res.send(soundtrack.Madden_NFL_10);
    }
)
    
app.get('/soundtrack/Guitar_Hero',
function (req, res){   
    res.send(soundtrack.Guitar_hero);
    }
)
app.get('/soundtrack/Tony_Hawk_American_Wasteland/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Tony_Hawk_American_Wasteland[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)

app.get('/soundtrack/Madden_NFL_10/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Madden_NFL_10[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)

app.get('/soundtrack/Guitar_Hero/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Guitar_hero[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)

app.post('/soundtrack/Tony_Hawk_American_Wasteland', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Tony_Hawk_American_Wasteland.push(Music);
        res.send("Adicionado nova música")
    }
);
//Get usar JSON {"Music": "o que queser"}
app.post('/soundtrack/Madden_NFL_10', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Madden_NFL_10.push(Music);
        res.send("Adicionado nova música")
    }
);
//Get usar JSON {"Music": "o que queser"}
app.post('/soundtrack/Guitar_Hero/', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Guitar_hero.push(Music);
        res.send("Adicionado nova música")
    }
);
//Get usar JSON {"Music": "o que queser"}
app.put('/soundtrack/Tony_Hawk_American_Wasteland/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Tony_Hawk_American_Wasteland[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.put('/soundtrack/Madden_NFL_10/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Madden_NFL_10[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.put('/soundtrack/Guitar_Hero/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Guitar_hero[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.delete('/soundtrack/Tony_Hawk_American_Wasteland/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Tony_Hawk_American_Wasteland[id];

        res.send("Música removida da lista com sucesso");
    }
);
app.delete('/soundtrack/Madden_NFL_10/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Madden_NFL_10[id];

        res.send("Música removida da lista com sucesso");
    }
);
app.delete('/soundtrack/Guitar_Hero/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Guitar_hero[id];

        res.send("Música removida da lista com sucesso");
    }
);


// ==================================================================================
// ========================== Vetor de Strings Cantores =============================

const cantores = [
    "Hot Chilli Peppers","Chorão","Charlie Brown Jr","Alexandre Magno Abrão","Rafa Moreira",
    "Ximbinha", "Supla","Guitarra Humana","Péricles","Dilma Roussef","Cleiton Rasta Dj","Alcides","Latino",
    "Mc Catra","Mc Carlos Funk Sumaré","Pabllo Vitar"
];

app.get('/cantores',
    function(req, res){
        // res.send(mensagens);
        //res.send("Cantores Aleatórios")
        res.send(cantores.filter(Boolean));
    }
);

app.get('/cantores/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Cantor = cantores[id];

        if (!Cantor){
            res.send("Cantor não encontrado, verifique se esse existe na lista");
        } else {
            res.send(Cantor);
        }
    }
)

app.post('/cantores', 
    (req, res) => {
        console.log(req.body.Cantor);
        const Cantor = req.body.Cantor;
        cantores.push(Cantor);
        res.send("Novo cantor.")
    }
); // Ao usar post no JSON usar const Cantor não o vetor "cantores"

app.put('/cantores/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Cantor = req.body.Cantor;
        cantores[id] = Cantor;        
        res.send("Nome do cantor corrigido com sucesso.")
    }
)

app.delete('/cantores/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete cantores[id];

        res.send("Cantor removido do corração com sucesso");
    }
);

// =========================================================================================
// ========================== Vetor de objetos Caracteristicas =============================



app.get('/soundtrack/Tony_Hawk_American_Wasteland',
function (req, res){   
    res.send(soundtrack.Tony_Hawk_American_Wasteland);
    }
)
app.get('/soundtrack/Madden_NFL_10',
function (req, res){   
    res.send(soundtrack.Madden_NFL_10);
    }
)
    
app.get('/soundtrack/Guitar_Hero',
function (req, res){   
    res.send(soundtrack.Guitar_hero);
    }
)


app.get('/soundtrack/Tony_Hawk_American_Wasteland/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Tony_Hawk_American_Wasteland[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
);

app.get('/soundtrack/Madden_NFL_10/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Madden_NFL_10[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)

app.get('/soundtrack/Guitar_Hero/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = soundtrack.Guitar_hero[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    }
)

app.post('/soundtrack/Tony_Hawk_American_Wasteland', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Tony_Hawk_American_Wasteland.push(Music);
        res.send("Adicionado nova música")
    }
);
//Get usar JSON {"Music": "o que queser"}
app.post('/soundtrack/Madden_NFL_10', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Madden_NFL_10.push(Music);
        res.send("Adicionado nova música")
    }
);
//Get usar JSON {"Music": "o que queser"}
app.post('/soundtrack/Guitar_Hero/', 
    (req, res) => {
        console.log(req.body.Music);
        const Music = req.body.Music;
        soundtrack.Guitar_hero.push(Music);
        res.send("Adicionado nova música")
    }
);
//Get usar JSON {"Music": "o que queser"}
app.put('/soundtrack/Tony_Hawk_American_Wasteland/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Tony_Hawk_American_Wasteland[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.put('/soundtrack/Madden_NFL_10/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Madden_NFL_10[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.put('/soundtrack/Guitar_Hero/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const Music = req.body.Music;
        soundtrack.Guitar_hero[id] = Music;        
        res.send("Nome da música corrigida com sucesso.")
    }
)
app.delete('/soundtrack/Tony_Hawk_American_Wasteland/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Tony_Hawk_American_Wasteland[id];

        res.send("Música removida da lista com sucesso");
    }
);
app.delete('/soundtrack/Madden_NFL_10/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Madden_NFL_10[id];

        res.send("Música removida da lista com sucesso");
    }
);
app.delete('/soundtrack/Guitar_Hero/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete soundtrack.Guitar_hero[id];

        res.send("Música removida da lista com sucesso");
    }
);


// ===================== Novo String Funções =====================

const algo = { "Meu Novo Mundo":{'Artista':"Chorão",'Gênero':"Rock Nacional"},
 "Help":{'Artista':"Borgore",'Gênero':"Eletronica"},
  "GNAT":{'Artista':"Eminem", "Gênero":"Hip-Hop"},
  "Carioca Girls":{'Artista':"Max", "Gênero":"2012"},
  "SAD!":{'Artista':"XXXTentacion", "Gênero":"Suicide"},
  "Crab Rave":{'Artista':"Noisestorm", "Gênero":"Eletronica"},
}

app.get('/algo',
function (req, res){   
    res.send(algo);
    }
)

app.get('/algo/help',
function (req, res){   
    res.send(algo.Help);
    }
)

app.get('/algo/help/artista',
function (req, res){   
    res.send(algo.Help.Artista);
    }
)

app.get('/algo/help/:id',
    function(req, res){
        const id = req.params.id - 1;
        const Music = algo.Help[id];

        if (!Music){
            res.send("A posição da música do jogo não foi encontrado, verifique se esse existe na lista");
        } else {
            res.send(Music);
        }
    })

//mongo "mongodb+srv://cluster0.c58yb.mongodb.net/myFirstDatabase" --username Adim-Matheus;
//mongodb+srv://Adim-Matheus:<password>@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Adim-Matheus:<password>@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
const mongodb = require('mongodb')

/* const password = process.env.PASSWORD || "Senha errada";
console.log(password); */
//const password = process.env.PASSWORD || "DPlrDV8OZ4KjINQi";
const password = process.env['PASSWORD']="DPlrDV8OZ4KjINQi";
console.log(password);

const connectionString = `mongodb+srv://Adim-Matheus:${password}@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
 //const connectionString = `mongodb+srv://Adim-Matheus:DPlrDV8OZ4KjINQi@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(connectionString); 
// mongodb+srv://Adim-Matheus:<password>@cluster0.c58yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 

const options = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true };

  (async()=>{
    const client = await mongodb.MongoClient.connect(connectionString, options);
    const db = client.db('myFistDatabase');
    const soundtrack = db.collection('musica');
    console.log(await soundtrack.find({}).toArray());

    app.get('/database',
    async function(req, res){
    // res.send(mensagens);
    res.send(await soundtrack.find({}).toArray());
        }
    );

 app.get('/database/:id',
    async function(req, res){
        const id = req.params.id;
        const chorao = await soundtrack.findOne(
            {_id : mongodb.ObjectID(id)})
        console.log(chorao);
        if (!chorao){
            res.send("Dado não encontrada");
        } else {
            res.send(chorao);
        }
    }
);

app.post('/database', 
    async (req, res) => {
        console.log(req.body);
        const chorao = req.body;
        
        delete chorao["_id"];

        soundtrack.insertOne(chorao);        
        res.send("criando um dado.");
    }
);

app.put('/database/:id',
    async (req, res) => {
        const id = req.params.id;
        const chorao = req.body;

        console.log(chorao);

        delete chorao["_id"];

        const num_mensagens = await soundtrack.countDocuments({_id : mongodb.ObjectID(id)});

        if (num_mensagens !== 1) {
            res.send('Ocorreu um erro por conta do número de mensagens');
            return;
        }

        await soundtrack.updateOne(
            {_id : mongodb.ObjectID(id)},
            {$set : chorao}
        );
        
        res.send("Dado atualizada com sucesso.")
    }
)

app.delete('/database/:id', 
    async (req, res) => {
        const id = req.params.id;
        
        await soundtrack.deleteOne({_id : mongodb.ObjectID(id)});

        res.send("Musica removida com sucesso");
    }
);

})();

