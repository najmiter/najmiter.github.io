import Image from 'next/image';

export default function LoadingContent() {
  return (
    <div
      aria-hidden
      role="presentation"
      className="fixed inset-0 bg-[#111] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        {/* <div className="relative">
          <div className="loading-bars">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
          <div className="loading-glow"></div>
        </div> */}

        <Image
          src={'/cating.webp'}
          width={100}
          height={100}
          alt="loading"
          priority
          className="rounded-xl overflow-hidden"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2 loading-text">
            Be right there...
          </h2>
          <div className="loading-dots">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
