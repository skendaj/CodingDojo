console.log("page loaded...");

function changeName() { 
        document.getElementById("name").innerHTML = "Bruno Skendaj";
}

function cancelRequests(id){
    var element = document.querySelector(id);
    element.remove();
    var nrRequestElement = document.querySelector("#crNumber");
    nrRequestElement.innerHTML--;
}

function acceptRequests(id) {
    var element = document.querySelector(id);
    element.remove();
    var nrRequestElement = document.querySelector("#crNumber");
    nrRequestElement.innerHTML--;
    var nrFriendsElement = document.querySelector("#plusConnectionNum");  
    nrFriendsElement.innerHTML++;
}