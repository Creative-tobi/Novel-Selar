document.getElementById("demo").innerHTML = "Free downloadable novels just for you";
document.getElementById("first").innerHTML = "<h1>Free novels at your fingertips</h1>";
// let but = document.getElementById("but").innerHTML;

const car = [
  {
    image: `<img src="/images/darkwater.JPG" alt="">`,
    title: " Dark Water",
    author: "Eliot Mariner ",
  },
  {
    image: `<img src="/images/deadly.JPG" alt="">`,
    title: "One Deadly Eye",
    author: "Amina Rivers",
  },
  {
    image: `<img src="/images/frontpagefatality.JPG" alt="">`,
    title: "Font Page Fatality",
    author: "LynDee Walker",
  },
  {
    image: `<img src="/images/game.JPG" alt="">`,
    title: "The Game of Gods",
    author: "Scarlett St. Clair",
  },
  {
    image: `<img src="/images/jamil.JPG" alt="">`,
    title: "Jamil",
    author: "Fatima Bello",
  },
  {
    image: `<img src="/images/raisingdragon.JPG" alt="">`,
    title: "Raising Dragon",
    author: "Bryan Davis",
  },
  {
    image: `<img src="/images/success.JPG" alt="">`,
    title: "Success",
    author: "Kehinde Ogundipe",
  },
  {
    image: `<img src="/images/staywithme.JPG" alt="">`,
    title: "Stay With Me",
    author: "Ayọ̀bámi Adébáyọ̀",
  },
  {
    image: `<img src="/images/howl.JPG" alt="">`,
    title: "Howl",
    author: "Nneka Chukwu",
  },
  {
    image: `<img src="/images/memory.JPG" alt="">`,
    title: "Memory",
    author: "Allen Ginsberg",
  },
  {
    image: `<img src="/images/darkwater.JPG" alt="">`,
    title: "Dark Water",
    author: "Eliot Mariner ",
  },
  {
    image: `<img src="/images/deadly.JPG" alt="">`,
    title: "One Deadly Eye",
    author: "Amina Rivers",
  },
  {
    image: `<img src="/images/frontpagefatality.JPG" alt="">`,
    title: "Font Page Fatality",
    author: "LynDee Walker",
  },
  {
    image: `<img src="/images/game.JPG" alt="">`,
    title: "The Game of Gods",
    author: "Scarlett St. Clair",
  },
  {
    image: `<img src="/images/jamil.JPG" alt="">`,
    title: "Jamil",
    author: "Fatima Bello",
  },
  {
    image: `<img src="/images/raisingdragon.JPG" alt="">`,
    title: "Raising Dragon",
    author: "Bryan Davis",
  },
  {
    image: `<img src="/images/success.JPG" alt="">`,
    title: "Success",
    author: "Kehinde Ogundipe",
  },
  {
    image: `<img src="/images/staywithme.JPG" alt="">`,
    title: "Stay With Me",
    author: "Ayọ̀bámi Adébáyọ̀",
  },
  {
    image: `<img src="/images/howl.JPG" alt="">`,
    title: "Howl",
    author: "Nneka Chukwu",
  },
  {
    image: `<img src="/images/memory.JPG" alt="">`,
    title: "Memory",
    author: "Allen Ginsberg",
  },
];

let cars = car
  .map(
    (item) => `
 
    <div class="mainclass">
        <div class="main">
            <p class="img">${item.image}</p>
            <h2>${item.title}</h2>
            <p>${item.author}</p>
            <button id="but">Add to cart</button>
            <button id="but2">Preview</button>
        </div>
    </div>
`
  )
  .join("");
document.getElementById("cardchild").innerHTML = cars;