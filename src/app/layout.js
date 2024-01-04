import CheckToday from "@/components/main/CheckToday";
import TodayTalk from "@/components/main/TodayTalk";
import "./globals.css";

export const metadata = {
  title: "TodoList",
  description: "nextjs를 이용한 todolist입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#fff]">
        <div
          id="wrap"
          className="w-[374px] max-h-screen bg-[#ececec] my-0 mx-auto overflow-hidden relative overflow-y-auto pb-[60px]"
        >
          <CheckToday />
          <TodayTalk />
          {children}
        </div>
      </body>
    </html>
  );
}
