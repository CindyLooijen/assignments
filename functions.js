var buttonyes = document.getElementById('yes-button');      	        
var Play = function() {
alert("Oke lets go!");
    };

var buttonno = document.getElementById('no-button');      	        
var Leave = function() {
alert("I would suggest you leave this page...");
    };

var image = document.getElementById('image'); 

//function to turn the image. When the angle reaches 360 degrees it goes back to 0
var angle = 0;
var turnImage = function() {
    angle+=90;
    image.style.transform = 'rotate('+angle+'deg)';
    console.log("click registered");
    if(angle === 360) {
        angle = 0;
    }
};

// button to check whether you have the right side up
var Guess = function () {
    if(angle === 0) {
        alert("Correct!!");
    }
    else {
        alert("This is not the right way up.. Keep Trying");
    }
};

//creating an empty array
var images = new Array (24);

var angle = 0;
var imageNumber = 0;

// previous button to go back an image
var prev = function(){
    imageNumber-=1;
    if (imageNumber === -1){
        imageNumber = images.length-1;
    } //function to randomly turn the image to make the game more challanging
    turnImage();  
    image.src = images[imageNumber];
    console.log("prev received");
};

// next button to go to the next image
var next = function(){
    imageNumber+=1;
    if (imageNumber === images.length){
        imageNumber=0;
    } //function to randomly turn the image to make the game more challanging
    turnImage();  
    image.src = images[imageNumber];
    console.log("next received");
};




    


    
