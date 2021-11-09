window.onload = function(){
    var httpRequest;
    var button = document.querySelector("#lookup"); //Button for the functionality

    button.addEventListener('click',function(element){
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        var url = "world.php"; //Get the database url
        var country = document.querySelector("#country").value; //value of the country variable

        httpRequest.onreadystatechange = getCountryList; //Get the list for the specific country.
        httpRequest.open('GET',url+"?country="+country+"&context=country",true);
        httpRequest.send();

    });

    //Function to get the list of all the country info
    function getCountryList(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){ //If the OK status shows up, this was done successfully
                var response = httpRequest.responseText; //Get the results

                var div = document.querySelector("#result");
                div.innerHTML = response;//Change the actual information on the site.
            }
            else{ //Otherwise, print the error.
                alert("Error");
            }
        }
    }
};