import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Najam ul Hassan — Full Stack Software Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const revalidate = false;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #181818 0%, #232323 100%)',
        color: '#f5f0e8',
        fontFamily: 'serif',
      }}>
      <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.6 }}>
        Full Stack Software Developer
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 96,
          fontWeight: 'bold',
          marginTop: 24,
          lineHeight: 1.05,
          color: '#618fff',
        }}>
        Najam ul Hassan
      </div>
      <div style={{ display: 'flex', fontSize: 30, marginTop: 40, opacity: 0.75 }}>
        React · Next.js · Nest.js · TypeScript · Full Stack Mobile & Web Apps
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 'auto',
          fontSize: 26,
          opacity: 0.55,
          borderTop: '1px solid rgba(245, 240, 232, 0.2)',
          paddingTop: 28,
        }}>
        najmiter.dev
      </div>
    </div>,
    size,
  );
}
