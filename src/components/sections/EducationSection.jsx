import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EducationSection(){
    return (
        <>
            <section className="bg-white shadow-lg shadow-black/50 mt-8 max-w-3xl rounded-md pb-4">
            <h1 className="m-2 py-6 px-4 text-lg font-semibold text-gray-800">Education</h1>
            <div className="flex gap-8 ml-6">
                <FontAwesomeIcon icon={faSchool} className="h-12" />
                <div className="text-xs">
                    <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">
                        K. J. Somaiya Institute of Technology
                    </h2>
                    <h2 className="text-gray-700">Bachelor of Technology - BTech, Electronics</h2>
                    <h2 className="text-gray-500">2018 - 2022</h2>                     
                </div>
            </div> 
            </section>
        </>
    )
}