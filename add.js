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
    .then((result) => {return result.json()})
    .then((data) => {
        console.log(data)
        renderCocktails(data.drinks[0])
    })
}

// function that renders the name, image, ingredients, and recipe of the first result to the screen
function renderCocktails(cocktail) {
    //grab the div I want to put the info in
    const $cocktail = $("#cocktail")
    //change html in the div
    $cocktail.html(`
        <h2>${cocktail.strDrink}</h2>
        <img src=${cocktail.strDrinkThumb}>
        <h3>Ingredients</h3>
        <ul id="ingredients"></ul>
        <h3>Instructions</h3>
        <p>${cocktail.strInstructions}</p>
    `)
    //add strIngredient1-10 as lis to the ul#ingredients IF their value !== null
    const $ul = $("#ingredients")

/**************LOOK FOR CLEANER OPTION FOR THIS ****************************/
    if (`${cocktail.strIngredient1}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient1}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient2}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient2}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient3}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient3}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient4}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient4}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient5}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient5}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient6}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient6}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient7}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient7}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient8}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient8}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient9}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient9}`)
        $ul.append($li)
    }
    if (`${cocktail.strIngredient10}` !== "null") {
        const $li = $("<li>")
        $li.text(`${cocktail.strIngredient10}`)
        $ul.append($li)
    }
}


//function for submitting cocktail names
function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    getCocktail(formData.get("cocktailName"))

}

//*********************** */
// Main Code
//************************ */
//add event listener
const $form = $("form")
$form.on("submit", handleSubmit)