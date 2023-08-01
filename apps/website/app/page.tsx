import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24">
      <h1 className="" >HOME</h1>
    <div className="my-5 p-3">
      <p>Demo for NEXT-ZONES</p>
      <a className="p-2 border-x-cyan-700 rounded-md bg-red-300 text-slate-500 w-fit mt-4 block " href="/landing-page">
        GO TO LANDING PAGE
      </a>
    </div>
      
    </main>
  )
}
