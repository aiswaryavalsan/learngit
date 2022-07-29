

var item=document.getElementsByClassName('list-group-item');
for(let i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}
item[2].style.backgroundColor="green";

var items=document.getElementsByTagName('li');
console.log(items);
items[4].style.color="red";
for(let i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='yellowgreen';
}