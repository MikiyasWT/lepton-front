import Layout from "@/components/layouts/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";




export default function App({ Component, pageProps }: AppProps) {
  return (
   <div className="bg-[#ebedfb]">
       <Layout>
         <Component {...pageProps} />
       </Layout>
   </div>

   );
 }
