/*
* DOM部分用来操纵表格，按钮*/
var th=document.getElementsByTagName("th");
var tr=document.getElementsByTagName("tr");
var td=document.getElementsByTagName("td");
var bf=document.getElementById("before");
var at=document.getElementById("after");
/*
   * 创建针对当前日期的时间对象，用来对定位当前日期在日历上的位置*/
var now=new Date();
var date=now.getDate();



function showdate() {



    /*
    * 创建针对本月第一天的实践对象
    * */
    var firstdate=new Date(now.getFullYear(),now.getMonth(),1); /*设置了一个日期对象，但是日期取决于外部创建的全局date对象*/
    var firstday=firstdate.getDay();
    var mon=firstdate.getMonth();
    var year=firstdate.getFullYear();
    var head=document.getElementsByTagName("h2")[0];

 head.innerHTML=mon+1+"/"+year.toString();

   var i=0; /*后面多出要用的的参数，先初始化*/

 for( i=0;i<th.length;i++)     //渲染本月第一天在日历上
 {
   if(th[i].getAttribute("id")===firstday.toString())
   {
     tr[1].getElementsByTagName("td")[i].innerHTML=firstdate.getDate().toString();
     break;
   }
 }
   var daynum=count(mon,year);  //调用下面创建的count函数
    /*console.log(daynum);*/
    var nowdate=new Date();

 for(var j=1;j<=daynum;j++)
 {      console.log(nowdate)
        console.log()
     td[i].innerHTML=j.toString();
     if(nowdate.getMonth()===mon&&now.getDate()===date&&td[i].innerHTML===date.toString())
     {
         td[i].style.color="red";
         console.log(td[i].innerHTML);
     }
         i++;


 }

    /*console.log(typeof year);*/
    function count(mon,year){
        mon+=1;
        var id=0;
        if(year%100==0) /*能被100整除说明是世纪年若要判断是否为闰年则要判断能否被400整除*/
        {
            if(year%400==0)
            {
                id=1;
            }
            else{

            }
        }
        else if(year%4==0){
            id=1;
        }
        else{
            id=0;
        }

        if(id==1)
        {
            console.log("是闰年");
            if(mon==2)
            {
                return 29;
            }
            else if(mon===1||mon===3||mon===5||mon===7||mon===8||mon===10||mon===12)
            {
                return 31;
            }
            else
            {
                return 30;
            }
        }
        else
        {     console.log("不是闰年");
        console.log(mon);
            if(mon===2)
            {
                return 28;
            }
            else if(mon===1||mon===3||mon===5||mon===7||mon===8||mon===10||mon===12)
            {
                return 31;
            }
            else
            {
                return 30;
            }
        }
    }
    /*console.log(count()); */ //判断闰年，再判断是否为2月或者135781012月

}

showdate();
/*
* 上个月按钮的dom0时间绑定*/
 bf.onclick=function (event) {
     now.setMonth(now.getMonth()-1);
     for(var i=0;i<td.length;i++)
     {
     td[i].innerHTML=" ";
     }
     showdate();
 };

at.onclick=function (event) {
    now.setMonth(now.getMonth()+1);
    for(var i=0;i<td.length;i++)
    {
        td[i].innerHTML=" ";
    }
    showdate();
};


