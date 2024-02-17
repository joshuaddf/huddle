import Navbar from "@/components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Huddle",
  description: "Huddle landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="lg:w-[90vw] 2xl:max-w-[75rem] mx-auto w-[87vw]">
        <Navbar />
        </div>
        {children}
        </body>
    </html>
  );
}
