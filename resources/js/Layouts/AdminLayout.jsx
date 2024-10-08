import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Header from './Header';
import Nav from './Nav';
import { IoArchiveOutline, IoBuildOutline, IoCallOutline, IoConstructOutline, IoCubeOutline, IoDocumentTextOutline, IoGridOutline, IoMailOutline, IoNotificationsOutline, IoPeopleOutline } from 'react-icons/io5';

export default function AdminLayout({ header, children, user, usrrr, notif, user_type }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div class="fixed w-full h-full left-0 top-0 flex">
            <aside className='w-64 h-full border-r border-gray-300'>
                <div className='flex justify-center'>
                    <img width={80} src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-modern-demo-logo-vector-file-png-image_9012000.png" alt="" />
                </div>
                <ul className='p-4 space-y-2'>
                    <li>
                        <Link className='flex items-center gap-x-1 bg-rose-500 p-3 rounded text-white'>
                            <IoGridOutline size={15}/>
                            <span className='text-sm'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoPeopleOutline size={15}/>
                            <span className='text-sm'>Distributor</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoArchiveOutline size={15}/>
                            <span className='text-sm'>Dealer</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoConstructOutline size={15}/>
                            <span className='text-sm'>Service Center</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoCubeOutline size={15}/>
                            <span className='text-sm'>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoBuildOutline size={15}/>
                            <span className='text-sm'>Spare & Parts</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoCallOutline size={15}/>
                            <span className='text-sm'>Call Allocation</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-x-1 transition duration-300 hover:bg-rose-500 p-3 rounded hover:text-white'>
                            <IoDocumentTextOutline size={15}/>
                            <span className='text-sm'>Extened Warrenty</span>
                        </Link>
                    </li>
                </ul>
            </aside>
            <div className='flex-1 flex flex-col'>
                <nav className='w-full p-3 border-b border-gray-300 px-6 flex justify-between items-center'>
                    <div>

                    </div>
                    <div className='flex items-center gap-x-2'>
                        <button className='p-2 bg-gray-300 rounded'><IoNotificationsOutline size={15}/></button>
                        <button className='p-2 bg-gray-300 rounded'><IoMailOutline size={15}/></button>
                        <button className=''>
                            <img className='w-7 h-7 object-cover rounded-full' src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" alt="" />
                        </button>
                    </div>
                </nav>
                <div className='p-4 flex-1 h-full overflow-y-auto'>
                {children}
                </div>
            </div>
        </div>

    );
}
