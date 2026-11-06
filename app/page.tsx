export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
          Next.js 16 + React 19 + Tailwind CSS
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Dossier
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Your project workspace is ready. You can now build out your application components, routes, and features.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition"
          >
            Read Next.js Docs
          </a>
        </div>
      </div>
    </main>
  );
}

