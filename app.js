// Global Application
const _app = {
	init : function() {
		var self = this;
			self.plugins.init(); // Init plugins
			console.log('App Is Ready');
	},
	plugins : {
		init : function() {
			this.app(); // refer to app.plugins.app();

			// All Of Your Plugins need to init		
		},
		app : function() {

			$(document).on('click', '.clickable', function(event) {
				
				console.log("I'm Clickable");

			});

			$(document).on('click mouseenter mousedown mouseup', function(event) {

				console.log('Document Event : click mouseenter mousedown mouseup');
				// $(document).fixDimension();

			});

			$(window).scroll(function(event) {

				console.log('Document Scroll');
				// $(document).fixDimension();

			});
		}
	},
	jquery : { // Extends jQuery

		toTop : function () {
				
			var body = $("html, body");
			body.stop().animate({scrollTop:0}, 600, 'swing');

		},

		reload : function() {

			window.location.reload();

		},
	}
};

jQuery(document).ready(function($) {

	$(document).jQA(_app);

});