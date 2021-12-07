const cards = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "F" },
    { name: "G" },
    { name: "G" },
    { name: "H" },
    { name: "H" },
    { name: "I" },
    { name: "I" },
    { name: "J" },
    { name: "J" },
    { name: "K" },
    { name: "K" },
    { name: "L" },
    { name: "L" },
];

function randRange(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}
function shuffleArray(arr) {
    for (let index = 0; index < 100; index++) {
        let a1 = randRange(0, arr.length)
        let a2 = randRange(0, arr.length)
        if (a1 == a2) {
            index--
            continue
        }
        swap(arr, a1, a2)
    }
}


function checkCards(arr, a, b) {
    let a1 = randRange(0, arr.length)
    let a2 = randRange(0, arr.length)

    if (a1 == a2) {
        console.log (true)
    }

    else
        console.log (true)

}

function checkCards(arr, a, b) {
     if (arr[a].name == arr[b].name) {
         console.log (true)
     }

     else {console.log (false)}
    
}

let cardClicked = (evn) => {
    //console.log(evn.target.innerHTML);
    let  cardEL = evn.target;
    let idx = cardEL.id;
    cardEL = innerHTML = cards[idx].name;
}

function creaCardElement (idx) {
const board = document.getElementById("board")
const cardEL = document.createElement("div")
//cardEL.innerHTML = card.name
cardEL.id = idx;
cardEL.className = "card"
//cardEL.onclick = () => {
//    alert(card.name);
//}
cardEL.onclick = cardClicked;
board.appendChild(cardEL)
}

function main() {
    shuffleArray(cards);
    for (let idx in cards){
    creaCardElement(idx)
    }
}

window.onload = () => {
main();
}
