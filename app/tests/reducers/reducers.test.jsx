var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
	describe('SearchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'Walk dog'
			};
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});

		it('should toggle todo', () => {
			var todoData = {
				id: 199,
				text: 'Write todo.test.jsx test',
				completed: true,
				createdAt: 124,
				completedAt: 126
			};
			var action = {
				type: 'TOGGLE_TODO',
				id: 199
			};
			var res = reducers.todosReducer(df([todoData]), df(action));

			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
		});
	});
});