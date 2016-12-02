$(function(){

	$('.topic-tab li').on('click',function(){
		
		$('.topic-tab li').removeClass('selected');		
		$(this).addClass('selected');
		
		$('.datalist').removeClass('selected');				
		var tabid=$(this).attr('data_src');
		$('#'+tabid).addClass('selected');
	});

});
