javascript: (() => {
    if (document.querySelectorAll(".choose-profile").length) {
        document.querySelectorAll(".profile")[2].querySelector("a").click();
    };  
    if (document.querySelectorAll(".nfp-control-row.top-left-controls").length) {
     return;   
    } else {

        var checkExist = setInterval(function () {
            console.log("1");
            if (document.querySelectorAll(".slider-refocus").length) {
                console.log("2");
                document.querySelector('[data-list-context="continueWatching"]').scrollIntoView(false);
                document.querySelector('[data-list-context="continueWatching"]').querySelectorAll("a")[1].click();
                console.log("3");
                if (document.querySelector(".primary-button.playLink.isToolkit")) {
                    console.log("4");
                    clearInterval(checkExist);
                    document.querySelector(".primary-button.playLink.isToolkit").click();
                    console.log("5");
                };
            };
        }, 500);
    }
})()
