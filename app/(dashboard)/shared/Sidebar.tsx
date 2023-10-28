"use client"

import React from 'react'
import classNames from 'classnames'
import { PiExamFill } from 'react-icons/pi'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white'

export default function Sidebar() {
    return (
        <div className="bg-neutral-900 w-60 p-3 flex flex-col">
            <div className="flex items-center  gap-2 px-1 py-3">
                <PiExamFill className="bg-white rounded" fontSize={24} />
                <span className="text-neutral-200 text-2xl text-center">Exambot</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                    // <p key={link.key}>{link.path}</p>
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                    // <p key={link.key}>{link.path}</p>
                ))}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}


function SidebarLink({ link }: { link: any }) {

    const pathname = usePathname()

    return (
        <Link
            href={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}

        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}