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
|  Sun.  |  Address non-DRY section of code (with loop, I think), clear field after search, add alert if the cocktail isn't in the API, do Lesson 10 homework, which will inform CSS choices; finalize functionality of initial product, initial design using CSS | Addressed non-DRY section, cleared fiedld after search, added response to cocktail not being in the system. |
|  Mon.  |  Learn Flex Box and Grid, complete Lesson 10 homework. | Sorta did that |
|  Tue.  |  Finish Lesson 10 HW, review additional materials on flexbox and grid, establish basic CSS, gather images, start on responsiveness | All as planned |
|  Wed.  |  Minor CSS tweaks, review MVP requirements, focus on responsiveness, if I finish - add randomized button | All as planned, including randomized button, but need to address responsiveness for that. |
|  Thu.  |  Make randomized function responsive, clean up. | TBD |
|  Fri.  |  Extra prettiness and anything leftover | TBD |
|  Sat.  |  Present Project | TBD |

