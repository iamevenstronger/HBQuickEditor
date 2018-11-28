var keys = Object.keys(localStorage);

for (var key in keys) {
    if (key != "") {
        console.log(key);
        const element = keys[key];
        var div = document.createElement("div");
        var divText = document.createTextNode(element);
        div.appendChild(divText);
        div.setAttribute("class","link");
        div.setAttribute("onclick","openTab('"+element+"')");
        document.getElementById("items").appendChild(div);
    }
}

var openTab = function(key) {
    window.open(location.hostname+"/editor.html?name="+key,"_blank");
}