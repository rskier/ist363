// console.log("js has been loaded");

// variables, methods and functions

// 1. variables
const myName = "Jeff Passetti";
console.log(myName);

const myAge = 21;
const myCity = "Syracuse";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;

console.log(introduction);


// 2. methods
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

//console.log(menuBtn);

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); // end of closeBtn click event

//arrays and objects

//basic variable
const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
//document.body.appendChild(coffeeHeadline);


// objects
const coffee = {
    name: "Mocha",
    price: 3.99,
    description: "This is a delicious cup of coffee."
};

// console.log(coffee);
console.log(coffee.description);

const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
//document.body.appendChild(coffeeObjHeadline);

//array:
const coffees = [
    {
        name: "Mocha", 
        price: 3.99,
        description: "this is a delicious cup of coffee.",
        image: {
            fileName: "coffee.jpeg",
            width: 630,
            height: 630,
            alt: "A cup of coffee.",
        }
    },
    {
        name: "Latte", 
        price: 3.99,
        description: "this is a delicious cup of coffee.",
        image: {
            fileName: "coffee.jpeg",
            width: 630,
            height: 630,
            alt: "A cup of coffee.",
        }
    },
    {
        name: "Espresso",
        price: 3.99,
        description: "this is a delicious cup of coffee." ,
        image: {
            fileName: "coffee.jpeg",
            width: 630,
            height: 630,
            alt: "A cup of coffee.",
        }
    }
];
//console.log(coffees[1]);

coffees.forEach(function(coffee) {
    // 1. deconstruct the coffee object
    const {name, price, description, image} = coffee;
    
    // 2. create the html elements
    const coffeeArticle = document.createElement("article");

    const coffeeImage = document.createElement("img");
    coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width = image.width;
    coffeeImage.height = image.height;
    coffeeImage.alt = image.altText;

    const coffeeName = document.createElement("h2");
    coffeeName.textContent = name;

    const coffeePrice = document.createElement("h3");
    coffeePrice.textContent = price;

    const coffeeDescription = document.createElement("p");
    coffeeDescription.textContent = description;

    // 3. append the elements to the parent article
    coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeName);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDescription);

    // 4. append the article to the body
    document.body.appendChild(coffeeArticle);
}); //end of coffees forEach method