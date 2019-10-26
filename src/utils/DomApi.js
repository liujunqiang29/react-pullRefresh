export function offsetTop(element) {
   let top=element.offsetTop;
   while(element.offsetParent){
       top+=element.offsetParent.offsetTop;
       element=element.offsetParent
   }
   return top;
}

export function browerTop(element) {
    return offsetTop(element)-getScrollTop()
}

export function ScrollTop(top){

    if(typeof top==='number'){
        document.documentElement.scrollTop=top;
        document.body.scrollTop=top;
    }else{
        var scrollTop=0;
        if(document.documentElement&&document.documentElement.scrollTop)
        {
            scrollTop=document.documentElement.scrollTop;
        }
        else if(document.body)
        {
            scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    }

}