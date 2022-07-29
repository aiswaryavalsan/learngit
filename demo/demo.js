var newdiv=document.querySelector('div');
newdiv.className='helo1';
newdiv.id='helo';
var newdivtext=document.createTextNode("hello");
var container=document.querySelector('container1');
console.log(container);
var h1=document.querySelector('header h1');
console.log(h1);
newdiv.appendChild(newdivtext);
//container.insertBefore(newdiv,h1);
console.log(newdivtext);


