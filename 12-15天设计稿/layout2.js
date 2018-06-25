$("#bar2").delegate('h2 a', 'mouseenter', function(ev) {
    $(this).css('color', 'rgb(255,255,255)');
    console.log(this);
});
$("#bar2").delegate('h2 a', 'mouseleave', function(ev) {
    $(this).css('color', 'rgb(183,192,205)');
});
$("#maincontent").delegate('#left .border', 'mouseenter', function(ev) {
    $(this).css('background-color', 'rgb(227,227,227)');
    $(this).css('opacity', '0.8');
});

$("#maincontent").delegate('#left .border', 'mouseleave', function(ev) {
    $(this).css("background-color", 'white');
    $(this).css('opacity', '1')
});
//    check函数用来在form表单onsubmit中判断账号密码及格式
function check(form) {
        console.log("账号为：" + $("#input1").val() + ",密码为:" + $("#input2").toString());
        if ($("#input1").val() == "JKX" && $("#input2").val() == "jiangkx97") {
            return true;
        } else if ($("#input1").val() == "" || $("#input2").val() == "") {
            alert("账号或密码不能为空！");
            return false;
        } else if (/^[A-Za-z]{7,9}\d{2,5}$/.test($("#input2").val()) == false) {
            alert("密码设置最少为7位大小写字母加2位数字！")
            return false;
        } else {
            alert("输入账号或密码错误！");
            return false;

        }

}

function router() {
    window.location.href = 'personal.html';
}

var inputarea=$("#inputarea");

function change(ev){
    var file=$(":file")[0].files[0];/*jquery里的文件选择器“:file”，得到的是所有对象，类似于Nodelist,所以要加[0]，后面的[0]是第一个图片*/
    console.log(file);
    var filetype=file.type;
    console.log(filetype);
    var reader=new FileReader();
    reader.readAsDataURL(file);/*没有这句话就读取不到图片了*/
    reader.onload=function(){
        console.log("进入函数成功");
        if(/^image/.test(filetype))
        {
        inputarea.empty()   /*jquery的Innerhtml不能直接赋空格清空，必须采用empty函数清空，不然会造成内存泄漏*/;
        var img=document.createElement("img");
        img.setAttribute("src",reader.result);
        img.setAttribute("id","user");
         $(img).appendTo("#inputarea");
    }
    else{
            alert("请选择图片传入！");
        }
};


}
