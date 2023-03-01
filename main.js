$(document).ready( () => {

	//Mode Select

	
	$('form').on('submit', (e) => {
		e.preventDefault();
		const newItem = $("#new-item-input").val();
		
		if (newItem) {
			kbnPush(newItem);
		}
		else {
			alert("what are you trying to push?")
		}
		
		$("#new-item-input").val("");
	})

	$('form').on('reset', (e) => {
		e.preventDefault();
		kbnPop();
	})

	$('li').click( (e) => {
		e.target.addClass('clicked')
	});
})
function kbnPush(newItem) {
	const item = $(`<li>${newItem}</li>`);
	$('ul').prepend(item);
	pushAnimation(item);
}

function pushAnimation(item) {
	$(item).hide();
	$(item).fadeIn();		
}

function kbnPop() {
	const item = $('li:first');
	popAnimation(item);
}

function popAnimation (item) {
}

function crossOut(item) {
	item.css('text-decoration', 'line-through')
}