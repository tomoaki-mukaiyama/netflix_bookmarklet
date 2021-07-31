javascript: (() => {
    var nodes = document.querySelectorAll(".rowTitle.ltr-0");
    nodes[0].focus();
    const EVENT_LISTENER_ADDED = "eventListenerAdded";
    if (document.querySelector(".lolomo.is-fullbleed").classList.contains(EVENT_LISTENER_ADDED)) {
        return;
    } else {
        document.querySelector(".lolomo.is-fullbleed").classList.add(EVENT_LISTENER_ADDED);
        document.querySelector(".lolomo.is-fullbleed").addEventListener("keydown", function (event) {
            if (event.key === "w") {
                var nodes = document.querySelectorAll(".lolomoRow.lolomoRow_title_card.ltr-0");
                nodes = Array.from(nodes);

                if (nodes.find(node => node.querySelector(".rowTitle.ltr-0") === document.activeElement)) {
                    var activeNode = nodes.find(node => node.querySelector(".rowTitle.ltr-0") === document.activeElement);
                    var previousNode = activeNode.previousElementSibling;
                    if (previousNode) {
                        previousNode.querySelector(".rowTitle.ltr-0").focus();
                        previousNode.scrollIntoView({
                            behavior: "instant",
                            block: "center"
                        });
                    };
                } else {
                    document.activeElement
                        .closest(".rowContainer.rowContainer_title_card")
                        .previousElementSibling
                        .querySelector(".rowTitle.ltr-0")
                        .focus();
                }

            } else if (event.key === "s") {
                var nodes = document.querySelectorAll(".lolomoRow.lolomoRow_title_card.ltr-0");
                nodes = Array.from(nodes);

                if (nodes.find(node => node.querySelector(".rowTitle.ltr-0") === document.activeElement)) {
                    var activeNode = nodes.find(node => node.querySelector(".rowTitle.ltr-0") === document.activeElement);
                    var nextNode = activeNode.nextElementSibling;
                    if (nextNode) {
                        nextNode.querySelector(".rowTitle.ltr-0").focus();
                        nextNode.scrollIntoView({
                            behavior: "instant",
                            block: "center"
                        });
                    };
                } else {
                    document.activeElement
                        .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                        .nextElementSibling
                        .querySelector(".rowTitle.ltr-0")
                        .focus();
                }

            }
        });


        const OBSERVE_CLASS_ADDED = "observe-class";
        const target = document.querySelectorAll(".lolomoRow.lolomoRow_title_card.ltr-0")[0].parentElement;
        const observer = new MutationObserver(records => {
            var nodes = document.querySelectorAll(".lolomoRow.lolomoRow_title_card.ltr-0");
            nodes.forEach(node => {
                if (node.classList.contains(OBSERVE_CLASS_ADDED)) {
                    return;
                } else {
                    node.classList.add(OBSERVE_CLASS_ADDED);
                    if (node.querySelector("span.rowTitle.ltr-0")) {
                        node.querySelector("span.rowTitle.ltr-0").setAttribute("tabindex", "0");
                    }
                }
            })
        });

        observer.observe(target, {
            childList: true
        })

    }
})()
