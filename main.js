async function fetchWeatherData() {
	const zipcode = document.querySelector('#zipcode').value;
	const URL = "https://api.weatherapi.com/v1/current.json?key=657a30cb69d44cdba9a01524231401&q=" + zipcode + "&aqi=yes";
	const request = new Request(URL);
	const response = await fetch(request);
	const data = await response.json();
	console.log(data);
	populateWeatherCard(data);
}

function formatDate(date) {
	// date.getDay() // 6 -> Sat
	// date.getMonth() // 9 -> Oct
	// date.getDate() // 29 -> 29

	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dateStr = weekdays[date.getDay()] + " " + months[date.getMonth()] +  " " + date.getDate(); // 🤔
	return dateStr;
}

function formatTime(date) {
	let timeStr = "";

	timeStr = (date.getHours() % 12) + ":";

	if (date.getMinutes() < 10) {
		timeStr += "0" + date.getMinutes();
	} else {
		timeStr += date.getMinutes();
	}

	if (date.getHours() > 12) {
		timeStr += " PM";
	} else {
		timeStr += " AM";
	}

	return timeStr;
}

function formatRegion(obj) {
	const region = obj.location.region;
	const states = {
		"Alabama" : "AL",
		"Alaska"  : "AK",
		"Arizona" : "AZ",
		"California" : "CA",
		"Colorado" : "CO",
		"Connecticut" : "CT",
		"Delaware" : "DE",
		"Florida" : "FL",
		"Georgia" : "GA",
		"Hawaii" : "HI", 
		"Idaho" : "ID",
		"Illinois" : "IL",
		"Indiana" : "IN",
		"Iowa" : "IA",
		"Kansas" : "KS",
		"Kentucky" : "KY",
		"Louisiana" : "LA",
		"Maine" : "ME", 
		"Maryland" : "MD",
		"Massachusetts" : "MA",
		"Michigan" : "MI",
		"Minnesota" : "MN",
		"Mississippi": "MS",
		"Missouri": "MO",
		"Montana": "MT",
		"Nebraska": "NE",
		"Nevada": "NV",
		"New Hampshire": "NH",
		"New Mexico": "NM",
		"New York": "NY",
		"North Carolina": "NC",
		"North Dakota": "ND",
		"Ohio": "OH",
		"Oklahoma": "OK",
		"Oregon": "OR",
		"Pennsylvania": "PA",
		"Rhode Island": "RI",
		"South Carolina": "SC",
		"South Dakota": "SD",
		"Tennessee": "TN",
		"Texas": "TX",
		"Utah": "UT",
		"Vermont": "VT",
		"Virginia": "VA",
		"Washington": "WA",
		"West Virginia": "WV",
		"Wisconsin": "WI",
		"Wyoming": "WY"
	}
	return ", " + states[region];
}

function populateWeatherCard(obj) {
	const forecast    = document.querySelector('.forecast'); 
	const time        = document.querySelector('.time');
	const icon        = document.querySelector('.weather-icon');
	const temperature = document.querySelector('.temperature');
	const city        = document.querySelector('.city');
	const humidity    = document.querySelector('.humidity');
	const weatherCard = document.querySelector('.weather-card');

	forecast.textContent = obj.current.condition.text;

	const date = new Date(obj.location.localtime_epoch * 1000);
	time.textContent     = formatDate(date) + " " + formatTime(date);
	
	icon.src             = obj.current.condition.icon;
	
	const tempInt = parseInt(obj.current.feelslike_f);
	temperature.textContent  = tempInt + "°F";
	
	city.textContent     = obj.location.name + formatRegion(obj);
	humidity.textContent = "Humidity: " + obj.current.humidity + "%";
	weatherCard.style.display = "block";
}

async function fetchAstroData() { // sunset, 
	const URL = "https://api.weatherapi.com/v1/astronomy.json?key=78010e2598304b09980221410222210&q=89141&dt=2022-10-29"
}

function form() {
    // get table
    let tableBody = document.getElementById('formlist');

    // get input
    let mRev = document.getElementById('mRev').value;
    let mEx = document.getElementById('mEx').value;
    let credit = document.getElementById('credit').value;

    console.log('saved');

    // Form reset 
    let form = document.getElementById('form');
}

function estimate() {

}
// next page