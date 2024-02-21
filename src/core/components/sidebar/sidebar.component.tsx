import React, { useEffect, useState } from "react";
import Dropdown from "./dropdown";

import home from '../../../assets/icons/home.svg';
import building from '../../../assets/icons/building.svg';
import unit from '../../../assets/icons/unit.svg';
import filter from '../../../assets/icons/filter.svg';
import collection from '../../../assets/icons/collection.svg';
import users from '../../../assets/icons/users.svg';
import analytics from '../../../assets/icons/analytics.svg';
import help from '../../../assets/icons/help.svg';
import sideBtn from '../../../assets/icons/sidebar-btn.svg';

const AppSidebar = () => {
    const [sidebar, setSidebar] = useState(true);

    useEffect(() => {
        localStorage.setItem('sidebar', JSON.stringify(sidebar))
    }, [sidebar])

    return (
        <div className={'bg-white fixed top-0 text-link flex flex-col font-semibold h-screen ' + (sidebar ? 'w-64' : 'w-auto')}>
            <div className="h-16 flex items-center justify-between ps-5">
                <span className="text-3xl font-bold">JIIBS</span>
                <img src={sideBtn} alt="" className="cursor-pointer mr-2" onClick={() => setSidebar((c: boolean) => !c)} />
            </div>
            <ul className="flex-1 ms-4">
                <li className="py-4 px-6  flex items-center">
                    <img src={home} alt="" className="mr-2" />
                    {sidebar ? <div className="hover:text-gray-400 cursor-pointer" onClick={() => console.log('Home clicked')}>Home</div> : null}
                </li>
                <li className="py-4 px-6  flex items-center">
                    <img src={building} alt="" className="mr-2" />
                    {sidebar ? <div className="hover:text-gray-400 cursor-pointer" onClick={() => console.log('Settings clicked')}>Building</div> : null}
                </li>
                <li className="py-4 px-6  flex items-center">
                    <img src={unit} alt="" className="mr-2" />
                    {sidebar ? <div className="hover:text-gray-400 cursor-pointer" onClick={() => console.log('Settings clicked')}>Units</div> : null}
                </li>
                <Dropdown title="Filters" isSidebarClosed={sidebar} icon={filter} items={['Neighborhood', 'Amenities', 'Lifestyle']} />
                <li className="py-4 px-6  flex items-center">
                    <img src={collection} alt="" className="mr-2" />
                    {sidebar ? <div className="hover:text-gray-400 cursor-pointer" onClick={() => console.log('Settings clicked')}>Collection</div> : null}
                </li>
                <Dropdown title="People" isSidebarClosed={sidebar} icon={users} items={['Users', 'Clients']} />
                <li className="py-4 px-6  flex items-center">
                    <img src={analytics} alt="" className="mr-2" />
                    {sidebar ? <div className="hover:text-gray-400 cursor-pointer" onClick={() => console.log('Settings clicked')}>Analytics</div> : null}
                </li>
                <li className="py-4 px-6  flex items-center">
                    <img src={help} alt="" className="mr-2" />
                    {sidebar ? <div className="hover:text-gray-400 cursor-pointer" onClick={() => console.log('Settings clicked')}>Help Center</div> : null}
                </li>
            </ul>
        </div>
    )
}

export default AppSidebar;

