
function excelTable2007MouseEnter() {

	$("td", this).each(function(ix, value) {
		if ($(this).parent().index()===1) return;
		if (ix===0) {
			$(this).css("background-color","#f3c873");
			return;
		}
		if (ix===1) {
			$(this).css({
				"border-top":"2px solid black",
				"border-left":"2px solid black",
				"border-bottom":"2px solid black"
			});
			return;
		}
		if (ix===2) {
			$(this).css({
				"border-top":"2px solid black",
				"border-right":"2px solid black",
				"border-bottom":"2px solid black"
			});
		}
	});
};

function excelTable2007MouseLeave() {
	$("td", this).each(function(ix, value) {
		if (ix===0) {
			$(this).css("background-color","#e4ecf7");
			return;
		}
		else {
			$(this).css("border","1px solid #B0CBEF");
		}
	});
}
