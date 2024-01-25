import RecoilRootProvider from "@/components/RecoilRootProvider";
import "./globals.css";

export const metadata = {
  title: "Calendar Todolist",
  description:
    "달력과 각각의 날짜 카드에 투두리스트 기능이 사용가능한 웹 어플리케이션입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#dfdfdf] relative flex-center h-screen">
        <RecoilRootProvider>
          <div
            id="wrap"
            className="md:min-h-screen w-[374px] md:w-full max-h-screen h-auto bg-[#fff] my-0 mx-auto overflow-hidden relative overflow-y-auto rounded-[10px] md:rounded-0"
          >
            {children}
            <p className="text-center py-[20px] text-sm text-[#d6d6d6]">
              Copyright © 2024 JW All rights reserved
            </p>
          </div>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
