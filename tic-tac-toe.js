
function Main(){
 
var divs=document.querySelector('#board');


for(i=0; i<divs.children.length; i++){
divs.children[i].classList.add("square");	
}




alert("DOMContentLoaded.");
}
document.addEventListener("DOMContentLoaded",Main);
