var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");




var pickedcolor=pickcolor(6);


var colordisplay=document.getElementById("colordisplay");


var messageDisplay=document.querySelector("#message");





var h1=document.querySelector("h1");

var reset=document.querySelector("#reset");


var Easy=document.querySelector("#Easy");



var Hard=document.querySelector("#Hard");





reset.addEventListener("click",function(){
	reset.textContent="New Colors";
	colors = generateRandomColors(6);
	 pickedcolor=pickcolor(6);
	 messageDisplay.textContent="";
	 colordisplay.textContent=pickedcolor;
	 for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];}
	h1.style.background="steelblue";

})






Easy.addEventListener("click",function(){
	reset.textContent="New Colors";
	 messageDisplay.textContent="";


	Easy.classList.add("selected");
	Hard.classList.remove("selected");
	colors = generateRandomColors(3);
	 pickedcolor=pickcolor(3);
	 colordisplay.textContent=pickedcolor;
	 for(var i = 0; i < squares.length-3; i++){
	squares[i].style.background = colors[i];}
	h1.style.background="steelblue";
	for(var i = 3; i < squares.length; i++){
	squares[i].style.display = "none";}

})







Hard.addEventListener("click",function(){
	 messageDisplay.textContent="";
	
	reset.textContent="New Colors";
	Hard.classList.add("selected");
	Easy.classList.remove("selected");
	colors = generateRandomColors(6);
	 pickedcolor=pickcolor(6);
	 colordisplay.textContent=pickedcolor;
	 for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
squares[i].style.display = "block"}
	h1.style.background="steelblue";

})

colordisplay.textContent=pickedcolor;






for(var i = 0; i<squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
	var clickedcolor= this.style.background;
	if(clickedcolor===pickedcolor){
			
			messageDisplay.textContent="Correct!";
			changeColor(pickedcolor);
			h1.style.background= clickedcolor;
            reset.textContent="Play Again ?";
 		}
		else
			{this.style.background="#232323";
		     messageDisplay.textContent="Try again";
		 }
	});
}






function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background=color;

	}


}







function pickcolor(x){
	var random=Math.floor(Math.random() * x);
	return colors[random];

}





function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());

	}

	return arr;
}





function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
 var rgb;
 return "rgb(" + r + ", " + g + ", " + b+")";
}