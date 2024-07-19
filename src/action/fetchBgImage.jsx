"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/models/UserInfo";
import { getServerSession } from "next-auth";

export async function fetchBgImage(){
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    console.log(userEmail);
    if(userEmail){
        const pageDoc =  await UserInfo.findOne({ email: userEmail});
        return JSON.parse(JSON.stringify(pageDoc));
    }

    return false;
}