# Project 1
#### by Mackenzie Wicker
:20
DEPLYOYED SITE: [Click Here](https://sealproject1.vercel.app/)

### Project Description

paragraph discussing idea of project, api using, and desired user experience
EXAMPLE:
> I am creating a perfume maker. We generate a list of perfume ingredients using the items from the perfume ingredient API. Users will select ingredients and generate an imaginary perfume.

### API Description
- What is your API? How will you use it? DOes it require any auth like an apikey? List some the urls you're using.
- `https://perfumeapi.com/ingredients`: this returns a json array with ingrets
- Example code of you testing it
```js

sample code here

```

/Sample Fetch/AJAX called:
```js
const url = "https://www.perfumeapi.com/ingredients"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
[
  {
    "ingredient": "Bergamot",
    "description": "A citrus fruit with a bright, uplifting scent."
  },]

### Mockup
Very simple layout of where things are gonna go. - Desktop and mobile

// upload image to imgur
// get link (w/ .png or .jpg, etc)
// add image: ![Mockup Image](URL HERE)
// same syntax for links but w/o the !

### Roadblocks
- Keep track of difficulties

### Schedule of Work
| Day | Goals | What I Accomplished
|-----|-------|---------------------|
|  Sat.  | Identify API, roughly plan project, create ReadMe, get approval from Kyle, review this week's class notes (etc.), more detailed plan of project |
|  Sun.  | 

