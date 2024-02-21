import React, { useState } from 'react';

interface DropdownProps {
    title: string;
    items: string[];
    icon: any;
    isSidebarClosed?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, icon, isSidebarClosed }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center w-full py-4 px-6 ">
                <img src={icon} alt="" className="mr-2" />
                {isSidebarClosed ? <span>{title}</span> : null}
            </button>
            {isOpen && (
                <ul className=" top-full left-2 w-full z-10">
                    {items.map((item, index) => (
                        <li key={index} className={'py-2 px-6 ms-10 ' + (isOpen ? '' : '')}>
                            <div className="block">{item}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
