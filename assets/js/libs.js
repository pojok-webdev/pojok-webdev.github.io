(function($){
    createObj = function(obj){
        var x = document.createElement('canvas');
        y = x.getContext('2d');
        y.fillStyle = $('#example-color').val();
        switch(obj.shape){
            case 'rectangle':
                y.fillRect(obj.x,obj.y,obj.width,obj.height);
            break;
            case 'circle':
                y.arc(obj.x, obj.y, obj.width, 0, 2 * Math.PI, false);
                y.fill();
            break;
        }
        x.addEventListener('click',function(event){
          console.log('Canavzs',event.screenX,event.screenY);
        },false);
        stage.appendChild(x);
        objs.push(1);
      }
      removeObj = function(){
        console.log("delete invoked");
        if(stage.children.length>0){
          stage.removeChild(stage.children[0]);
        }
      }
      clickObject = function(){
        arr = Array.from(stage.children);
        arr.forEach(function(item,index){
          console.log('Item',item);
        });
      }
      clearContext = function(obj){
        obj.context.clearRect(0, 0, 480, 320);
      }
    
}(jQuery));