import { Header } from "@/components";
import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";
import {
  UserProvider,
  BasketProvider,
  FoodProvider,
  SessionProvider,
} from "@/context";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
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
        </SessionProvider>
      </body>
    </html>
  );
}
