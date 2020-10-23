// First Event

	document.getElementById("helloWorld").addEventListener("click", function() {
  alert("Hello World!");
});

// Second Event
	function textChange(){
		document.getElementById('textChange').innerHTML = "Lorem Ipsum";
	}	

// Third Event
	function textColor(){
		document.getElementById('textColor').style.color = "red";
	}

// Fourth Event
	function fontSize(){
		document.getElementById('fontSize').style.fontSize = "50px";
	}	

// Fift Event
	function changeText(){
		document.getElementById('changeText').innerHTML = "Wasn't it a magic?"
	}

// Sixth Event
	function textUppercase(){
		 var x = document.getElementById("textUppercase");
  			 x.value = x.value.toUpperCase();
	}

// Seventh Event
	function mDown(obj) {
  		obj.style.backgroundColor = "#fff";
  		obj.innerHTML = "Release Me";
	}

	function mUp(obj) {
  		obj.style.backgroundColor="#D94A38";
  		obj.innerHTML="Click Me";
	} 

// Eighth Event
	var x = document.getElementById("button");
		x.addEventListener("mouseover", myFunction);
		x.addEventListener("click", mySecondFunction);
		x.addEventListener("mouseout", myThirdFunction);

	function myFunction() {
  		document.getElementById("demo").innerHTML += "Moused over!<br>";
	}

	function mySecondFunction() {
  		document.getElementById("demo").innerHTML += "Clicked!<br>";
	}

	function myThirdFunction() {
  		document.getElementById("demo").innerHTML += "Moused out!<br>";
	}

