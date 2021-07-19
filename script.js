// Initialize the news api parameters
let apiKey = "27a6ef4daf0d4b71aedd3a3c6bf5e5bf";

// Grab the news container
let newsContainer = document.getElementById("newsContainer");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=in`, true);
xhr.setRequestHeader("Authorization", apiKey);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let newsCard = `
                        <div class="card">
                            <img class="card-img-top" src="${element.urlToImage}" alt="news image" />
                            <div class="card-body">
                                <h5 class="card-title">
                                ${element.title}
                                </h5>
                                <p class="card-text">
                                    ${element.description}
                                </p>
                                <a href="${element.url}" class="card-link btn btn-primary float-right mb-3">
                                    Read More
                                </a>
                            </div>
                        </div>
                `;

      newsHtml += newsCard;
    });
    newsContainer.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
