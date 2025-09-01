import React from "react";
import {
    Home,
    GraduationCap,
    BarChart3,
    MessageSquare,
    ChevronDown,
    BookOpen,
    Stethoscope,
    Settings,
    Laptop,
    Building2,
    Briefcase,
    FileText,
    Sigma,
    Languages,
    Dumbbell,
    HeartPulse,
    Users,
    FlaskConical,
} from "lucide-react";

const Navbar = () => {
    return (
        <>
            {/* Navbar atas */}
            <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50 px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold">Log-PKKMB</a>
                </div>
                <div className="flex-none gap-2">
                    {/* Search */}
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0
                                11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    {/* Notification */}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032
                                    0 0118 14.158V11a6.002 6.002
                                    0 00-4-5.659V5a2 2 0
                                    10-4 0v.341C7.67 6.165 6
                                    8.388 6 11v3.159c0
                                    .538-.214 1.055-.595
                                    1.436L4 17h5m6 0v1a3 3 0
                                    11-6 0v-1m6 0H9"/>
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-base-100 shadow-md p-4 pt-12 overflow-y-auto">
                <ul className="menu space-y-2 text-lg">
                    {/* Home */}
                    <li>
                        <a className="flex items-center gap-3 hover:text-blue-600 hover:bg-blue-100 rounded-lg p-2 transition">
                            <Home size={22} className="text-blue-500 group-hover:scale-110 transition-transform" /> Homepage
                        </a>
                    </li>

                    {/* Fakultas Teknik */}
                    <li>
                        <details>
                            <summary className="flex items-center gap-3 p-2 cursor-pointer hover:bg-orange-100 hover:text-orange-600 rounded-lg transition">
                                <GraduationCap size={22} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                                Fakultas Teknik
                            </summary>
                            <ul className="pl-6 mt-2 space-y-1">
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Settings size={18} className="text-orange-400 group-hover:rotate-45 transition-transform" />
                                            Teknik Mesin
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Laptop size={18} className="text-green-500 group-hover:scale-125 transition-transform" />
                                            Teknik Informatika
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    {/* Fakultas Ekonomi */}
                    <li>
                        <details>
                            <summary className="flex items-center gap-3 p-2 cursor-pointer hover:bg-green-100 hover:text-green-600 rounded-lg transition">
                                <Building2 size={22} className="text-green-600 group-hover:scale-110 transition-transform" />
                                Fakultas Ekonomi
                            </summary>
                            <ul className="pl-6 mt-2 space-y-1">
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-green-50 hover:text-green-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Briefcase size={18} className="text-green-500 group-hover:rotate-12 transition-transform" />
                                            Manajemen
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-green-50 hover:text-green-600 transition">
                                        <span className="flex items-center gap-2">
                                            <FileText size={18} className="text-green-400 group-hover:scale-125 transition-transform" />
                                            Akuntansi
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    {/* FKIP */}
                    <li>
                        <details>
                            <summary className="flex items-center gap-3 p-2 cursor-pointer hover:bg-purple-100 hover:text-purple-600 rounded-lg transition">
                                <BookOpen size={22} className="text-purple-600 group-hover:scale-110 transition-transform" />
                                FKIP
                            </summary>
                            <ul className="pl-6 mt-2 space-y-1">
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-purple-50 hover:text-purple-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Sigma size={18} className="text-purple-500 group-hover:rotate-12 transition-transform" />
                                            Pendidikan Matematika
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-purple-50 hover:text-purple-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Languages size={18} className="text-indigo-500 group-hover:scale-125 transition-transform" />
                                            Pendidikan Bahasa Inggris
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-purple-50 hover:text-purple-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Dumbbell size={18} className="text-pink-500 group-hover:rotate-12 transition-transform" />
                                            Pendidikan Olahraga
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    {/* FIKS */}
                    <li>
                        <details>
                            <summary className="flex items-center gap-3 p-2 cursor-pointer hover:bg-red-100 hover:text-red-600 rounded-lg transition">
                                <Stethoscope size={22} className="text-red-500 group-hover:scale-110 transition-transform" />
                                FIKS
                            </summary>
                            <ul className="pl-6 mt-2 space-y-1">
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-red-50 hover:text-red-600 transition">
                                        <span className="flex items-center gap-2">
                                            <HeartPulse size={18} className="text-red-500 group-hover:scale-125 transition-transform" />
                                            Keperawatan
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-red-50 hover:text-red-600 transition">
                                        <span className="flex items-center gap-2">
                                            <Users size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                                            Kesehatan Masyarakat
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-between p-2 rounded-md hover:bg-red-50 hover:text-red-600 transition">
                                        <span className="flex items-center gap-2">
                                            <FlaskConical size={18} className="text-blue-500 group-hover:scale-125 transition-transform" />
                                            Farmasi
                                        </span>
                                        <ChevronDown size={16} />
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    {/* Statistik */}
                    <li>
                        <a className="flex items-center gap-3 hover:text-indigo-600 hover:bg-indigo-100 rounded-lg p-2 transition">
                            <BarChart3 size={22} className="text-indigo-500 group-hover:scale-110 transition-transform" /> Statistik
                        </a>
                    </li>

                    {/* Komentar */}
                    <li>
                        <a className="flex items-center gap-3 hover:text-pink-600 hover:bg-pink-100 rounded-lg p-2 transition">
                            <MessageSquare size={22} className="text-pink-500 group-hover:rotate-6 transition-transform" /> Komentar
                        </a>
                    </li>
                </ul>
            </aside>
        </>


    );
};

export default Navbar;
``
