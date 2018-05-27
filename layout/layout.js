var tabs=document.querySelectorAll("#nav ul li");
console.log(tabs[0],tabs[1],tabs[2]);
for(var i=0;i<tabs.length;i++)
{
    var tab=tabs[i];
    setTabhandler(tab,i);
}

function setTabhandler(tab,i){
    tab.onclick=function (event) {
        for(i=0;i<tabs.length;i++)
        {
            if(tabs[i].getAttribute("class"))
            {
                tabs[i].removeAttribute("class");
            }
        }
        tab.setAttribute("class","active");
    }
}
