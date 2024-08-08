import { Children, ReactNode } from "react";
import NavBar from "./NavBar";

interface PROPS {
    children: ReactNode
}



const MainContent = ({ children }: PROPS) => {
    return (
      <div className="flex-grow p-4 h-full w-full overflow-hidden">
        <NavBar />
        <div className="flex flex-row h-full w-full gap-6  border-gray-300 rounded-md ">
           { children }
        </div>
      </div>
    );
  };

  export default MainContent;