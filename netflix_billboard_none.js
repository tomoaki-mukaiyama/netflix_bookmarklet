javascript: (() => {
    if (document.querySelectorAll(".choose-profile").length) {
        document.querySelectorAll(".profile")[2].querySelector("a").click();
    };
    var checkExist = setInterval(function () {
        console.log("1");
        if (document.querySelectorAll(".slider-refocus").length) {
            console.log("2");
            if (document.querySelector(".volatile-billboard-animations-container").style.display === "") {
                document.querySelector(".volatile-billboard-animations-container").style.display = "none";
                clearInterval(checkExist);
            }
        };
    }, 200);
})()
