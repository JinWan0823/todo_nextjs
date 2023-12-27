import CheckToday from '@/components/main/CheckToday'
import './globals.css'
import TodayTalk from '@/components/main/TodayTalk'

export const metadata = {
  title: 'TodoList',
  description: 'nextjs를 이용한 todolist입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-[#fff]'>
      <div id="wrap" class='w-[374px] h-screen bg-[#ececec] my-0 mx-auto overflow-hidden relative overflow-y-scroll pb-[60px]'>
      <CheckToday />
      <TodayTalk />
          {children}
        </div>
      </body>
    </html>
  )
}
