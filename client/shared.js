const API_URL = 'http://localhost:3000/api/v1/todo';

function getIdFromQuery() {
	const parsedParts = window.location.search.split('=');
	const id = parsedParts[1];
	return id;
}

function getOne(id) {
	return $.get(`${API_URL}/${id}`);
}

function getTodoFromForm() {
	const title = $('#title').val();
	const description = $('#description').val();
	const priority = $('#priority').val();

	const todo = {
		title,
		description,
		priority
	};

	return todo;
}

function redirectById(id) {
	window.location = `/single.html?id=${id}`;
}
