$('#barra-colapsada').on("show.bs.collapse", function(){
	$('.banner-principal').css("transform", "translate(-50%, 0%")
});

$('#barra-colapsada').on("hide.bs.collapse", function(){
	$('.banner-principal').css("transform", "translate(-50%, -50%")
});

$('a').on("click", function(){
	
	$('#barra-colapsada').collapse("toggle");
	
	
});