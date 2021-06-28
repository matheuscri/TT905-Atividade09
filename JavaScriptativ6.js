function undisplayPicture(a){
    const frame = document.getElementById("frame");
    /*frame.style.backgroundImage="none"; para aparecer a imagem inicial e parar na ultima imagem
     decisão do grupo*/
    frame.style.backgroundImage="frame";
    frame4.innerHTML=a.title;
    /*frame4.innerHTML=a.alt */
    /*frame.style.innerHTML="url('"+element.title+"')"; não aparce na caixa grande, não sei pq */
    
}

function displayPicture(element){
    const frame = document.getElementById("frame");
    frame.style.backgroundImage="url('"+element.src+"')";
    var frame4 = document.getElementById("frame4");
    frame4.innerHTML=element.title;
    /*frame.style.innerHTML="url('"+element.title+"')";*/ 
}

         /* Função 2 para integrante 1 */

const infos1 = [
    /*"Foto do meu 1º ano da faculdade",*/
    "Foto de uma festa com meus amigos",
    "Foto de um bar, com meus amigos",
    "Foto da festa Fantaria",
    "Foto tirada apos uma corrida de kart",
    "Foto minha em uma aula de quimica",
    "Foto tirada com meu primo",
    "Foto da festa do pijama",
    "Foto do final de ano"
]

const images1 = [
    /*"Ita1.jpg",*/
    "Ita2.jpg",
    "Ita3.jpg",
    "Ita5.jpg",
    "Ita6.jpg",
    "Ita10.jpg",
    "Ita13.jpg",
    "Ita14.jpg",
    "Ita15.jpg"
]

var current = 0;

function mod(n, m){
    return ((n%m)+m)%m;
}

function movePrevious(){
    const frame6 = document.getElementById("frame6");
    current = mod(current - 1, infos1.length);
    frame6.style.backgroundImage="url('"+images1[current]+"')";
    frame7.innerHTML = infos1[current];
    /*frame2.innerHTML =infos[current]; troquei pelo frame 3 para ficar na linha de baixo*/
}

function moveNext(){
    const frame2 = document.getElementById("frame6");
    current = mod(current + 1, infos1.length);
    frame6.style.backgroundImage="url('"+images1[current]+"')";
    frame7.innerHTML = infos1[current];
}

   /* Função 2 para integrante 2 */

const infos2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]

const images2 = [
    "Cotil1.jpg",
    "Cotil2.jpg",
    "Cotil3.jpg",
    "Cotil4.jpg",
    "Cotil5.jpg",
    "Cotil6.jpg",
    "Cotil7.jpg"
]

var current = 0;

function mod(n, m){
    return ((n%m)+m)%m;
}

function movePrevious3(){
    const frame8 = document.getElementById("frame8");
    current = mod(current - 1, infos2.length);
    frame8.style.backgroundImage="url('"+images2[current]+"')";
    frame5.innerHTML = infos2[current];
    /*frame2.innerHTML =infos[current]; troquei pelo frame 3 para ficar na linha de baixo*/
}

function moveNext2(){
    const frame8 = document.getElementById("frame8");
    current = mod(current + 1, infos2.length);
    frame8.style.backgroundImage="url('"+images2[current]+"')";
    frame5.innerHTML = infos2[current];
}