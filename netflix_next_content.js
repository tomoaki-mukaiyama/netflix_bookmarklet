javascript: (() => {
    var nextContent = document.querySelector(".touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerNextEpisode");
    if (nextContent){
        nextContent.click();
    } else {
        alert("THIS IS THE LAST CONTENT");
    }
})()


