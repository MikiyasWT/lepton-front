import Image from "next/image";
import { Inter } from "next/font/google";
import MainContentLeft from "@/components/MainContentLeft";
import MainContentRight from "@/components/MainContentRight";

const inter = Inter({ subsets: ["latin"] });




export default  function Dashboard() {
  return(
    <><MainContentLeft /><MainContentRight /></>
  )
}