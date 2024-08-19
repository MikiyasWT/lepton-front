import Link from "next/link";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu button visible only on small screens */}
      <button
        onClick={toggleSidebar}
        className="block md:hidden bg-gray-800 text-white rounded m-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-20 py-4 px-2 inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out h-screen w-full md:w-64 lg:w-64 xl:w-64 flex-shrink-0`}
      >
        <div className="w-full h-full bg-[#171B35] rounded-xl flex flex-col justify-between p-2">
          {/* Close button on the sidebar for small screens */}
          <div className="md:hidden flex justify-end p-2">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Main usable container */}
          <div className="flex-grow">
            <div className=" w-full h-12 flex flex-row justify-between  mx-2 gap-2 ">
              {/* Menu Icon */}
              <div className="flex items-center">
                <FaBars className="text-white text-xl" />
              </div>

              {/* Picture Icon */}
              <div className="w-full flex items-center">
           
              {/* <Image
          src="/hermanos.png" 
          alt="Your Image Alt Text"
          width={32} 
          height={32} 
          className="w-full"
        /> */}

<h6 className="font-serif font-thin text-orange-400 text-lg ">Hermanos Technologies</h6>
              </div>
            </div>
            <div className="w-full bg-gray-600 h-[1px] my-2"></div>
            <ul className="space-y-2 text-white ">
              <li>
                <Link href="/">
                  <div className="block px-4 py-2 rounded hover:bg-gray-700">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/invoices">
                  <div className="block px-4 py-2 rounded hover:bg-gray-700">
                    Invoices
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/items">
                  <div className="block px-4 py-2 rounded hover:bg-gray-700">
                    Items
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/customers">
                  <div className="block px-4 py-2 rounded hover:bg-gray-700">
                    Customers
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Logout Button */}
          <div className="p-4">
            <button className="w-full bg-slate-500 text-white py-2 rounded hover:bg-red-700 flex items-center justify-center space-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33331 14.1667L12.5 10L8.33331 5.83334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 10H2.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

// import { useState } from "react";

// const SideBar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <div className="md:hidden p-4">
//         <button
//           onClick={toggleSidebar}
//           className="bg-[#171B35] text-white p-2 rounded-md"
//         >
//           Menu
//         </button>
//       </div>

//       <div
//         className={`${
//           isSidebarOpen ? "block" : "hidden"
//         } md:block sidebar h-screen md:p-4 md:w-48 lg:w-64 flex-shrink-0 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0`}
//       >
//         {/* Main usable container */}
//         <div className="w-full h-full bg-[#171B35] rounded-xl flex flex-col justify-between">
//           {/* Menu */}
//           <div className="flex-grow">
//             <ul className="space-y-2 text-white">
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 rounded hover:bg-gray-700"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 rounded hover:bg-gray-700"
//                 >
//                   Profile
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 rounded hover:bg-gray-700"
//                 >
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 rounded hover:bg-gray-700"
//                 >
//                   Notifications
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Logout Button */}
//           <div className="p-4">
//             <button className="w-full bg-slate-500 text-white py-2 rounded hover:bg-red-700 flex items-center justify-center space-x-2">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M8.33331 14.1667L12.5 10L8.33331 5.83334"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M12.5 10H2.5"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;

// import { useState } from 'react';

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Menu button visible only on small screens */}
//       <button
//         onClick={toggleSidebar}
//         className="block md:hidden p-2 bg-gray-800 text-white rounded m-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           />
//         </svg>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed z-20 inset-y-0 left-0 transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 md:w-48 lg:w-64 h-screen flex-shrink-0`}
//       >
//         <div className="w-full h-full bg-[#171B35] rounded-xl flex flex-col justify-between">
//           {/* Close button on the sidebar for small screens */}
//           <div className="md:hidden flex justify-end p-2">
//             <button onClick={toggleSidebar} className="text-white">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Main usable container */}
//           <div className="flex-grow">
//             <ul className="space-y-2 text-white">
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
//                   Profile
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">
//                   Notifications
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Logout Button */}
//           <div className="p-4">
//             <button className="w-full bg-slate-500 text-white py-2 rounded hover:bg-red-700 flex items-center justify-center space-x-2">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M8.33331 14.1667L12.5 10L8.33331 5.83334"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M12.5 10H2.5"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;
