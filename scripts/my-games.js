///////////////////////////// My Games Section Cards //////////////////////////////////
async function fetchMyGames(){
    try {
        const response = await fetch("./data/my-games.json");
        const games = await response.json();

        return new Promise((resolve) => {
            resolve(games.myGames);
        });
    } catch(err) {
        console.log("Error fetching team data\n" + err);
    }
}


function setMyGames(myGames) {
    var myGamesList = document.getElementById("my-games");
    
    var myGamesHTML = "";
    for( var i=0 ; i<myGames.length ; i++ ){
        myGamesHTML += "<div class=\"col-xl-3 col-lg-4 col-md-6 col-xs-12 p-2 box\"> \n" +
            "<div class=\"card-header p-0 border-0\"> \n" +
            "   <img src="+myGames[i].logo+" class=\"mw-vh-80 game-logo\" alt="+ myGames[i].name +"> \n"+
            "</div> \n" +
            "<div class=\"card-content p-4 border-0 \"> \n" +
            "    <h5>"+ myGames[i].name +"</h5>\n" +
            "    <p>Rating - " + myGames[i].rating + " <img src=\"./assets/star.png\" alt=\"star\"></p> \n" +
            "    <p>" + myGames[i].desc +"</p> \n" +
            "</div> \n" +
        "</div>\n";
    }

    console.log(myGamesHTML);

    myGamesList.innerHTML = myGamesHTML + myGamesList.innerHTML ;
}


var submit = document.getElementById("submit-game");
submit.addEventListener( "click", (event) => {
    console.log(event);
});


setMyGames(await fetchMyGames());