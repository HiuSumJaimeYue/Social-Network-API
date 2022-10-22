const { Schema, model } = require('mongoose');
// const { validateEmail } = require('../utils/validator.js');
// Schema.Types.String.set('validate', v => v == null || v > 0);

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
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

// const user = new User({ name: '', email: '' });

// const err = await user.validate().then(() => null, err => err);
// err.errors['email']; // ValidatorError

// export the User model
module.exports = User;