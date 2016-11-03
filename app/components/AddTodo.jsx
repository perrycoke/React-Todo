var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		var strTodo = this.refs.todo.value;

		if (strTodo.length > 0) {
			this.refs.todo.value = '';
			dispatch(actions.addTodo(strTodo));
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

export default connect()(AddTodo);