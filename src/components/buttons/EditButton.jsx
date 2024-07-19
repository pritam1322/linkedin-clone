'use client';
import { userAction } from "@/action/userAction";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EditButton() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
        

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        headline: '',
        city: '',
        position: '',
        school: ''
    });

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log('formData', formData);
        const result = await userAction(formData);

        if(result){
            toast.success('Saved');
            setIsPopupVisible(false);
        }
        
        
    };

    return (
        <>
            <div className="relative">
                <button
                    onClick={togglePopup}
                    className="absolute -top-4 right-3 rounded-full bg-gray-100 p-2 font-bold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>
            </div>

            {isPopupVisible && (
                <>
                    {/* Background Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={togglePopup}></div>

                    {/* Pop-up */}
                    <div className="fixed top-10 left-1/2 w-1/2 h-3/4 transform -translate-x-1/2 bg-white border border-gray-300 rounded 
                                shadow-2xl shadow-black/75 z-20 overflow-y-auto pr-4">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold font-sans m-4">Edit intro</h2>
                            <button
                                onClick={togglePopup}
                                className="rounded-lg p-2 hover:bg-gray-100 mt-3"
                            >
                                <FontAwesomeIcon icon={faXmark} className="h-5" />
                            </button>
                        </div>
                        <div className="border-t"></div>
                        <p className="mb-4 text-xs text-gray-400 ml-2 mt-2">* Indicates required</p>

                        <form onSubmit={handleFormSubmit}>
                            <div className="flex flex-col ml-6">
                                <label>First name*</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-black rounded mb-4 p-0.5" required/>

                                <label>Last name*</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-black rounded mb-4 p-0.5" required/>

                                <label>Headline*</label>
                                <textarea name="headline" value={formData.headline} onChange={handleChange} className="border border-black rounded mb-4" rows={2} required></textarea>

                                <label>City*</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} className="border border-black rounded mb-4 p-0.5" required/>

                                <div className="font-bold">Current position</div>
                                <label>Company*</label>
                                <input type="text" name="position" value={formData.position} onChange={handleChange} className="border border-black rounded mb-4 p-0.5" required/>

                                <div className="font-bold">Education</div>
                                <label>School*</label>
                                <input type="text" name="school" value={formData.school} onChange={handleChange} className="border border-black rounded mb-4 p-0.5" required/>
                            </div>

                            <div className="border-t"></div>

                            <div className="flex justify-end relative p-4">
                                <button
                                    type="submit"
                                    className="rounded-full bg-blue-700 p-1 px-6"
                                >
                                    <span className="text-white text-sm">Save</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </>
    );
}
