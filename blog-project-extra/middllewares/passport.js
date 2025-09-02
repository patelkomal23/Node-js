const passport = require("passport");
const User = require("../models/user.model");

const LocalStratergy = require('passport-local').Strategy;

passport.user(new LocalStratergy(async (name, password, done) => {
    try {
        let user = await User.findOne({ name });
        if (user) {
            if (user.password == password) {
                return done(null, user);
            }
            else {
                return done(null, false)
            }
        }         
    } catch (error) {
        return done(error, false)

    }
})
);
passport.serializeUser((user, done) => {
    return done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
    let user = await user.findById(id);
    return done(null, user)
})