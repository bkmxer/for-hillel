$(document).ready(function() {


});

$(".tabs_header .wrapper .tab").click(function(){
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()

}).eq(0).addClass("active");
