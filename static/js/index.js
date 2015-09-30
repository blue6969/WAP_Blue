$(function()
{	   
	$('.downapp').click(function(){
		window.location.href='http://www.blue69.cn/download.html';
	});
	var user_agent = navigator.userAgent.toLowerCase();
	if (user_agent.indexOf('mobile') > -1 || user_agent.indexOf('applewebkit') > -1) {
		var ch = $('.content').height();
		var wh2 = $(window).height() * 2;
		if (ch > wh2) {
			$('.content').height(wh2);

			$('.content-all').css("display", "");
			$('.content-all').on('click', function () {
				$('.content').height('auto');
				$('.content-all').css("display", "none");
			});
		}
	}
});
