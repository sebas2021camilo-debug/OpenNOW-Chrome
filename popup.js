document
.getElementById("launch")
.addEventListener("click",()=>{

    chrome.tabs.create({
        url:"https://play.geforcenow.com/"
    });

});
