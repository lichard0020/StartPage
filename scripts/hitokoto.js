var httpRequest01 = new XMLHttpRequest();
httpRequest01.open("GET","https://v1.hitokoto.cn",true);
httpRequest01.send();
    httpRequest01.onreadystatechange = function(){
        if(httpRequest01.readyState == 4 && httpRequest01.status == 200){
            var text = httpRequest01.responseText;
            var hitokoto = eval("("+text+")");
            console.log(hitokoto);
            var fw = " --- "+hitokoto.from_who;
            if (fw == null){
                fw = '佚名';
            }
            var hitokotoText = "『"+hitokoto.hitokoto+"』"+fw;
            document.querySelector("#hitokoto").innerHTML = hitokotoText;
        }
    }
