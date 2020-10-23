function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function step1() {
  getElementByXpath('/html/body/div[1]/div/div[1]/div[1]/div[3]/div/div/div[1]/div[1]/div/div/div[4]/div/div/div/div[2]/div/div/div[1]/a/div[2]/div/div').click()
}

function step2() {
  getElementByXpath('/html/body/div[1]/div/div[1]/div[1]/div[3]/div/div/div[2]/div/div/div[1]/div[1]/div/div/div[1]/div/div[1]/div/div[3]/div[2]/div/div/span').click()
}

function step3() {
  getElementByXpath('/html/body/div[1]/div/div[1]/div[1]/div[4]/div/div/div[1]/div/div[2]/div/div/div/div[4]/div/div[1]/div[1]/div[1]/div/span').click()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function deleteImage() {
  step1();
  sleep(2000).then(()=>{ 
    step2();
    sleep(2000).then(()=> { 
      step3();
      sleep(4000) 
    })
  })
}

function deleteAlbum() {
  deleteImage();
  sleep(2000).then(() => deleteAlbum())
}

deleteAlbum()
