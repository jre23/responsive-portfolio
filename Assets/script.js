// giphy api

// event listeners for cocktail and food buttons
$("#submit-btn").on("click", searchProduct);
// $("#find-food").on("click", searchProduct);
// $("#find-mood").on("click", searchProduct);

// function to search for a random giphy based off of what the product is, in this case cocktails or food 
function searchProduct(event) {
    event.preventDefault();
    console.log(event.target.value);
    let searchItem = event.target.value;
    let APIKey = "ktRl6hM5PH2xVxYouRQctIN7phpaRjMr";
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchItem + "&api_key=" + APIKey + "&limit=50";
    // make ajax call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // check the response 
        console.log(response);
        // use Math.random() to choose a random giphy
        let randomIndex = Math.floor(Math.random() * 50);
        console.log("Random index: " + randomIndex);
        testURL = response.data[randomIndex].images.fixed_height.url;
        // append giphy to html
        let newImg = $("<img>");
        newImg.addClass("img-fluid");
        $("#mood-giphy").empty();
        $("#mood-giphy").append(newImg.attr("src", testURL));
    })
}