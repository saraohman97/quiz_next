import Link from 'next/link'
export default function QuizLayout({ children }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300'>
      <div>{children}</div>
      <Link href='/' className='fixed top-5 left-5 p-2 rounded-full backdrop-blur-sm bg-white/20 hover:bg-white/100'>
        <button className="text-2xl text-pink-600">{`<--`}</button>
      </Link>
    </div>
  )
}
