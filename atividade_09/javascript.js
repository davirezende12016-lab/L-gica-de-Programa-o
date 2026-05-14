const demoId = document.getElementById("demo");
demoId.style.border = '2px solid black';
demoId.textContent = 'Mudei o texto pelo id';
demoId.style.backgroundColor = "white";
demoId.style.color = "black";

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++) {
    catClass[i].style.border = '2px solid red';
    catClass[i].style.backgroundColor = 'white';

}
const tag = document.getElementsByTagName("article"); 
for (i = 0; i < tag.length; i++) {
    tag[i].style.border = '2px solid red';
    tag[i].style.backgroundColor = 'white';

}

for (i = 0; i < tag.length; i++)
    tag[i].style.border = '2px solid blue';  

const demoQuery = document.querySelector('#demo-query');
queryId.style.border = '1px solid orange'

const demoQuery = 
document.querySelectorAll('.demo-query-all');
demoQuery.forEach(query=> {
    query.style.border = '1px solid green';
});