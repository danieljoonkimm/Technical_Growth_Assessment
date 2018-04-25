import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import SigninModel from '../server/models/SigninModel.js';
import bcrypt from 'bcryptjs';

passport.use(new LocalStrategy(
    (username, password, done) => {
        SigninModel(username, (err, user) => {
            // console.log('this be the passport')
            if (err) { return done(err); }
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.results[0].password, function(err, response) {
                console.log('this be the passport responseeeeee', response)
                if (err) {
                    return done(err);
                }
                if (response) {
                    return done(null, user);
                }
                return done(null, false);
            });
        });
    }
));


export default passport;