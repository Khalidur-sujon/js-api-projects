const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const authorName = document.getElementById("author-name");

async function getRandomQuote(apiUrl) {
	const response = await fetch(apiUrl);
	const data = await response.json();

	quote.innerHTML = data.content;
	authorName.innerHTML = data.author;
}

function tweet() {
	window.open(
		"https://twitter.com/intent/tweet?text=" +
			quote.innerHTML +
			"---" +
			authorName.innerHTML,
		"Tweet Window",
		"width=600 height=300"
	);
}
