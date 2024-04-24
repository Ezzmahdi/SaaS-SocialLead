'use client';

import React, { useState } from 'react';
import BAR from './sidebar.module.css'

import { Search, LucideHome, BookCopy, CalendarCheck2, BarChart2 } from 'lucide-react'
import { FreeCounter } from '@/components/freecounter';

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

export default function Sidebar({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) {

  return (
        <nav className={`${BAR.sidebar}`}>
            <header>
                <div className={BAR.imagetext}>
                    <span className={BAR.image}>
                        <img src="logo.svg" alt="logo"/>
                    </span>

                    <div className={`${BAR.text} ${BAR.headertextBAR}`}>
                        <span className={BAR.name}>User</span>
                        <span className={BAR.profession}>Agent</span>
                    </div>
                </div>

            </header>

            <div className={BAR.menubar}>
                <div className={BAR.menu}>

                    <li className={BAR.searchbox}>
                        <i className={`${BAR.icon}`}><Search/></i>
                        <input type="search" placeholder="Search..." className={BAR.input}/>
                    </li>

                    <ul className={BAR.menulinks}>
                        <li>
                            <a href="/dashboard" >
                                <i className={`icon ${BAR.icon}`}><LucideHome/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Dashboard</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a className={BAR.a} href="/content" >
                                <i className={`${BAR.icon}`}><BookCopy/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Content</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="/schedule" >
                                <i className={`${BAR.icon}`}><CalendarCheck2/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Schedule</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="/analytics" >
                                <i className={`${BAR.icon}`}><BarChart2/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Analytics</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className={`${BAR['bottom-content']}`}>

                    {/* <li className={`${BAR.mode} `}>
                        <div className={`${BAR['moon-sun']}`}>
                            <i className={`bx bx-moon ${BAR.icon} ${BAR.moon}`}></i>
                            <i className={`bx bx-sun ${BAR.icon} ${BAR.sun}`}></i>
                        </div>

                        <span className={`${BAR.modetext} ${BAR.text}`}>Dark Mode</span>

                        <div className={BAR.toggleswitch}>
                            <span className={BAR.switch}></span>
                        </div>

                    </li> */}

                    <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />

                </div>
            </div>

        </nav>


  )
}
