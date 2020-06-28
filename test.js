function AddToStr(para){
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', para, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    
    var htmlObj;
    var link;


    
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            htmlObj = json;
            var el = document.createElement( 'html' );
            el.innerHTML = htmlObj;
    
            dlist = el.getElementsByClassName( 'download_group' ); 

            // 最后需要的下载连接
            link = dlist[0].children[1].firstElementChild.getAttribute("href");

            // arr.push(link)
            console.log(link);

            var oTest = document.getElementsByClassName("row")[0];
            var newNode = document.createElement("div");
            newNode.innerHTML = link;
            oTest.insertBefore(newNode,null); 
        }
    };
}


var objList = document.getElementsByClassName("table table-striped")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");

var totalDownStr = new String("")
var linkArray = [];
for  (var obj of objList){
    var link = obj.getElementsByClassName("text-white")[0].getAttribute("href");
    AddToStr(link);
}
