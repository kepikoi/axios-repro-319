const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
global.XMLHttpRequest = XMLHttpRequest; // some packages do this

const axios = require("axios");

(async () => {
    const res = await axios.get("https://www.reddit.com/r/best.json", {
        headers: {
            "Cookie": "mycookie"
        }
    });

    console.log(res.config.adapter);

    /*
     "C:\Program Files\nodejs\node.exe" C:\www\.testing\axios#319\index.js
     Refused to set unsafe header "Cookie"
     [Function: xhrAdapter]

     Process finished with exit code 0
     */
})();
