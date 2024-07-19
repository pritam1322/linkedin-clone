import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faBell, faHome, faCircle, faSuitcase, faUserGroup, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header(){

    const session = await getServerSession(authOptions);

    const headergrp = [
        {label: 'Home', icon: faHome},
        {label: 'My Network', icon: faUserGroup},
        {label: 'Jobs', icon: faSuitcase},
        {label: 'Messaging', icon: faSuitcase},
        {label: 'Notifications', icon: faBell},
    ];

    return (
        <header className="flex justify-around bg-white p-1">
            <nav className="flex flex-row gap-2 items-center ml-44">
                <FontAwesomeIcon icon={faLinkedin} className="h-9 text-blue-700 text-semibold"/>
                <div className=" border border-gray-300 rounded-md">
                    <input type='text' 
                           style={{backgroundColor: '#edf3f8'}} 
                           className="p-1 text-sm"
                           placeholder="Search" 
                    />
                </div>
            </nav>

            <nav className="flex gap-7 mr-48 font-sans">

                {headergrp.map((item,index) => (
                    <div key={index} className="flex flex-col text-xs items-center text-gray-500 hover:text-black">
                        <FontAwesomeIcon icon={item.icon} className="h-4 mt-1"/>
                        <h1 className="">{item.label}</h1>
                    </div>
                ))}

                <div className="flex flex-col text-xs items-center text-gray-500 hover:text-black">
                    <Image 
                        className="rounded-full w-[20px] h-[20px] object-cover border-b shadow-sm shadow-black"
                        src={session?.user?.image} 
                        alt="avatar" 
                        width={64} 
                        height={64}
                    />
                    <div className="flex gap-1 items-center">
                        <h1 className="">Me</h1>
                        <FontAwesomeIcon icon={faSortDown} className="h-3 mb-1"/>
                    </div>
                </div>

                {!session && (
                    <nav className="flex items-center text-gray-500 font-semibold">
                        <Link href={'/login'}>
                            Login
                        </Link>
                    </nav>
                )}
                
                {!!session && (<nav className="flex items-center text-gray-500 font-semibold">
                    <LogoutButton />
                </nav>
                )}
            </nav>
        </header>
    )
}