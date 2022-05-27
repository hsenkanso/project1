let icon=document.getElementById("list-select");
let list=document.getElementById("list-content");

icon.addEventListener("click",function(){
    list.style.cssText="display: flex;flex-direction: column;position: absolute;right: 0;top: 50px;text-align: center;background-color: #0000008a;z-index: 2;"
})