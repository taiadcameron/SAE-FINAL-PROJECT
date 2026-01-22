import "../globals.css";
import Image from "next/image";
import logo from "../../../public/logo1.png";
const cred1 = "/page-2/cred (1).png";
const cred2 = "/page-2/cred (2).png";
const cred3 = "/page-2/cred (3).png";

import Script from "next/script";
import Clarity from "@microsoft/clarity";
const projectId = "s962uca1i1";
Clarity.init(projectId);
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed flex justify-between bg-site1-white  w-screen h-[80px] px-44 py-2 text-site1-text border-b-2 z-20 border-gray-200">
          <div className="flex items-center font-semibold text-xl ">
            {" "}
            <Image src={logo} width={0} height={0} alt="BACP Logo" />{" "}
            <h4>Dr. Anna H</h4>
          </div>

          <div className="flex items-center gap-4 ">
            {" "}
            <a href="#services">Services</a>
            <a href="#faq">FaQ</a>
            <a href="#about">About</a> <a href="#probs">My Approch</a>{" "}
            <a href="#contact-form">
              <button className="bg-site1-cta px-4 py-2 rounded-full w-fit cursor-pointer ">
                Contact Me
              </button>
            </a>
          </div>
        </nav>
        <main className="text-site1-text  font-site1-sec bg-site1-white">
          <Script id="clarity-script" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s962uca1i1");
            `}
          </Script>
          {children}
        </main>
        <footer className="py-24 flex justify-between bg-site1-white text-site1-text">
          <div className="flex items-center font-semibold text-xl w-1/3 justify-center ">
            {" "}
            <Image src={logo} width={0} height={0} alt="BACP Logo" />{" "}
            <h4>Dr. Anna H </h4>
          </div>
          <div className=" w-1/3 flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-4  ">
              {" "}
              <a href="#services">Services</a>
              <a href="#faq">FaQ</a>
              <a href="#about">About</a> <a href="probs">My Approch</a>{" "}
            </div>
            <p>
              © 2025 Dr. Anna Harrison, Psychologist. All rights reserved.
              Privacy Policy
            </p>
          </div>
          <div className="flex gap-4  w-1/3 justify-center ">
            {" "}
            <Image src={cred1} width={100} height={100} alt="BACP Logo" />{" "}
            <Image src={cred2} width={100} height={100} alt="BACP Logo" />{" "}
            <Image src={cred3} width={100} height={100} alt="BACP Logo" />{" "}
          </div>
        </footer>
      </body>
    </html>
  );
}
