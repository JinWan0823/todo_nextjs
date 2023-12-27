import './globals.css'


export const metadata = {
  title: 'TodoList',
  description: 'nextjs를 이용한 todolist입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
