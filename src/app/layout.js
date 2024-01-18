import "./globals.css";

export const metadata = {
  title: "TodoList",
  description: "nextjs를 이용한 todolist입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#fff] relative">
        <div
          id="wrap"
          className="w-[374px] max-h-screen bg-[#ececec] my-0 mx-auto overflow-hidden relative overflow-y-auto  rounded-[10px]"
        >
          {children}
          <p className="text-center py-[20px] text-sm text-[#d6d6d6]">
            Copyright © 2024 JW All rights reserved
          </p>
        </div>
      </body>
    </html>
  );
}
