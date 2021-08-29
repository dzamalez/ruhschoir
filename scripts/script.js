/*
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
*/
const d = new Date();
let currentDay = d.getDate();
let currentMonth = d.getMonth();
let currentDate = `${currentMonth} ${currentDay}`;
console.log(`Month: ${currentMonth}`)
console.log(`Day: ${currentDay}`)

if ((currentDay <= 8 && currentMonth <= 8) || (currentDay > 8 && currentMonth <= 8)) {
  alert("Hey there! The is a fundrasier currently going on, please visit the fundraisers under the support us tab!")
} 