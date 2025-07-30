import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-row justify-center justify-items-center items-center  min-h-screen  ">
      <header>
        <Image src="/logo3.png" width={300} height={300} alt="logo" />
      </header>
      <main className="flex flex-col">
        <img src="/3va2.gif" alt="spining sphere gif" />
        <section className="flex justify-center gap-2">
          <Link
            href="/dashboard"
            className="border-1 border-white py-2 px-12 rounded-xl cursor-pointer hover:bg-foreground/50 duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="border-1 border-white py-2 px-12 rounded-xl cursor-pointer hover:bg-foreground/50 duration-200"
          >
            Sign up
          </Link>
        </section>
      </main>
      <footer>
        <span>Crafting and grinding your skills</span>
      </footer>
    </div>
  )
}
