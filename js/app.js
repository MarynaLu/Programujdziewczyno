
	'use strict';
document.addEventListener('DOMContentLoaded', function() {
     	var for_dropdown = document.querySelector(".for-dropdown");
     	var dropdown_hidden = document.querySelector(".dropdown");
     	//console.log(for_dropdown, dropdown_hidden);//
     		for_dropdown.addEventListener('mouseover', function() {
     			//console.log("dziala");//
     			dropdown_hidden.style.display = 'block';
      
    });
     		for_dropdown.addEventListener('mouseout', function() {
     			//console.log("dziala2");//
     			dropdown_hidden.style.display = 'none';
      
    });
     		dropdown_hidden.style.textAlign = 'center';
  });

//var myName = "Marina";
//console.log(myName);

//var myFriends = ["Agata", "Ania", "Kasia", "Alicja"];
//myFriends[0] = "Monika";

//for(var i = 0; i <= myFriends.length-1; i++) {
	//console.log(myFriends[i]);
//};//
