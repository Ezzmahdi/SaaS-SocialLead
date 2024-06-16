export default function ursocialPage() {
    return (
        <body className="bg-zinc-100 p-8 font-sans">
            <h1 className="text-2xl font-bold mb-4">Social Accounts</h1>
            <p className="text-zinc-600 mb-6">Overview of all the Socials managed by FeedHive</p>
        
            <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                <p className="font-semibold"><span className="text-lg">🟢</span> Awesome 🥳</p>
                <p>You want to add a few more socials? Don't worry, you can also add them later.</p>
            </div>
        
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                    <div className="flex justify-between w-full mb-4">
                        <img src="https://placehold.co/40x40" alt="Logo" className="rounded-full"/>
                        <span>⋮</span>
                    </div>
                    <p className="font-semibold">Wiserise</p>
                    <img src="https://placehold.co/24x24" alt="Social Icon" className="mt-2"/>
                    <p className="text-zinc-600 text-sm mt-2">Added • Today</p>
                </div>
                <div className="border-2 border-zinc-300 border-dashed rounded-lg flex flex-col justify-center items-center p-4">
                    <span className="text-3xl text-zinc-400">+</span>
                    <p className="text-zinc-600 mt-2">Add Social</p>
                </div>
            </div>
        
            <div className="flex justify-between">
                <button className="bg-zinc-300 text-zinc-800 py-2 px-4 rounded-lg">Back</button>
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Next</button>
            </div>
        </body>
    )
};