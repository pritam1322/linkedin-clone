import {model, models, Schema} from "mongoose";


const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    headline: {type: String, required: true},
    city: {type: String, required: true},
    position: {type: String, required: true},
    school: {type: String, required: true},
    bgImage: {type: String, default:''},
}, {timestamp: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserSchema);