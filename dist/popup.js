/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 534:
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("pipButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.id && tab.url && tab.url.includes("youtube.com/watch")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: enablePiP,
        });
    }
    else {
        alert("This extension only works on YouTube video pages.");
    }
}));
function enablePiP() {
    const video = document.querySelector("video");
    if (video) {
        video.requestPictureInPicture();
    }
    else {
        alert("No video element found.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        if (activeTab && activeTab.url) {
            const url = new URL(activeTab.url);
            const pipButton = document.getElementById("pipButton");
            if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
                pipButton.disabled = false;
                pipButton.classList.add("active");
                pipButton.classList.remove("disabled");
                pipButton.style.cursor = "pointer";
            }
            else {
                pipButton.disabled = true;
                pipButton.classList.remove("active");
                pipButton.classList.add("disabled");
                pipButton.style.cursor = "not-allowed";
            }
        }
    });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[534]();
/******/ 	
/******/ })()
;