# Project 1: What are we drinking tonight?

by Mackenzie Wicker

Deployed on Vercel: [https://ga-unit1-project.vercel.app/](https://ga-unit1-project.vercel.app/)

### Project Description

I'm creating an application to help people track down cocktail recipes. Users will enter the name of a cocktail and recieve a list of needed ingredients, a photo of the drink, and simple instructions.

Stretch goals: Also allow searches by ingredient and a "You Decide" button that produces a random cocktail.

### Technologies Used (anticipated)
- HTML
- CSS
- JavaScript
- jQuery
- The Cocktail DB API

### API Description
API: [TheCocktailDB](https://www.thecocktaildb.com/api.php)
- Requires an apikey for basic access, which is free for educational uses.
- Tested code:
```js

$.ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then((data) => {
    console.log(data.drinks[0])
})
```
- Test result:
```js
{idDrink: '11007', strDrink: 'Margarita', strDrinkAlternate: null, strTags: 'IBA,ContemporaryClassic', strVideo: null, …}
```

### Mockup
#### Desktop Mockup:
![Desktop Mockup Image](https://i.imgur.com/MmYrLKX.jpg)

#### Mobile Mockup:
![Mobile Mockup Image](https://i.imgur.com/5HSvbYz.png)

### Roadblocks
- TBD

### Schedule of Work
| Day | Goals | What I Accomplished
|-----|-------|---------------------|
|  Sat.  | Identify API, roughly plan project, create ReadMe, get approval from Kyle, review this week's class notes (etc.), more detailed plan of project, get things console logging the way I want | Accomplished everything on my list. ALSO: got data to fetch and render on the DOM, built a form for user input, and tied the two together - YO. I deserve a cocktail now. |
|  Sun.  |  Lesson 10 homework, which will inform CSS choices; finalize functionality of initial product, initial design using CSS | TBD |
|  Mon.  |  Address mobile responsiveness, make pretty with CSS | TBD |
|  Tue.  |  Make it prettier with CSS, add random functionality. | TBD |
|  Wed.  |  If random func is complete, add search by ingredient functionality | TBD |
|  Thu.  |  Clean up (hopefully) | TBD |
|  Fri.  |  Extra prettiness and anything leftover | TBD |
|  Sat.  |  Present Project | TBD |

