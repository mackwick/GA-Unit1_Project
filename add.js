//*********************** */
// GLOBAL VARIABLES
//************************ */

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

//************************ */
// Functions
//************************ */

// Function to fetch the data
function getCocktail(cocktail) {
    //construct URL
    const url = `${baseURL}${cocktail}`
    //fetch from the url
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => { 
        if (data.drinks === null) { 
        $("#cocktail").text("Sorry, we don't know that one. Why don't you try something else. Or maybe just take a shot?")
        } else {console.log(data)
        {renderCocktails(data.drinks[0])}}
    })
}

// function that renders the name, image, ingredients, and recipe of the first result to the screen
function renderCocktails(cocktail) {
    //grab the div I want to put the info in
    const $cocktail = $("#cocktail")
    //change html in the div
    $cocktail.html(`<div id="innerdiv">
        <h2>${cocktail.strDrink}</h2>
        <img src=${cocktail.strDrinkThumb}>
        <h3>Ingredients</h3>
        <ul id="ingredients"></ul>
        <h3>Instructions</h3>
        <p>${cocktail.strInstructions}</p></div>
    `)
    //add strIngredient1-20 as lis to the ul#ingredients IF their value !== null
    const $ul = $("#ingredients")    
    Object.entries(cocktail).forEach(([key, value]) => {
        for (let i=1; i<20; i++) {
        if (key === "strIngredient" + i && `${value}` !== "null") {
            const $li = $("<li>")
            $li.text(`${value}`)
            $ul.append($li)
        }}
    })
}


//function for submitting cocktail names
function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    getCocktail(formData.get("cocktailName"))
    event.target.reset()
}

//*********************** */
// Main Code
//************************ */
//add event listener
const $form = $("form")
$form.on("submit", handleSubmit)

// getCocktail("ramos gin fizz")