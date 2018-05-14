
	
	/************ Front Page Js Here ******************/

$(document).on('ready', function() {
      $(".regular").slick({
        dots: true,
		autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    });

	
/***** Change Background image on tab change ***************/

function addclass(clas){
	var cl=document.getElementById('main').className;
	$('#main').removeClass(cl);
	$('#main').addClass(clas);
	}
	
/************ Check box add remove class ************/

$('input[name="SwitchOptions"]').on('change', function(){
 	if ($('#switch_input_2').is(":checked")){
		$(".form-inline").find('#return-date').removeClass('disable');
	} else {
		$(".form-inline").find('#return-date').addClass('disable');
	}
});

$(".form-inline").find('#MultiCity').hide();
$('.switch').on('click', function(){
	var current = $(this);
	
	if( current.find('input').attr('id') == 'switch_input_2' ) {
		$(".form-inline").find('#return-date').removeClass('disable');
		$("#return-date").show();
	} else {
		$(".form-inline").find('#return-date').addClass('disable');
	}

	if( current.find('input').attr('id') == 'switch_input_3' ) {
		$(".form-inline").find('#MultiCity').show();
		$("#return-date").hide();
	} else {
		$(".form-inline").find('#MultiCity').hide();
	}
	current.find('label').addClass('flight-trip');
	current.nextAll().find('label').removeClass('flight-trip');
	current.prevAll().find('label').removeClass('flight-trip');
});

