const { Schema, model } = require('mongoose');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      );
  };

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
        required: true,
        validate: [ validateEmail, 'invalid email' ]
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