window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
	var header = document.getElementsByTagName('h2');
  
  var turn = "X";
	var winner = false;
  
  var add_mark = function(){
		
		if (this.innerHTML == "-"){
			this.innerHTML = turn;
		
			if (turn == "X"){
				turn = "O";
				header[0].innerHTML = "Player O go!";
			} else {
				turn = "X";
				header[0].innerHTML = "Player X go!";
			};
			
			win();
			
		};
		
		// this.innerHTML = turn;
  }

	var win = function(){
		if ((squares[0].innerHTML == "X" && squares[1].innerHTML =="X" && squares[2].innerHTML == "X") ||
	      (squares[3].innerHTML == "X" && squares[4].innerHTML =="X" && squares[5].innerHTML == "X") ||
			  (squares[6].innerHTML == "X" && squares[7].innerHTML =="X" && squares[8].innerHTML == "X") ||
			  (squares[0].innerHTML == "X" && squares[4].innerHTML =="X" && squares[8].innerHTML == "X") ||
			 	(squares[6].innerHTML == "X" && squares[4].innerHTML =="X" && squares[2].innerHTML == "X") ||
			  (squares[0].innerHTML == "X" && squares[3].innerHTML =="X" && squares[6].innerHTML == "X") ||
			  (squares[1].innerHTML == "X" && squares[4].innerHTML =="X" && squares[7].innerHTML == "X") ||
			  (squares[2].innerHTML == "X" && squares[5].innerHTML =="X" && squares[8].innerHTML == "X") ){
					 header[0].innerHTML = "PLAYER X WINS!!<br />Game over!";
					 winner = true;
					 click();

			   } else if ((squares[0].innerHTML == "O" && squares[1].innerHTML =="O" && squares[2].innerHTML == "O") ||
	      						(squares[3].innerHTML == "O" && squares[4].innerHTML =="O" && squares[5].innerHTML == "O") ||
			  						(squares[6].innerHTML == "O" && squares[7].innerHTML =="O" && squares[8].innerHTML == "O") ||
			  						(squares[0].innerHTML == "O" && squares[4].innerHTML =="O" && squares[8].innerHTML == "O") ||
			 							(squares[6].innerHTML == "O" && squares[4].innerHTML =="O" && squares[2].innerHTML == "O") ||
			  						(squares[0].innerHTML == "O" && squares[3].innerHTML =="O" && squares[6].innerHTML == "O") ||
			  						(squares[1].innerHTML == "O" && squares[4].innerHTML =="O" && squares[7].innerHTML == "O") ||
			  						(squares[2].innerHTML == "O" && squares[5].innerHTML =="O" && squares[8].innerHTML == "O") ){
			   							header[0].innerHTML = "PLAYER O WINS!!<br />Game over!";
											winner = true;
											click();
			   } else if ( (squares[0].innerHTML == "O" || squares[0].innerHTML == "X") && 
				 					   (squares[1].innerHTML == "O" || squares[1].innerHTML == "X") && 
										 (squares[2].innerHTML == "O" || squares[2].innerHTML == "X") &&
	      						 (squares[3].innerHTML == "O" || squares[3].innerHTML == "X") && 
										 (squares[4].innerHTML == "O" || squares[4].innerHTML == "X") && 
										 (squares[5].innerHTML == "O" || squares[5].innerHTML == "X") &&
			  						 (squares[6].innerHTML == "O" || squares[6].innerHTML == "X") && 
										 (squares[7].innerHTML == "O" || squares[7].innerHTML == "X") && 
										 (squares[8].innerHTML == "O" || squares[8].innerHTML == "X") ){
											 header[0].innerHTML = "TIE GAME OH NOES!";
											 winner = true;
											 click();
			  						};
	};
  
	var click = function(){
	  for(var i = 0; i < squares.length; i++) {
	    // When you click a square, runs the `add_mark` method.
	  		squares[i].addEventListener("click", add_mark);
				
				if (winner === true) {
					squares[i].removeEventListener("click", add_mark);
				};
	  };
	};

	click();
}