javascript: (() => {
    document.querySelector('[aria-label="マイリスト"]').click();
    var i = 0;
    var checkExistFirstFocus = setInterval(function () {
        console.log("2");
        i++;
        if (document.querySelector(".galleryLockups").querySelectorAll("a")){
            document.querySelector(".galleryLockups").querySelectorAll("a")[0].focus();
            clearInterval(checkExistFirstFocus);
            console.log("2");
            console.log(i);
        } else if (i === 5){
            clearInterval(checkExistFirstFocus);
            console.log("3");
        }
    }, 200);
    var nodes = document.querySelector(".galleryLockups").querySelectorAll("a");
    nodes = Array.from(nodes);
    var rowCount = document.querySelector(".galleryLockups").querySelectorAll(".sliderContent.row-with-x-columns")[0].childElementCount;
    document.querySelector(".galleryLockups").addEventListener("keydown", function (event) {
        if (event.key === "w") {
            var currentIndex = nodes.indexOf(document.activeElement);
            if (nodes[parseInt(currentIndex) - parseInt(rowCount)]) {
                nodes[parseInt(currentIndex) - parseInt(rowCount)].focus();
                nodes[parseInt(currentIndex) - parseInt(rowCount)].scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            }
        } else if (event.key === "a") {
            var currentIndex = nodes.indexOf(document.activeElement);
            if (nodes[parseInt(currentIndex) - 1]) {
                nodes[parseInt(currentIndex) - 1].focus();
                nodes[parseInt(currentIndex) - 1].scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            }

        } else if (event.key === "s") {
            var currentIndex = nodes.indexOf(document.activeElement);
            if (nodes[parseInt(currentIndex) + parseInt(rowCount)]) {
                nodes[parseInt(currentIndex) + parseInt(rowCount)].focus();
                nodes[parseInt(currentIndex) + parseInt(rowCount)].scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            }

        } else if (event.key === "d") {
            var currentIndex = nodes.indexOf(document.activeElement);
            if (nodes[parseInt(currentIndex) + 1]) {
                nodes[parseInt(currentIndex) + 1].focus();
                nodes[parseInt(currentIndex) + 1].scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            }

        }

    });

})()