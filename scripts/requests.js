var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', true);
httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readySte == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            var pic = eval("(" + json + ")");
            console.log(pic);
            document.body.style.backgroundImage = "url(" + "https://cn.bing.com" + pic.url + ")";
            docdument.querySelector(".downloadImage").href = "https://cn.bing.com"+pic.url;
        }
    }
