import React from "react";

import AppTable from "../core/components";

import placeholder from '../assets/images/placeholder.png';
import search from '../assets/icons/search.svg';
import sort from '../assets/icons/sort.svg';

const AppViewDetails = () => {

    const data = [
        {
            image: placeholder,
            name: 'All',
            building: 8,
            units: 9
        }
    ]

    const columns = [
        { key: '', header: '', type: 'checkbox' },
        { key: 'image', header: '', type: 'image' },
        { key: 'name', header: 'Title', class: 'w-4/6' },
        { key: 'building', header: 'Buildings' },
        { key: 'units', header: 'Units' },
    ];


    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-2xl mb-5 mt-10">Lifestyle</h3>
                <button className="bg-btn hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create
                </button>
            </div>

            <div className="bg-white rounded-lg">
                <p className="pt-4"></p>
                <div className="flex items-center justify-between ps-4 pe-4 mb-4">
                    <button className="bg-black text-white hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 border border-gray-800 rounded focus:outline-none focus:shadow-outline">
                        All
                    </button>
                    <div>
                        <button className="bg-transparent mr-2 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
                            <img src={search} alt="" />
                        </button>
                        <button className="bg-transparent hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
                            <img src={sort} alt="" />
                        </button>
                    </div>
                </div>
                <AppTable data={data} columns={columns} />
            </div>
        </>
    )
}

export default AppViewDetails;