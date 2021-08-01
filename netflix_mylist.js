javascript: (() => {
    document.querySelector('[aria-label="マイリスト"]').click();
    document.querySelector(".galleryLockups").querySelectorAll("a")[0].focus();
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