$(document).ready(function(){
	$('.styled_select').customSelect();
});

$(document).ready(function() {
      $('#slides').slidesjs({
        width: 1280,
        height: 552,
        navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 400
          }
        },
		callback: {
			loaded: function(){
			  // hide navigation and pagination
			  $('.slidesjs-pagination, .slidesjs-navigation').hide(0); 
			}
		}		
      });
	  
	/*$(".custom-item").click(function(e){
		e.preventDefault();
		$('a[data-slidesjs-item="' + $(this).attr("data-item") + '"]').trigger('click');
	});*/
	
	$('.cus_next').click(function(e) {
		e.preventDefault();
		$('.slidesjs-next').click();
	});
	$('.cus_prev').click(function(e) {
		e.preventDefault();
		$('.slidesjs-previous').click();
	});	

});

// $(document).ready(function() {
// 	$('.tab:first').hide();
// 	//$('#tab-nav a:first').addClass('active_tab');
	
// 	$('#tab_nav a').click(function(){
// 		var tabID = $(this).attr('href');
		
// 		$('.tab').hide();
// 		$(tabID).show();
		
// 		$('#tab_nav a').removeClass('active_tab');
// 		$(this).addClass('active_tab');
		
// 		return false;
// 	});
// });

$(document).ready(function() {
	$('[data-toggle="tabajax"]').click(function(e) {
    	var $this = $(this),
        loadurl = $this.attr('href'),
        targ = $this.attr('data-target');

    	$.get(loadurl, function(data) {
        	$(targ).html(data);
    	});


		
    	$this.tab('show');
    	$('#tab_nav a').removeClass('active_tab');
		$(this).addClass('active_tab');
    	return false;
	});
});

// $(document).ready(function(){
// 	var animasi = {scrollTop: $('#tab_nav').offset().top};
// 	$('#tab_nav a').click(function() {
// 		$('body,html').animate(animasi, 500);
// 		return false;
// 	});
// });

$(document).ready(function () {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default',
		width: 'auto',
		fit: false,
		closed: 'accordion',
		activate: function(event) {
			console.log('open');
/* 			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show(); */
		}
	});
});

$(document).ready(function(){
	var animasi = {scrollTop: $('#handler').offset().top};
	$('#tab_nav a').click(function() {
		$('body,html').animate(animasi, 0);
		return false;
	});
});





