window.onload = function()
{
    var canvas = new fabric.Canvas('c');
    fabric.Image.fromURL('./googlelogo_color_272x92dp.png', function(img) {
      img.set({left: 20, top: 20});
      canvas.add(img);
    });
    fabric.Image.fromURL('./googlelogo_color_272x92dp.png', function(img) {
      img.set({left: 40, top: 40});
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
    
    
};
