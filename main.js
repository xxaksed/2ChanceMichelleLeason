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

document.addEventListener("DOMContentLoaded", function () {
	let search = document.getElementById("search");
	let showResults = document.getElementById("showResults");

	search.addEventListener("input", function () {
		let searchValue = search.value.toLowerCase();

		let filteredResults = customFilter(data, function (item) {
			return customStartsWith(item.name.toLowerCase(), searchValue);
		});

		displayResultsDropdown(filteredResults);

		if (searchValue.length === 0) {
			showResults.style.display = "none";
			return;
		}
	});

	function customFilter(array, callback) {
		let filteredArray = [];
		for (let i = 0; i < array.length; i++) {
			if (callback(array[i])) {
				filteredArray.push(array[i]);
			}
		}
		return filteredArray;
	}

	function customStartsWith(string, startW) {
		return string.indexOf(startW) === 0;
	}

	function displayResultsDropdown(resultsArray, searchValue) {

		while (showResults.firstChild) {
			showResults.removeChild(showResults.firstChild);
		  }

		showResults.style.display = "block";

		let selectDropdown = document.createElement("select");
		selectDropdown.classList.add("dropdown");

		resultsArray.forEach(function (result) {
			let resultElement = document.createElement("div");
			resultElement.classList.add("result-item");
			resultElement.textContent = result.name;
			showResults.appendChild(resultElement);
			showResults.appendChild(selectDropdown)
		});
	}
});
