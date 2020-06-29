// 批量导入下载任务
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function AddTask(link, token){
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('POST', '/fetch', true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.setRequestHeader("X-CSRF-TOKEN",token);
    httpRequest.send('url='+encodeURIComponent(link)+'&host=auto');//发送请求 将情头体写在send中
}
// 插入一个input，一个按钮
var oTest = document.getElementsByClassName("row")[1];
var textBox = document.createElement("textarea");
textBox.setAttribute("id", "down_list")

var btn = document.createElement("input");
btn.setAttribute("type", "submit");
oTest.insertBefore(textBox,null); 
oTest.insertBefore(btn,null); 

var token = document.getElementsByName("csrf-token")[0].getAttribute("content");

btn.onclick = async function () {
    var addresses = textBox.value.split("\n");
    for (var address of addresses){
        // console.log(address);
        AddTask(address,token);
        await sleep(5500);
    }
};
// 间隔 7s

