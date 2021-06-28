// link geral do programa
let url = "https://tt905-progweb-matheus-cri.herokuapp.com/"

/********************************************************************** 
*******************************Cantores********************************
************************************************************************/

//let url = "https://tt905-prog-web-matheus-cri.herokuapp.com/cantores/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(`${url}${'cantores/'}`, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(cantor){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Cantor' : cantor
        })
    }
    //await fetch(url, options);cd
    await fetch(`${url}${'cantores/'}`,options);
}

async function callFetchWithPut(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Cantor' : novaMensagem
        })
    }
    await fetch(`${url}${'cantores/'}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
   // await fetch(`${url}${id}`, options);
   await fetch(`${url}${'cantores/'}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("entrei na função");
    
    const form = document.forms['postForm'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPost(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
/********************************************************************** 
*******************Soudtrack: Tony Hawk********************************
************************************************************************/

//let url = "https://tt905-prog-web-matheus-cri.herokuapp.com/soundtrack/Tony_Hawk_American_Wasteland/"


async function callFetchWithGets1(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json1");
    const response = await fetch(`${url}${'soundtrack/Tony_Hawk_American_Wasteland/'}`, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPosts1(musica){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: { 
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Music' : musica
        })
    }
    //await fetch(url, options);
    await fetch(`${url}${'soundtrack/Tony_Hawk_American_Wasteland/'}`, options);
}

async function callFetchWithPuts1(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Music' : novaMensagem
        })
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'soundtrack/Tony_Hawk_American_Wasteland/'}${id}`, options);
}

async function callFetchWithDeletes1(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'soundtrack/Tony_Hawk_American_Wasteland/'}${id}`, options);
}


/*
    Formulários
*/

function submitPosts1(){
    console.log("entrei na função");
    
    const form = document.forms['postForms1'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPosts1(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPuts1(){
    const form = document.forms['putForms1'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPuts1(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDeletes1(){
    const form = document.forms['deleteForms1'];  
    const id = form["id"].value;  
    callFetchWithDeletes1(id);
    return false; // Evitar o reload da tela.
}
/********************************************************************** 
*******************Soudtrack: Madden 10********************************
************************************************************************/

//let url = "https://tt905-prog-web-matheus-cri.herokuapp.com/soundtrack/Madden_NFL_10/"

async function callFetchWithGets2(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json2");
    const response = await fetch(`${url}${'soundtrack/Madden_NFL_10/'}`, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPosts2(musica){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: { //entender isso
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Music' : musica
        })//até isso
    }
    //await fetch(url, options);
    await fetch(`${url}${'soundtrack/Madden_NFL_10/'}`, options);
}

async function callFetchWithPuts2(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Music' : novaMensagem
        })
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'soundtrack/Madden_NFL_10/'}${id}`, options);
}

async function callFetchWithDeletes2(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'soundtrack/Madden_NFL_10/'}${id}`, options);
}

/*
    Formulários
*/

function submitPosts2(){
    console.log("entrei na função");
    
    const form = document.forms['postForms2'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPosts2(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPuts2(){
    const form = document.forms['putForms2'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPuts2(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDeletes2(){
    const form = document.forms['deleteForms2'];  
    const id = form["id"].value;  
    callFetchWithDeletes2(id);
    return false; // Evitar o reload da tela.
}

/********************************************************************** 
*******************Soudtrack: Guitar Hero********************************
************************************************************************/

//let url = "https://tt905-prog-web-matheus-cri.herokuapp.com/soundtrack/Guitar_hero/"

async function callFetchWithGets3(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json3");
    const response =  await fetch(`${url}${'soundtrack/Guitar_hero/'}`, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPosts3(musica){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: { //entender isso
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Music' : musica
        })//até isso
    }
    //await fetch(url, options);
    await fetch(`${url}${'soundtrack/Guitar_hero/'}`, options);
}

async function callFetchWithPuts3(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Music' : novaMensagem
        })
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'soundtrack/Guitar_hero/'}${id}`, options);
}

async function callFetchWithDeletes3(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'soundtrack/Guitar_hero/'}${id}`, options);
}
/*
    Formulários
*/

function submitPosts3(){
    console.log("entrei na função");
    
    const form = document.forms['postForms3'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPosts3(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPuts3(){
    const form = document.forms['putForms3'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPuts3(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDeletes3(){
    const form = document.forms['deleteForms3'];  
    const id = form["id"].value;  
    callFetchWithDeletes3(id);
    return false; // Evitar o reload da tela.
}

function submitGet(){
    callFetchWithGet();
    return false;
}
function submitGets1(){
    callFetchWithGets1();
    return false;
}
function submitGets2(){
    callFetchWithGets2();
    return false;
}
function submitGets3(){
    callFetchWithGets3();
    return false;
}

/********************************************************************** 
************************MongoDB:Musicas********************************
************************************************************************/


async function callFetchWithGets4(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json4");
    const response =  await fetch(`${url}${'database'}`, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou/GET");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

/* async function callFetchWithPosts4(musica){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: { //entender isso
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Music' : musica
        })//até isso
    }
    //await fetch(url, options);
    await fetch(`${url}${'database'}`, options);
}

async function callFetchWithPuts4(id, novaMensagem){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            'Music' : novaMensagem
        })
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'database'}${id}`, options);
}

async function callFetchWithDeletes4(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    //await fetch(`${url}${id}`, options);
    await fetch(`${url}${'database'}${id}`, options);
} */
/*
    Formulários
*/

/* function submitPosts4(){
    console.log("entrei na função");
    
    const form = document.forms['postForms3'];    
    const mensagem = form["mensagem"].value;
    callFetchWithPosts3(mensagem);
    return false; // Evitar o reload da tela.
}

function submitPuts4(){
    const form = document.forms['putForms3'];  
    const id = form["id"].value;  
    const mensagem = form["mensagem"].value;
    callFetchWithPuts3(id, mensagem);
    return false; // Evitar o reload da tela.
}

function submitDeletes4(){
    const form = document.forms['deleteForms3'];  
    const id = form["id"].value;  
    callFetchWithDeletes3(id);
    return false; // Evitar o reload da tela.
} */

function submitGets4(){
    callFetchWithGets4();
    return false;
}