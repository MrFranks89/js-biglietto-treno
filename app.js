//chiedere all'utente quanti km deve fare:
//creare un prompt
let distanzaKm = prompt ('inserisci il numero di km')

console.log(distanzaKm)

//chiedere all'utente la sua età

let etaUtente = prompt ('inserisci la tua età')

console.log(etaUtente)

//stabilire, in base ai km, il costo fisso del biglietto

let costoKm = distanzaKm * 0.21

console.log(costoKm)

//stabilire, in base all'età, lo sconto sul costo fisso

//se è <18 allora lo sconto è del 20%

if (etaUtente <= 18) {
    let scontoDiciotto = costoKm * 0.2
    let prezzoMinori = costoKm - scontoDiciotto
    typeof prezzoMinori
    console.log(prezzoMinori)
}
//se è >65 allora lo sconto è del 40%

else if (etaUtente >= 65) {
    let scontoOver = costoKm * 0.4
    let prezzoOver = costoKm - scontoOver
    console.log(prezzoOver)
}

else{
    console.log(costoKm)
}

const price = document.getElementById('costototale')
