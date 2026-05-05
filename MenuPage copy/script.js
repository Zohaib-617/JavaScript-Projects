let Allbtn = document.querySelector('#All-btn')
let breakfastbtn = document.querySelector('#breakfast-btn')
let lunchbtn = document.querySelector('#lunch-btn')
let dinnerbtn = document.querySelector('#dinner-btn')
let breakfastcontainer = document.querySelector('.breakfast-container')

let breakfast = [   
     {      "name": "Pancakes",      "price": '$5.99',      "description": "Fluffy pancakes served with maple syrup and butter.",      "image": "https://images.pexels.com/photos/21820995/pexels-photo-21820995.jpeg"    },   
     {      "name": "Omelette",      "price": '$4.99',      "description": "Three-egg omelette with cheese, onions, and peppers.",      "image": "https://picsum.photos/seed/omelette/400/300"    },   
      {      "name": "French Toast",      "price": '$5.49',      "description": "Golden-brown toast topped with powdered sugar and syrup.",      "image": "https://picsum.photos/seed/frenchtoast/400/300"    },   
      {      "name": "Fruit Bowl",      "price": '$3.99',      "description": "Fresh seasonal fruits served chilled.",      "image": "https://picsum.photos/seed/fruitbowl/400/300"    }  ]

let lunch = [
     {
      "name": "Grilled Chicken Sandwich",
      "price": '$7.99',
      "description": "Grilled chicken breast with lettuce, tomato, and mayo.",
      "image": "https://picsum.photos/seed/chickensandwich/400/300"
    },
    {
      "name": "Caesar Salad",
      "price": '$6.49',
      "description": "Crisp romaine lettuce with Caesar dressing and croutons.",
      "image": "https://picsum.photos/seed/caesarsalad/400/300"
    },
    {
      "name": "Beef Burger",
      "price": '$8.49',
      "description": "Juicy beef patty with cheese, lettuce, and tomato.",
      "image": "https://images.pexels.com/photos/29056351/pexels-photo-29056351.jpeg"
    },
    {
      "name": "Pasta Alfredo",
      "price": '$7.49',
      "description": "Creamy Alfredo pasta with parmesan cheese.",
      "image": "https://picsum.photos/seed/pastaalfredo/400/300"
    }
]

let dinner = [
  
  {
    "name": "Grilled Chicken Alfredo",
    "price": '$14.99',
    "description": "Creamy Alfredo pasta topped with perfectly grilled chicken breast. The rich parmesan sauce blends beautifully with tender fettuccine. A comforting and satisfying dinner classic.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    "name": "Beef Steak with Garlic Butter",
    "price": "$19.99",
    "description": "Juicy grilled beef steak cooked to perfection and topped with garlic herb butter. Served with a side of roasted vegetables. A hearty meal packed with flavor.",
    "image": "https://images.pexels.com/photos/7159268/pexels-photo-7159268.jpeg"
  },
  {
    "name": "Margherita Pizza",
    "price": "$12.50",
    "description": "Classic Italian pizza topped with fresh mozzarella, tomatoes, and basil leaves. Baked in a wood-fired oven for a crispy crust. Simple, fresh, and delicious.",
    "image": "https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg"
  },
  {
    "name": "Salmon with Lemon Butter Sauce",
    "price": "$17.75",
    "description": "Pan-seared salmon fillet drizzled with a tangy lemon butter sauce. Served with steamed vegetables and rice. Light yet flavorful dinner option.",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
  }
]

let All = [
    {      "name": "Pancakes",      "price": '$5.99',      "description": "Fluffy pancakes served with maple syrup and butter.",      "image": "https://images.pexels.com/photos/21820995/pexels-photo-21820995.jpeg"    },   
     {      "name": "Omelette",      "price": '$4.99',      "description": "Three-egg omelette with cheese, onions, and peppers.",      "image": "https://picsum.photos/seed/omelette/400/300"    },   
      {
      "name": "Grilled Chicken Sandwich",
      "price": '$7.99',
      "description": "Grilled chicken breast with lettuce, tomato, and mayo.",
      "image": "https://picsum.photos/seed/chickensandwich/400/300"
    },
    {
      "name": "Caesar Salad",
      "price": '$6.49',
      "description": "Crisp romaine lettuce with Caesar dressing and croutons.",
      "image": "https://picsum.photos/seed/caesarsalad/400/300"
    },
     {
    "name": "Margherita Pizza",
    "price": "$12.50",
    "description": "Classic Italian pizza topped with fresh mozzarella, tomatoes, and basil leaves. Baked in a wood-fired oven for a crispy crust. Simple, fresh, and delicious.",
    "image": "https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg"
  },
  {
    "name": "Salmon with Lemon Butter Sauce",
    "price": "$17.75",
    "description": "Pan-seared salmon fillet drizzled with a tangy lemon butter sauce. Served with steamed vegetables and rice. Light yet flavorful dinner option.",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
  },
  {
    "name": "Grilled Chicken Alfredo",
    "price": '$14.99',
    "description": "Creamy Alfredo pasta topped with perfectly grilled chicken breast. The rich parmesan sauce blends beautifully with tender fettuccine. A comforting and satisfying dinner classic.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    "name": "Beef Steak with Garlic Butter",
    "price": "$19.99",
    "description": "Juicy grilled beef steak cooked to perfection and topped with garlic herb butter. Served with a side of roasted vegetables. A hearty meal packed with flavor.",
    "image": "https://images.pexels.com/photos/7159268/pexels-photo-7159268.jpeg"
  },
  {      "name": "French Toast",      "price": '$5.49',      "description": "Golden-brown toast topped with powdered sugar and syrup.",      "image": "https://picsum.photos/seed/frenchtoast/400/300"    },   
      {      "name": "Fruit Bowl",      "price": '$3.99',      "description": "Fresh seasonal fruits served chilled.",      "image": "https://picsum.photos/seed/fruitbowl/400/300"    },
    {
      "name": "Beef Burger",
      "price": '$8.49',
      "description": "Juicy beef patty with cheese, lettuce, and tomato.",
      "image": "https://images.pexels.com/photos/29056351/pexels-photo-29056351.jpeg"
    },
    {
      "name": "Pasta Alfredo",
      "price": '$7.49',
      "description": "Creamy Alfredo pasta with parmesan cheese.",
      "image": "https://picsum.photos/seed/pastaalfredo/400/300"
    }
]

