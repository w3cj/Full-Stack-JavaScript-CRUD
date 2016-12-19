$(() => {
	const id = getIdFromQuery();

	getOne(id)
		.then(todo => {
			$('#title').text(todo.title);
			$('#description').text(todo.description);
			$('#priority').text(todo.priority);
			$('#date').text(todo.date);
			$('#editButton').attr('href', `/edit.html?id=${todo.id}`);
		});

	$('#deleteButton').click(deleteTodo);

	function deleteTodo() {
		$.ajax({
				type: 'DELETE',
				dataType: 'json',
				url: `${API_URL}/${id}`,
		}).then(result => {
			window.location = '/';
		});
	}
});
