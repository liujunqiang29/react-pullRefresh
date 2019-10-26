const type=[
    {
        id:2,
        name:'客厅',
        contentList:[
            {
                id:1,
                name:'沙发',
                icon:require('../../img/6.png')
            },{
                id:4,
                name:'茶几',
                icon:require('../../img/7.png')
            },{
                id:6,
                name:'电视柜',
                icon:require('../../img/8.png')
            },{
                id:9,
                name:'玄关柜',
                icon:require('../../img/9.png')
            },{
                id:11,
                name:'鞋柜',
                icon:require('../../img/10.png')
            },{
                id:13,
                name:'花架',
                icon:require('../../img/15.jpg')
            },{
                id:14,
                name:'装饰柜/酒柜',
                icon:require('../../img/14.jpg')
            },{
                id:15,
                name:'斗柜',
                icon:require('../../img/13.jpg')
            }
        ]
    },
    {
        id:1,
        name:'卧室',
        contentList:[
            {
                id:2,
                name:'床',
                icon:require('../../img/1.png')
            },{
                id:7,
                name:'床头柜',
                icon:require('../../img/2.png')
            },{
                id:5,
                name:'床垫',
                icon:require('../../img/3.png')
            },{
                id:12,
                name:'衣柜',
                icon:require('../../img/4.png')
            },{
                id:10,
                name:'梳妆台',
                icon:require('../../img/5.png')
            },
        ]
    },
    {
        id:3,
        name:'餐厅',
        contentList:[
            {
                id:3,
                name:'餐桌',
                icon:require('../../img/11.png')
            },{
                id:8,
                name:'餐边柜',
                icon:require('../../img/12.png')
            }
        ]
    }

];
type.chuang=2;
type.chuangtougui=7;
type.chuangdian=5;
type.yigui=12;
type.shuzhuangtai=10;
type.shafa=1;
type.chaji=4;
type.dianshigui=6;
type.xuanguangui=9;
type.xiegui=11;
type.canzhuo=3;
type.canbiangui=8;
type.huajia=13;
type.jiugui=14;
type.dougui=15;
export function getClass(id) {
    for(let i=0;i<type.length;i++){
        if(type[i].id==id){
            return type[i];
        }
    }
}
export function getClassName(id) {
    for(let i=0;i<type.length;i++){
       for(let a=0;a<type[i].contentList.length;a++){
           if(type[i].contentList[a].id==id) {
               return type[i].contentList[a].name;
           }
       }
    }
}
export default type;