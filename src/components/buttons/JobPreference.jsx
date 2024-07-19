"use client";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function JobPreference(){

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [jobTitle, setJobTitle] = useState(false);

    const toggleInput = () => {
        setJobTitle(!jobTitle);
    }

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };


    return (
        <>
            <div className="flex flex-col bg-blue-100 rounded-xl relative -top-16 m-4 w-[400px] p-2 mx-7 text-sm"> 
                <div className="relative">
                    <button
                        onClick={togglePopup}
                        className="absolute top-0 right-0 rounded-full bg-gray-100 p-1 font-bold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                </div>
                <span className="font-semibold">Open to work</span>
                <span>Saleforce Developer roles</span>
                <span className="text-blue-700 hover:underline">Show details</span>
            </div>

            {isPopupVisible && (
                <>
                    {/* Background Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={togglePopup}></div>

                    {/* Pop-up */}
                    <div className="fixed top-10 left-1/2 w-1/3 h-3/4 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg 
                                shadow-2xl shadow-black/75 z-20 overflow-y-auto">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold font-sans m-4">Edit job preferences</h2>
                            <button
                                onClick={togglePopup}
                                className="rounded-lg p-2 hover:bg-gray-100 mt-3"
                            >
                                <FontAwesomeIcon icon={faXmark} className="h-5" />
                            </button>
                        </div>
                        <div className="border-t"></div>
                        <p className="mb-4 text-xs text-gray-400 ml-2 mt-2">* Indicates required</p>
                        <form>
                            <div className="flex flex-col m-4">
                                <label>Job titles</label>
                                {!jobTitle && ( 
                                    <button 
                                        onClick={toggleInput}
                                        className="flex gap-1 rounded-full p-2 border border-blue-700 items-center text-xs text-blue-700 font-semibold">
                                        <FontAwesomeIcon icon={faPlus} className="h-4"/>
                                        <span>Add title</span>
                                    </button>
                                )}
                                {jobTitle && ( 
                                    <input type="text" />
                                )}
                            </div>
                            

                        </form>
                    </div>
                </>
            )}
        </>
    );
}