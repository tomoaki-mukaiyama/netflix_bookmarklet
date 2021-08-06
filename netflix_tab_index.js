
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
    var d=document.querySelector(".js-focus-visible");if(!d.classList.contains("class-already-added")){d.classList.add("class-already-added");var e=document.createElement("style");e.type="text/css";e.innerText="a:focus{ border-style: solid; border-width: 10px; border-color: red; }";document.getElementsByTagName("HEAD").item(0).appendChild(e)}document.querySelectorAll(".choose-profile").length&&document.querySelectorAll(".profile")[2].querySelector("a").click();
    var f=setInterval(function(){if(document.querySelector(".lolomoRow.lolomoRow_title_card.ltr-0")){clearInterval(f);var b=document.querySelector(".volatile-billboard-animations-container");b&&b.remove();b=document.querySelector(".slider-refocus");b.focus();b.scrollIntoView({behavior:"smooth",block:"center"})}},500);g();
    function g(){function b(a){var c=a.getBoundingClientRect().left+a.offsetWidth/2;a.getBoundingClientRect();if(0<c&&c<(document.documentElement.clientWidth||window.innerWidth))return!0}document.querySelector(".lolomo.is-fullbleed").classList.contains("event_listener_added")||(document.querySelector(".lolomo.is-fullbleed").classList.add("event_listener_added"),document.querySelector(".lolomo.is-fullbleed").addEventListener("keydown",function(a){"w"===a.key?(a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").previousElementSibling.querySelectorAll(".slider-refocus"),
    a=Array.from(a),firstVisibleNode=a.find(function(c){return b(c)}),firstVisibleNode.focus(),firstVisibleNode.scrollIntoView({behavior:"instant",block:"center"})):"s"===a.key?(a=document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").nextElementSibling.querySelectorAll(".slider-refocus"),a=Array.from(a),firstVisibleNode=a.find(function(c){return b(c)}),firstVisibleNode.focus(),firstVisibleNode.scrollIntoView({behavior:"instant",block:"center"})):"q"===a.key?document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelector(".slider").querySelector("span.handle.handlePrev").click():
    "e"===a.key?document.activeElement.closest(".lolomoRow.lolomoRow_title_card.ltr-0").querySelector(".slider").querySelector("span.handle.handleNext").click():"a"===a.key?(a=document.activeElement.closest(".slider-item").previousElementSibling.querySelector("a"),b(a)&&a.focus()):"d"===a.key&&(a=document.activeElement.closest(".slider-item").nextElementSibling.querySelector("a"),b(a)&&a.focus())}))};
})()