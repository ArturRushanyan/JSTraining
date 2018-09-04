import LocalStrategy from 'passport-local';
import UserRepo from '../models/userRepo';
import bCrypt from 'bcrypt-nodejs';

module.exports = function(passport) {

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true 
        },
        function(req, username, password, done) {

            findOrCreateUser = function() {
                // find a user in Mongo with provided username
                UserRepo.findOne({ 'username' :  username }, function(err, user) {
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
                        const newUser = new UserRepo();
                        newUser.type = type;
                        newUser.password = createHash(password);

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
                });
            };
        })
    );

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}