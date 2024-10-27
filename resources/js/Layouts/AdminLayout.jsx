import { useRef, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Header from './Header';
import Nav from './Nav';
import { 
    IoArchiveOutline, IoBuildOutline, IoCallOutline, IoConstructOutline, 
    IoCubeOutline, IoDocumentTextOutline, IoGridOutline, IoMailOutline, 
    IoNotificationsOutline, IoPeopleOutline 
} from 'react-icons/io5';
import { FaX } from 'react-icons/fa6';
import { IoIosNotificationsOutline } from 'react-icons/io';

export default function AdminLayout({ header, children, user, usrrr, notif, user_type }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showProductSubMenu, setShowProductSubMenu] = useState(false); // New state for toggling product submenu
    const toggleNotification = (e) => {
        e.stopPropagation();
        setNotifyModal(prev => !prev);
        setProfile(false);
    };

    const notificationRef = useRef(null);
    const [notifyModal, setNotifyModal] = useState(false);
    
    const handleNotificationClick = async (notificationId) => {
        try {
            await axios.post(`readta/${notificationId}`);
            setUnreadCount(prevCount => Math.max(prevCount - 1, 0));
        } catch (error) {
            console.error('Error marking notification as read', error);
        }
    };

    return (
        <div className="fixed w-full h-full left-0 top-0 flex">
            {/* Notification Modal */}
            <div ref={notificationRef} className={`fixed top-0 z-30 right-0 left-0 flex justify-end w-full h-full bg-black/30 backdrop-blur-sm transition-all duration-300 ${notifyModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 delay-300 pointer-events-none'}`}>
                <div className='bg-white scrollbar-thumb-sky-700 scrollbar-track-white'>
                    <div className='flex items-center justify-between px-2 py-3'>
                        <h1 className='text-xl font-semibold'>Notifications</h1>
                        <button onClick={toggleNotification}><FaX size={16} /></button>
                    </div>
                    <div className='h-[30rem] w-[20rem] space-y-3 overflow-y-scroll bg-white scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-white'>
                        {notif?.map(nofit => (
                            <a
                                key={nofit.id}
                                onClick={() => handleNotificationClick(nofit.id)}
                                href={nofit.data.url}
                                className='flex items-center w-full p-2.5 gap-x-4 hover:bg-gray-100 shadow-md shadow-gray-200 rounded'
                            >
                                <div className='border border-gray-200 p-1.5 rounded-full'>
                                    <BiTask size={18} className='text-green-500' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-sm font-medium text-gray-800'>{nofit.data.project}</span>
                                    <span className='font-semibold text-blue-500'>{nofit.data.employee_id}</span>
                                    <span className='text-sm text-gray-700'>{nofit.data.message}</span>
                                </div>
                                {!nofit.read_at && (
                                    <span className='bg-red-500 w-1.5 h-1.5 rounded-full ml-auto'></span>
                                )}
                            </a>
                        ))}
                    </div>
                    <div className='p-5'>
                        <Link href="/notifications-get" className='flex items-center justify-center w-full py-2 text-sm text-center text-white bg-blue-500 rounded'>
                            <IoIosNotificationsOutline className='text-[1.5rem]' />
                            <span>See All Notifications</span>
                        </Link>
                    </div>
                </div>
            </div>

            <aside className='w-64 h-full border-r border-gray-300'>
                <div className='flex justify-center'>
                    <img width={80} src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-modern-demo-logo-vector-file-png-image_9012000.png" alt="" />
                </div>
                <ul className='p-4 space-y-2'>
                    <li>
                        <Link href='/dashboard' className='flex items-center p-3 text-white rounded gap-x-1 bg-rose-500'>
                            <IoGridOutline size={15} />
                            <span className='text-sm'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/distributers' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoPeopleOutline size={15} />
                            <span className='text-sm'>Distributor</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/delars' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoArchiveOutline size={15}/>
                            <span className='text-sm'>Dealer</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/service-centers' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoConstructOutline size={15} />
                            <span className='text-sm'>Service Center</span>
                        </Link>
                    </li>
                    <li>
                        {/* Products with Submenu */}
                        <div>
                            <button onClick={() => setShowProductSubMenu(!showProductSubMenu)} className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white w-full'>
                                <IoCubeOutline size={15} />
                                <span className='text-sm'>Products</span>
                            </button>
                            {showProductSubMenu && (
                                <ul className='ml-4 space-y-2'>
                                    <li>
                                        <Link href='/products-category' className='flex items-center p-2 hover:bg-gray-100'>
                                            <span className='text-sm'>Add Category </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/products' className='flex items-center p-2 hover:bg-gray-100'>
                                            <span className='text-sm'>Create Product</span>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href='/products/category3' className='flex items-center p-2 hover:bg-gray-100'>
                                            <span className='text-sm'>Category 3</span>
                                        </Link>
                                    </li> */}
                                </ul>
                            )}
                        </div>
                    </li>
                    <li>
                        <Link href='/spare-part' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoBuildOutline size={15} />
                            <span className='text-sm'>Spare & Parts</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/Call-Allocation' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoCallOutline size={15} />
                            <span className='text-sm'>Call Allocation</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/Warranty-Extend' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoDocumentTextOutline size={15} />
                            <span className='text-sm'>Extened Warrenty</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/Client' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoPeopleOutline size={15} />
                            <span className='text-sm'>Client</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/Employee' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoPeopleOutline size={15} />
                            <span className='text-sm'>Employees</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/Product-List' className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white'>
                            <IoPeopleOutline size={15} />
                            <span className='text-sm'>Products</span>
                        </Link>
                    </li>
                </ul>
            </aside>

            <div className='flex flex-col flex-1'>
                <nav className='flex items-center justify-between w-full p-3 px-6 border-b border-gray-300'>
                    <div></div>
                    <div className='flex items-center gap-x-2'>
                        <button onClick={(e) => setNotifyModal(true)} className='p-2 bg-gray-300 rounded'><IoNotificationsOutline size={15} /></button>
                        <button className='p-2 bg-gray-300 rounded'><IoMailOutline size={15} /></button>
                        <button className=''>
                            <img className='object-cover rounded-full w-7 h-7' src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" alt="" />
                        </button>
                    </div>
                </nav>

                <div className='flex-1 h-full p-4 overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
}
