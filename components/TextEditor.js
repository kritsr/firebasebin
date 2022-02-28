import { writeUserData } from '/firebase/database.js';
import { user } from '/firebase/auth.js';

export default {
    data() {
        return {
            text: "Nothing here"
        }
    },
    template: `<textarea v-model="text" /><button @click="saveText">SAVE</button>`,
    methods: {
        saveText
    }
}

function saveText() {
    if (user === null) console.error('Log in first')
    writeUserData(user.uid, this.text)
}