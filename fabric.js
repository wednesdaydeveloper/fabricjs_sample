window.onload = function()
{
    var canvas = new fabric.Canvas('c');
    fabric.Image.fromURL('./googlelogo_color_272x92dp.png', function(img) {
      img.set({left: 20, top: 20, selectable : false});
      canvas.add(img);
    });
    fabric.Image.fromURL('./googlelogo_color_272x92dp.png', function(img) {
      img.set({left: 40, top: 40, selectable : false});
      canvas.add(img);
    });

    // create a rectangle object
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    
    // "add" rectangle onto canvas
    canvas.add(rect);

    //  移動
    var panning = false;
    canvas.on('mouse:up', function (e) {
        panning = false;
    });
    canvas.on('mouse:out', function (e) {
        panning = false;
    });
    canvas.on('mouse:down', function (e) {
        panning = true;
    });
    canvas.on('mouse:move', function(e) {
    	//allowing pan only if the image is zoomed.
    	if (panning && e && e.e) {
    		var delta = new fabric.Point(e.e.movementX, e.e.movementY);
    		canvas.relativePan(delta);
    	}
    });    
    
    $(canvas.wrapperEl).on('mousewheel', function(e) {
    var target = canvas.findTarget(e);
    var delta = e.originalEvent.wheelDelta / 120;
    
    if (target) {
        target.scaleX += delta;
        target.scaleY += delta;
        
        // constrain
        if (target.scaleX < 0.1) {
            target.scaleX = 0.1;
            target.scaleY = 0.1;
        }
        // constrain
        if (target.scaleX > 10) {
            target.scaleX = 10;
            target.scaleY = 10;
        }
        target.setCoords();
        canvas.renderAll();
        return false;
    }
});
};
