import firebase from 'firebase';

var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0'
	},
	isRunning: true,
	user: {
		name: 'Kezza',
		age: 34
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
	console.log('child_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
	console.log('child_removed', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
	text: 'Walk the dog!'
});

var newTodoRef = todosRef.push({
	text: 'Watch film'
});

console.log('Todo id', newNoteRef.key)