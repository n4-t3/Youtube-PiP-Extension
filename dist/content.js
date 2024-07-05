/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

const rightControls = document.querySelector(".ytp-right-controls");
const svg = document.createElement("img");
svg.src = chrome.runtime.getURL("images/PiP.svg");
svg.alt = "picture in picture";
svg.style.width = "100%";
svg.style.height = "100%";
svg.style.padding = "8px";
const PiPButton = document.createElement("button");
PiPButton.title = "Picture in Picture";
PiPButton.classList.add("ytp-button");
PiPButton.appendChild(svg);
PiPButton.onclick = () => {
    const video = document.querySelector("video");
    if (video) {
        video.requestPictureInPicture();
    }
    else {
        alert("No video element found.");
    }
};
rightControls === null || rightControls === void 0 ? void 0 : rightControls.appendChild(PiPButton);

/******/ })()
;