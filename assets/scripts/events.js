


// will event listeners be triggered for something
// that is clicked 

const div = document.querySelector('div');
div.addEventListener("click", event => {
    console.log("clicked div");
    console.log(event);
})

const button = document.querySelector('button');
button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log("clicked button");
    console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', event => {
    event.target.closest('li').classList.toggle('highlight');
});