add=(button, el)=>  {
    if(button.innerHTML=="Like") {
        document.getElementById(el).innerHTML++;
        button.innerHTML="Unlike";
    }

    else {
        document.getElementById(el).innerHTML--;
        button.innerHTML="Like";
    }
}
