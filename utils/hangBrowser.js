const hangBrowser = () => {
  let val = "";
  console.log("HangBrowser Running");
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 10000; j++) {
      val = "Worker returned: " + i + j;
    }
  }
};

export default hangBrowser;
