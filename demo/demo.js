
//console.log(itemlist.parentNode.parentNode.parentNode);
var itemlist1=document.querySelector("#items");
console.log(itemlist1.parentElement);
itemlist1.parentElement.style.backgroundColor='gray';
console.log(itemlist1.parentElement.parentElement.parentElement);
console.log(itemlist1.childNodes);
console.log(itemlist1.children);
console.log(itemlist1.children[1]);
console.log(itemlist1.lastChild);
itemlist1.lastElementChild.style.color='red';
itemlist1.firstElementChild.style.backgroundColor="yellowgreen";