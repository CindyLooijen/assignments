var buttonyes = document.getElementById('yes-button');      	        
var Play = function() {
alert("Oke lets go!");
    };

var buttonno = document.getElementById('no-button');      	        
var Leave = function() {
alert("I would suggest you leave this page...");
    };

var image = document.getElementById('image'); 

var angle = 0;
var turnImage = function() {
    angle+=90;
    image.style.transform = 'rotate('+angle+'deg)';
    console.log("click registered");
    if(angle === 360) {
        angle = 0;
    }
};

var Guess = function () {
    if(angle === 0) {
        alert("Correct!!");
    }
    else {
        alert("This is not the right way up.. Keep Trying");
    }
};

var images = [
src="http://corioblog.com/Mondrian.jpg", 
src="https://classconnection.s3.amazonaws.com/788/flashcards/412788/png/square_comp_with_horse1315435198157.png", 
src="http://generousmagpie.com/assets/beeldende-kunst-jackson-pollock-erik-schilp-315x315.jpg",
src="http://lh6.ggpht.com/B5fwkTesTCio6C9Zc9tOB6-eVRYhTyBBMsZWr2j44BTfTIPBOB4mxh-xIB83Ce3yOUEfzvem2_xWCsOsI5g8AkwpPw=s500-c",
src="http://images.fineartamerica.com/images-medium-large-5/abstract-rainbow-bliss-fractal-square-andee-photography.jpg",
src="https://upload.wikimedia.org/wikipedia/commons/6/63/Robert_Delaunay,_1913,_Premier_Disque,_134_cm,_52.7_inches,_Private_collection.jpg",
src="http://blog.ssis.edu.vn/105976/wp-content/uploads/sites/449/2015/02/48x48-hitchcock-vertigo-huge-signed-art-abstract-paintings-modern-wwwsplashyartistcom-robert-r-abstract-art.jpg",
src="http://static1.squarespace.com/static/5511fc7ce4b0a3782aa9418b/t/553695e6e4b05a14c74e79eb/1429640680022/abstract-modern-art.jpg",
src="http://images.monzuki.com/blog/images/images_October2009/PatrickGunderson/PatrickGunderson_03.jpg",
src="http://www.art-spire.com/wp-content/gallery/05_09_09-Patrick%20Gunderson/896911234161395.jpg"
];
var angle = 0;
var imageNumber = 0;

var next = function(){
    imageNumber+=1;
    if (imageNumber === images.length){
        imageNumber=0;
    }
    turnImage();  
    image.src = images[imageNumber];
    console.log("next received");
};

var prev = function(){
    imageNumber-=1;
    if (imageNumber === -1){
        imageNumber = images.length-1;
    }
    turnImage();  
    image.src = images[imageNumber];
    console.log("prev received");
};


    


    
