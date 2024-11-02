import AdminLayout from '@/Layouts/AdminLayout';
import Header from '@/Layouts/Header'
import Nav from '@/Layouts/Nav';
import { Link, usePage } from '@inertiajs/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Roles = ({ user, user_type, roles, notif }) => {
    const { props } = usePage();
    const [permissions, setPermissions] = useState([]);
    useEffect(() => {
        if (Array.isArray(props.auth.permissions)) {
            setPermissions(props.auth.permissions);
        }
    }, [props]);
    return (
        // <div className='w-[85.2%] ml-[12rem]'>
        //    <Header user={user} notif={notif}/>
        //    <Nav user_type={user_type}/>
        <AdminLayout>
            <div className='flex justify-end px-[15rem]'>
                {
                    props.auth.user.roles[0].name === "admin" || permissions.includes('create_role') ?
                        (
                            <Link href='/roles-permission' className='p-2 text-black underline rounded-md '>
                                Add New
                            </Link>
                        ) : ''
                }
            </div>
            <div className="px-[15rem]  ta">
                <table className='w-full border '>
                    <thead className='bg-[#0A1B3F] text-white'>
                        <tr>
                            <th className='p-2 text-left border '>Role</th>
                            <th className='p-2 text-left border '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.map(role => (
                                <tr>
                                    <td className='p-2 text-left border '>{role.name}</td>
                                    <td className='p-2 text-left border '>
                                        {
                                            props.auth.user.roles[0].name === "admin" || permissions.includes('edit_role') ?
                                                (
                                                    <Link href={`/roles-permission-edit/${role.id}`}>edit</Link>
                                                ) : ''
                                        }
                                    </td>
                                </tr>
                            ))
                        }





                    </tbody>
                </table>
            </div>
        </AdminLayout>
        // </div>
    )
}

export default Roles;
