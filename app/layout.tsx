import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "ChatBot App",
  description: "This bot provides reliable, up-to-date information on colon cancer, including risk factors, prevention strategies, diagnosis, and treatment options. It answers a wide range of questions, from lifestyle choices and genetic predispositions that might increase risk, to detailed explanations of symptoms, staging, and available treatments.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>

        <>
          <div className="flex">
            {/* Sidebar */ }
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar />

            </div>
            <ClientProvider />
            {/* ClientProvider - Notification */ }
            <div className="bg-[#343541] flex-1">
              { children }
            </div>
          </div>
        </>

      </body>
    </html>
  );
}
