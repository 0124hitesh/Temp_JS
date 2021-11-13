var col = document.getElementById('col');
    const can = document.getElementById('can');
    const nav = document.getElementById('nav')

    can.width = window.innerWidth;
    can.height = window.innerHeight - 90
    const ctx = can.getContext('2d')

    var shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;

    const emp = document.getElementById('shape_emp');
    const fl = document.getElementById('shape_fill')

    function makeEmp(){
      emp.style.display = "unset";
      fl.style.display = 'none'
      isFill = false;
    }
    function makeFill(){
      fl.style.display = "unset";
      emp.style.display = 'none'
      isFill = true;
    }

    var isFill = false

    var isLine = false;
    function enableLine(){
      isLine = !isLine;
    }

    function changeCur(){
        can.style.cursor = "pointer"      
    }
    function changeCur1(){
      can.style.cursor = "crosshair"
    }

    var x = 0;
    var y = 0;
    var md = false;
        
    var img = new Image();

    const lw = document.getElementById('lineWidth');

    var paint = false;

    function start(e){
        paint = true;
        ctx.beginPath();
        draw(e)
    }  

    function end(){
        paint = false
    }

    function draw(e){
        if(!paint) return;

        if(shape === 'erase'){
          ctx.strokeStyle = '#FFFFFF'
        }
        ctx.lineWidth = lw.value;
        ctx.lineCap = "round";
        
        ctx.lineTo(e.pageX, e.pageY);
        ctx.stroke()
        ctx.beginPath();
        ctx.moveTo(e.pageX, e.pageY)
    }

    can.onmousedown = function(e){

      shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;
      console.log(shape)
      ctx.strokeStyle = col.value
      ctx.lineWidth = lw.value;

      if(shape === "line" || shape === 'rectangle' || shape === 'circle' || shape === 'hexagon'){
        x = e.pageX;
        y = e.pageY;
        md = true;
        img.src = can.toDataURL();

        ctx.fillStyle = col.value
      }
      else if(shape === "paint" || shape === 'erase'){
        start(e)
      }
    }
    
    can.onmouseup = function(e){
      if(shape === 'erase'){
          ctx.strokeStyle = col.value
      }
      if(shape === "line" || shape === 'rectangle' || shape === 'circle' || shape === 'hexagon'){
        md = false;
      }
      else if(shape === "paint" || shape === 'erase'){
        end()
      }
    }
    
    can.onmousemove = function(e){

      if(shape === 'rectangle'){
        if(md){
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.drawImage(img, 0, 0 )
            ctx.beginPath();
            var rect_x = x;
            var rect_y = y;
            if(x > e.pageX){
                rect_x = e.pageX

            }
            if(y > e.pageY){
                rect_y = e.pageY

            }
            
            ctx.rect(rect_x, rect_y, Math.abs(x - e.pageX), Math.abs(y - e.pageY));
            
            if(isFill){
              ctx.fill()
            }
            ctx.stroke()
           
          }
      }
      else if(shape === "line"){
        if(md){
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.drawImage(img, 0, 0 )
            ctx.beginPath();
            
            ctx.moveTo(x, y)
            ctx.lineTo(e.pageX, e.pageY);
            ctx.stroke();
        }
      }
      else if(shape === "circle"){
        if(md){
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.drawImage(img, 0, 0 )
            ctx.beginPath();
            ctx.arc(x, y, Math.abs(x - e.pageX), 0, 2 * Math.PI);
            if(isFill){
              ctx.fill()
            }
            ctx.stroke();
            ctx.closePath()
          }
      }
      else if(shape === 'hexagon'){
        if(md){
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.drawImage(img, 0, 0 )

            const r = Math.abs(x - e.pageX)
            const a = 2 * Math.PI / 6;
            ctx.beginPath();
            for (var i = 0; i < 6; i++) {
                ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
            }
            ctx.closePath();
            if(isFill){
              ctx.fill()
            }
            ctx.stroke();
          }
      }
      else if(shape === "paint" || shape === 'erase'){
        draw(e)
      }
    }