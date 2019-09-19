
function changeBackgroundColor() {
    var toggleButton = document.getElementById("ToggleDisplayLight");
    var color = document.getElementsByClassName("InnerBody");

    

    if(toggleButton.innerText == "Light Mode")
    {
        color[0].classList.add("light");
        toggleButton.innerText = "Dark Mode";
    }
    else
    {
        color[0].classList.remove("light");
        toggleButton.innerText = "Light Mode";
    }
}

function nextPage()
{
    window.location.href = "http://127.0.0.1:5500/About.html";
}

function option()
{
    var btn1 = document.createElement("BUTTON");    
    btn1.innerText = "New button created"
    btn1.onclick = function () {
        form();
    }
    
    document.body.appendChild(btn1);
}

function form()
{ 
    var bootstrapForm = document.getElementById("bootstrap-form");
    bootstrapForm.style = "display:inital";
    alert("yes");
}
