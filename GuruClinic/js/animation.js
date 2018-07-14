 $(document).ready(function()
       {
         
          $("#id1").mouseenter(function()
          {
          
            var anim=$("#anim1");
            $("#anim1").attr('src','images/readingdog.png');
                               
          }); 
           
            $("#id1").mouseleave(function()
          {
          
             var anim=$("#anim1");
            $("#anim1").attr('src','images/dog.png');
                               
          }); 
           
             
         
         $("#id2").mouseenter(function()
          {
          
            var anim=$("#anim3");
            $("#anim3").attr('src','images/bouncing ball-60.png');
                               
          });
            $("#id2").mouseleave(function()
          {
        
            var anim=$("#anim3");
            $("#anim3").attr('src','images/smBalls11.jpg');
                               
          }); 
//           
//           $("#id2").click(function()
//           {
//               
//            $("#anim4").attr('src','images/bouncing ball1.jpg');
//           }
     //        );
           
     $("#id11").mouseenter(function()
          {
          
            var anim=$("#anim1");
            $("#anim9").attr('src','images/poppedballoon1.jpg');
                               
          }); 
                 
       });
       