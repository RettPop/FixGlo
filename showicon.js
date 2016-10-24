
"use strict";

browser.runtime.onMessage.addListener(msg => {
  chrome.pageAction.show(chrome.tabs.getCurrent().id);
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.match(/glo\.globallogic\.com/gi)) {
    chrome.pageAction.show(tab.id);
  }
});
