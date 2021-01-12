const submitBtn = document.querySelector('.submit');
var countryOne = document.getElementById("countryOne");
var countryTwo = document.getElementById("countryTwo"); 
const mainDiv = document.querySelector('.main-container');
const dataDiv = document.querySelector('.data-div');
const recoveryBtn = document.querySelector('.recov');
const deathBtn = document.querySelector('.deaths');
const title = document.querySelector(".compare-title");
   var textOne = document.querySelector('.countryOneCases');
   var textTwo = document.querySelector('.countryTwoCases');
const chart = document.getElementById("myChart");
const noChart = document.querySelector(".no-chart"); 

var url = "https://api.covid19api.com/country/";
    var data = [];


submitBtn.addEventListener("click", () => {
  title.textContent = countryOne.value + " V.S " + countryTwo.value;
   
   	mainDiv.style.display = "none";
	dataDiv.style.display = "flex";
   
   
   var data = [];

 async function getData ()  { 
  
  
  const f1_data = await fetch(url + countryOne.value); // wait for fetched url

  const f1_json = await f1_data.json(); // wait for json data, turn data into json data to retrieve confirmed cases
   var indexOne = f1_json.length - 1; //get the last array (most recent data)
   textOne.textContent = f1_json[indexOne].CountryCode + " TOTAL CASES: " + f1_json[indexOne].Confirmed; //get country code and confirmed
  data.push(f1_json[indexOne].Confirmed); //push confirmed cases to data array

  const f2_data = await fetch(url + countryTwo.value);
  const f2_json = await f2_data.json(); //turn data into json
  var indexTwo =  f2_json.length - 1; //get the last array (most recent data)
    textTwo.textContent = f2_json[indexTwo].CountryCode + " TOTAL CASES: " + f2_json[indexTwo].Confirmed; //country code and confirmed
  data.push(f2_json[indexTwo].Confirmed); //push confirmed cases to data array

};




async function chartIt() {
   await getData(); //wait for getData function
   var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [countryOne.value, countryTwo.value],
        datasets: [{
            label: 'Case Comparison',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1
        }]
    }, 
   options: {
        scales: {
            yAxes: [{
               ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // Change here
            	barPercentage: 0.5
            }]
        }
    }


  
	
})
}
chartIt();
})
  var recoveredData = [];
recoveryBtn.addEventListener("click", () => {
dataDiv.style.height = "100vh";
chart.style.display = "none";
noChart.style.display = "block";
  async function getRecovered() {
  const f1_data = await fetch(url + countryOne.value); // wait for fetched url

  const f1_json = await f1_data.json(); // wait for json data, turn data into json data to retrieve confirmed cases
   var indexOne = f1_json.length - 1; //get the last array (most recent data)
   textOne.textContent = f1_json[indexOne].CountryCode + " TOTAL RECOVERIES: " + f1_json[indexOne].Recovered; //get country code and confirmed
  recoveredData.push(f1_json[indexOne].Recovered); //push confirmed cases to data array

  const f2_data = await fetch(url + countryTwo.value);
  const f2_json = await f2_data.json(); //turn data into json
  var indexTwo =  f2_json.length - 1; //get the last array (most recent data)
 
   textTwo.textContent = f2_json[indexOne].CountryCode + " TOTAL RECOVERIES: " + f2_json[indexOne].Recovered; //get country code and confirmed
 recoveredData.push(f2_json[indexTwo].Recovered); //push confirmed cases to data array	
 console.log(recoveredData);
 
 }
 getRecovered();


})
  var deathData = []
deathBtn.addEventListener("click", () => {
dataDiv.style.height = "100vh";
 chart.style.display = "none";
noChart.style.display = "block";
  
  async function getDeath() {
  const f1_data = await fetch(url + countryOne.value); // wait for fetched url

  const f1_json = await f1_data.json(); // wait for json data, turn data into json data to retrieve confirmed cases
   var indexOne = f1_json.length - 1; //get the last array (most recent data)
   textOne.textContent = f1_json[indexOne].CountryCode + " TOTAL DEATHS: " + f1_json[indexOne].Deaths; //get country code and confirmed
  deathData.push(f1_json[indexOne].Deaths); //push confirmed cases to data array

  const f2_data = await fetch(url + countryTwo.value);
  const f2_json = await f2_data.json(); //turn data into json
  var indexTwo =  f2_json.length - 1; //get the last array (most recent data)
 
   textTwo.textContent = f2_json[indexTwo].CountryCode + " TOTAL DEATHS: " + f2_json[indexTwo].Deaths; //get country code and confirmed
 deathData.push(f2_json[indexTwo].Deaths); //push confirmed cases to data array	
 console.log(deathData);
 
 }
 getDeath();



})
