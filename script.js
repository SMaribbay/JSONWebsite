var firstDiv = document.getElementById('favorites')

let favoriteMovies = [
{
"film" : "Memories of Murder",
"poster" : "https://bingeddata.s3.amazonaws.com/uploads/2020/12/memories-of-murder.jpg",
"director" : "Bong Joon-ho",
},
{
"film" : "Oldboy",
"poster" :"https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_FMjpg_UX1000_.jpg",
"director" : "Park Chan-wook",
},
{
  "film" : "Tokyo Godfathers",
  "poster" : "https://m.media-amazon.com/images/M/MV5BNWY2ODRkZDYtMjllYi00Y2EyLWFhYjktMTQ5OGNkY2ViYmY2XkEyXkFqcGdeQXVyNjUxMDQ0MTg@._V1_.jpg",
  "director" : "Satoshi Kon",
},
{
  "film" : "Lost in Translation",
  "poster" : "https://hdgoperahouse.org/wp-content/uploads/2018/12/Lost-in-Trans.jpg",
  "director" : "Sofia Coppola",
},
{
"film" : "City of God",
"poster" : "https://flxt.tmsimg.com/assets/p30586_p_v10_aj.jpg",
"director" : "Fernando Meirelles, Kátia Lund",
},
{
  "film" : "Finding Nemo",
  "poster" : "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810",
  "director" : "Andrew Stanton",
},
{
"film" : "Kill Bill",
"poster" : "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
"director" : "Quentin Tarantino",
},
{
"film" : "Mystic River",
"poster" : "https://upload.wikimedia.org/wikipedia/en/9/93/Mystic_River_poster.jpg",
"director" : "Clint Eastwood",
}
];

for (let i = 0; i < favoriteMovies.length; i++) {
  creatingElements(favoriteMovies[i]);
}
function creatingElements(favoriteMovies) {

  let contentCard = document.createElement("div");
  contentCard.classList.add ("contentCard);

  let filmTitle = document.createElement("h2");
  filmTitle.classList.add ("filmTitle");
  filmTitle.innerText = favoriteMovies['film'];
  contentCard.appendChild(filmTitle);


  let innerCard = document.createElement("DIV");
  contentCard.appendChild(innerCard);
  innerCard.classList.add("innerCard");
  let innerTextOne = document.createElement("p");
  innerTextOne.innerText = favoriteMovies['director'];
  innerCard.appendChild(innerTextOne);
  innerCard.appendChild(innerTextTwo);


  let cardImage = document.createElement("IMG");
  cardImage.classList.add("cardImage");
  cardImage.src = favoriteMovies["poster"];
  contentCard.appendChild(cardImage);


  firstDiv.appendChild(contentCard);
