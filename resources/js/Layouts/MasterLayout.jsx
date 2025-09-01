import Navbar from "@/Components/MasterComponent/Navbar";

export default function MasterLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex items-start justify-center pt-16 pl-64">
                <div className="w-full max-w-4xl p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
