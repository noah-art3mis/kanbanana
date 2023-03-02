$(document).ready( () => {

	$('form').on('submit', (e) => {
		e.preventDefault();
		const newItem = $("#new-item-input").val();
		
		if (isValid(newItem)) {
			kbnPush(newItem);
			resetInput();
			resetErrors();
		}
		else {
			showError("please input a value before pushing");
		}
	})

	$('form').on('reset', (e) => {
		if (isStackEmpty()) {
			showError("nothing to pop, stack is empty");
		}
		else {
			e.preventDefault();
			kbnPop();
			resetErrors();
		}
	})

	$('ul').click( (e) => {
		$(e.target).toggleClass("crossed-out");
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
	//TODO add curve to banana
}

function kbnPop() {
	const item = $('li:first');
	popAnimation(item);
	//TODO add spring animation
}

function popAnimation (item) {
	//todo
	item.fadeOut( () => {
		item.remove();
	});
}

function crossOut(item) {
	item.css('text-decoration', 'line-through');
}

function isValid(item) {
	return !!item;
}

function showError(message) {
	$('#error-message').text(message);
	$('#error-message').show(100);
}

function resetInput() {
	$("#new-item-input").val("");
}

function resetErrors() {
	$('#error-message').hide();
}

function isStackEmpty() {
	return $('ul').children().length === 0;
}