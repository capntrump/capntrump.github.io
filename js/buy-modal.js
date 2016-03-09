$(document).ready(function() {
				$.selz({
					theme: {
						button: {
							bg:             "#5fa9df",
							text:           "#fff"
						},
						// checkout: {
						// 	headerBg:       "#5fa9df",
						// 	headerText:     "#fff"
						// }
					},
					// getTracking: function($link) {
					// 	return $link.data("tracking");
					// },
					// onDataReady: function ($link, data) {
					// 	_log(data, "onDataReady");
					// 	console.log(data);
					// },
					// onModalOpen: function ($link) {
					// 	_log("onModalOpen: " + ($link.data("modal-url") ? $link.data("modal-url") : $link.attr("href")));
					// 	console.log($link);
					// }
					// onPurchase: function (data) {
					// 	_log(data, "onPurchase");
					// 	console.log(data);
					// },
					// onClose: function ($link, data) {
					// 	if(typeof data.modal_url === "string"){
					// 		$link.data("modal-url", data.modal_url);
					// 	}
					//
					// 	// Log it
					// 	_log(data, "onClose");
					//
					// 	// Send data to your server on modal/tab/window close
					// 	navigator.sendBeacon("http://requestb.in/1abpybo1", JSON.stringify(data));
					// }
				});
});
