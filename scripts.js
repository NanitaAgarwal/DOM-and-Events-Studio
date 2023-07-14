// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",function(){

const takeoff=document.getElementById("takeoff");
const flightStatus=document.getElementById("flightStatus");
const shuttleBackground=document.getElementById("shuttleBackground");
const spaceShuttleHeight=document.getElementById("spaceShuttleHeight");
const missionAbort=document.getElementById("missionAbort");
const up=document.getElementById("up");
const down=document.getElementById("down");
const right=document.getElementById("right");
const left=document.getElementById("left");
const rocket=document.getElementById("rocket");
rocket.style.position="absolute";
rocket.style.bottom="0px";
rocket.style.left="0px";
takeoff.addEventListener("click", function() {
    
    let response=window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response===true){
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.background="blue";
      spaceShuttleHeight.innerHTML=10000;
    }

});
landing.addEventListener("click", function() {
    
    let response=window.alert("Confirm that The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.background="green";
      spaceShuttleHeight.innerHTML=0;
    

});
missionAbort.addEventListener("click", function() {
    
    let response=window.confirm("Confirm that you want to abort the mission.");
    if (response===true){
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.background="green";
      spaceShuttleHeight.innerHTML=0;
    }

});
up.addEventListener("click",function(){
    if(parseInt(rocket.style.bottom)<241){
    spaceShuttleHeight.innerHTML=parseInt(spaceShuttleHeight.innerHTML)+10000;
    rocket.style.bottom=parseInt(rocket.style.bottom)+10 +"px";
    }
});

down.addEventListener("click",function(){
    if(parseInt(rocket.style.bottom)>9){
    spaceShuttleHeight.innerHTML=parseInt(spaceShuttleHeight.innerHTML)-10000;
    rocket.style.bottom=parseInt(rocket.style.bottom)-10 +"px";
    }
});
console.log(shuttleBackground);
right.addEventListener("click",function(){
    if(parseInt(rocket.style.left)<511){
    rocket.style.left=parseInt(rocket.style.left)+10 +"px";
    }
});

left.addEventListener("click",function(){
    if(parseInt(rocket.style.left)>9){
    rocket.style.left=parseInt(rocket.style.left)-10 +"px";
    }
});
});