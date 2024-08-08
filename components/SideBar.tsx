const SideBar = () => {
    return (
      <div className="sidebar p-4 w-64 md:w-48 lg:w-64 h-screen flex-shrink-0">
        {/* Main usable container */}
        <div className="w-full h-full bg-[#171B35] rounded-xl flex flex-col justify-between">
          {/* Menu */}
          <div className="flex-grow">
            <ul className="space-y-2 text-white">
              <li>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Profile</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Notifications</a>
              </li>
            </ul>
          </div>
  
          {/* Logout Button */}
          <div className="p-4">
          <button className="w-full bg-slate-500 text-white py-2 rounded hover:bg-red-700 flex items-center justify-center space-x-2">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33331 14.1667L12.5 10L8.33331 5.83334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 10H2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Logout</span>
  </button>
          </div>
        </div>
      </div>
    );
  }


  export default SideBar;