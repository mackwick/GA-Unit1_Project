$.ajax("https://api.api-ninjas.com/v1/cocktail?name=margarita")
.then((data) => {
    console.log(data.drinks[0])
})
