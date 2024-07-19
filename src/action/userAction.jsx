"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/models/UserInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { User } from "@/models/User";

export async function userAction(formData){
    console.log('formData', formData);
    const session = await getServerSession(authOptions);
    await mongoose.connect(process.env.MONGO_URI);  // Ensure connection is established

    if(session){
        const createUserInfo = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            headline: formData.headline,
            city: formData.city,
            position: formData.position,
            school: formData.school,
        };

        console.log(createUserInfo);
        const userEmail = session?.user?.email;
        const checkUserAvailability = await UserInfo.findOne({ email: userEmail});

        if(checkUserAvailability){

            const pageDoc = await UserInfo.updateOne(
                {email: userEmail},
                createUserInfo
            )
            return JSON.parse(JSON.stringify(pageDoc));
        }
        else{
            if(userEmail){
                createUserInfo['email'] = userEmail;
    
                const pageDoc = await UserInfo.create(createUserInfo);
                console.log(pageDoc);
                return JSON.parse(JSON.stringify(pageDoc));
            }
        }
    }

    return false;
}

export async function avatarUserUpdate(formData){
    
    const avatar = formData.get('avatar');
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if(avatar && userEmail){
        await User.findOneAndUpdate(
            {email: userEmail},
            {image: avatar}
        );
        return true;
    }

    return false;
}

export async function bgImageUpdate(formData){
    
    const background = formData.get('bgImage');
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if(background && userEmail){
        await UserInfo.findOneAndUpdate(
            {email: userEmail},
            {bgImage: background}
        );
        return true;
    }

    return false;
}
