import { UserButton } from "@clerk/nextjs";
import DASH from './Dashboard.module.css'

import { Search, CloudDownload, CalendarCheck, EyeIcon, LineChart, Heart, Filter, Plus, Notebook, CheckCircle, DotSquareIcon, ReceiptIcon, PenIcon } from 'lucide-react'


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
                {/* <a href="#" className={`${DASH.notif} ${DASH.a}`}>
                    <i className='bx bx-bell'></i>
                    <span className={DASH.count}>0</span>
                </a> */}
                <a href="#" className={`${DASH.profile} ${DASH.a}`}>
                  <UserButton afterSignOutUrl="/"/>
                </a>
            </nav>
            <main>
                <div className={`${DASH.header}`}>
                    <div className={`${DASH.left}`}>
                        <h1>Dashboard</h1>
                        <ul className={`${DASH.breadcrumb}`}>
                            <li className={DASH.li}><a href="#" className={DASH.a}>
                                Analytics
                            </a></li>
                            /
                            <li className={DASH.li}><a href="#" className={`active ${DASH.a}`}>Stats</a></li>
                        </ul>
                    </div>
                    <a href="#" className={`${DASH.report} ${DASH.a}`} style={{background: 'blue'}}>
                        <i className=''><CloudDownload/></i>
                        <span>Download CSV</span>
                    </a>
                </div>
                <ul className={DASH.insights}>
                    <li className={DASH.li}>
                        <i className={`${DASH.bx}`}><CalendarCheck size={44}/></i>
                        <span className={DASH.info}>
                            <h3>
                                0
                            </h3>
                            <p>Posts</p>
                        </span>
                    </li>
                    <li className={DASH.li}>
                        <i className={`${DASH.bx}`}><EyeIcon size={44}/></i>
                        <span className={DASH.info}>
                            <h3>
                                0
                            </h3>
                            <p>followers</p>
                        </span>
                    </li>
                    <li className={DASH.li}>
                        <i className={`${DASH.bx}`}><LineChart size={44}/></i>
                        <span className={DASH.info}>
                            <h3>
                                0
                            </h3>
                            <p>Views</p>
                        </span>
                    </li>
                    <li className={DASH.li}>
                        <i className={`${DASH.bx}`}><Heart size={44}/></i>
                        <span className={DASH.info}>
                            <h3>
                                0
                            </h3>
                            <p>Likes</p>
                        </span>
                    </li>
                </ul>
                <div className={`${DASH['bottom-data']}`}>
                    <div className={`${DASH.orders}`}>
                        <div className={`${DASH.header}`}>
                            <i className=''><PenIcon/></i>
                            <h3 style={{marginBottom: 0, paddingLeft: 16}}>Recent Posts</h3>
                            <i className=''><Filter/></i>
                            <i className=''><Search/></i>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Post</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p style={{marginBottom: 0, paddingLeft: 16}}>SocialLead</p>
                                    </td>
                                    <td>14-08-2023</td>
                                    <td><span className={`${DASH.status} ${DASH.completed}`}>Completed</span></td>
                                </tr>
                                {/* <tr>
                                    <td>
                                        <p>John Doe</p>
                                    </td>
                                    <td>14-08-2023</td>
                                    <td><span className={`${DASH.status} ${DASH.pending}`}>Pending</span></td>
                                </tr> */}
                                {/* <tr>
                                    <td>
                                        <p>John Doe</p>
                                    </td>
                                    <td>14-08-2023</td>
                                    <td><span className={`${DASH.status} ${DASH.process}`}>Processing</span></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className={`${DASH.reminders}`}>
                        <div className={`${DASH.header}`}>
                            <i className={`${DASH.bx}`}><Notebook/></i>
                            <h3 style={{marginBottom: 0, paddingLeft: 16}} >Reminders</h3>
                            <i className=''><Filter/></i>
                            <i className=''><Plus/></i>
                        </div>
                        <ul className={DASH.tasklist}>
                    <li className={`${DASH.completed} ${DASH.li}`}>
                        <div className={DASH.tasktitle}>
                            <i className=''><CheckCircle/></i>
                            <p style={{margin: 0, paddingLeft: 16}}>Post a story</p>
                        </div>
                        <i className=''><DotSquareIcon/></i>
                    </li>
                    {/* <li className={`${DASH.completed} ${DASH.li}`}>
                        <div className={DASH.tasktitle}>
                            <i className='bx bx-check-circle'></i>
                            <p style={{margin: 0, paddingLeft: 16}}>Analyse Our Site</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li> */}
                    {/* <li className={`${DASH.notcompleted} ${DASH.li}`}>
                        <div className={DASH.tasktitle}>
                            <i className='bx bx-x-circle'></i>
                            <p style={{margin: 0, paddingLeft: 16}}>Play Footbal</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li> */}
                </ul>
                    </div>
                </div>
            </main>
        </div>
      </div>
    );
  }