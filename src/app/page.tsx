import Explorer from '@/components/Explorer';
import Image from 'next/image';

export default function MainPage() {
  return (
    <main className="relative h-screen overflow-hidden">
      <Image
        fill
        src="/camping.jpg"
        alt="desktop wallpaper"
        className="object-cover w-full h-full"
      />
      <Explorer />
    </main>
  );
}
