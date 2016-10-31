window.onload = function()
{
        var imageAnimation = new function(){
        // 複数画像対応.
    	var instances = {};
        this.init = function(id,baseId){ instances[id] = new ImageAnimation(baseId); };    
    
        function ImageAnimation(id){
            var drag,dgrop;
            
            //ドラッグ時のイベントをセット
            drag = d3.behavior.drag()
            .on("drag", function(d,i) {
                d.x += d3.event.dx;
                d.y += d3.event.dy;
                d3.select(this).attr("transform", function(d,i){
                    return "translate(" + [ d.x,d.y ] + "),rotate("+d.r+",160, 160),scale("+d.scale+","+d.scale+")";
                }) 
            });    
    
             dgrop = d3.select(id).append("g")
             .data([ {"x":20, "y":20, "r":1 , "scale":1} ])
             .attr("x",0)
             .attr("y",0)
             .attr("transform","translate(0,0)")
             .append('image')
             .attr("x",0)
             .attr("y",0)
             .attr("width",300)
             .attr("height",300)
             .attr("xlink:href","googlelogo_color_272x92dp.png")
             .call(drag);   
             
            // ズーム操作のコンストラクタを作成
            var zoom = d3.behavior.zoom() ;
            
            // ズーム操作に対応するイベントリスナーを指定する
            zoom.on( "zoom", function() {
            	// イベントオブジェクト
            	var event = d3.event ;
            
            	// スケール (現在の倍率)
            	var scale = event.scale ;
            
            	// トランスレート (X方向、Y方向への移動距離)
            	var tx = event.translate[0] ;
            	var ty = event.translate[1] ;
                // div要素に対して、call()メソッドでズーム操作を適用
//                d3.select(id).call( zoom ) ;
            	// transformのtranslateX、translateY、scaleの3つをそれぞれ更新する
            	d3.select(this).style("transform", "translateX( " + tx + "px ) translateY( " + ty + "px ) scale( " + scale + " )" ) ;

            } ) ;
            d3.select(id).call( zoom ) ;            
        
            // //回転
            // $("#wheel").bind("click",function(){
            //     dgrop.attr("transform", function(d,i){
            //         d.r=d.r-30;
            //         return "translate(" + [ d.x,d.y ] + "),rotate("+d.r+" ,160, 160),scale("+d.scale+","+d.scale+")";
            //     }); 
            // });
        
            // //拡大
            // $("#big").bind("click",function(){
            //     dgrop.attr("transform", function(d,i){
            //         d.scale=d.scale*1.2;
            //         return "translate(" + [ d.x,d.y ] + "),rotate("+d.r+" 160 160),scale("+d.scale+","+d.scale+")";
            //     });
            // });
            
            // //縮小
            // $("#small").bind("click",function(){
            //     dgrop.attr("transform", function(d,i){
            //         d.scale=d.scale*0.8;
            //         return "translate(" + [ d.x,d.y ] + "),rotate("+d.r+" 160 160),scale("+d.scale+","+d.scale+")";
            //     });
            // });  
        }
    }
    
    //追加
    imageAnimation.init(0,"#animation");
    
    // var imagenum = 1;
    // $("#addImage").bind("click",function(d){
    //     imageAnimation.init(imagenum,"#animation");
    //     imagenum++;
    // });  
};