javascript: (() => {
    var nextContent = document.querySelector(".touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerNextEpisode");
    if (nextContent){
        nextContent.click();
    } else {
        alert("THIS IS THE LAST CONTENT");
    }
})()

//ブックマークレット
javascript:(function(url){s=document.createElement('script');s.src=url;document.body.appendChild(s);})('https://tomoaki-mukaiyama.github.io/netflix_bookmarklet/next_episode_formatted.js')