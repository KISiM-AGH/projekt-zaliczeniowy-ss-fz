import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true },
    id: String,
});

const User = mongoose.model('User',userSchema);

export default User;
