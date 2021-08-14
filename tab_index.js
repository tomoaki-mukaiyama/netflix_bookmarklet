
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
        newStyle.innerText = 'a.slider-refocus:focus{outline: 3px solid red !important;}';
        document.getElementsByTagName('HEAD').item(0).appendChild(newStyle);
    }
}

// ファミリーアカウントの場合
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
    if (document.querySelector(".mainView").classList.contains(EVENT_LISTENER_ADDED)) {
        return;
    } else {
        document.querySelector(".mainView").classList.add(EVENT_LISTENER_ADDED);
        document.querySelector(".mainView").addEventListener("keydown", function (event) {
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
                if (bottomVisibleNodes.length){
                    bottomVisibleNodes[currentIndex].focus();
                    bottomVisibleNodes[currentIndex].scrollIntoView({
                        behavior: "instant",
                        block: "center"
                    });
                } else {
                    window.scrollBy(0,100);
                };
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

