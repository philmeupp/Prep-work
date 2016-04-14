$(document).ready(function(){
	$(console.log("script functional"))
	
	$('li').click(function(){
		$(this).toggleClass('strike-through');
	});

	$('.toggleButton').click(function(){
		$('img').toggleClass('hidden')
		$('.intro').toggleClass('hidden')
	});
});

