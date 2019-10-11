

function Main(){
 
var divs=document.querySelector('#board');
var turn = "X";

for(i=0; i<divs.children.length; i++){

divs.children[i].classList.add("square");
divs.children[i].onclick=function(){
	
if (turn==="X"||turn==="x"){
		this.innerHTML = "<strong>X<strong>";
		this.classList.add('X');
		turn="O";
}else{
	this.innerHTML = "<strong>O<strong>";
	this.classList.add('O');
	turn="X";
}

};	//end of on click function 
divs.children[i].addEventListener('mouseover',function(){
this.classList.add('hover');

});
divs.children[i].addEventListener('mouseout',function(){
this.classList.remove('hover');

});



		
}// end of for loop 


alert("DOMContentLoaded.");
}
document.addEventListener("DOMContentLoaded",Main);
