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
            minlength: 8,
            select: false, //critical security feature, Password hashes will never be returned in queries unless explicitly requested
        },
    },
    {
    timestamps: true,
    }
);


//Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Compare entered password with stored hash
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', UserSchema);