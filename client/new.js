$(() => {
	$('form').submit((event) => {
		event.preventDefault();
		const todo = getTodoFromForm();

		$.post(API_URL, todo)
			.then(result => {
				console.log(result);
				redirectById(result.id);
			}).catch(error => {
				const $errorMessage = $('#errorMessage');
				$errorMessage.text(error.responseJSON.message);
				$errorMessage.css('display', '');
			});
	});
});
