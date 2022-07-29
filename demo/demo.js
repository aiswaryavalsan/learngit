var item=document.querySelector("#items");
console.log(item.firstChild);
item.lastElementChild.textContent="hello";
console.log(item.nextSibling);
console.log(item.previousSibling);
console.log(item.nextElementSibling);
console.log(item.previousElementSibling);
item.previousElementSibling.style.color='green';
