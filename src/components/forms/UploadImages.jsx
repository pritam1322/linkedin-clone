"use client"
import { avatarUserUpdate } from "@/action/userAction";
import { upload } from "@/lib/upload";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";


export default  function UploadImages(session){

    const userAvatar = session?.session?.session?.user?.image;
    const [avatar, setAvatar] = useState(userAvatar);
    
    console.log("session", session);
    
    async function handleAvatarImageChange(ev) {
        
        upload(ev, async (link) => {
            setAvatar(link);
            const formData = new FormData();
            formData.append('avatar', link);
            await handleAvatarUserUpdate(formData);
        });
    }

    async function handleAvatarUserUpdate(formData){
        const result = await avatarUserUpdate(formData);
        if(result){
            toast.success('Avatar Updated');
        }
    }

    return (
        <>
            <form >
                <div className="relative top-2 w-[140px] h-[140px]">
                    <label htmlFor="avatarIn">
                    <div className="overflow-hidden h-full rounded-full border-4 border-white shadow shadow-black/50">
                        <Image
                        className="w-full h-full object-cover"
                        src={avatar}
                        alt={'avatar'}
                        width={128} height={128} />
                    </div>
                    </label>
                    <input type="file" className="hidden" id="avatarIn" onChange={handleAvatarImageChange}/>
                    <input type='hidden' name='avatar' value={avatar}/>
                    
                </div>
            </form>
        </>
    );
}