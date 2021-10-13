import {createApp} from '/vue.js'
// import {createApp} from 'https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.esm-browser.prod.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, userRef} from '/firebase/auth.js'

const app = createApp({
    data() {
        return {
            user: userRef,
            email: '',
            password: ''
        }
    },
    methods: {
        signOut,
        signUp,
        signIn
    }
}).mount('#app');

function onError(e) {
    console.error(e.code);
    console.error(e.message);
}

async function signUp() {
    try {
        await createUserWithEmailAndPassword(this.email, this.password);
    } catch (e) {
        onError(e)
    }
}

async function signIn() {
    try {
        await signInWithEmailAndPassword(this.email, this.password);
    } catch (e) {
        onError(e)
    }
}