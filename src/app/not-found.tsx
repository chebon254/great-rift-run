import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1B1B1A]">
        <h1 className="text-9xl font-extrabold text-gray-500">404</h1>
        <h2 className="mt-4 text-4xl font-bold text-gray-200">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-200">
          Sorry, the page youE&apos;re looking for doesnE&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Go Back to Homepage
        </Link>
      </div>
    );
  }
  