browser.contextMenus.create({
  id: "balance-right",
  title: "Audio balance right",
  contexts: ["tab"]
}, {
  id: "balance-left",
  title: "Audio balance left",
  contexts: ["tab"]
}, onCreated);


browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "balance-right":
      console.log("tab audio balance set to RIGHT");
      break;
    case "balance-left":
      console.log("tab audio balance set to LEFT");
      break;      
  }
})
