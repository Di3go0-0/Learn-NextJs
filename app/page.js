import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          User App
        </h1>
        <p className="mt-4 text-muted-foreground">
          Check out all our users with an amazing interface
        </p>
        <div className="mt-6">
          <Link
            href="/users"
            className="inline-flex items-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            prefetch={false}
          >
            <p>All users</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
