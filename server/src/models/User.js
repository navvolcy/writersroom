import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required:true,
            unique:true, //Prevents duplicate usernames , Auto-cleans input
            trim: true,
            minlength:3,
            maxlength:38,
        },
        email:{          // Prevents duplicate accounts
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match:  [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], //Ensures valid email format 
        },

        password:{
            type: String,
            required: true,
           
        },
    },
    {
    timestamps: true,
    }
);


//Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// //Compare entered password with stored hash (Hash Verification)
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

export default mongoose.model('User', UserSchema);