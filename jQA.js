/**
 * jQuery Application
 *
 * Author: Ladina.
 * Website: https://ladina.fitiavana.mg
 */

// Create New jQuery Appliction
(function($) {
	function jQApplication(element,app={}) {

	    if (!(this instanceof jQApplication)) {
	    	return new jQApplication(element,app);
	    }

	    // jQuery Application	   
	    var self  = (Object.keys(app).length > 0) ? app : this;

		if (typeof self.init != 'function') {
			self.init = function() {};
		}

		if (typeof app.jquery != 'undefined' && typeof app.jquery == 'object') {
			$.fn.extend(app.jquery);
		}

		self.init();
	}

	$.fn.jQA = function () {
		var _app = arguments[0];
		return new jQApplication(this,_app);
    };

})(jQuery);