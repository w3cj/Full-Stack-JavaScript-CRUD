$(() => {
	const id = getIdFromQuery();
	getOne(id)
		.then(todo => {
			$('#title').val(todo.title);
			$('#description').val(todo.description);
			$(`option[value=${todo.priority}]`).attr('selected', 'selected');
		});

	$('form').submit((event) => {
		event.preventDefault();
		const todo = getTodoFromForm();
		$.ajax({
		    type: 'PUT',
		    dataType: 'json',
		    url: `${API_URL}/${id}`,
		    data: todo
		}).then(result => {
			redirectById(id);
		});
	});
});
