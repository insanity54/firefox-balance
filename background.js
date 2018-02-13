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
      var audioCtx = new (AudioContext || webkitAudioContext)();
      var oscillator = audioCtx.createOscillator();
      var panner = audioCtx.createStereoPanner();

      oscillator.type = 'square';
      oscillator.frequency.value = 440; // value in hertz
      oscillator.connect(panner);
      panner.connect(audioCtx.destination);
      oscillator.start();

      document.querySelector("input").oninput = function() {
        panner.pan.value = +this.value; 
      };

      setInterval(function() {
        oscillator.frequency.value = Math.round(Math.random() * 10) * 400 + 200;
      }, 100);
      
      break;
    case "balance-left":
      console.log("tab audio balance set to LEFT");
      break;      
  }
})
