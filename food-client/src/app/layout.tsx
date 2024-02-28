import { Header } from "@/components";
import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider, BasketProvider } from "@/context";

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
            <BasketProvider>
              <Header />
              {children}
              <Footer />
              <ToastContainer />
            </BasketProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
