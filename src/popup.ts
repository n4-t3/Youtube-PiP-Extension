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

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const pipButton = document.getElementById("pipButton") as HTMLButtonElement;
  if (message === "enable") {
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
});
