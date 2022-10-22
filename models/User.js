const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: {
        type: Array
    },
    friends: {
        type: Array
    }
});


// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;