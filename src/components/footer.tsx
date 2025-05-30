'use client';

export default function Footer() {
  return (
    <footer className="text-center text-gray-400 py-8 border-t border-gray-800 mt-16">
      <p>© {new Date().getFullYear()} Najam. All rights reserved.</p>
      <div className="mt-2">
        <a
          href="https://github.com/najmiter/najmiter.github.io"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {"Source code (it's free if you want to use it ♥️)"}
        </a>
      </div>
    </footer>
  );
}
