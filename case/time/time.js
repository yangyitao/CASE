// JavaScript Document
function Dtime(){
ctx.clearRect(0,0,500,500);
var now=new Date();
var h=now.getHours();
var m=now.getMinutes();
var s=now.getSeconds();
//自定义颜色
//创建线性渐变
var gradient=ctx.createLinearGradient(0,0,500,500);
gradient.addColorStop("0","#FFF");
gradient.addColorStop("0.5","#CCC");
gradient.addColorStop("1.0","#FFF");
//笔触面积
ctx.lineWidth=50;
//把自定义颜色赋给笔迹
ctx.strokeStyle=gradient;
//绘制表盘
ctx.beginPath();//开始下笔
//圆形
ctx.arc(250,250,210,0,360*Math.PI/180);
ctx.stroke();
ctx.closePath();//结束下笔
//绘制表盘 end
//时刻度
//换笔
ctx.lineWidth=7;
ctx.strokeStyle="#000";
for(var i=0;i<12;i++){
	ctx.save();
	//把坐标点（250.250）置为原点
	ctx.translate(250,250);
	ctx.beginPath();
	//旋转角度
	ctx.rotate(i*30*Math.PI/180);
	//花直线
	ctx.moveTo(0,-160);
	ctx.lineTo(0,-185);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}//时刻度 end
//分刻度
ctx.lineWidth=3;
for(var i=0;i<60;i++){
	ctx.save();
	ctx.translate(250,250);
	ctx.beginPath();
	ctx.rotate(i*6*Math.PI/180);
	ctx.moveTo(0,-170);
	ctx.lineTo(0,-185);
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}
//时针
ctx.save();
ctx.lineWidth=7;
ctx.translate(250,250);
ctx.rotate(h*30*Math.PI/180);
ctx.beginPath();
ctx.moveTo(0,-140);
ctx.lineTo(0,10);
ctx.stroke();
ctx.closePath();
ctx.restore();
//分针
ctx.save();
ctx.lineWidth=5;
ctx.translate(250,250);
ctx.rotate(m*6*Math.PI/180);
ctx.beginPath();
ctx.moveTo(0,-150);
ctx.lineTo(0,15);
ctx.stroke();
ctx.closePath();
ctx.restore();
//秒针
ctx.save();
ctx.lineWidth=3;
ctx.strokeStyle="red";
ctx.translate(250,250);
ctx.rotate(s*6*Math.PI/180);
ctx.beginPath();
ctx.moveTo(0,-150);
ctx.lineTo(0,15);
ctx.stroke();
ctx.closePath();
ctx.restore();
}
setInterval(Dtime,1000);