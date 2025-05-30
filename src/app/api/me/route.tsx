import { ImageResponse } from 'next/og';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const FACTOR = 3;

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#181818',
          }}
        >
          <div
            style={{
              fontSize: 160 * FACTOR,
              fontWeight: 900,
              color: '#eee',
              textAlign: 'center',
            }}
          >
            Nah! Just kidding.
          </div>
          <div
            style={{
              fontSize: 30 * FACTOR,
              color: '#aaa',
              textAlign: 'center',
              marginTop: 20 * FACTOR,
              display: 'flex',
            }}
          >
            {"But that doesn't mean I look good."}
          </div>
          <div
            style={{
              fontSize: 20 * FACTOR,
              color: '#aaa',
              textAlign: 'center',
              marginTop: 20 * FACTOR,
              display: 'flex',
            }}
          >
            Verified at:{' '}
            {new Date().toLocaleTimeString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
              timeZone: 'Asia/Karachi',
            })}
          </div>
        </div>
      ),
      {
        width: 1200 * FACTOR,
        height: 1200 * FACTOR,
        headers: {
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    );
  } catch (e) {
    return NextResponse.json({ error: 'Nah! Just kidding.' }, { status: 500 });
  }
}
