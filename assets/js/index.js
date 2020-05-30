stage = document.getElementById('stage');
var gamelayer = document.getElementById('game-layer'); 
var uilayer = document.getElementById('ui-layer'); 
if (gamelayer.getContext)
{   
  var gamelayercontext = gamelayer.getContext('2d');
  gamelayercontext.fillStyle='rgb(0,0,255)';
  gamelayercontext.fillRect(30,30,40,40);
  var uilayercontext = uilayer.getContext('2d');
  uilayercontext.fillStyle='rgb(0,200,255)';
}
else 
{   
// canvas-unsupported code here
}

(function($){
  ui = {
    X : 40,
    Y : 40,
    Width : 50,
    Height : 50
  }
  objs = [];
  stage.addEventListener('click',function(event){
    console.log("Eventclick",event);
   // clickObject();
  })
  stage.addEventListener('mousemove',function(event){
    console.log('Mousemoveevent',event);
    moveui({context:uilayercontext,w:event.clientX,x:event.clientY,y:event.layerX,z:event.layerZ});
  })
  gamelayer.addEventListener('click',function(event){
    console.log('Canavs',event.screenX,event.screenY);
  },false);
  moveui = function(obj){
    obj.context.fillRect(obj.w,obj.x,obj.y,obj.z);  
  }
  clearContext({context:uilayercontext});
  moveui({context: uilayercontext,w:ui.X,x:ui.Y,y:ui.Width,z:ui.Height});      
  $("#createnew").click(function(){
    createObj({color:'"200","200","200"',x:20,y:20,width:20,height:20,shape:'rectangle'});
  })
  $("#removenew").click(function(){
    removeObj();
  });
  $("#mover").click(function(){
    clearContext({context:uilayercontext});
    ui.X+=10;ui.Y+=10;ui.Width+=10;ui.Height+=10;
    moveui({context: uilayercontext, w:ui.X,x:ui.Y,y:ui.Width,z:ui.Height});
  });
  $("#green").click(function(){
    clearContext({context:gamelayercontext});
    ui.X+=10;ui.Y+=10;ui.Width+=10;ui.Height+=10;
    moveui({context: gamelayercontext, w:ui.X,x:ui.Y,y:ui.Width,z:ui.Height});
  });
  $("#rectangle").click(function(){
    createObj({color:'"200","200","200"',x:80,y:80,width:30,height:30,shape:'rectangle'});
  });
  $("#circle").click(function(){
      createObj({color:'"200","200","200"',x:20,y:20,width:20,height:20,shape:'circle'});
  });
  $('#example-color').colpick({
    onSubmit:function(hsb,hex,rgb,el,bySetColor) {
        $(el).val('#'+hex);
        $(el).colpickHide();
    }
});

}(jQuery))
