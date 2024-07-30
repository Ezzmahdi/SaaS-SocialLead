import { UserButton } from "@clerk/nextjs";
import DASH from './Dashboard.module.css'

import { Search, CloudDownload, CalendarCheck, EyeIcon, LineChart, Heart, Filter, Plus, Notebook, CheckCircle, DotSquareIcon, ReceiptIcon, PenIcon } from 'lucide-react'
import Link from "next/link";


export default function DashboardPage() {
    return (
      <div>
        <div className={DASH.content}>
            <nav>
                <i></i>
                <form action="#">
                    <div className={DASH.forminput}>
                        <input type="search" placeholder="Search..."/>
                        <button className='search-btn' type="submit"><i className=''><Search/></i></button>
                    </div>
                </form>
                {/* <Link href="#" className={`${DASH.notif} ${DASH.a}`}>
                    <i className='bx bx-bell'></i>
                    <span className={DASH.count}>0</span>
                </Link> */}
                <Link href="#" className={`${DASH.profile} ${DASH.a}`}>
                  <UserButton afterSignOutUrl="/"/>
                </Link>
            </nav>
            <main>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-lg mb-6">
                    <p className="font-semibold text-white mb-1"><span className="text-lg">🟢</span> Welcome Mahdi! 🥳</p>
                    <p className="text-white mb-1" >You want to add a few more socials? Don't worry, you can also add them later.</p>
                </div>

                <div className="my-6 w-full">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Upcoming posts</h2>
                    <table className="table w-full bg-white dark:bg-zinc-800 p-4 rounded-lg shadow mt-4">
                        <tr>
                            <td className="text-zinc-600 dark:text-zinc-400 p-4">15:13 Mar 28</td>
                            <td className="text-zinc-600 dark:text-zinc-400 p-4">According to HubSpot, 21% of people will unfollow you on social media if you bomba...</td>
                            <td className="text-zinc-600 dark:text-zinc-400 p-4">Calendar</td>
                        </tr>
                        <tr>
                            <td className="text-zinc-600 dark:text-zinc-400 p-4">11:24 Tomorrow</td>
                            <td className="text-zinc-600 dark:text-zinc-400 p-4">Have you constantly held to the one social media management tool? HootSuite usual...</td>
                            <td className="text-zinc-600 dark:text-zinc-400 p-4">Blog Post</td>
                        </tr>
                    </table>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {/* <div id="w-node-b09697f6-a0ff-ceb7-2d79-e63b2b869ad0-2b869acf" className="relative overflow-hidden rounded-3xl bg-white shadow-lg p-[20px]">
                        <div className="features-block-content-wrap">
                            <div className="bg-sociallead rounded-md p-2 w-15 h-15 mb-2 text-lg font-semibold shadow-md">
                                26K
                            </div>
                            <div className="features-block-text-wrap">
                                <div className="features-block-heading">Users</div>
                                <p className="para">(+1.24% vs last month)</p>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-b09697f6-a0ff-ceb7-2d79-e63b2b869ad0-2b869acf" className="relative overflow-hidden rounded-3xl bg-white shadow-lg p-[20px]">
                        <div className="features-block-content-wrap">
                            <div className="bg-sociallead rounded-md p-2 w-15 h-15 mb-2 text-lg font-semibold shadow-md">
                                $6,200
                            </div>
                            <div className="features-block-text-wrap">
                                <div className="features-block-heading">Income</div>
                                <p className="para">(+0.9% vs last month)</p>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-b09697f6-a0ff-ceb7-2d79-e63b2b869ad0-2b869acf" className="relative overflow-hidden rounded-3xl bg-white shadow-lg p-[20px]">
                        <div className="features-block-content-wrap">
                            <div className="bg-sociallead rounded-md p-2 w-15 h-15 mb-2 text-lg font-semibold shadow-md">
                                2.49%
                            </div>
                            <div className="features-block-text-wrap">
                                <div className="features-block-heading">Conversion Rate</div>
                                <p className="para">(+0.87% vs last month)</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="stats-main-wrapper md:col-span-3 p-3 rounded-lg shadow">
                        <div className="grid grid-cols">
                            <div className="stats-number-main-wrap p-3">
                                <p className="text-white m-[10px]">Visits</p>
                                <p className="text-xl font-bold text-white m-[10px]">29,703</p>
                                <p className="text-sm text-green font-semibold mx-[10px] my-[1px]">(+40%)</p>
                            </div>
                            <div className="stats-number-main-wrap p-3">
                                <p className="text-white m-[10px]">Pageviews</p>
                                <p className="text-xl font-bold text-white m-[10px]">78,706</p>
                                <p className="text-sm text-green font-semibold mx-[10px] my-[1px]">(+60%)</p>
                            </div>
                            <div className="stats-number-main-wrap p-3">
                                <p className="text-white m-[10px]" >New Followers</p>
                                <p className="text-xl font-bold text-white m-[10px]">22,123</p>
                                <p className="text-sm text-green font-semibold mx-[10px] my-[1px]">(+80%)</p>
                            </div>
                        </div>
                    </div>
                    <div><p className="text-transparent invisible">Ya ALi Madad</p></div>
                </div>
            </main>
        </div>
      </div>
    );
  }