import { Icons } from './ui/icons';
import WhatsHot from './whats-hot';

const itemClasses =
  'flex items-center gap-1 px-2 h-full text-xs text-gray-400 hover:opacity-90 transition-all';

export default async function StatusBar() {
  return (
    <div className="fixed fade-in y px-10 hidden sm:flex justify-between bottom-0 h-6 w-full border border-t-[#303030] bg-[#212121]">
      <section>
        <a
          type="button"
          href="https://github.com/najmiter/najmiter.github.io"
          target="_blank"
          className={itemClasses}
        >
          <Icons.Git size={14} />
          <span className="text-xs">main</span>
        </a>
      </section>
      <section className="flex items-center gap-3">
        <a
          role="button"
          href="https://nextjs.org/"
          target="_blank"
          className={itemClasses}
        >
          <Icons.Code size={14} />
          <span className="text-xs">Next.js</span>
        </a>
        <div className={itemClasses}>
          <Icons.Sync size={14} />
          <span className="text-xs">
            <time dateTime={new Date().toLocaleDateString()}>
              {new Date().toLocaleDateString()}
            </time>
          </span>
        </div>
        <WhatsHot />
      </section>
    </div>
  );
}
