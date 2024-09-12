import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar/page";
import Footer from "./component/footer/page"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ashfaque Alam | Full-Stack Developer  ",
  description: "Ashfaque Alam's portfolio showcasing expertise in React.js, Nextjs, Python, FastAPI, and delivering intuitive user experiences across web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Font Awesome CDN link here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
         <link rel="icon" href="/image/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
