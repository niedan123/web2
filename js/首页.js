function animate(obj,json,callback) {//json对应的是一种对象的格式
		clearInterval(obj.timer)
		obj.timer= setInterval(function () {
			var isStop=true;
			for (var attr in json) {
				if (attr=="opacity") {
				 var now=parseInt(getStyle(obj,attr)*100);
				}else{
					var now=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-now)/15;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=="opacity") {
				 	obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				var current=now+speed;
				if (json[attr]!==current) {
					isStop=false;
				} 
				if (isStop) {
				clearInterval(obj.timer)
				callback && callback();//判断要是传了callback，则调用callback
				}		
			}			
		},10);
	}
	function animate1(obj,json,callback) {//json对应的是一种对象的格式
		clearInterval(obj.timer)
		obj.timer= setInterval(function () {
			var isStop=true;
			for (var attr in json) {
				if (attr=="opacity") {
				 var now=parseInt(getStyle(obj,attr)*100);
				}else{
					var now=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-now)/15;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=="opacity") {
				 	obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				var current=now+speed;
				if (json[attr]!==current) {
					isStop=false;
				} 
				if (isStop) {
				clearInterval(obj.timer)
				callback && callback();//判断要是传了callback，则调用callback
				}		
			}			
		},20);
	}
		function getStyle(obj,style) {	//获取某个元素的某个值
			if (getComputedStyle(obj)) {
				return getComputedStyle(obj)[style];
			}else{
				obj.currentStyle[style];
			}	
	}


