const color = ["color1", "color2", "color3", "color4"];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const grid = document.querySelector('.grid');

function render(array) {
    grid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("div");
        const text = document.createElement("span");
        row.append(text);
        text.innerText = array[i];
        row.classList.add('row');
        const colorIndex = Math.floor(Math.random() * 4);
        row.classList.add(color[colorIndex]);
        grid.append(row);
    }
}


function shuffle() {
    arr.sort(() => Math.random() - 0.5);
    render(arr);
}

function sort() {
    arr.sort();
    render(arr);
}

shuffle();