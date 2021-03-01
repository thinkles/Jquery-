//内容:大小轮播   这里所有都是以图片方式为整体变化


/*
//大小轮播,版本一: 以图片为整体,使用css函数和transition属性和scale函数进行变换
  $(document).ready(function () {
   var x=$(".contain>li");
    var t;
    var isclick=true;   //解决多次点击事件重复相应
   $(".next").click( function () {
      if(isclick){
         isclick = false;
      var x=$(".contain>li");
      var y= $("li.on");
      y.removeClass("on").css("z-index","1");
      var num=y.index(); //获取被移除on类的元素索引
      if(num==3)   //这里num判断当元素是最后一个那么返回到第一个元素
      {
         num=-1;
      }
      x.eq(num+1).addClass("on").css("z-index","3");

      if(num==2)    //这里是当元素到达最后一个时,要设置第一个的元素的z-index值放置
      {
         x.eq(0).css("z-index","1");
      }
      else{
         x.eq(num+2).css("z-index","1");
      }
      





 
        x.each(function(index) //循环,判断每个left的值,进行图片移动
         {  

            var c=parseInt(x.eq(index).css("left"));
            c-=300;
            if(c<0)
           {
              $(this).css({"left":"900px","z-index":"-1"});
           }
           else{
           $(this).css("left",c);
           }
         })
       
         setTimeout(function(){ 
            isclick = true;
        }, 500);
      }


     
   })

})  */

/*尝试一: 利用节点移动,把变换的元素放在最上面,这种节点移动导致每次都需要重新获取元素节点,而且还会导致
过渡效果失效,   移动节点把情况变得更为复杂,所以放弃*/
/*
解决多次点击,反复触发事件:
1.为了防止连续点击后,样式还没有变化好就进行移动,导致轮播混乱,我们使用isclick变量 和settiomeout延迟更改isclick 防止连续点击
连续点击事件只执行一次, 
2.还可以用Date()获取当前时间 然后使用gettime() 获得点击时间 两次的差少于多少秒不执行事件
*/
//缺点: 复用性特别差,写死了轮播有几个元素了,可以把判断改一下就可以进行复用




//版本二:仅仅改变了延迟判断的方法,和移动利用了动画

$(document).ready(function () {
   var x=$(".contain>li");  
   var lasttime;
   
   $(".next").click( function () {
      var nowtime=new Date();
      var note=0;
      if(lasttime== undefined||Math.floor(nowtime.getTime()-lasttime.getTime())>600)
      {
         lasttime=nowtime;
         note=1;
      }
      else{
         lasttime=nowtime;
      }
   if(note==1){
    var y=$("li.on");
    var nub=y.index();
    x.css("z-index","1");
   y.removeClass("on").css("z-index","2");
    if(nub==3)
    {
        x.eq(0).css("z-index","3").addClass("on");
    }
    else
    {
        y.next().css("z-index","3").addClass("on");
    }
    //以上对index on样式设置好

    x.each(function()
    {
        if($(this).css("left")=="1200px")
        {
            $(this).animate({"left":"-=600",},500);
        }
       else{
        $(this).animate({"left":"-=300",},500,function()
         {
             if(parseInt($(this).css("left"))<0)
             {
                 $(this).css("left","1200px");
             }
         })

        }
    }     )


   }
})
}) 



/* 
on的样式,和z-index还是通过普通判断才能实现
因为图片变大还有z-index只能在滚动之前都已经开始运行 ,考虑过动画排队实现,但是z-index变化需要两个不同值 2和3 
使用动画排队只能统一改变值
*/








//版本1: 内容柔性盒子布局