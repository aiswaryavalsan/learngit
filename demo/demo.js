//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
///document.title="change title";
////console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//var headertext=document.getElementById('header-title');
//console.log(headertext);
///headertext.innerText="hello";
//headertext.textContent="hai";
//headertext.innerHTML='<h3>hello all</h3>';
var header=document.getElementById('title1');
header.style.color='green';
header.style.fontWeight='bold';
console.log(header);
var headertitle=document.getElementById('header-title');
headertitle.style.border='solid 3px black';
//document.write(header.text);
var item=document.getElementsByClassName('list-group-item');
for(let i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}
item[2].style.backgroundColor="green";