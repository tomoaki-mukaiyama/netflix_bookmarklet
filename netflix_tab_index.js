javascript: (() => {
    if (document.querySelectorAll(".choose-profile").length) {
        document.querySelectorAll(".profile")[2].querySelector("a").click();
    };
    var nodes = document.querySelectorAll(".rowTitle.ltr-0");
    nodes[0].focus();
    nodes[0].scrollIntoView({
        behavior: "instant",
        block: "center"
    });
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

            } else if (event.key === "a") {
                var handlePrev = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .querySelector(".slider")
                    .querySelector("span.handle.handlePrev");

                if (handlePrev) {
                    handlePrev.click();
                };
            } else if (event.key === "d") {

                var handleNext = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .querySelector(".slider")
                    .querySelector("span.handle.handleNext");

                if (handleNext) {
                    handleNext.click();
                };
            } else if (event.key === "e") {
                if (document.activeElement.classList.contains("rowTitle")) {
                    var nodes = document.activeElement.closest(".lolomoRow").querySelectorAll(".slider-refocus");
                    nodes = Array.from(nodes);
                    firstVisibleNode = nodes.find(function (node) {
                        return isVisible(node);
                    });
                    firstVisibleNode.focus();
                } else {
                    if (document.activeElement.closest(".slider-item")) {
                        if (isVisible(document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a").parentElement.nextElementSibling)) {
                            document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a").focus();
                        } else if (isVisible(document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a"))) {
                            document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a").focus();
                        }
                    }
                }
            } else if (event.key === "q") {
                if (document.activeElement.closest(".slider-item")) {
                    if (isVisible(document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a").parentElement.nextElementSibling)) {
                        document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a").focus();
                    } else if (isVisible(document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a"))) {
                        document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a").focus();
                    }
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
        });


        function isVisible(elem) {
            if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
            const style = getComputedStyle(elem);
            if (style.display === 'none') return false;
            if (style.visibility !== 'visible') return false;
            if (style.opacity < 0.1) return false;
            if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
                elem.getBoundingClientRect().width === 0) {
                return false;
            }
            const elemCenter = {
                x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
                y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
            };
            if (elemCenter.x < 0) return false;
            if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
            if (elemCenter.y < 0) return false;
            if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
            let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
            do {
                if (pointContainer === elem) return true;
            } while (pointContainer = pointContainer.parentNode);
            return false;
        }

    }
})()