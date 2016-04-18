$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(document).ready(function() {
 
  var sync1 = $(".sync1");
  var sync2 = $(".sync2");
  
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    autoHeight : true,
  });
 
  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,2],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(".sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($(".sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(".sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }

  var sync3 = $(".sync3");
  var sync4 = $(".sync4");

  sync3.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    autoHeight : true,
  });
 
  sync4.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,2],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(".sync4")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($(".sync4").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(".sync4").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync3.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync4visible){
      if(num === sync4visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync4visible[sync4visible.length-1]){
        sync4.trigger("owl.goTo", num - sync4visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync4.trigger("owl.goTo", num);
      }
    } else if(num === sync4visible[sync4visible.length-1]){
      sync4.trigger("owl.goTo", sync4visible[1])
    } else if(num === sync2visible[0]){
      sync4.trigger("owl.goTo", num-1)
    }
    
  }

  var sync5 = $(".sync5");
  var sync6 = $(".sync6");

  sync5.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    autoHeight : true,
  });
 
  sync6.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,2],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(".sync6")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($(".sync6").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(".sync6").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync5.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync6visible = sync6.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync6visible){
      if(num === sync6visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync6visible[sync6visible.length-1]){
        sync6.trigger("owl.goTo", num - sync6visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync6.trigger("owl.goTo", num);
      }
    } else if(num === sync6visible[sync6visible.length-1]){
      sync6.trigger("owl.goTo", sync6visible[1])
    } else if(num === sync6visible[0]){
      sync6.trigger("owl.goTo", num-1)
    }
    
  }

  var sync7 = $(".sync7");
  var sync8 = $(".sync8");

  sync7.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    autoHeight : true,
  });
 
  sync8.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsTablet       : [768,2],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(".sync8")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($(".sync8").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(".sync8").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync7.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync8visible = sync8.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync8visible){
      if(num === sync8visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync8visible[sync8visible.length-1]){
        sync8.trigger("owl.goTo", num - sync8visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync8.trigger("owl.goTo", num);
      }
    } else if(num === sync8visible[sync8visible.length-1]){
      sync8.trigger("owl.goTo", sync8visible[1])
    } else if(num === sync8visible[0]){
      sync8.trigger("owl.goTo", num-1)
    }
    
  }  
 
});

jQuery(function(a){a(document).ready(function(){
  a("#main-form-top").validate();
  a("#main-form-bottom").validate();
  a("#modal-form").validate()})});  

$(document).ready(function(){
  $('body').addClass('loaded');
  $("#phone").inputmask("+38(999) 999-99-99");
  $("#phone-2").inputmask("+38(999) 999-99-99");
  $("#phone-3").inputmask("+38(999) 999-99-99");
});