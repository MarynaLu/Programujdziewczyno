
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
     		//Task 2 - More buttons interactivity
     		var buttons = document.querySelectorAll('.read-more');

     		 //buttons[0].addEventListener('click', function() {
      			//var textArea = this.previousElementSibling;
      			 //textArea.style.display = 'block';
      			 //this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      		// To powinnaś zobaczyć w konsoli po kliknięciu w pierwszy przycisk
    		//});
     		  function showHide() {
     		  	var textArea = this.previousElementSibling;
      		if (textArea.style.display === 'none' || textArea.style.display === '') {

        		// ten kod wykona się, gdy spełni się jeden z powyższych warunków
        		textArea.style.display = 'block';
        		this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
     		 } else {

        		// ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        		// gdy `style.display` jesbutnny niż `none` oraz gdy nie jest pusty
        		textArea.style.display = 'none';
        		this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      		}

    		}
     		  //buttons[0].addEventListener('click', showHide);
     		     for (var i = 0; i < buttons.length; i++) {
    				buttons[i].addEventListener('click', showHide);
  				};

  				//Exercise 3: Adding a border menu on scroll
  				var menu = document.querySelector(".nav-list");
  				 window.addEventListener('scroll', function() {
      				 menu.style.borderBottom = '1px solid #696969';
   				 });
   				// Exercise 4: Adding a go-to-the-top button
   				 var goTopButton = document.querySelector(".button-footer");
   					goTopButton.addEventListener('click', function() {
   				 	window.scroll(0, 0);

   				});
   				 //Exercise 5: Making organizers slider
   				var dots = document.querySelectorAll(".dot");
   				var items = document.querySelectorAll(".org");
   				 

   				
   				
   				dot1.addEventListener('click', function(){
   					console.log("this works");
   				 for (var i = 0; i < dots.length; i++){
   				 	  dots[i].classList.remove('active');
    				  items[i].classList.remove('visible');
   				 };
   				 	this.classList.add("active");
   				 	items[0].classList.add("visible");
   				 });
   				dot2.addEventListener('click', function(){
   				 for (var i = 0; i < dots.length; i++){
   				 	  dots[i].classList.remove('active');
    				  items[i].classList.remove('visible');
   				 }
   				 	this.classList.add("active");
   				 	items[1].classList.add("visible");
   				});
   				dot3.addEventListener('click', function(){
   				 for (var i = 0; i < dots.length; i++){
   				 	  dots[i].classList.remove('active');
    				  items[i].classList.remove('visible');
   				 }
   				 	this.classList.add("active");
   				 	items[2].classList.add("visible");
   				 });

  			});

//var myName = "Marina";
//console.log(myName);

//var myFriends = ["Agata", "Ania", "Kasia", "Alicja"];
//myFriends[0] = "Monika";

//for(var i = 0; i <= myFriends.length-1; i++) {
	//console.log(myFriends[i]);
//};//
