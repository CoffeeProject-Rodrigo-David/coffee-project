"use strict"
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// We change tr th to div,P, and h2
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>'; hide ids so they dont display
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
//We changed the for loop to go on ascending order
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all"){ //else if made it so that all gets all the coffees
            filteredCoffees = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);


// filters coffee Name in search bar
let filteredInput = document.querySelector('#filterInput');//added to filter on input
function searchCoffees(){
    let searchCoffeeType = filteredInput.value.toUpperCase();
    let filteredCoffees = [];
    coffees.forEach(function (coffee){
        if(coffee.name.toUpperCase().includes(searchCoffeeType)) {
            filteredCoffees.push(coffee);
        }
    })
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
filteredInput.addEventListener('keyup', searchCoffees)

// search coffees from dropdown
let dropInput = document.querySelector('#dropInput');
dropInput.addEventListener('keyup', searchCoffees)


// push an object to the array

function addCoffee(e) {
    e.preventDefault();
    let newCoffee = {
        id : coffees.length + 1,
        name : coffeeName.value,
        roast : roastAdd.value
    }
    coffees.push(newCoffee)
}

let coffeeName = document.querySelector('#userInput');
let roastAdd = document.querySelector('#roast-selection2');
let submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click', addCoffee);
submitButton2.addEventListener('click', updateCoffees);
roastSelection.addEventListener("change", updateCoffees)

