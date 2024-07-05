/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

const checkCurrentTabUrl = (tabId) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab && activeTab.url) {
            const url = new URL(activeTab.url);
            if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
                chrome.tabs.sendMessage(tabId, { response: "enable" });
            }
            else {
                chrome.tabs.sendMessage(tabId, { response: "disabled" });
            }
        }
    });
};
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        checkCurrentTabUrl(tabId);
    }
});
chrome.tabs.onActivated.addListener((activeInfo) => {
    checkCurrentTabUrl(activeInfo.tabId);
});

/******/ })()
;