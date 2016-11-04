import firebase from 'firebase';

try {
	var config = {
	  apiKey: "AIzaSyCvA5MKedTsoSaWOGd7gQVMiaObxTyJF7Y",
	  authDomain: "kezza-todo-app.firebaseapp.com",
	  databaseURL: "https://kezza-todo-app.firebaseio.com",
	  storageBucket: "kezza-todo-app.appspot.com",
	  messagingSenderId: "661967960648"
	};

	firebase.initializeApp(config);
} catch (e) {

} 

export var firebaseRef = firebase.database().ref();
export default firebase;