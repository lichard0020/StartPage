var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", 'https://api.dujin.org/bing/1920.php', true);
httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readySte == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            var pic = eval("(" + json + ")");
            console.log(pic);
            document.body.style.backgroundImage = "url(" + pic.bing.url + ")";
            docdument.querySelector(".downloadImage").href = pic.bing.url
            document.querySelector(".downloadImage").innerHTML = pic.bing.copyright;
        }
    }