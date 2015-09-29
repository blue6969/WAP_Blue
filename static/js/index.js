$(function()
{	   
	$('.downapp').click(function(){
		window.location.href='http://www.blue69.cn/download.html';
	});	
	var userAgent = navigator.userAgent.toLowerCase(); 
	//alert(userAgent)
	
	var ch=$('.content').height();
	var wh2=500;//$(window).height()*2;
	if(ch > wh2)
	{
		$('.content').height(wh2);
		
		$('.content-all').css("display","");
		$('.content-all').on('click',function(){
			$('.content').height('auto');
			$('.content-all').css("display","none");
			});
	}
});
