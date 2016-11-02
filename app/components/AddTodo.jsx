var React = require('react');

var AddTodo = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		var strTodo = this.refs.todo.value;

		if (strTodo.length > 0) {
			this.refs.todo.value = '';
			this.props.onAddTodo(strTodo);
		} else {
			this.refs.todo.focus();
		}
	},
	render() {
		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.onSubmit} className="todo-form">
					<input type="text" ref="todo" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;