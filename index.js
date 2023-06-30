// declaring variables to store the scores for guest and home 
let homeScore = 0;
let guestScore =0 ;

// declaring variables to access the DOM elements
let homeScoreBrdel = document.getElementById("hmbrdScore");
let guestScrBrdel = document.getElementById("gstbrdScore");
let addNewGame = document.getElementById("addNewGame");

function addOneHm(){
    
    homeScore +=1;
    homeScoreBrdel.textContent = homeScore;
    
     colorChange()
   
}

function addTwoHm(){
    
    homeScore +=2;
    homeScoreBrdel.textContent = homeScore;
     colorChange()
}

function addThreeHm(){
    
    homeScore +=3;
    homeScoreBrdel.textContent = homeScore;
     colorChange()
}


function addOneGst(){
    
    guestScore +=1;
    guestScrBrdel.textContent = guestScore;
     colorChange()
}

function addTwoGst(){
    
    guestScore +=2;
    guestScrBrdel.textContent = guestScore;
    
     colorChange()
}

function addThreeGst(){
    
    guestScore +=3;
    guestScrBrdel.textContent = guestScore;
     colorChange()
}

function addNewGam(){
    homeScore = 0;
    guestScore = 0;
    
    guestScrBrdel.textContent = guestScore;
    homeScoreBrdel.textContent = homeScore;
     homeScoreBrdel.style.color = "#F94F6D";
     guestScrBrdel.style.color = "#F94F6D";
}

function colorChange(){
     
    if(homeScore > guestScore){
    
    homeScoreBrdel.style.color = "green";
    guestScrBrdel.style.color = "#F94F6D";

    }else if(homeScore < guestScore){
        guestScrBrdel.style.color = "green";
        homeScoreBrdel.style.color = "#F94F6D";

    }else{
        homeScoreBrdel.style.color = "#F94F6D";
        guestScrBrdel.style.color = "#F94F6D";

    }
}


