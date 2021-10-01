// ==UserScript==
// @name         Toggle YouTube End Cards
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggle YouTube end cards to show and hide
// @author       EstablishedRebel
// @match        https://www.youtube.com/*
// @icon         https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png
// @grant        none
// ==/UserScript==

setTimeout(function(){
    document.getElementById("info-contents").
    insertAdjacentHTML("afterend","<tp-yt-paper-button class='style-scope ytd-subscribe-button-renderer' style='width: max-content;display: flow-root;float: right;top: 23px;background:#001150;' id='remove-end-cards'>Toggle Cards</tp-yt-paper-button>");

    var reaction = 1;
    var elements = document.getElementsByClassName("ytp-ce-element");
    document.getElementById("remove-end-cards").addEventListener("click", function() {
        if(reaction == 1){
            for (var a = 0; a < elements.length; a++){
                elements[a].style.display = 'none';
            }
            reaction = 2;
        }else{
            for (var b = 0; b < elements.length; b++){
                elements[b].style.display = '';
            }
            reaction = 1;
        }
    });
}, 2000);
