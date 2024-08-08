import MainContent from "../MainContent";
import SideBar from "../SideBar";


interface PROPS {
  children: any; 
}

export default function Layout({ children}: PROPS) {

  return (
    <div className="h-screen w-full flex">
      <SideBar/>
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}

