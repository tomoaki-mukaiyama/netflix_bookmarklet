
addCssOnce();
//フォーカス時のCSS追加
function addCssOnce() {
    const CLASS_ALREADY_ADDED = "class-already-added";
    var checkStyle = document.querySelector(".js-focus-visible");
    if (checkStyle.classList.contains(CLASS_ALREADY_ADDED)) {
        return;
    } else {
        checkStyle.classList.add(CLASS_ALREADY_ADDED);
        var newStyle = document.createElement('style');
        newStyle.type = 'text/css';
        newStyle.innerText = 'a:focus{ border-style: solid; border-width: 10px; border-color: red; }';
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
        addKeyEvent();
        var billboard = document.querySelector(".volatile-billboard-animations-container");
        if (billboard) {
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
function addKeyEvent() {
    //イベントリスナーを複数設定させない実装
    if (document.querySelector(".lolomo.is-fullbleed").classList.contains(EVENT_LISTENER_ADDED)) {
        return;
    } else {
        document.querySelector(".lolomo.is-fullbleed").classList.add(EVENT_LISTENER_ADDED);
        document.querySelector(".lolomo.is-fullbleed").addEventListener("keydown", function (event) {
            if (event.key === "w") {
                //フォーカス中コンテンツの位置を取得（配列のインデックス）
                var nodes = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .querySelectorAll(".slider-refocus");
                nodes = Array.from(nodes);
                var visibleNodes = nodes.filter(node => {
                    return isVisible(node);
                })
                var currentIndex = visibleNodes.indexOf(document.activeElement);
                //上で取得したインデックスcurrentIndexで次の行でも同じインデックスのやつをフォーカスする
                var nodes = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .previousElementSibling
                    .querySelectorAll(".slider-refocus");
                nodes = Array.from(nodes);
                upperVisibleNodes = nodes.filter(node => {
                    return isVisible(node);
                });
                upperVisibleNodes[currentIndex].focus();
                upperVisibleNodes[currentIndex].scrollIntoView({
                    behavior: "instant",
                    block: "center"
                });
            } else if (event.key === "s") {
                //フォーカス中コンテンツの位置を取得（配列のインデックス）
                var nodes = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .querySelectorAll(".slider-refocus");
                nodes = Array.from(nodes);
                var visibleNodes = nodes.filter(node => {
                    return isVisible(node);
                })
                var currentIndex = visibleNodes.indexOf(document.activeElement);
                //上で取得したインデックスcurrentIndexで次の行でも同じインデックスのやつをフォーカスする
                var nodes = document.activeElement
                    .closest(".lolomoRow.lolomoRow_title_card.ltr-0")
                    .nextElementSibling
                    .querySelectorAll(".slider-refocus");
                nodes = Array.from(nodes);
                bottomVisibleNodes = nodes.filter(node => {
                    return isVisible(node);
                });
                bottomVisibleNodes[currentIndex].focus();
                bottomVisibleNodes[currentIndex].scrollIntoView({
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


    //画面に表示されてるかを判断する
    function isVisible(elem) {
        const elemCenter = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };
        if (elemCenter.x > 0) {
            if (elemCenter.x < (document.documentElement.clientWidth || window.innerWidth)) return true;
        };
    }
}

//フォーマットしたやつ
javascript: (() => {
var e=document.querySelector(".js-focus-visible");if(!e.classList.contains("class-already-added")){e.classList.add("class-already-added");var f=document.createElement("style");f.type="text/css";f.innerText="a:focus{ border-style: solid; border-width: 10px; border-color: red; }";document.getElementsByTagName("HEAD").item(0).appendChild(f)}document.querySelectorAll(".choose-profile").length&&document.querySelectorAll(".profile")[2].querySelector("a").click();
var g=setInterval(function(){if(document.querySelector(".lolomoRow.lolomoRow_title_card.ltr-0")){clearInterval(g);h();var b=document.querySelector(".volatile-billboard-animations-container");b&&b.remove();b=document.querySelector(".slider-refocus");b.focus();b.scrollIntoView({behavior:"smooth",block:"center"})}},500);
function h(){function b(a){var c=a.getBoundingClientRect().left+a.offsetWidth/2;a.getBoundingClientRect();if(0<c&&c<(document.documentElement.clientWidth||window.innerWidth))return!0}document.querySelector(".lolomo.is-fullbleed").classList.contains("event_listener_added")||(document.querySelector(".lolomo.is-fullbleed").classList.add("event_listener_added"),document.querySelector(".lolomo.is-fullbleed").addEventListener("keydown",function(a){if("w"===a.key){a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelectorAll(".slider-refocus");
a=Array.from(a);a=a.filter(function(d){return b(d)});var c=a.indexOf(document.activeElement);a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").previousElementSibling.querySelectorAll(".slider-refocus");a=Array.from(a);upperVisibleNodes=a.filter(function(d){return b(d)});upperVisibleNodes[c].focus();upperVisibleNodes[c].scrollIntoView({behavior:"instant",block:"center"})}else"s"===a.key?(a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelectorAll(".slider-refocus"),
a=Array.from(a),a=a.filter(function(d){return b(d)}),c=a.indexOf(document.activeElement),a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").nextElementSibling.querySelectorAll(".slider-refocus"),a=Array.from(a),bottomVisibleNodes=a.filter(function(d){return b(d)}),bottomVisibleNodes[c].focus(),bottomVisibleNodes[c].scrollIntoView({behavior:"instant",block:"center"})):"q"===a.key?document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelector(".slider").querySelector("span.handle.handlePrev").click():
"e"===a.key?document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelector(".slider").querySelector("span.handle.handleNext").click():"a"===a.key?(a=document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a"),b(a)&&a.focus()):"d"===a.key&&(a=document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a"),b(a)&&a.focus())}))};
})()