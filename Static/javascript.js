
let box = document.querySelector('searchbox');
let search = document.querySelector('Search');
let startedi = document.querySelector('open');
let closedi = document.querySelector('close');

 startedi.addEventListener('click', () => {
     searchbox.classList.add("active");
     search.classList.add("active");
 });
 closedi.addEventListener('click', () => {
     searchbox.classList.remove("active");
     search.classList.remove("active");
 });

