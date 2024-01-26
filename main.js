const data = [
	{ name: "Yakidoo" },
	{ name: "Flashspan" },
	{ name: "Jayo" },
	{ name: "Livetube" },
	{ name: "Cogibox" },
	{ name: "Realbridge" },
	{ name: "Feedbug" },
	{ name: "Skidoo" },
	{ name: "Dabshots" },
	{ name: "Meeveo" },
	{ name: "Yoveo" },
	{ name: "Tavu" },
	{ name: "Gigashots" },
	{ name: "Dabtype" },
	{ name: "Fanoodle" },
	{ name: "Wordpedia" },
	{ name: "Pixonyx" },
	{ name: "Skinix" },
	{ name: "Browsetype" },
	{ name: "Quamba" },
	{ name: "Uganda" },
	{ name: "Ireland" },
	{ name: "Poland" },
	{ name: "Azerbaijan" },
	{ name: "China" },
	{ name: "Russia" },
	{ name: "China" },
	{ name: "France" },
	{ name: "China" },
	{ name: "Sweden" },
	{ name: "Indonesia" },
	{ name: "Albania" },
	{ name: "Russia" },
	{ name: "Botswana" },
	{ name: "Indonesia" },
	{ name: "Mauritius" },
	{ name: "Brazil" },
	{ name: "Portugal" },
	{ name: "France" },
	{ name: "Azerbaijan" },
	{ name: "Filipino" },
	{ name: "Icelandic" },
	{ name: "Khmer" },
	{ name: "Macedonian" },
	{ name: "Kyrgyz" },
	{ name: "Tsonga" },
	{ name: "Albanian" },
	{ name: "Swati" },
	{ name: "Czech" },
	{ name: "Dzongkha" },
	{ name: "Tswana" },
	{ name: "Khmer" },
	{ name: "Punjabi" },
	{ name: "Hindi" },
	{ name: "English" },
	{ name: "Dari" },
	{ name: "Italian" },
	{ name: "Luxembourgish" },
	{ name: "Marathi" },
	{ name: "Lithuanian" },
	{ name: "newsvine.com" },
	{ name: "seesaa.net" },
	{ name: "opensource.org" },
	{ name: "webmd.com" },
	{ name: "census.gov" },
	{ name: "tinyurl.com" },
	{ name: "bing.com" },
	{ name: "blogtalkradio.com" },
	{ name: "jugem.jp" },
	{ name: "ow.ly" },
	{ name: "mail.ru" },
	{ name: "meetup.com" },
	{ name: "netscape.com" },
	{ name: "lulu.com" },
	{ name: "simplemachines.org" },
	{ name: "google.ru" },
	{ name: "earthlink.net" },
	{ name: "privacy.gov.au" },
	{ name: "loc.gov" },
	{ name: "pcworld.com" },
];

let search = document.getElementById("search");
let showResults = document.getElementById("showResults");

// for (let i = 0; i < data.length; i++) {
// 	if (i == searchValue){
// 		console.log("gogogog")
// 	}
//   }

search.addEventListener("input", function () {
	let searchValue = search.value.toLowerCase();

	let filteredResults = data.filter(function (item) {
		return item.name.toLowerCase().startsWith(searchValue);
	});
	if (searchValue == "") {
		displayResults("");
	}

	// console.log(startsWith);
	displayResults(filteredResults);
});

function displayResults(results) {
	showResults.innerHTML = "";

	results.forEach(function (results) {
		let resultsElement = document.createElement("div");
		resultsElement.classList.add("searchResult");
		resultsElement.textContent = results.name;
		showResults.appendChild(resultsElement);
	});
}
