browser.contextMenus.create({
  id: "balance-right",
  title: "Audio balance right",
  contexts: ["tab"]
}, {
  id: "balance-left",
  title: "Audio balance left",
  contexts: ["tab"]
}, onCreated);
