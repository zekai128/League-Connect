function onClick(){
    var name = document.getElementById("name").value;
    var rank = document.getElementById("rank").value;
    var position = document.getElementById("position").value;
    var server = document.getElementById("server").value;
    var champion = document.getElementById("champion").value;
    
    var queryParameters = {
        "name": name,
        "server": server,
        "rank": rank,
        "position": position,
        "champions": champion
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:1337/postUsers');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(queryParameters));
}