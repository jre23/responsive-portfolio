$(document).ready(() => {
    // function to search for a random giphy based off of what the button data-target is
    const searchProduct = event => {
        let searchItem = "";
        if (event) {
            event.preventDefault();
            let value = event.target.getAttribute("data-target");
            searchItem = value;
        } else {
            searchItem = "english bulldog";
        }
        let APIKey = "ktRl6hM5PH2xVxYouRQctIN7phpaRjMr";
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchItem + "&api_key=" + APIKey + "&limit=50";
        // make ajax call 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(response => {
            // use Math.random() to choose a random giphy
            let randomIndex = Math.floor(Math.random() * 50);
            testURL = response.data[randomIndex].images.fixed_height.url;
            // append giphy to html
            let newImg = $("<img>");
            newImg.addClass("img-fluid");
            $("#mood-giphy").empty();
            $("#mood-giphy").append(newImg.attr("src", testURL));
        }).catch((e) => {
            console.log(e)
        });
    }
    // this function creates the links to the github repo and to the deployed application for a project on the portfolio page when a screenshot is clicked
    const displayProjectInfo = event => {
        let projectInfo = event.target.getAttribute("data-project");
        $("#project-info-title").text(projectInfo);
        $("#project-github").text("GitHub Repository");
        $("#project-github-pages").text("GitHub Pages");
        // switch statement to determine what links to display based off what screenshot is clicked 
        switch (projectInfo) {
            case "bear-share":
                $("#project-github-pages").text("Heroku Deployment");
                $("#project-github").attr("href", "https://github.com/jre23/bear-share");
                $("#project-github-pages").attr("href", "https://nameless-plains-06669.herokuapp.com/");
                $(".clickedOn").attr("alt", "Project #2 Bear Share screenshot");
                $(".clickedOn").attr("src", "./Assets/Images/bear-share.png");
                $(".clickedOn").attr("data-project", "bear-share");
                break;
            case "the-night-planner":
                $("#project-github").attr("href", "https://github.com/jre23/the-night-planner");
                $("#project-github-pages").attr("href", "https://jre23.github.io/the-night-planner");
                $(".clickedOn").attr("alt", "Project #1 The Night Planner screenshot");
                $(".clickedOn").attr("src", "./Assets/Images/the-night-planner.png");
                $(".clickedOn").attr("data-project", "the-night-planner");
                break;
            case "eat-da-burger":
                $("#project-github-pages").text("Heroku Deployment");
                $("#project-github").attr("href", "https://github.com/jre23/eat-da-burger");
                $("#project-github-pages").attr("href", "https://salty-meadow-91006.herokuapp.com");
                $(".clickedOn").attr("alt", "Eat Da Burger screenshot");
                $(".clickedOn").attr("src", "./Assets/Images/eat-da-burger.png");
                $(".clickedOn").attr("data-project", "eat-da-burger");
                break;
            case "note-taker":
                $("#project-github-pages").text("Heroku Deployment");
                $("#project-github").attr("href", "https://github.com/jre23/note-taker");
                $("#project-github-pages").attr("href", "https://peaceful-spire-85964.herokuapp.com");
                $(".clickedOn").attr("alt", "Note Taker screenshot");
                $(".clickedOn").attr("src", "./Assets/Images/note-taker.png");
                $(".clickedOn").attr("data-project", "note-taker");
                break;
            case "weather-dashboard":
                $("#project-github").attr("href", "https://github.com/jre23/weather-dashboard");
                $("#project-github-pages").attr("href", "https://jre23.github.io/weather-dashboard");
                $(".clickedOn").attr("alt", "Weather Dashboard screenshot");
                $(".clickedOn").attr("src", "./Assets/Images/weather-dashboard.png");
                $(".clickedOn").attr("data-project", "weather-dashboard");
                break;
            case "timed-coding-quiz":
                $("#project-github").attr("href", "https://github.com/jre23/timed-coding-quiz");
                $("#project-github-pages").attr("href", "https://jre23.github.io/timed-coding-quiz");
                $(".clickedOn").attr("alt", "Timed Coding Quiz screenshot");
                $(".clickedOn").attr("src", "./Assets/Images/timed-coding-quiz.png");
                $(".clickedOn").attr("data-project", "timed-coding-quiz");
                break;
        }
    }
    // event listener for submit button on contact page
    $(".submit-btn").on("click", searchProduct);
    // event listener for portfolio screenshots
    $(".portfolio-click").on("click", displayProjectInfo);
    // call searchProduct function to display a giphy when contact page is loaded
    searchProduct();
});