document.getElementById("pipButton")?.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id && tab.url && tab.url.includes("youtube.com/watch")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: enablePiP,
    });
  } else {
    alert("This extension only works on YouTube video pages.");
  }
});

function enablePiP() {
  const video = document.querySelector("video");
  if (video) {
    video.requestPictureInPicture();
  } else {
    alert("No video element found.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab = tabs[0];
    if (activeTab && activeTab.url) {
      const url = new URL(activeTab.url);
      const pipButton = document.getElementById(
        "pipButton"
      ) as HTMLButtonElement;
      if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
        pipButton.disabled = false;
        pipButton.classList.add("active");
        pipButton.classList.remove("disabled");
        pipButton.style.cursor = "pointer";
      } else {
        pipButton.disabled = true;
        pipButton.classList.remove("active");
        pipButton.classList.add("disabled");
        pipButton.style.cursor = "not-allowed";
      }
    }
  });
});
