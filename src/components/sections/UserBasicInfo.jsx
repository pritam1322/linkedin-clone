
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserInfo } from "@/models/UserInfo";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faPen, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";


export default async function UserBasicInfo(){

    const session = await getServerSession(authOptions);
    mongoose.connect(process.env.MONGO_URI);
    const userEmail = session?.user?.email;

    let userInfo = null;
    if(userEmail){
        userInfo = await UserInfo.findOne({ email: userEmail });
    }
    

    return(
        <>
            <div className="flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-1 mt-4 ml-1">
                    <span className="text-2xl text-gray-700 font-semibold font-sans uppercase">{userInfo.firstName} {userInfo.lastName}</span>
                    <FontAwesomeIcon icon={faCircleCheck} className="h-4 mt-1" />
                    <span className="text-sm">(He/Him)</span>
                </div>
                <div className="flex gap-2 items-center mt-4 mr-3 hover:underline">
                    <FontAwesomeIcon icon={faBriefcase} className="h-6" />
                    <div className="w-40 whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="text-sm">{userInfo.position}</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-16 items-center justify-between text-gray-800">
                <div className="ml-1 text-sm">
                    <span className="text-gray-700">{userInfo.headline}</span>
                    <div className="flex gap-2 mt-1 items-center">
                        <span className="text-xs text-gray-500">{userInfo.city}, India</span>
                        <span className="text-blue-500 font-semibold font-sans hover:underline">Contact info</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-4 mr-2 ml-auto">
                    <FontAwesomeIcon icon={faSchool} className="h-6" />
                    <div className="w-40 whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="text-sm">{userInfo.school}</span>
                    </div>
                </div>
            </div>

            <div className="text-blue-500 font-semibold font-sans text-sm flex gap-2 ml-1">
                <span className="hover:underline">1,547 followers</span>
                <span className="hover:underline">500+ connections</span>
            </div>
        </>
    );
}