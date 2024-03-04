import { Header } from "@/components";
import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider, BasketProvider } from "@/context";
import { FoodProvider } from "@/context/FoodProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <FoodProvider>
              <BasketProvider>
                <Header />
                {children}
                <Footer />
                <ToastContainer />
              </BasketProvider>
            </FoodProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
