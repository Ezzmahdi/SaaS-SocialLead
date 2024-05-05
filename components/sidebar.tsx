'use client';

import React, { useState } from 'react';
import BAR from './sidebar.module.css'

import { Search, LucideHome, BookCopy, CalendarCheck2, BarChart2, ArrowDownNarrowWideIcon, ArrowBigDownDash, MoveDown, MoveDownIcon, ArrowDown01, ArrowUpDownIcon, ChevronDown, Edit } from 'lucide-react'
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
                        
                        
                        <li className={`${BAR['nav-link']} `}>
                            <a href="/dashboard" >
                                <i className={`icon ${BAR.icon}`}><LucideHome/></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Dashboard</span>
                            </a>
                        </li>

                        <div className={`${BAR.hovering}`}>
                        <li className={`${BAR['nav-link']} `}>
                                <a className={BAR.a} href="/content" >
                                    <i className={`${BAR.icon}`}><BookCopy/></i>
                                    <span className={`${BAR.text} ${BAR['nav-text']}`}>Content</span>
                                </a>
                                <i> <ChevronDown /> </i>    
                        </li>
                        <ul className={`${BAR.submenu}`}>
                            <li><a href="/templates">Write</a></li>
                            <li><a href="/image">Image</a></li>
                            <li><a href="/music">Music</a></li>
                            <li><a href="/Video">Video</a></li>
                        </ul>
                        </div>

                        <div className={`${BAR.hovering}`}>
                            <li className={`${BAR['nav-link']} `}>
                                <a href="/edit" >
                                    <i className={`${BAR.icon}`}><Edit/></i>
                                    <span className={`${BAR.text} ${BAR['nav-text']}`}>Edit</span>
                                </a>
                                <i> <ChevronDown /> </i>
                            </li>
                            <ul className={`${BAR.submenu}`}>
                                
                                {navLinks.slice(0, 6).map((link) => {
                                  return (
                                    <li key={link.route}>
                                      <a href={link.route}>
                                        {link.label}
                                      </a>
                                    </li>
                                  )
                                })}
    
                            </ul>
                        </div>

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
