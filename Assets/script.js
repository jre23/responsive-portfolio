// giphy api

// event listener for submit button
$(".submit-btn").on("click", searchProduct);

// function to search for a random giphy based off of what the button value is
function searchProduct(event) {
    let searchItem = "";
    if (event) {
        event.preventDefault();
        searchItem = event.target.value;
    } else {
        searchItem = "english bulldog";
    }
    let APIKey = "ktRl6hM5PH2xVxYouRQctIN7phpaRjMr";
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchItem + "&api_key=" + APIKey + "&limit=50";
    // make ajax call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // use Math.random() to choose a random giphy
        let randomIndex = Math.floor(Math.random() * 50);
        testURL = response.data[randomIndex].images.fixed_height.url;
        // append giphy to html
        let newImg = $("<img>");
        newImg.addClass("img-fluid");
        $("#mood-giphy").empty();
        $("#mood-giphy").append(newImg.attr("src", testURL));
    })
}

// event listener for portfolio button
$(".portfolio-click").on("click", displayProjectInfo);

function displayProjectInfo(event) {
    let projectInfo = event.target.getAttribute("value");
    $("#project-info-title").text(projectInfo);
    $("#project-github").text("GitHub repo");
    $("#project-github-pages").text("GitHub Pages");

    switch (projectInfo) {
        case "the-night-planner":
            $("#project-github").attr("href", "https://github.com/jre23/BreakoutRoom_17");
            $("#project-github-pages").attr("href", "https://jre23.github.io/BreakoutRoom_17");
            break;
        case "weather-dashboard":
            $("#project-github").attr("href", "https://github.com/jre23/weather-dashboard");
            $("#project-github-pages").attr("href", "https://jre23.github.io/weather-dashboard");
            break;
        case "work-day-scheduler":
            $("#project-github").attr("href", "https://github.com/jre23/work-day-scheduler");
            $("#project-github-pages").attr("href", "https://jre23.github.io/work-day-scheduler");
            break;
        case "timed-coding-quiz":
            $("#project-github").attr("href", "https: //github.com/jre23/timed-coding-quiz");
            $("#project-github-pages").attr("href", "https: //jre23.github.io/timed-coding-quiz");
            break;
        case "password-generator":
            $("#project-github").attr("href", "https://github.com/jre23/password-generator");
            $("#project-github-pages").attr("href", "https://jre23.github.io/password-generator");
            break;
    }
}

searchProduct();