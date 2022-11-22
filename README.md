# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./Screenshot1.png)
![](./Screenshot2.png)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/interactive-rating-component-react-typescript-JZOjdGT4mE)
- Live Site URL: [Add live site URL here](https://interactiveratingcomponent.pages.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) - JS library

### What I learned

This project gave me an opportunity to get more familiar with react states. I focused on creating a reusable component. This means that all the text in the component is changeable on the top level on the component. I also included standard texts, so that if nothing is input it does not break the component.

The component is added to the DOM like this

```tsx
<Card
  title="How did we do?"
  paragraph="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
  endTitle="Thank you!"
  endParagraph="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
/>
```

If title is not declared it will default to title, the same goes for all other parameters

```tsx
<h1 className="{style.title}">{title ? title : "title"}</h1>
```

## Author

- Website - [Haakon Mydland](https://www.haakonmydland.com/home)
- Frontend Mentor - [@haakonmydland](https://www.frontendmentor.io/profile/haakonmydland)
- Twitter - [@haakonmydland](https://www.twitter.com/haakonmydland)
