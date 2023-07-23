const accessKey = `wJQ5pB-NQjQQsstkrsiY8oTWBD80tgtrX564c2kM174`;

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more");

let keyWord = "";
let page = 1;

async function searchImage() {
	keyWord = searchBox.value;
	const url = `https://api.unsplash.com/photos/?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;

	const response = await fetch(url);
	const data = await response.json();

	if (page === 1) {
		searchResult.innerHTML = "";
	}

	data.map((img) => {
		const image = document.createElement("img");
		image.src = img.urls.small;

		const imageLink = document.createElement("a");
		imageLink.href = img.links.html;
		imageLink.target = "_blank";

		imageLink.appendChild(image);
		searchResult.appendChild(imageLink);
	});
	showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	page = 1;
	searchImage();
});

showMoreBtn.addEventListener("click", () => {
	page++;
	searchImage();
});
