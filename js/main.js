const blauw = document.getElementById("js--autoblauw");
const geel = document.getElementById("js--autogeel");
const grijs = document.getElementById("js--autogrijs");
const rood = document.getElementById("js--autorood");
const producten = document.getElementsByClassName("product");

blauw.onclick = function(){
    for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "none";
    }
    document.getElementById("js--autoblauwModal").style.display = "grid";
}

const closeautoblauw = document.getElementById("js--closeautoblauw");
closeautoblauw.onclick = function(){
    document.getElementById("js--autoblauwModal").style.display = "none";
    for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "block";
    }
}
 //////////////////////////////////////////////////////////

geel.onclick = function(){
    for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "none";
    }
    document.getElementById("js--autogeelModal").style.display = "grid";
}

const closeautogeel = document.getElementById("js--closeautogeel");
closeautogeel.onclick = function(){
    document.getElementById("js--autogeelModal").style.display = "none";
    for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "block";
    }
}

///////////////////////////////////////////////////////////////

grijs.onclick = function(){
    for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "none";
    }
    document.getElementById("js--autogrijsModal").style.display = "grid";
}

const closeautogrijs = document.getElementById("js--closeautogrijs");
closeautogrijs.onclick = function(){
    document.getElementById("js--autogrijsModal").style.display = "none";
        for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "block";
    }
}

rood.onclick = function(){
    for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "none";
    }
    document.getElementById("js--autoroodModal").style.display = "grid";
}

const closeautorood = document.getElementById("js--closeautorood");
closeautorood.onclick = function(){
    document.getElementById("js--autoroodModal").style.display = "none";
        for (let i = 0; i < producten.length; i++){
        producten[i].style.display = "block";
    }
}