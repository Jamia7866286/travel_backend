$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.login-bg, .fare-detail, .filter-search').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});



//restaurant list on click of slider for search page	
	$('#register').on('click', function(event) {
		$('.user-login-form').hide(); 
		$('.user-register-form').show();
		$(this).addClass('active');
		$('#login').removeClass('active');
		});
		
	$('#login').on('click', function(event) {
		$('.user-login-form').show(); 
		$('.user-register-form').hide();
		$(this).addClass('active');
		$('#register').removeClass('active');
		});
		
// Action list show hide 

	$('#open-popup').on('click', function(event) 
	{
		$('.popover-box').fadeToggle();
		event.stopPropagation();
	});
	
	$('.profile-option').on('click', function(event) 
	{
		$('.edit-profile-popup').fadeToggle();
		event.stopPropagation();
	});
	
// Bootstrap Select Droprdown

$('.selectpicker').selectpicker({
  size: 4
});

/******** Add Remove class on checked *******************/

$('input[name="Selecttravel"]').on('change', function(){
 	
	if ($('#select_input_1').is(":checked")){
		$(".form-inline").find('.return-date').removeClass('disable');
	} else {
		$(".form-inline").find('.return-date').addClass('disable');
	}
	
	
	
	if ($('#select_input_2').is(":checked")){
		$(".form-inline").find('.return-date').removeClass('disable');
	} else {
		$(".form-inline").find('.return-date').addClass('disable');
	}
	
	if ($('#select_input_3').is(":checked")){
		$(".form-inline").find('#MultiCity').show();
		$(".return-date").hide();
	} else {
		$(".form-inline").find('#MultiCity').hide();
	}
	
	
	
});

$(".form-inline").find('#MultiCity').hide();

//------------------------------
//Nice Scroll
//------------------------------
		jQuery(document).ready(function() {
		
			var nice = jQuery("html").niceScroll({
				cursorcolor:"#ccc",
				cursorborder :"0px solid #fff",			
				railpadding:{top:0,right:0,left:0,bottom:0},
				cursorwidth:"5px",
				cursorborderradius:"0px",
				cursoropacitymin:0,
				cursoropacitymax:0.3,
				boxzoom:false,
				horizrailenabled:false,
				autohidemode:false
			});  

			
			
		});
	



