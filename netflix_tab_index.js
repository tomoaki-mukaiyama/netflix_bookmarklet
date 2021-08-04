javascript: (() => {

    var newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.innerText = 'a:focus{outline: none; border-style: solid; border-width: 5px; border-color: #30A9DE; }';
    document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);

    if (document.querySelectorAll(".choose-profile").length) {
        document.querySelectorAll(".profile")[2].querySelector("a").click();
    };

    var nodes = document.querySelectorAll(".slider-refocus");
    nodes[0].focus();
    nodes[0].scrollIntoView({
        behavior: "instant",
        block: "center"
    });

    const EVENT_LISTENER_ADDED = "event_listener_added";

    if (document.querySelector(".lolomo.is-fullbleed").classList.contains(EVENT_LISTENER_ADDED)) {
        return;
    } else {
        document.querySelector(".lolomo.is-fullbleed").classList.add(EVENT_LISTENER_ADDED);
        document.querySelector(".lolomo.is-fullbleed").addEventListener("keydown", function (event) {

            if (event.key === "w") {
                var nodes = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .previousElementSibling
                    .querySelectorAll(".slider-refocus");
                nodes = Array.from(nodes);
                firstVisibleNode = nodes.find(function (node) {
                    return isVisible(node);
                });
                firstVisibleNode.focus();
                firstVisibleNode.scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            } else if (event.key === "s") {
                var nodes = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .nextElementSibling
                    .querySelectorAll(".slider-refocus");
                nodes = Array.from(nodes);
                firstVisibleNode = nodes.find(function (node) {
                    return isVisible(node);
                });
                firstVisibleNode.focus();
                firstVisibleNode.scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            } else if (event.key === "q") {
                document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .querySelector(".slider")
                    .querySelector("span.handle.handlePrev").click();
            } else if (event.key === "e") {
                document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .querySelector(".slider")
                    .querySelector("span.handle.handleNext").click();
            } else if (event.key === "a") {
                var leftContent = document
                    .activeElement
                    .closest(".slider-item")
                    .previousElementSibling
                    .querySelector("a");
                if (isVisible(leftContent)) {
                    leftContent.focus();
                }
            } else if (event.key === "d") {
                var rightContent = document
                    .activeElement
                    .closest(".slider-item")
                    .nextElementSibling
                    .querySelector("a");
                if (isVisible(rightContent)) {
                    rightContent.focus();
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
                    if (node.querySelector("span.slider-refocus")) {
                        node.querySelector("span.slider-refocus").setAttribute("tabindex", "0");
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