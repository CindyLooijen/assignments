var myRequest = new XMLHttpRequest();

// I wanted to have abstract artworks as images because they are good for the game.
// However, when I just searched for this I also got results that were type = TEXT, which didn't work for the game
// So I specified my search term to abstract art and image - Now I only got images of abstract artworks. 
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=ZGU6LVUWM&query=abstract+art&qf=image&start=1&rows=24&profile=standard";
            
myRequest.open(method, url);
myRequest.send();

//receive data from the api, and loop through these images in the empty array created in functions.js            
myRequest.onreadystatechange = function () {
if (myRequest.readyState === 4){
    var data = myRequest.response;
    var dataParsed = JSON.parse(data);
    console.log(dataParsed);
    var i;                    
    for (i=0; i < dataParsed.items.length; i++){
    images[i]=dataParsed.items[i].edmPreview[0];
    }
    
} else { console.log(myRequest.readyState); }

                    };