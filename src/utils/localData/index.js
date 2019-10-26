import taizi from './taizi';
import ajia from './ajia';
const arr=[taizi,ajia];
export function getItem(id) {
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        for(let a=0;a<arr[i].contentList.length;a++){
            for(let b=0;b<arr[i].contentList[a].contentList.length;b++){
                if(arr[i].contentList[a].contentList[b].id==id){
                    return arr[i].contentList[a].contentList[b]
                }
            }
        }
    }
}
export function getBrand(id) {
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id){
            return arr[i]
        }
    }
}
export function getBrandStyle(id) {
    for(let i=0;i<arr.length;i++){
        for(let a=0;a<arr[i].contentList.length;a++){
           if(arr[i].contentList[a].id==id){
               return arr[i].contentList[a]
           }
        }
    }
}
export function getItemClass(id) {
    let arrList=[];
    for(let i=0;i<arr.length;i++){
        for(let a=0;a<arr[i].contentList.length;a++){
            for(let b=0;b<arr[i].contentList[a].contentList.length;b++){
                if(arr[i].contentList[a].contentList[b].type==id){
                    arrList.push(arr[i].contentList[a].contentList[b]);
                }
            }
        }
    }
    return arrList;
}
export default arr;