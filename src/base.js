import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyD8pignX53IikPlXohGxKAsIBfwtfTR1VI',
    authDomain: 'bora-ajudar-b134c.firebaseapp.com',
    databaseURL: 'https://bora-ajudar-b134c.firebaseio.com',
    projectId: 'bora-ajudar-b134c',
    storageBucket: 'bora-ajudar-b134c.appspot.com',
    messagingSenderId: '1072555606878'
  };
  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())
  export const auth = firebase.auth()

  export default base