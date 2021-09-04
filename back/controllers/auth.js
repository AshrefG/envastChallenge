const User = require('../models/user');
const jwt = require('jsonwebtoken'); //generate token

exports.signupClient = async(req, res) => {

    const user = new User(req.body)

    //checking username exists
    const existEmail = await User.findOne({ email: req.body.email });
    if (existEmail) {
        return res.status(400).json({ msg: "Email already exists." });
    }

    user.save((err, result) => {
        if (err) {
            return res.status(400).json({ msg: err });

        }
        user.salt = undefined
        user.hashed_password = undefined
        return res.status(200).json({ Success: true, result })
    })

};

exports.signinClient  = (req, res) => {
    const { email, password } = req.body
    console.log(req.body);

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            console.log(err)
            return res.status(400).json({ Error: "User doesn't exist. Please Signup." })

        } else {
            //authenticate 
            if (!user.authenticate(password)) {
                return res.status(404).json({
                    Success: false,
                    Error: "Email and password don't match",
                })
            }
            //persist token as 'token' in cookie and give expiry date

            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
            res.cookie('token', token, { expire: new Date() + 900000 })
                //return response with user and token to frontend

            const { _id, name, email } = user
            return res.status(200).json({
                Success: true,
                token,

                user: { _id, name, email }
            })
        }
    })
}

exports.getAllClients = (req, res) => {
    User.find({}, function(err, users) {
        var userList = {};
        users.forEach(user => {
            userList[user.id] = user;
        });
        res.send(userList);
    })
}
