var results = document.getElementById("results");


document.getElementById("search").addEventListener("click", ()=>{
  /*
    Extract the query parameters from the form.
  */


  var rank = document.getElementById("rank").value;
  var position = document.getElementById("position").value;
  var server = document.getElementById("server").value;

  var queryParameters = {
    "server" : server,
    "rank" : rank,
    "position" : position
  }


 
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/getUsers');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    result = JSON.parse(xhr.response);
    resultDiv = document.getElementById("results");
    for(var i = 0; i < result.length; i++){
        //define the info div
        var infoDiv = document.createElement("div");
        infoDiv.classList.add("profile");
        infoDiv.classList.add("bg-light");
        infoDiv.classList.add("center");
        infoDiv.classList.add("space-out");
        infoDiv.classList.add("flex-parent")
        
        //create Rank Div
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("flex-child");
        var image = document.createElement("img");
        image.classList.add("scale");
        image.src = "/images/" + "Emblem_" + result[i].rank + ".png";
        imageDiv.appendChild(image);
        
        //Create Description Div
        var descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("flex-child");
        var name_h2 = document.createElement("h2");
        var name_h2_text = document.createTextNode(result[i].name);
        name_h2.appendChild(name_h2_text);
        descriptionDiv.appendChild(name_h2);
        
        var position_p = document.createElement("p");
        position_p.innerHTML = "position: " + result[i].position;
        var server_p = document.createElement("p");
        server_p.innerHTML = "Server: " + result[i].server;
        descriptionDiv.appendChild(position_p);
        descriptionDiv.appendChild(server_p);
        
        //Create Champion Div
        var championDiv = document.createElement("div");
        championDiv.classList.add("flex-child");
        var championText = document.createElement("p");
        championText.innerHTML = "Favorite Champ";
        championDiv.appendChild(championText);

        var championImage = document.createElement(("img"));
        championImage.src = "/images/" + result[1].champions + ".png";
        championImage.classList.add("scale");
        championImage.classList.add("round");
        championImage.classList.add("vertical-center")
        championDiv.appendChild(championImage);
        
        infoDiv.appendChild(imageDiv);
        infoDiv.appendChild(descriptionDiv);
        infoDiv.appendChild(championDiv);
        
        resultDiv.appendChild(infoDiv);
    }
  }
  xhr.send(JSON.stringify(queryParameters)); 
});