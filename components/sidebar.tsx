'use client';

import React, { useState } from 'react';
import BAR from './sidebar.module.css'

import { Search, LucideHome, BookCopy, CalendarCheck2, BarChart2, ArrowDownNarrowWideIcon, ArrowBigDownDash, MoveDown, MoveDownIcon, ArrowDown01, ArrowUpDownIcon, ChevronDown, Edit, Pen, PencilLineIcon, Film, ImageIcon } from 'lucide-react'
import { FreeCounter } from '@/components/freecounter';

import { navLinks } from '@/constants/index'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button';

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

export default function Sidebar({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) {

    const pathname = usePathname();

  return (
        <nav className={`${BAR.sidebar}`}>

            <li className={`${BAR.icon} m-2`}>
                <img src="icon.svg" alt="Icon" />
            </li>  

            <div className={BAR.menubar}>
                <div className={BAR.menu}>

                    

                    <li className={BAR.searchbox}>
                        <i className={`${BAR.icon}`}><Search/></i>
                        <input type="search" placeholder="Search..." className={BAR.input}/>
                    </li>   
                                  
                    <ul className={BAR.menulinks}> 
                        
                        
                        <li className={`${BAR['nav-link']} `}>
                            <a href="/dashboard" >
                                <i className={`icon ${BAR.icon}`}><LucideHome/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Dashboard</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="/compose" >
                                <i className={`icon ${BAR.icon}`}><PencilLineIcon/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Compose</span>
                            </a>
                        </li>

                        
                        <li className={`${BAR['nav-link']} `}>
                                <a className={BAR.a} href="/templates" >
                                    <i className={`${BAR.icon}`}><BookCopy/></i>
                                    <span className={`${BAR.text} ${BAR['nav-text']}`}>Magic Write</span>
                                </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                                <a className={BAR.a} href="/video" >
                                    <i className={`${BAR.icon}`}><Film/></i>
                                    <span className={`${BAR.text} ${BAR['nav-text']}`}>AI Video</span>
                                </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="/images" >
                                <i className={`${BAR.icon}`}><ImageIcon/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Imagify</span>
                            </a>
                        </li>
                        
                        <li className={`${BAR['nav-link']}`}>
                            <a href="/schedule" >
                                <i className={`${BAR.icon}`}><CalendarCheck2/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Schedule</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']}`}>
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

                    {/* <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} /> */}

                </div>
            </div>

        </nav>


  )
}
