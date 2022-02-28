import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    setPersistence, browserLocalPersistence, onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js'
import {ref} from '/vue.js'

const auth = getAuth();

// Make user reactive
export let userRef = ref();
export let user;
function setUser(_user) {
    return userRef.value = user = _user
}

await setPersistence(auth, browserLocalPersistence); // Persist login data in local storage

// Keep user updated and fetch persisted data when refresh
onAuthStateChanged(auth, function(user) {
    setUser(user)
})

export { _createUserWithEmailAndPassword as createUserWithEmailAndPassword }
async function _createUserWithEmailAndPassword(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return setUser(userCredential.user);
}

export { _signInWithEmailAndPassword as signInWithEmailAndPassword }
async function _signInWithEmailAndPassword(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return setUser(userCredential.user);
}

export { _signOut as signOut }
async function _signOut() {
    await signOut(auth);
}

