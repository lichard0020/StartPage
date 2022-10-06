var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", 'https://api.no0a.cn/api/bing/day', true);
httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readySte == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            var pic = eval("(" + json + ")");
            console.log(pic);
            document.body.style.backgroundImage = "url(" + "https://api.mfstudio.cc/bing/" + ")";
            docdument.querySelector(".downloadImage").href = "https://api.mfstudio.cc/bing/"
        }
    }
