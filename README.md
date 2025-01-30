This is a solution is to the [Mini-Message-dashboard](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) for The Odin Project.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- should all messages in home page.
- create new message by navigate to "/new" and use form to submit name and text.

### Links

- Live Site URL: [https://mini-message-board-prq1.onrender.com]

## My process

- use node,express to build it as backend project.

### Built with

- Semantic HTML5 markup
- CSS
- ejs
- node
- express

### What I learned

- using node to build app.
- using express to make navigating page easily.
- using ejs to create dynamic pages.
- using mvc principle.
- passing form data to the server.
- using node-localstorage to store data.
- using date-fns to modify dates.
- deploying backend to [Render] (https://render.com/).
- creating reusable partial in ejs.

### struggle

- I want to update the time created for message dynamically like "x minute ago" and so on, so that part was difficult at first and I solve it using the separate client side js file to make request to server periodically and get updated json data and render that data to user.

### useful resource

- [net ninja](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU) this resource help me to understand node,express and ejs very well.

### Continued development

- Learn more about node and express ,integrate it with frontend with react
