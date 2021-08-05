
    addCssOnce();
    //フォーカス時のCSS追加
    function addCssOnce(){
        const CLASS_ALREADY_ADDED = "class-already-added";
        var checkStyle = document.querySelector(".js-focus-visible");
        if (checkStyle.classList.contains(CLASS_ALREADY_ADDED)){
            return;
        } else {
            checkStyle.classList.add(CLASS_ALREADY_ADDED);
            var newStyle = document.createElement('style');
            newStyle.type = 'text/css';
            newStyle.innerText = 'a:focus{outline: none; border-style: solid; border-width: 5px; border-color: #30A9DE; }';
            document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);            
        }
    }

    // ファミリーアカウントの場合のみ
    //プロフィール選択画面の場合で今回の場合自分のやつをクリック
    if (document.querySelectorAll(".choose-profile").length) {
        document.querySelectorAll(".profile")[2].querySelector("a").click();
    };

    var checkExistElement = setInterval(function () {
        if (document.querySelector(".lolomoRow.lolomoRow_title_card.ltr-0")) {
            clearInterval(checkExistElement);
            //トップのおすすめを非表示
            var billboard = document.querySelector(".volatile-billboard-animations-container");
            if (billboard){
                billboard.remove();
            };
            var node = document.querySelector(".slider-refocus");
            node.focus();
            node.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        };
    }, 500);

    //keydownのイベントリスナーを作成
    const EVENT_LISTENER_ADDED = "event_listener_added";
    addKeyEvent();
    function addKeyEvent() {
        //イベントリスナーを複数設定させない実装
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
        }

        // const OBSERVE_CLASS_ADDED = "observe-class";
        // const target = document.querySelectorAll(".lolomoRow.lolomoRow_title_card.ltr-0")[0].parentElement;
        // const observer = new MutationObserver(records => {
        //     var nodes = document.querySelectorAll(".lolomoRow.lolomoRow_title_card.ltr-0");
        //     nodes.forEach(node => {
        //         if (node.classList.contains(OBSERVE_CLASS_ADDED)) {
        //             return;
        //         } else {
        //             node.classList.add(OBSERVE_CLASS_ADDED);
        //             if (node.querySelector("span.slider-refocus")) {
        //                 node.querySelector("span.slider-refocus").setAttribute("tabindex", "0");
        //             }
        //         }
        //     })
        // });

        // observer.observe(target, {
        //     childList: true
        // });

        //画面に表示されてるかを判断する
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

//フォーマットしたやつ
javascript: (() => {
var d=document.querySelector(".js-focus-visible");if(!d.classList.contains("class-already-added")){d.classList.add("class-already-added");var f=document.createElement("style");f.type="text/css";f.innerText="a:focus{outline: none; border-style: solid; border-width: 5px; border-color: #30A9DE; }";document.getElementsByTagName("HEAD").item(0).appendChild(f)}document.querySelectorAll(".choose-profile").length&&document.querySelectorAll(".profile")[2].querySelector("a").click();
var g=setInterval(function(){if(document.querySelector(".lolomoRow.lolomoRow_title_card.ltr-0")){clearInterval(g);var c=document.querySelector(".volatile-billboard-animations-container");c&&c.remove();c=document.querySelector(".slider-refocus");c.focus();c.scrollIntoView({behavior:"smooth",block:"center"})}},500);h();
function h(){function c(a){if(!(a instanceof Element))throw Error("DomUtil: elem is not an element.");var b=getComputedStyle(a);if("none"===b.display||"visible"!==b.visibility||.1>b.opacity||0===a.offsetWidth+a.offsetHeight+a.getBoundingClientRect().height+a.getBoundingClientRect().width)return!1;b=a.getBoundingClientRect().left+a.offsetWidth/2;var e=a.getBoundingClientRect().top+a.offsetHeight/2;if(0>b||b>(document.documentElement.clientWidth||window.innerWidth)||0>e||e>(document.documentElement.clientHeight||
window.innerHeight))return!1;b=document.elementFromPoint(b,e);do if(b===a)return!0;while(b=b.parentNode);return!1}document.querySelector(".lolomo.is-fullbleed").classList.contains("event_listener_added")||(document.querySelector(".lolomo.is-fullbleed").classList.add("event_listener_added"),document.querySelector(".lolomo.is-fullbleed").addEventListener("keydown",function(a){"w"===a.key?(a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").previousElementSibling.querySelectorAll(".slider-refocus"),
a=Array.from(a),firstVisibleNode=a.find(function(b){return c(b)}),firstVisibleNode.focus(),firstVisibleNode.scrollIntoView({behavior:"instant",block:"center"})):"s"===a.key?(a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").nextElementSibling.querySelectorAll(".slider-refocus"),a=Array.from(a),firstVisibleNode=a.find(function(b){return c(b)}),firstVisibleNode.focus(),firstVisibleNode.scrollIntoView({behavior:"instant",block:"center"})):"q"===a.key?document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelector(".slider").querySelector("span.handle.handlePrev").click():
"e"===a.key?document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelector(".slider").querySelector("span.handle.handleNext").click():"a"===a.key?(a=document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a"),c(a)&&a.focus()):"d"===a.key&&(a=document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a"),c(a)&&a.focus())}))};
})()
