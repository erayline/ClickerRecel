
let recel = 0
let recelMakinesi = 0
let recelDunyasi = 0
let recelEvreni = 0
let recelCanavar = 0
let makinecelAcildiMi = 0
let dunyacelAcildiMi = 0
let evrenecelAcildiMi = 0

let tiklamaUcret = 10
let merkeziTiklama = 1

setInterval(recelHesaplama,100)

function puanArttir(){
    recel += merkeziTiklama
    sonuc=Math.floor(recel)
    document.getElementById("title2").innerHTML = sonuc
}
function recelHesaplama(){
    recel += 0.1*recelMakinesi + 1.5*recelDunyasi + 20*recelEvreni + 3000*recelCanavar
    sonuc=Math.floor(recel)
    document.getElementById("title2").innerHTML = sonuc
}

function recelCanavariHarcamasi(){
    if (recel > 499999){
        recel -= 500000
        recelCanavar += 1
        document.getElementById("canavarSayiGoster").innerHTML = recelCanavar
        document.getElementById("title2").innerHTML = sonuc
    }
}

function recelMakinesiHarcamasi(){
    if (recel > 49){
        recel -= 50
        recelMakinesi += 1
        document.getElementById("makineSayiGoster").innerHTML = recelMakinesi
        document.getElementById("title2").innerHTML = sonuc
    }
}
function recelDunyasiHarcamasi(){
    if (recel > 499){
        recel -= 500
        recelDunyasi += 1
        document.getElementById("dunyaSayiGoster").innerHTML = recelDunyasi
        document.getElementById("title2").innerHTML = sonuc
    }
}

function recelEvreniHarcamasi(){
    if (recel > 4999){
        recel -= 5000
        recelEvreni += 1
        document.getElementById("evrenSayiGoster").innerHTML = recelEvreni
        document.getElementById("title2").innerHTML = sonuc
    }
}



function makineMaksla(){
    if (makinecelAcildiMi ==1){
        sonuc = recel/50
        sonuc = Math.floor(sonuc)
        for(let i=0; i<sonuc; i++){
            recelMakinesiHarcamasi()
        }
    }
}

function dunyaMaksla(){
    if (dunyacelAcildiMi ==  1){
        sonuc = recel/500
        sonuc = Math.floor(sonuc)
        for(let i=0; i<sonuc; i++){
            recelDunyasiHarcamasi()
        }
    }
}

function evrenMaksla(){
    if(evrenecelAcildiMi == 1){
        sonuc = recel / 5000
        sonuc = Math.floor(sonuc)
        for(let i=0; i<sonuc; i++){
            recelEvreniHarcamasi()
        }
    }
}

function makinecelAc(){

    if (recel > 5000){
        document.getElementById("makinecelButon").style.backgroundColor="white";
        recel -= 5000
        if (makinecelAcildiMi ==1){
            recel += 5000
        }
        makinecelAcildiMi = 1
    }
}
function dunyacelAc(){

    if (recel > 50000){
        document.getElementById("dunyacelButon").style.backgroundColor="white";
        recel -= 50000
        if (dunyacelAcildiMi ==1){
            recel += 50000
        }
        dunyacelAcildiMi = 1
    }
}
function evrenecelAc(){
    if (recel > 500000){
        document.getElementById("evrenecelButon").style.backgroundColor="white";
        recel -= 500000
        if (evrenecelAcildiMi ==1){
            recel += 500000
        }
        evrenecelAcildiMi = 1
    }
}

function tiklamaKatla(){
    if (recel > tiklamaUcret){
        merkeziTiklama = Math.pow(merkeziTiklama,2)
    }   
}
