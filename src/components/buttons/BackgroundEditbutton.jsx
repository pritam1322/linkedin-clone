"use client"
import { fetchBgImage } from "@/action/fetchBgImage";
import { bgImageUpdate } from "@/action/userAction";
import { upload } from "@/lib/upload";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BackgroundEditbutton(){
    

    const [bgImage, setBgImage] = useState('');
    
    useEffect(() => {
        async function fetchInitialBgImage() {
            const initialBgImage = await fetchBgImage();
            console.log('initialBgImage', initialBgImage);
            setBgImage(initialBgImage.bgImage);
        }
        fetchInitialBgImage();
    }, []);

    async function handleBackgroundImageChange(ev) {
        
        upload(ev, async (link) => {
            setBgImage(link);
            const formData = new FormData();
            formData.append('bgImage', link);
            await handleBackgroundUpdate(formData);
        });
    }

    async function handleBackgroundUpdate(formData){
        const result = await bgImageUpdate(formData);
        if(result){
            toast.success('Background Image Updated');
        }
    }

    return (
        <>
            <div 
                className="min-h-[200px] bg-cover bg-center bg-gray-200 rounded-lg" 
                style={{backgroundImage: `url(${bgImage})`}}
            >
                <form action={handleBackgroundUpdate}>
                    <div className="relative">
                        <label
                            
                            className="absolute top-3 right-3 text-blue-500 font-semibold rounded-full bg-white p-2 font-bold"
                        >
                            <input type="file" className="hidden" onChange={handleBackgroundImageChange}/>
                            <input type="hidden" name="bgImage" value={bgImage}/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 font-bold cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </label>
                    </div>
                </form>
            </div>
        </>
    );
}