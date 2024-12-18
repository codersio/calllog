import { useRef, useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import Header from './Header';
import Nav from './Nav';
import {
    IoAnalytics,
    IoArchiveOutline, IoBuildOutline, IoCallOutline, IoChatbox, IoChatboxOutline, IoChevronForward, IoCog, IoConstruct, IoConstructOutline,
    IoCubeOutline, IoCubeSharp, IoDocumentTextOutline, IoGridOutline, IoMailOutline,
    IoNotificationsOutline, IoPeopleOutline
} from 'react-icons/io5';
import { FaX } from 'react-icons/fa6';
import { IoIosNotificationsOutline, IoMdSettings } from 'react-icons/io';
import { FaRegUserCircle, FaTasks } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';

export default function AdminLayout({ header, children, notif, user_type }) {
    const { props } = usePage();
    const [permissions, setPermissions] = useState([]);
    useEffect(() => {
        if (Array.isArray(props.auth.permissions)) {
            setPermissions(props.auth.permissions);
        }
    }, [props]);

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showProductSubMenu, setShowProductSubMenu] = useState(false); // New state for toggling product submenu
    const [showReportSubMenu, setShowReportSubMenu] = useState(false); // New state for toggling product submenu
    const [showSalesSubMenu, setShowSalesSubMenu] = useState(false); // New state for toggling product submenu
    const [showGeneralSetupSubMenu, setShowGeneralSetupSubMenu] = useState(false); // New state for toggling product submenu
    const [showSettingsSubMenu, setShowSettingsSubMenu] = useState(false); // New state for toggling product submenu
    const toggleNotification = (e) => {
        e.stopPropagation();
        setNotifyModal(prev => !prev);
        setProfile(false);
    };

    const toggleProfile = (e) => {
        e.stopPropagation();  // Prevent propagation to the body or other handlers
        setProfile(prev => !prev);
        setNotifyModal(false);  // Close notification modal when profile is opened
    };

    const dropdownRef = useRef(null);
    const [profile, setProfile] = useState(false);
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

    const { url } = usePage()

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

            <aside className='w-64 h-full flex flex-col border-r border-gray-300'>
                <div className='flex justify-center pt-2'>
                    <img width={130} src="/logo/logo2.jpg" alt="" />
                    {/* <img width={80} src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-modern-demo-logo-vector-file-png-image_9012000.png" alt="" /> */}
                </div>
                <ul className='p-4 flex-1 overflow-y-auto custom-scrollbar space-y-2'>
                    <li>
                        <Link href='/' className={`flex items-center p-3 rounded gap-x-1 transition duration-300 hover:bg-rose-500 hover:text-white ${url === '/'?'text-white bg-rose-500': ''}`}>
                            <IoGridOutline size={15} />
                            <span className='text-sm'>Dashboard</span>
                        </Link>
                       
                    </li>
                    <li>
                        {/* Products with Submenu */}
                        <div>
                            <button onClick={() => setShowGeneralSetupSubMenu(!showGeneralSetupSubMenu)} className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white w-full ${url === '/tasktype' || url === '/interval' || url === '/tax' || url === '/purchase' || url === '/stocks'?'text-white bg-rose-500': ''}`}>
                                <IoCog size={15} />
                                <span className='text-sm'>Master</span>
                                <IoChevronForward size={15} className={`ml-auto transition-all duration-300 ${showGeneralSetupSubMenu ? 'rotate-90' : 'rotate-0'}`}/>
                            </button>
                            {showGeneralSetupSubMenu && (
                                <ul className='ml-4 space-y-2'>
                                    <li>
                                        <Link href='/tasktype' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Task Type</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/interval' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Interval</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/tax' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Tax</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/purchase' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Purchase</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/stocks' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Stock</span>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href='/distributers' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Distributor</span>
                                        </Link>
                                    </li> */}
                                </ul>
                            )}
                        </div>
                    </li>
                    {/* <li>
                        <Link href='/distributers' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Warranty-Extend'?'text-white bg-rose-500': ''}`}>
                            <IoPeopleOutline size={15} />
                            <span className='text-sm'>Distributor</span>
                        </Link>
                    </li> */}
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_distributers') ?
                            (<li>
                                <Link href='/distributers' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/distributers'?'text-white bg-rose-500': ''}`}>
                                    <IoArchiveOutline size={15} />
                                    <span className='text-sm'>Distributor</span>
                                </Link>
                            </li>) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_service_center')
                            ?
                            (<li>
                                <Link href='/service-centers' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/service-centers'?'text-white bg-rose-500': ''}`}>
                                    <IoConstructOutline size={15} />
                                    <span className='text-sm'>Service Center</span>
                                </Link>
                            </li>) : ''
                    }
                    {/* <li>
                        <div>
                            <button onClick={() => setShowProductSubMenu(!showProductSubMenu)} className='flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white w-full'>
                                <IoCubeOutline size={15} />
                                <span className='text-sm'>Products</span>
                            </button>
                            {showProductSubMenu && (
                                <ul className='ml-4 space-y-2'>
                                    <li>
                                        <Link href='/products-category' className='flex items-center gap-x-1 p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Add Category </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/products' className='flex items-center gap-x-1
                                         p-2 hover:bg-gray-100'>
                                            <IoChevronForward size={15} />
                                            <span className='text-sm'>Create Product</span>
                                        </Link>
                                    </li>
                                     <li>
                                        <Link href='/products/category3' className='flex items-center p-2 hover:bg-gray-100'>
                                            <span className='text-sm'>Category 3</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li> */}
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_spare_parts') ? (
                            <li>
                                <Link href='/spare-part' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/spare-part'?'text-white bg-rose-500': ''}`}>
                                    <IoBuildOutline size={15} />
                                    <span className='text-sm'>Spare & Parts</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_call_allocation') ? (
                            <li>
                                <Link href='/Call-Allocation' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Call-Allocation'?'text-white bg-rose-500': ''}`}>
                                    <IoCallOutline size={15} />
                                    <span className='text-sm'>Call Allocation</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_extended_warranty') ? (
                            <li>
                                <Link href='/Warranty-Extend' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Warranty-Extend'?'text-white bg-rose-500': ''}`}>
                                    <IoDocumentTextOutline size={15} />
                                    <span className='text-sm'>Extened Warrenty</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_client') ? (
                            <li>
                                <Link href='/Client' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Client'?'text-white bg-rose-500': ''}`}>
                                    <IoPeopleOutline size={15} />
                                    <span className='text-sm'>Client</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_employee') ? (
                            <li>
                                <Link href='/Employee' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Employee'?'text-white bg-rose-500': ''}`}>
                                    <IoPeopleOutline size={15} />
                                    <span className='text-sm'>Employees</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_product') ? (
                            <li>
                                <Link href='/Product-List' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Product-List'?'text-white bg-rose-500': ''}`}>
                                    <IoCubeOutline size={15} />
                                    <span className='text-sm'>Products</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_quotation') ? (
                            <li>
                                <Link href='/Quotation' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Quotation'?'text-white bg-rose-500': ''}`}>
                                    <IoChatboxOutline size={15} />
                                    <span className='text-sm'>Quotation</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_services') ? (
                            <li>
                                <Link href='/services' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/services'?'text-white bg-rose-500': ''}`}>
                                    <IoConstructOutline size={15} />
                                    <span className='text-sm'>Services</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {/* <li>
                        <Link href='/sales' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/Warranty-Extend'?'text-white bg-rose-500': ''}`}>
                            <IoCallOutline size={15} />
                            <span className='text-sm'>Sales</span>
                        </Link>
                    </li> */}
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_sales') ? (
                            <li>
                                {/* Products with Submenu */}
                                <div>
                                    <button onClick={() => setShowProductSubMenu(!showProductSubMenu)} className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white w-full ${url === '/sales' || url === '/amc-expense-index' || url === '/income'?'text-white bg-rose-500': ''}`}>
                                        <IoCallOutline size={15} />
                                        <span className='text-sm'>Sales</span>
                                        <IoChevronForward size={15} className={`ml-auto transition-all duration-300 ${showProductSubMenu ? 'rotate-90' : 'rotate-0'}`}/>
                                    </button>
                                    {showProductSubMenu && (
                                        <ul className='ml-4 space-y-2'>
                                            <li>
                                                <Link href='/sales' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                                    <IoChevronForward size={15} />
                                                    <span className='text-sm'>Bill</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/amc-expense-index' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                                    <IoChevronForward size={15} />
                                                    <span className='text-sm'>Expense</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/income' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                                    <IoChevronForward size={15} />
                                                    <span className='text-sm'>Income</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_amc') ? (
                            <li>
                                <Link href='/amc' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/amc'?'text-white bg-rose-500': ''}`}>
                                    <IoBuildOutline size={15} />
                                    <span className='text-sm'>AMC</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_complaint') ? (
                            <li>
                                <Link href='/complaint' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/complaint'?'text-white bg-rose-500': ''}`}>
                                    <IoDocumentTextOutline size={15} />
                                    <span className='text-sm'>Complaint</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_task') ? (
                            <li>
                                <Link href='/tasks' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/tasks'?'text-white bg-rose-500': ''}`}>
                                    <FaTasks size={15} />
                                    <span className='text-sm'>Tasks</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_report') ? (
                            <li>
                                {/* Products with Submenu */}
                                <div>
                                    <button onClick={() => setShowReportSubMenu(!showReportSubMenu)} className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white w-full ${url === '/complaint-reports' || url === '/sales-reports' || url === '/service-reports'?'text-white bg-rose-500': ''}`}>
                                        <IoAnalytics size={15} />
                                        <span className='text-sm'>Reports</span>
                                        <IoChevronForward size={15} className={`ml-auto transition-all duration-300 ${showReportSubMenu ? 'rotate-90' : 'rotate-0'}`}/>
                                    </button>
                                    {showReportSubMenu && (
                                        <ul className='ml-4 space-y-2'>
                                            <li>
                                                <Link href='/complaint-reports' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                                    <IoChevronForward size={15} />
                                                    <span className='text-sm'>Complaint Reports</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/sales-reports' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                                    <IoChevronForward size={15} />
                                                    <span className='text-sm'>Sales Report</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/service-reports' className='flex items-center gap-1 p-2 hover:bg-gray-100'>
                                                    <IoChevronForward size={15} />
                                                    <span className='text-sm'>Service Reports</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ) : ''
                    }
                    {
                        props.auth.user.roles[0].name === "admin" || permissions.includes('view_role') ? (
                            <li>
                                <Link href='/roles-permission-details' className={`flex items-center p-3 transition duration-300 rounded gap-x-1 hover:bg-rose-500 hover:text-white ${url === '/roles-permission-details'?'text-white bg-rose-500': ''}`}>
                                    <IoMdSettings size={15} />
                                    <span className='text-sm'>Roles & Permissions</span>
                                </Link>
                            </li>
                        ) : ''
                    }
                </ul>
            </aside>
            <div className='flex flex-col flex-1'>
                <nav className='flex items-center justify-between w-full p-3 px-6 border-b border-gray-300'>
                    <div></div>
                    <div className='flex items-center gap-x-2'>
                        <button onClick={(e) => setNotifyModal(true)} className='p-2 bg-gray-300 rounded'><IoNotificationsOutline size={15} /></button>
                        <button className='p-2 bg-gray-300 rounded'><IoMailOutline size={15} /></button>
                        <div className='flex space-x-2 cursor-pointer' onClick={toggleProfile}>
                            <span className="grid place-items-center"><FaRegUserCircle className='text-[1.5rem]' /></span>
                            <span className='text-[1rem]'>{props.auth.user.name}</span>
                        </div>
                        <div className='relative grid place-items-center'>
                            <div ref={dropdownRef} className={`absolute top-full p-4 -right-5 my-5 border border-gray-300 rounded w-[10rem] bg-white shadow-lg transition-all duration-300 shadow-zinc-800/50 ${profile ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-14'}`}>
                                <div>
                                    {/* <li className='p-2 text-black list-none flex space-x-2'>
                                    <span className='grid place-items-center'><FaUserCog /></span>
                                    <span><Link href="/profile">Profile</Link></span>
                                </li> */}
                                    <li className='p-2 text-black list-none'>
                                        <ResponsiveNavLink method="post" href={route('logout')} as="button" className='flex space-x-2'>
                                            <span className='grid mt-1 place-items-center'><LuLogOut /></span>
                                            <span>Log Out</span>
                                        </ResponsiveNavLink>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className='flex-1 h-full p-4 overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
}
