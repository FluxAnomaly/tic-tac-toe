// wait for the DOM to finish loading
window.addEventListener("load", function () {
  // all your code should go in here.
  	var playerTurn = "x";
  	// this sets a variable to an expression for easy reuse.
    var squares = document.querySelectorAll(".box");

	function clickedSquare () {
	  for (var i=0; i<squares.length; i++) {
	  	squares[i].addEventListener("click", addMarker);
	  }
	}
	clickedSquare();

	// The following two lines were for testing a single box:
	// var sq1 = document.querySelector("#box1");
	// sq1.addEventListener("click", addMarker);

	function addMarker() {
		//console.log("this.innerHTML=" + this.innerHTML);
		if (this.innerHTML !== "x" && this.innerHTML !== "o") {
			if (playerTurn === "x") {
				this.innerHTML = "x";
				this.style.backgroundColor = "red";
				playerTurn = "o";
			} else {
				this.innerHTML = "o";
				this.style.backgroundColor = "green";
				playerTurn = "x";
			}
		}
	}

	var button = document.getElementById("resetButton");
	button.addEventListener("click", clearBoard);

	function clearBoard() {
		console.log("Button Click");
		for (var i = 0; i < squares.length; i++) {
			squares[i].innerHTML = "&nbsp";
			squares[i].style.backgroundColor = '#fff';
		}
	}


});



