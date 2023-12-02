$.ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then((data) => {
    console.log(data.drinks[2])
})
