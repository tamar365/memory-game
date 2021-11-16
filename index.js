const cards = [
    {name: "A"},
    {name: "B"},
    {name: "c"},
    {name: "d"},
    {name: "A"},
    {name: "B"},
    {name: "c"},
    {name: "d"},
];

function randRange (a, b) {
    return Math.floor(a + Math.random() * (b-a));
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;
}

function shuffle(arr) {
    for (let i = 0; i<100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
      if (a1 == a2) {
        i--;
        continue;
      }
      swap(arr, a1, a2);
    }
}

function main() {
   console.log([...cards]);
   shuffle(cards);
   console.log(cards);
}

main();

function matchCards (j, i) {//יש קיצור מצולם
    if ( j != i && (arr[j].name === arr[i].name)) {//arr and not cards because like that it is general function
        return true
    }
}

console.log(matchCards(0,3))