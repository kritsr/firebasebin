import {
    getDatabase, ref, set
} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js'

const database = getDatabase();

export function writeUserData(uid, text) {
    set(ref(database, 'users/' + uid), {
        text
    })
}

