///////////////////////////// Trending Section Cards //////////////////////////////////
async function fetchTrending(){
    try {
        const response = await fetch("./data/trending.json");
        const games = await response.json();

        return new Promise((resolve) => {
            resolve(games.trending)
        });
    } catch(err) {
        console.log("Error fetching team data\n" + err);
    }
}

function setTrending(trending) {
    var trendingList = document.getElementById("trending");
    var buttons = document.getElementById("indicators");
    
    var treandingHTML="";
    var buttonsHTML="";
    for( var i=0 ; i<trending.length ; i++ ){
        buttonsHTML += "<button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to="+ i +"  aria-label=\"Slide"+ (i+1) +"\" "+ (i==0 ? "aria-current=\"true\" class=\"active\"" : "") +"></button> \n";

        treandingHTML += "<div class=\"carousel-item "+( i==0 ? "active":"" )+" \"> \n" +
        "   <div class=\"row border-0\"> \n" +
        "        <div class=\"col-7 p-0\"> \n" +
        "           <img src="+ trending[i].gameImage +" class=\"w-100 h-100\" alt="+ trending[i].name +">\n" +
        "        </div> \n" +
        "        <div class=\"col-5 p-0 bg-dark\"> \n"+
        "            <div class=\"card-header p-0 border-0 \"> \n" +
        "                <img src="+trending[i].logo+" class=\"mw-vh-80 game-logo\" alt="+trending[i].name+">\n" +
        "            </div> \n" +
        "            <div class=\"card-content p-4 border-0 \"> \n" +
        "                <h5>"+trending[i].name+"</h5>\n"+
        "                <p>Rating : "+trending[i].rating+" <img src=\"./assets/star.png\" alt=\"star\"></p>\n"+
        "                <p>"+trending[i].desc+"</p>\n"+                    
        "            </div> \n" +
        "        </div>\n " +
        "    </div>\n "+
        "</div>";
    }
    trendingList.innerHTML = treandingHTML;
    buttons.innerHTML = buttonsHTML;
}



///////////////////////////// Upcoming Section Cards //////////////////////////////////
async function fetchUpcoming(){
    try {
        const response = await fetch("./data/upcoming.json");
        const games = await response.json();

        return new Promise((resolve) => {
            resolve(games.upcoming)
        });
    } catch(err) {
        console.log("Error fetching team data\n" + err);
    }
}


function setUpcoming(upcoming) {
    var upcomingList = document.getElementById("upcoming");
    
    var upcomingHTML="";
    for( var i=0 ; i<upcoming.length ; i++ ){
        upcomingHTML += "<div class=\"col-xl-3 col-lg-4 col-md-6 col-xs-12 p-2 box\"> \n" +
            "<div class=\"card-header p-0 border-0\"> \n" +
            "   <img src="+upcoming[i].logo+" class=\"mw-vh-80 game-logo\" alt="+ upcoming[i].name +"> \n"+
            "</div> \n" +
            "<div class=\"card-content p-4 border-0 \"> \n" +
            "    <h5>"+ upcoming[i].name +"</h5>\n" +
            "    <p class=\"text-black-50\">Coming at " + upcoming[i].date + "</p> \n" +
            "    <p>" + upcoming[i].desc +"</p> \n" +
            "</div> \n" +
        "</div>\n" ;
    }
    upcomingList.innerHTML = upcomingHTML;
}



///////////////////////////// Featured Section Cards //////////////////////////////////
async function fetchFeatured(){
    try {
        const response = await fetch("./data/featured.json");
        const games = await response.json();

        return new Promise((resolve) => {
            resolve(games.featured)
        });
    } catch(err) {
        console.log("Error fetching team data\n" + err);
    }
}


function setFeatured(featured) {
    var featuredList = document.getElementById("featured");
    
    var featuredHTML="";
    for( var i=0 ; i<featured.length ; i++ ){
        featuredHTML += "<div class=\"col-xl-3 col-lg-4 col-md-6 col-xs-12 p-2 box\"> \n" +
            "<div class=\"card-header p-0 border-0\"> \n" +
            "   <img src="+featured[i].logo+" class=\"mw-vh-80 game-logo\" alt="+ featured[i].name +"> \n"+
            "</div> \n" +
            "<div class=\"card-content p-4 border-0 \"> \n" +
            "    <h5>"+ featured[i].name +"</h5>\n" +
            "    <p class=\"text-black-50\">Rating - " + featured[i].rating + " <img src=\"./assets/star.png\" alt=\"star\"></p> \n" +
            "    <p>" + featured[i].desc +"</p> \n" +
            "</div> \n" +
        "</div>\n";
    }
    featuredList.innerHTML = featuredHTML;
}



setTrending(await fetchTrending());
setUpcoming(await fetchUpcoming());
setFeatured(await fetchFeatured());