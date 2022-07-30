var parent=document.querySelector("#items");
//var li=document.querySelector('.list-group-item');
var newli=document.createElement('li');
var litext=document.createTextNode("hello world");   
newli.appendChild(litext);
console.log(newli);
console.log(parent);
parent.innerHTML=newli.textContent+parent.innerHTML;


