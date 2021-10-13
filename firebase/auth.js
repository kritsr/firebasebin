import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    setPersistence, browserLocalPersistence, onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js'

const auth = getAuth();

export let user;

await setPersistence(auth, browserLocalPersistence); // Persist login data in local storage

// Keep user updated and fetch persisted data when refresh
onAuthStateChanged(auth, function(_user) {
    user = _user
})

export { _createUserWithEmailAndPassword as createUserWithEmailAndPassword }
async function _createUserWithEmailAndPassword(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return user = userCredential.user;
}

export { _signInWithEmailAndPassword as signInWithEmailAndPassword }
async function _signInWithEmailAndPassword(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return user = userCredential.user;
}

export { _signOut as signOut }
async function _signOut() {
    await signOut(auth);
}

