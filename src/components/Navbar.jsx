function Navbar() {

    return (
        <>
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 px-3 py-2">Task Manager</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors">Login</span>
                            <span className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors">Register</span>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;