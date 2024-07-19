import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectsSection(){
    return (
        <>
            <section className="bg-white shadow-lg shadow-black/50 mt-8 max-w-3xl rounded-md pb-4 pt-2 ">
            <h1 className="m-2 py-3 px-4 text-lg font-semibold text-gray-800">Projects</h1>
            <div className="flex flex-col gap-2 ml-6">
                <span>
                    <span className="text-sm font-semibold hover:underline hover:text-blue-600">Blogify</span>
                    <h2 className="mt-2 text-xs hover:underline hover:text-blue-700 font-semibold">https://blogs-one-kappa.vercel.app/</h2>
                </span>
                
                <div className="text-xs ml-6">

                    <h2 className="text-gray-700 mt-2">
                    • Authentication: Implemented user login via Google API using Google Cloud Console.<br/>
                    • Content Creation: Enabled users to create and publish blogs with a heading image and styled using TailwindCSS.<br/>
                    • Image Storage: Integrated AWS S3 for storing and managing uploaded images.<br/>
                    • Deployment: Deployed it via Vercel.
                    </h2>
                    <h2 className="text-black font-semibold mt-2">Skills: JavaScript · Next.js · Amazon Web Services (AWS) · Tailwind CSS</h2>                     
                </div>
            </div> 
            </section>
        </>
    )
}