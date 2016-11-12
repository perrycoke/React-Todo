var $ = require('jquery');

module.exports = {
	filterTodos(todos, showCompleted, searchText) {
		searchText = searchText.toLowerCase();
		var filteredTodos = todos;

		// Filter by show completed
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		// Filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});

		// Sort todos with non completed first
		filteredTodos.sort((a, b) => {
			if (a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		// if (filteredTodos.length === 0) {
		// 	filteredTodos = '<p className="container__message">Nothing To Do</p>';
		// }

		return filteredTodos;
	}
}