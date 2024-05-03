let pValasztott = 3;
let valasztottemar = false;
let kepeklista = ["rock-2556896_1280.png","pngtree-stylish-ripped-torn-paper-texture-background-transparent-png-image_8797582.png","680ce8a9cf105b860fb74c8690d9f1bc.png"]
let eredmenytxt = document.getElementById("eredmenyid")
let streak = 0
let streakir = document.getElementById("overallpontid")

function valasztas(valasztott){
    if(!valasztottemar){
        valasztottemar = true
        pValasztott = valasztott;
        let valasztottkep = document.getElementById(valasztott)
        valasztottkep.style.border = "3px solid red"
    }
}

function cancel(){
    if(valasztottemar){
        pValasztott = 3;
        document.getElementById(0).style.border="0px"
        document.getElementById(1).style.border="0px"
        document.getElementById(2).style.border="0px"
        valasztottemar = false;
    }
}

function adjRandomot(max){
    return Math.floor(Math.random() * max);
}

function playB(){
    if(valasztottemar){
        let randomszam = adjRandomot(3);
        document.getElementById("gepkep").src = kepeklista[randomszam]
        document.getElementById("playBid").disabled=true;
        document.getElementById("cancelBid").disabled=true;
        if(pValasztott === 0 & randomszam === 1){
            eredmenytxt.innerHTML = "Vesztettél!"
            streak = 0;
        }
        else if(pValasztott === 0 & randomszam === 2){
            eredmenytxt.innerHTML = "Nyertél"
            streak++;
        }
        else if(pValasztott === 0 & randomszam === 0){
            eredmenytxt.innerHTML = "Döntetlen"
        }
        if(pValasztott === 1 & randomszam === 2){
            eredmenytxt.innerHTML = "Vesztettél!"
            streak = 0;
        }
        else if(pValasztott === 1 & randomszam === 0){
            eredmenytxt.innerHTML = "Nyertél"
            streak++;
        }
        else if(pValasztott === 1 & randomszam === 1){
            eredmenytxt.innerHTML = "Döntetlen"
        }
        if(pValasztott === 2 & randomszam === 0){
            eredmenytxt.innerHTML = "Vesztettél!"
            streak = 0;
        }
        else if(pValasztott === 2 & randomszam === 1){
            eredmenytxt.innerHTML = "Nyertél"
            streak++;
        }
        else if(pValasztott === 2 & randomszam === 2){
            eredmenytxt.innerHTML = "Döntetlen"
        }
        document.getElementById("rematchBid").style.display = "unset"
    }
    streakir.innerHTML = streak;
}

function rematch(){
    pValasztott = 3;
    document.getElementById("cancelBid").disabled=false;
    document.getElementById("playBid").disabled=false;
    document.getElementById(0).style.border="0px"
    document.getElementById(1).style.border="0px"
    document.getElementById(2).style.border="0px"
    valasztottemar = false;
    document.getElementById("gepkep").src = "kérdőjelpng.png";
    eredmenytxt.innerHTML = "(eredmény)"
    document.getElementById("rematchBid").style.display = "none"
}