import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExperienceSection(){
    return (
        <>
            <section className="bg-white shadow-lg shadow-black/50 mt-8 max-w-3xl rounded-md pb-4">
                <h1 className="m-2 py-6 px-4 text-lg font-semibold text-gray-800">Experience</h1>

                <div className="mx-6">
                    <div className="flex gap-8">
                        <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        <div className="text-xs">
                            <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Accenture</h2>
                            <h2>Full-time 1 yr 11 mos</h2>
                            <h2 className="text-gray-500">Mumbai, Maharashtra, India Hybrid</h2>                     
                        </div>
                    </div>  
                    
                    <div className="flex flex-col ml-20 mt-4 text-sm text-gray-800">
                        <h2 className="font-semibold hover:underline hover:text-blue-600">Software Salesforce Developer Analyst</h2>
                        <h2 className="text-gray-500 text-xs">March 2024 - Present 5 mos</h2>
                        <span className="my-2  text-sm font-sans">
                            1.Designed & built an entire stage for an object using LWC components in a limited period, which 
                            helped the team to deliver the feature before production.
                        </span>
                        <div className="mb-2 text-xs font-semibold hover:underline hover:text-blue-600">
                            <FontAwesomeIcon icon={faGem} className="h-3"/>
                            <span>Apex Programming, Lightning Web Components and +2 skills</span>
                        </div>
                    </div>   
                    <div className="flex flex-col ml-20 mt-4 text-sm text-gray-800">
                        <h2 className="font-semibold hover:underline hover:text-blue-600">Software Salesforce Developer Associate</h2>
                        <h2 className="text-gray-500 text-xs">Sep 2022 - Feb 2024 1 yr 6 mos</h2>
                        <span className="my-2  text-sm font-sans">
                            1.Working on Administrator part including Workflows, Validations, RecordTypes, Layouts, etc. 
                            And also complex Apex Classes , Triggers, Batch jobs, Apex Schedulable classes, Unit Test Classes.
                        </span>
                        <div className="mb-2 text-xs font-semibold hover:underline hover:text-blue-600">
                            <FontAwesomeIcon icon={faGem} className="h-3"/>
                            <span>Salesforce DX, Lightning Web Components and +20 skills</span>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}