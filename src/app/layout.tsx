import "./globals.css";
import Script from "next/script";
import Clarity from "@microsoft/clarity";
export const metadata = {
  title: "Therapist Website",
  description: "Local Therapist",
};
const projectId = "s962uca1i1";
Clarity.init(projectId);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo1.png" sizes="any" />
      <body>
        <main>
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
      </body>
    </html>
  );
}
