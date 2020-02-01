var results = document.getElementById("results");


document.getElementById("search").addEventListener("click", ()=>{
  /*
    Extract the query parameters from the form.
  */

  alert("botton was clicked");
  var rank = document.getElementById("rank").value;
  var position = document.getElementById("position").value;
  var server = document.getElementById("server").value;
  alert(rank);
  var queryParameters = {
    "server" : server,
    "rank" : rank,
    "position" : position
  }

  /*
    Query the database using the query parameters from above.
  */
  
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/getUsers');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    alert("request received!");
  }
  xhr.send();
  
  alert("control continues");

  /*
    var rank = document.getElementById("rank").value;
  	var position = document.getElementById("position").value;
  	var server = document.getElementById("server").value;
  	var parameters = {rank: rank, position: position, server:server};
  	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:1337/getUsers?" + "rank=" + parameters.rank + "&position=" + parameters.position + 
			"&server=" + parameters.server);
	xhr.onload = function(){
		var result = JSON.parse(this.response);
		var resultsDiv = document.getElementById("results");

		for (var i =0; i < result.length;i++){
			var infoDiv = document.createElement("div");
			infoDiv.classList.add("profile");
			infoDiv.classList.add("bg-light");

			var image = document.createElement("img");
			image.classList.add("scale");
			image.src = "/images/" + "Emblem_" + result[i].rank + ".png";
						
			
			infoDiv.classList.add("center");
			infoDiv.appendChild(image);
			

			
			var name_h2 = document.createElement("h2");
			var name_h2_text = document.createTextNode(result[i].name);
			name_h2.appendChild(name_h2_text);
			infoDiv.appendChild(name_h2);

			resultsDiv.appendChild(infoDiv);

			
			var position_p = document.createElement("p");
			position_p.innerHTML = "position: " + result[i].position;
			var server_p = document.createElement("p");
			server_p.innerHTML = "Server: " + result[i].server;

			var button_a = document.createElement("a");
			button_a.classList.add("btn btn-primary");
			button_a.innerHTML = "View Profile";
			infoDiv.appendChild(image);
			infoDiv.appendChild(name_h2);
			infoDiv.appendChild(position_p);
			infoDiv.appendChild(server_p);
			resultsDiv.appendChild(infoDiv);
			
		}
	}
  xhr.send();
  */
  
});






/*
results.innerHTML = `<div class="profile bg-light">
          <img
            class = "scale"
            src="../public/images/Emblem_Bronze.png"
            alt=""
          /><div class="center">
            <h2>John Doe</h2>
            <p>Mid-laner</p>
            <p>Server: NA</p>
            <a href="profile.html" class="btn btn-primary">View Profile</a>
          </div>

          <ul class = "center">
            <li class="text-primary">
              <i class="fas fa-check"></i> Ahri</li>
            <li class="text-primary"><i class="fas fa-check"></i> Brand
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> Diana
            </li>
          </ul>
        </div><div class="profile bg-light">
          <img
            class="round-img"
            src="img/Emblem_Challenger.png"
            alt=""
          />
          <div>
            <h2>John Doe</h2><p>Developer at Microsoft</p>
            <p>Seattle, WA</p>
            <a href="profile.html" class="btn btn-primary">View Profile</a>
          </div>

          <ul>
            <li class="text-primary">
              <i class="fas fa-check"></i> HTML
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> CSS
            </li>
            <li class="text-primary">
              <i class="fas fa-check"></i> JavaScript
            </li></ul>
        </div>`;
*/