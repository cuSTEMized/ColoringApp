$(function() {
    
    // Modal screen triggers
    modal_triggers = ["#about"]
    for (var i = 0; i < modal_triggers.length; i++) {
	$(modal_triggers[i]).on("click", function() {
	    $(".modal").addClass("modal-is-visible")
	    $(".cover").addClass("modal-is-visible")
	});
    }
    
});
