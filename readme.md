# Project 1: What are we drinking tonight?

by Mackenzie Wicker

Deployed on Vercel: [https://ga-unit1-project.vercel.app/](https://ga-unit1-project.vercel.app/)

### Project Description

My application allows users to search for cocktails by name, pulls the first result from a cocktail database API, and prints the name, picture, and recipe to the DOM using jQuery and JavaScript. It also offers a function for indecisive folks, who can click a different button to generate a random cocktail recipe.

### Technologies Used
- HTML
- CSS
- JavaScript
- jQuery
- The Cocktail DB API
- Google Fonts

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
- I struggled with some CSS, including in the areas of formatting and responsiveness. 
- If I could do it over again, I would plan the layout in more detail ahead of time. I think there's some messy/repetitive code I could have avoided if I'd been more intentional.

### Schedule of Work
| Day | Goals | What I Accomplished
|-----|-------|---------------------|
|  Sat.  | Identify API, roughly plan project, create ReadMe, get approval from Kyle, review this week's class notes (etc.), more detailed plan of project, get things console logging the way I want. | Accomplished everything on my list. ALSO: got data to fetch and render on the DOM, built a form for user input, and tied the two together - YO. I deserve a cocktail now. |
|  Sun.  |  Address non-DRY section of code (with loop, I think), clear field after search, add alert if the cocktail isn't in the API, do Lesson 10 homework, which will inform CSS choices; finalize functionality of initial product, initial design using CSS | Addressed non-DRY section, cleared fiedld after search, added response to cocktail not being in the system. |
|  Mon.  |  Learn Flex Box and Grid, complete Lesson 10 homework. | Sorta did that. |
|  Tue.  |  Finish Lesson 10 HW, review additional materials on flexbox and grid, establish basic CSS, gather images, start on responsiveness | All as planned. |
|  Wed.  |  Minor CSS tweaks, review MVP requirements, focus on responsiveness, if I finish - add randomized button | All as planned, including randomized button, but need to address responsiveness for that. |
|  Thu.  |  Make randomized function responsive, clean up. | As planned. |
|  Fri.  |  Cleanup, finish readme, round buttons, review for presenting, try not to break anything. | As planned. |
|  Sat.  |  Present Project |   |

