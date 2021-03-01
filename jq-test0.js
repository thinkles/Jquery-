//普通样式变换-----实践

$(document).ready(function () {
    var x=$(".menu ul li");
    var y=$(".menu");
    var po=y.css("width");

    y.mouseout(function () { 
      y.css("width",po);   
    }).mouseover(function(){
        y.css("width","260px");
    });
});
//版本一 : 使用css变换 和使用 完成效果


//版本二 使用动画进行完成效果,不在利用transition

 /* $(document).ready(function () {
    var y=$(".menu");
    var po=y.css("width");
    y.on("mouseover","ul",function () {
        console.log(event.target);
       y.stop().animate({"width":"260px"},"fast");
    
    }); 
      y.on("mouseout","ul",function(){  //内置的事件委托 event.target是ul 或者是ul的子孙元素就触发
          console.log("out");
        console.log(event.target);
        y.stop().animate({"width":po},"fast");
     });
   
});
 */

// jquery内置的样式变化-----实践


/* $(document).ready(function () {
  var x=$(".main").children("h3");
  var y=$(".main>section");
  x.each(function(index) { 
     $(this).click(function()
     { 
       if(this.className=="on")
       {
       $(this).toggleClass("on");  //检测是否点击过 on类名添加
        y.eq(index).slideUp();
       // y.eq(index).fadeOut();
        //y.eq(index).hide("slow");
        //y.eq(index).slideToggle();
       }
       else{
        $(this).toggleClass("on");
        y.eq(index).slideDown();
       //y.eq(index).fadeIn();
      // y.eq(index).show("slow");
      // y.eq(index).slideToggle();
       }
     })
   
  });
  
  }); 
 //利用样式变化函数,把display none的元素动态显示 
  */


/* 
$(document).ready(function () {
  var x=$(".main").children("h3");
  var y=$(".main>section");
  x.each(function(index) { 
    $(this).mouseover(function()
    {  y.eq(index).stop().slideDown("slow");})
    .mouseout(function(){ y.eq(index).stop().slideUp("slow");})
  });}); 
  //解决内置样式函数由于频繁切换时积累动画,持续运行的解决方法    
  //版本1:使用 each的回调函数传递索引  使用内置样式函数变化
*/

/*
 $(document).ready(function () {
    var x=$(".main").children("h3");
    var y=$(".main>section");
   for(var i=0;i<x.length;i++)
   {
      x.eq(i).on("click",{value:i},function(event){
              var j=event.data.value;
              y.eq(j).stop().animate({"height":"toggle",},"slow");
       

      })
   }
}) 
//版本二:使用on函数的参数,传递索引,  使用动画方法进行样式变化
//原生js还可以使用,创建一个属性值进行存储索引,需要时在调用
*/


//jquery对节点进行操作---实践

/* 
$(document).ready(function () {
  var x=$(".main").children("h3");
  var y=$(".main>section");
  var c= $("<section>上之回，大旗喜。<br/>悬红云，挞凤尾。<br/>剑匣破，舞蛟龙。<br/>蚩尤死，鼓逢逢。<br/>天高庆雷齐坠地。地无惊烟海千里。<br/>——唐代·李贺《上之回》</section>");
  x.each(function(index) { 
    $(this).click(function()
      {$(this).toggleClass("on");
      if($(this).attr("class")!="on")
      {
        $("h3+section").detach();
      }
      else{
        c.insertAfter(x.eq(index)).slideDown("slow");
        
      }
      });
         
});
}) 
//版本1:使用创捷节点的方式来插入内容,利用删除节点进行来回切换的功能

*/