function breakfastdishes(){
  breakfastcontainer.innerHTML = ''
  
 breakfast.map((elem)=>{
   const outerDiv = document.createElement("div");
outerDiv.className = "outer-breakfast";

// Image container
const imgWrapper = document.createElement("div");

const img = document.createElement("img");
img.className = "content-image";
img.src =elem.image;
img.alt = "Pancakes";

imgWrapper.appendChild(img);

// Description container
const descDiv = document.createElement("div");
descDiv.className = "description-div";

// Heading + price container
const topRow = document.createElement("div");

const heading = document.createElement("h4");
heading.className = "breakfast-heading";
heading.textContent = elem.name;

const price = document.createElement("span");
price.className = "breakfast-span";
price.textContent = elem.price;

topRow.appendChild(heading);
topRow.appendChild(price);

// Description text
const description = document.createElement("p");
description.className = "breakfast-description";
description.textContent = elem.description;

// Append everything
descDiv.appendChild(topRow);
descDiv.appendChild(description);

outerDiv.appendChild(imgWrapper);
outerDiv.appendChild(descDiv);

// Finally append to body (or any container)
breakfastcontainer.appendChild(outerDiv);

 })

}

function lunchdishes(){
   breakfastcontainer.innerHTML = ''
 lunch.map((elem)=>{
   const outerDiv = document.createElement("div");
outerDiv.className = "outer-breakfast";

// Image container
const imgWrapper = document.createElement("div");

const img = document.createElement("img");
img.className = "content-image";
img.src =elem.image;
img.alt = "Pancakes";

imgWrapper.appendChild(img);

// Description container
const descDiv = document.createElement("div");
descDiv.className = "description-div";

// Heading + price container
const topRow = document.createElement("div");

const heading = document.createElement("h4");
heading.className = "breakfast-heading";
heading.textContent = elem.name;

const price = document.createElement("span");
price.className = "breakfast-span";
price.textContent = elem.price;

topRow.appendChild(heading);
topRow.appendChild(price);

// Description text
const description = document.createElement("p");
description.className = "breakfast-description";
description.textContent = elem.description;

// Append everything
descDiv.appendChild(topRow);
descDiv.appendChild(description);

outerDiv.appendChild(imgWrapper);
outerDiv.appendChild(descDiv);

// Finally append to body (or any container)
breakfastcontainer.appendChild(outerDiv);

 })

}

function dinnerdishes(){
   breakfastcontainer.innerHTML = ''
 dinner.map((elem)=>{
   const outerDiv = document.createElement("div");
outerDiv.className = "outer-breakfast";

// Image container
const imgWrapper = document.createElement("div");

const img = document.createElement("img");
img.className = "content-image";
img.src =elem.image;
img.alt = "Pancakes";

imgWrapper.appendChild(img);

// Description container
const descDiv = document.createElement("div");
descDiv.className = "description-div";

// Heading + price container
const topRow = document.createElement("div");

const heading = document.createElement("h4");
heading.className = "breakfast-heading";
heading.textContent = elem.name;

const price = document.createElement("span");
price.className = "breakfast-span";
price.textContent = elem.price;

topRow.appendChild(heading);
topRow.appendChild(price);

// Description text
const description = document.createElement("p");
description.className = "breakfast-description";
description.textContent = elem.description;

// Append everything
descDiv.appendChild(topRow);
descDiv.appendChild(description);

outerDiv.appendChild(imgWrapper);
outerDiv.appendChild(descDiv);

// Finally append to body (or any container)
breakfastcontainer.appendChild(outerDiv);

 })

}

function Alldishes(){
   breakfastcontainer.innerHTML = ''
 All.map((elem)=>{
   const outerDiv = document.createElement("div");
outerDiv.className = "outer-breakfast";

// Image container
const imgWrapper = document.createElement("div");

const img = document.createElement("img");
img.className = "content-image";
img.src =elem.image;
img.alt = "Pancakes";

imgWrapper.appendChild(img);

// Description container
const descDiv = document.createElement("div");
descDiv.className = "description-div";

// Heading + price container
const topRow = document.createElement("div");

const heading = document.createElement("h4");
heading.className = "breakfast-heading";
heading.textContent = elem.name;

const price = document.createElement("span");
price.className = "breakfast-span";
price.textContent = elem.price;

topRow.appendChild(heading);
topRow.appendChild(price);

// Description text
const description = document.createElement("p");
description.className = "breakfast-description";
description.textContent = elem.description;

// Append everything
descDiv.appendChild(topRow);
descDiv.appendChild(description);

outerDiv.appendChild(imgWrapper);
outerDiv.appendChild(descDiv);

// Finally append to body (or any container)
breakfastcontainer.appendChild(outerDiv);

 })

}

breakfastbtn.addEventListener('click',()=>{
   breakfastdishes()
    
})
lunchbtn.addEventListener('click',lunchdishes)
dinnerbtn.addEventListener('click',dinnerdishes)
Allbtn.addEventListener('click',Alldishes)
