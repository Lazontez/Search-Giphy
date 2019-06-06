
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

        var api_key = "yJvVChLhvqDOJQMutnp3D7JxsX8iaN0N"

        usersInput = $("#user-input").val().trim();


        var imageRepo = []
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + usersInput + "&limit=10&offset=0&rating=R&lang=en";
        // console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            for (var x = 0; x < response.data.length; x++) {
                var imageStill = response.data[x].images.fixed_height_still.url
                var animatedImage = response.data[x].images.fixed_height.url;
                var rating = response.data[x].rating;
                console.log(rating)
                // Creating and storing an image tag
                gifImage = $("<img>");

                // Setting the catImage src attribute to imageUrl
                gifImage.attr("src", imageStill);
                gifImage.attr("data-animate", animatedImage);
                gifImage.attr("data-still", imageStill);
                gifImage.attr("alt", "gifImage-" + usersInput);
                gifImage.attr("class", "gif");
                gifImage.attr("itemID", x)
                gifImage.attr("data-state", "still")

                //css for images
                gifImage.css({
                    "margin": "2px",
                     
                })
            

                // Prepending the catImage to the images div
                $("#gifDisplay").prepend(gifImage);

                var results = {
                    "still-image": imageStill,
                    "itemID": x,
                    "image_animate": animatedImage,
                    "state": "still"
                }
                // console.log(results)
                imageRepo.push(results)
                $("#user-input").val("")

            };
            console.log(imageRepo)





        })


        $(document).on("click", ".gif", function () {
            var id = $(this).attr("itemID")
            console.log(id)
            var state = $(this).attr("data-state")
            console.log(state)
            // CODE GOES HERE

            // =============================================

            // STEP THREE: Check if the variable state is equal to 'still',
            if (state === "still") {
                $(this).attr("data-state", "animate");
                $(this).attr("src", $(this).attr("data-animate"))
            }
            else {
                $(this).attr("data-state", "still");
                $(this).attr("src", $(this).attr("data-still"))

            }


        })



        //get the users input
        //store the users input
        //create a button that has the input from the user as the text
        //append the button to the html
    });
}