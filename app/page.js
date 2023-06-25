import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 my-20">
      <h1 className='text-6xl text-pink-600 text-center'>Quiz app</h1>
      <div className="p-4 flex flex-wrap gap-2">

        <div className='bg-white p-4 rounded grow'>
          <h3 className='text-xl text-pink-600'>Random</h3>
          <Image src='https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full cover max-h-80' width={200} height={200} alt='' />
          <Link href='/quiz/random' className='p-2 bg-pink-600 text-white rounded hover:bg-pink-400'>start quiz</Link>
        </div>

        <div className='bg-white p-4 rounded grow'>
          <h3 className='text-xl text-pink-600'>Animals</h3>
          <Image src='https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full cover max-h-80' width={200} height={200} alt='' />
          <Link href='/quiz/animal' className='p-2 bg-pink-600 text-white rounded hover:bg-pink-400'>start quiz</Link>
        </div>

        <div className='bg-white p-4 rounded grow'>
          <h3 className='text-xl text-pink-600'>Measurement</h3>
          <Image src='https://images.pexels.com/photos/4219520/pexels-photo-4219520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full object-fill h-full max-h-80' width={200} height={200} alt='' />
          <Link href='/quiz/measurement' className='p-2 bg-pink-600 text-white rounded hover:bg-pink-400'>start quiz</Link>
        </div>

        <div className='bg-white p-4 rounded grow'>
          <h3 className='text-xl text-pink-600'>Geography</h3>
          <Image src='https://images.pexels.com/photos/414916/pexels-photo-414916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full object-fill h-full max-h-80' width={200} height={200} alt='' />
          <Link href='/quiz/geography' className='p-2 bg-pink-600 text-white rounded hover:bg-pink-400'>start quiz</Link>
        </div>

      </div>
    </main>
  )
}
