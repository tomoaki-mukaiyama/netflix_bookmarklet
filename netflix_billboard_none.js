javascript: (() => {
    if (document.querySelectorAll(".choose-profile").length) {
        document.querySelectorAll(".profile")[2].querySelector("a").click();
    };
    var nodes = document.querySelectorAll(".rowTitle.ltr-0");
    nodes[0].focus();
    const BILLABOARD_DELETED = "billaboard-deleted";
    if (document.querySelector(".main-header.has-billboard.menu-navigation").classList.contains(BILLABOARD_DELETED)) {
        return;
    } else {
        var checkExist = setInterval(function () {
            console.log("1");
            if (document.querySelector(".volatile-billboard-animations-container")) {
                console.log("2");
                document.querySelector(".main-header.has-billboard.menu-navigation").classList.add(BILLABOARD_DELETED);
                document.querySelector(".volatile-billboard-animations-container").previousElementSibling.remove();
                document.querySelector(".volatile-billboard-animations-container").remove();
                clearInterval(checkExist);
            }
        }, 500);
    }
})()