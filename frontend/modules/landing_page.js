import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  
  //Updates the DOM with the cities
  cities.forEach((key) => {
   addCityToDOM(key.id, key.city, key.description, key.image);
  }
  );}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    const response = await fetch('http://3.111.248.189:8082/cities');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  /*
  const container = document.getElementById('data');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  div.className = city;
  img.src = image;
  h2.textContent = city;
  p.textContent = description;

  //div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p);
  container.appendChild(div);
  */
//   const cityElement = document.createElement('div');
//   cityElement.id = id;
//   cityElement.innerHTML = `
//   <img src="${image}" alt="${city}">
//     `;

//     const cardImage = document.createElement("div")
//     cardImage.setAttribute("class","tile");

   const container = document.getElementById('data');
//   container.appendChild(cityElement);



const Divtile = document.createElement("div");
Divtile.setAttribute("class","tile col-lg-3 col-md-6 col-sm-12");

Divtile.setAttribute("id",id);
const ImageElem = document.createElement("img");
ImageElem.setAttribute("src",image);
ImageElem.setAttribute("class","img-fluid");
ImageElem.setAttribute("height","100px");
ImageElem.setAttribute("width","100px");
Divtile.append(ImageElem);

const TextDiv = document.createElement("div");
TextDiv.setAttribute("class","tile-text");
const h2 = document.createElement('h2');
const p = document.createElement('p');
h2.textContent = city;
p.textContent = description;
TextDiv.append(h2);
TextDiv.append(p);

Divtile.append(TextDiv);

container.append(Divtile);

//console.log(TextDiv);










}

export { init, fetchCities, addCityToDOM };
 