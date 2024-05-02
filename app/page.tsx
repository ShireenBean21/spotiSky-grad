import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My Spotify Clone
          </h1>
          <p className="text-lg mb-8">
            Explore millions of songs, playlists, and podcasts.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/search">
              <a className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-center block">
                Search
              </a>
            </Link>
            <Link href="/genres">
              <a className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-center block">
                Genres
              </a>
            </Link>
            <Link href="/playlists">
              <a className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-center block">
                Playlists
              </a>
            </Link>
            <Link href="/profile">
              <a className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg text-center block">
                Profile
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://spotify.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Visit Spotify
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore the official Spotify website for more features.
          </p>
        </a>

        {/* Add more links/buttons here */}
      </div>
    </main>
  );
}
