// getElementById retrieves an element by its unique ID
const headerElement = document.getElementById('header');

// getElementsByTagName returns all elements with a specified HTML tag name
const images = document.getElementsByTagName('img');

//querySelector returns the first element matching a CSS selector
const firstButton = document.querySelector('.btn-primary');

// querySelectorAll returns all elements matching a CSS selector
const allButtons = document.querySelectorAll('button');

// getElementsByClassName returns all elements with a specific class
const paragraphs = document.getElementsByClassName('paragraph');


/* Modifying Content */

// innerHTML gets or sets HTML content inside an element
document.getElementById("example1").innerHTML = "<strong>This is changed using innerHTML!</strong>";

// textContent gets or sets text content, ignoring HTML tags
document.getElementById("example2").textContent = "This is changed using textContent!";

// createElement creates a new HTML element
const newDiv = document.createElement('div');

// appendChild adds an element as the last child of a parent
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// removeChild removes a child element from its parent
document.body.removeChild(newDiv);
