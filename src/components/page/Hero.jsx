import EditButton from "@/components/buttons/EditButton";
import BackgroundEditbutton from "../buttons/BackgroundEditbutton";
import JobPreference from "../buttons/JobPreference";
import UploadImages from "../forms/UploadImages";
import UserBasicInfo from "../sections/UserBasicInfo";

export default async function Hero(session) {
    return (
        <>
            {session && (
                <section className="bg-white shadow-lg shadow-black/50 mt-8 max-w-3xl rounded-md">
                    
                    <BackgroundEditbutton />
                    <div className="relative -top-28 ml-6">
                        
                        <UploadImages session={session}/>
                        <EditButton />
                        <UserBasicInfo />
                    </div>
                    
                    <JobPreference />
                </section>
            )}
        </>
    );
}
