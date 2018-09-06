import LocalStrategy from 'passport-local';
import User from '../../models/User';
import bCrypt from 'bcrypt-nodejs';
import errors from '../../helpers/errorMessage';

exports.Signup =(passport) => {

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true 
        },
        function(req, username, password, done) {

            findOrCreateUser = function() {
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: ' + err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('User already exists with username: ' + username);
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        const newUser = new User();
                        newUser.type = type;
                        newUser.password = createHash(password);
                        newUser.confirmpassword = createHash(confirmpassword);
                        if(newUser.password === newUser.confirmpassword) {
                            // save the user
                            newUser.save(function(err) {
                                if (err){
                                    console.log('Error in Saving user: ' + err);  
                                    throw err;  
                                }
                                console.log('User Registration succesful');    
                                return done(null, newUser);
                            });
                        }
                        errors.sendError(req, 400, 'Passwords not match');
                    }
                });
            };
        })
    );

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}