const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    hashed_password: {
        type: String,
    },
    salt: String,
}, { timestamps: true });

userSchema.virtual('password')
    .set(function(password) {
        this.hashed_password = bcrypt.hashSync(password, 10)
    });
    userSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hashed_password);
    },
    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return ('Erreur', err);
        }
    }
}

module.exports = mongoose.model('User', userSchema);
