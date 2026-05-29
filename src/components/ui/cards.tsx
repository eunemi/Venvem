/* eslint-disable */
const members = [
    {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        name: "John Lorin",
        email: "john@example.com"
    },
    {
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        name: "Chris Bondi",
        email: "chrisbondi@example.com"
    },
    {
        avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Yasmine",
        email: "yasmine@example.com"
    },
    {
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
        name: "Joseph",
        email: "joseph@example.com"
    },
]

export default function TeamCards() {
    return (
        <div className="max-w-2xl mx-auto px-4 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="items-start justify-between sm:flex">
                <div>
                    <h4 className="text-white text-xl font-semibold">Team members</h4>
                    <p className="mt-2 text-gray-400 text-base sm:text-sm">
                        Give your team members access to manage the system.
                    </p>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
                    onClick={() => alert("Add new member")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    New member
                </button>
            </div>

            <ul className="mt-12 divide-y divide-white/10">
                {members.map((item, idx) => (
                    <li key={idx} className="py-5 flex items-start justify-between">
                        <div className="flex gap-3">
                            <img src={item.avatar} className="flex-none w-12 h-12 rounded-full object-cover" />
                            <div>
                                <span className="block text-sm text-white font-semibold">{item.name}</span>
                                <span className="block text-sm text-gray-400">{item.email}</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="text-gray-300 text-sm border border-white/20 rounded-lg px-3 py-2 duration-150 bg-white/5 hover:bg-white/10 hover:text-white"
                            onClick={() => alert(`Manage ${item.name}`)}
                        >
                            Manage
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
