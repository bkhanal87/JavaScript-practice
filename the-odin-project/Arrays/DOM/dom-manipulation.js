const container = document.querySelector("#container");

const content = document.createElement("div");

content.classList.add = "content";

content.textContent = "Hey, there!";

container.appendChild(content);

// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.


// a <p> with red text that says “Hey I’m red!”

const newPara = document.createElement("p");
newPara.classList.add = "red";
newPara.textContent = "Hey I'm red!";
newPara.style.cssText = "color: red";
container.append(newPara);

// an <h3> with blue text that says “I’m a blue h3!”

const blueHeader = document.createElement("h3");
blueHeader.classList = "header";
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.cssText = "color:blue";
container.append(blueHeader);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


const blackBorderDiv = document.createElement("div");
blackBorderDiv.style.cssText = "border: black; background-color: pink";
const secondHeader = document.createElement("h1");
secondHeader.textContent = "I'm in a div";
const secondPara = document.createElement("p");
secondPara.textContent = "ME TOO!";
blackBorderDiv.append(secondHeader, secondPara);
container.append(blackBorderDiv);



