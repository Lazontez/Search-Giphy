
//Array of topics
var topics = ["Music", "Basketball", "Nature", "Astronauts", "Nike"]
var topicBtn;
var usersInput;




function addBtnToPage() {
    for (x = 0; x < topics.length; x++) {
        // Creating and storing an button tag
        topicBtn = $("<button>");
        //Adds a attribute to the topic button with a unique number depending on its index
        topicBtn.attr("data-number", x);
        topicBtn.attr("class", "btn btn-dark");
        //Adds the text of the button as the topic
        topicBtn.text(topics[x]);
        console.log(topicBtn)
        // Add the button and to do item to the  buttonsSaved div
        console.log($("#buttonsSaved"))
        $("#buttonsSaved").prepend(topicBtn);
    }
}


window.onload = function () {

    addBtnToPage()

    $("#submitBtn").on("click", getUsersInput);
    $("#submitBtn").on("click", usersInputAction);

}

function getUsersInput() {
    //makes a variable called user-input with the value of the input box
    usersInput = $("#user-input").val().trim();
    //clear the input box
    // clearInputBox()    
    //adds the user input variable to the topics array
    topics.push(usersInput);


}
function clearInputBox() {
    document.getElementById('userData').value = ("");

}
function usersInputAction() {
    // Creating and storing an button tag
    topicBtn = $("<button>");
    //Adds a attribute to the topic button with a unique number depending on its index
    topicBtn.attr("data-number", x);
    topicBtn.attr("class", "btn btn-dark");
    //Adds the text of the button as the topic
    topicBtn.append(usersInput)
    $("#buttonsSaved").prepend(topicBtn)

}


$("#submitBtn").click(function () {
    usersInput = $("#user-input").val().trim();


    var api_key = "yJvVChLhvqDOJQMutnp3D7JxsX8iaN0N"

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + usersInput + "&limit=10&offset=0&rating=R&lang=en";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var image= response.data.fixed_height_still;
        console.log(image)
    //Creating and storing an image tag
    //      gifImage = $("<img>");

    //      // Setting the catImage src attribute to imageUrl
    //      gifImage.attr("src", imageUrl);
    //      gifImage.attr("alt", "gifImage---"+userInput);

    //      // Prepending the catImage to the images div
    //      $("#gifDisplay").prepend(gifImage);
    //    });
    });
})

//get the users input
//store the users input
//create a button that has the input from the user as the text
//append the button to the html