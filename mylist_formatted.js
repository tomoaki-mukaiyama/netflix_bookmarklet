document.querySelector('[aria-label="\u30de\u30a4\u30ea\u30b9\u30c8"]').click();
var d=0,e=setInterval(function(){console.log("1");d++;if(document.querySelector(".galleryLockups").querySelectorAll("a").length){var b=document.querySelector(".galleryLockups").querySelectorAll("a");b[0].focus();b=Array.from(b);var c=document.querySelector(".galleryLockups").querySelectorAll(".sliderContent.row-with-x-columns")[0].childElementCount;document.querySelector(".galleryLockups").addEventListener("keydown",function(a){"w"===a.key?(a=b.indexOf(document.activeElement),b[parseInt(a)-parseInt(c)]&&
(b[parseInt(a)-parseInt(c)].focus(),b[parseInt(a)-parseInt(c)].scrollIntoView({behavior:"instant",block:"center"}))):"a"===a.key?(a=b.indexOf(document.activeElement),b[parseInt(a)-1]&&(b[parseInt(a)-1].focus(),b[parseInt(a)-1].scrollIntoView({behavior:"instant",block:"center"}))):"s"===a.key?(a=b.indexOf(document.activeElement),b[parseInt(a)+parseInt(c)]&&(b[parseInt(a)+parseInt(c)].focus(),b[parseInt(a)+parseInt(c)].scrollIntoView({behavior:"instant",block:"center"}))):"d"===a.key&&(a=b.indexOf(document.activeElement),
b[parseInt(a)+1]&&(b[parseInt(a)+1].focus(),b[parseInt(a)+1].scrollIntoView({behavior:"instant",block:"center"})))});clearInterval(e);console.log("2");console.log(d)}else 7===d&&(console.log("3"),clearInterval(e))},300);