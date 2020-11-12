const { chromium, firefox } = require("playwright");


(async ()=>{const browser = await chromium.launch({headless: false, slowMo: 100})
const context = await browser.newContext();
const page = await context.newPage();

 await page.goto("https://www.youtube.com/channel/UC39S5x52rHg98NM8J884jxw/videos");
 let video_titles = await page.$$("#video-title");

 for(let i =0; i<video_titles.length; i++){
    console.log(await video_titles[i].innerText());
    await video_titles[i].click();
    await page.waitForSelector("yt-formatted-string");
    await page.waitForTimeout(400000);
    await page.goBack();

 }
// browser.close();
return 0;


})();
