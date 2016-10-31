var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the yard'
				}, {
					id: 3,
					text: 'Do the dishes'
				}, {
					id: 4,
					text: 'Feed Cats'
				}
			]
		};
	},
	render() {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;