import Drawer from "@components/Drawer";
import "@styles/globals.css";
import { Poppins } from "next/font/google";
import { FaBars } from "react-icons/fa6";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Admin dashbord | ShopNow",
  description: "Admin dashboard for an e-commerce project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-2">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-outline drawer-button lg:hidden"
            >
              <FaBars />
            </label>

            {children}
          </div>

          <Drawer />
        </div>
      </body>
    </html>
  );
}
