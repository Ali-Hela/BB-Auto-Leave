// ==UserScript==
// @name         BB auto leave
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eu.bbcollab.com/collab/ui/session/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bbcollab.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onload = setTimeout(function () {
    let leaveTime;
    let timeStr;
    let hour = 0;
    let minute = 0;
    let now = new Date();

    let myDiv = document.getElementsByClassName("scroll-content")[0];
    let button = document.createElement("BUTTON");
    button.innerHTML = "Set Timer";
    myDiv.appendChild(button);

    //Styling
    button.style.border = "solid";
    button.style.borderColor = "RGB(112,37,126)";
    button.style.backgroundColor = "RGB(12,12,13)";
    button.style.padding = "5px";
    button.style.borderRadius = "5";
    button.style.marginTop = "15px"


    button.onclick = function () {
        leaveTime = prompt("Leave class at:\n(Example: 2:15)")
        refactor();
        start();
    }

    // Refactor input regarding if with or without minutes
    function refactor() {
        if (leaveTime.includes(":")) {
            timeStr = leaveTime.split(":");
            hour = parseInt(timeStr[0]);
            minute = parseInt(timeStr[1]);
        }
        else {
            hour = parseInt(leaveTime);
        }
    }

    // 12 hours to 24 hours then start timer
    function start() {
        button.innerHTML = "Leaving at: " + hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0");
        if (now.getHours() >= 12) {
            hour += 12;
        }

        var msTillTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0) - now;
        if (msTillTime < 0) {
            msTillTime += 86400000;
        }
        setTimeout(() => { window.close() }, msTillTime)
    }
}, 7000);

})();
