    document.querySelector(".touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerEpisodes").click();

    (function () {
        const CLASS_ALREADY_ADDED = "episode-class-added";
        var checkClass = document.querySelector(".nfp-aspect-wrapper");
        if (checkClass.classList.contains(CLASS_ALREADY_ADDED)) {
            return;
        } else {
            checkClass.classList.add(CLASS_ALREADY_ADDED);
            //フォーカス時のボーダーのcss追加
            var newStyle = document.createElement('style');
            newStyle.type = 'text/css';
            newStyle.innerText = 'div[data-uia="episode-expander"]:focus{ outline: none; border-style: solid; border-width: 3px; border-color: red; }';
            document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);
            //現在再生中のエピソードのインデックス取得　var i
            var episodes = document.querySelectorAll('[data-uia="episode-expander"]');
            episodes = Array.from(episodes);
            currentEpisode = episodes.find(episode => {
                return episode.querySelector(".episode-row.expanded.visible");
            });
            var i = episodes.indexOf(currentEpisode);


            document.body.addEventListener("keydown", function (event) {
                var episodes = document.querySelectorAll('[data-uia="episode-expander"]');
                if (event.key === "w") {
                    if (i > 0) {
                        i = i - 1;
                        episodes[i].focus();
                       
                        console.log(i);
                    }
                } else if (event.key === "s") {
                    if (i < parseInt(episodes.length) - 1) {
                        i = i + 1;
                        episodes[i].focus();
                     
                        console.log(i);
                    }
                };
            });
        };
    }());




javascript: (() => {
    document.querySelector(".touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerEpisodes").click();
    (function(){var a=document.querySelector(".nfp-aspect-wrapper");if(!a.classList.contains("episode-class-added")){a.classList.add("episode-class-added");a=document.createElement("style");a.type="text/css";a.innerText='div[data-uia="episode-expander"]:focus{ outline: none; border-style: solid; border-width: 3px; border-color: red; }';document.getElementsByTagName("HEAD").item(0).appendChild(a);a=document.querySelectorAll('[data-uia="episode-expander"]');a=Array.from(a);currentEpisode=a.find(function(c){return c.querySelector(".episode-row.expanded.visible")});
    var b=a.indexOf(currentEpisode);document.body.addEventListener("keydown",function(c){var d=document.querySelectorAll('[data-uia="episode-expander"]');"w"===c.key?0<b&&(--b,d[b].focus(),console.log(b)):"s"===c.key&&b<parseInt(d.length)-1&&(b+=1,d[b].focus(),console.log(b))})}})();
})()
