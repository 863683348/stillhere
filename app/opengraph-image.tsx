import { ImageResponse } from 'next/og';

export const alt = 'StillHere — a private space to remember';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
// One day: social scrapers and previewers hammer this endpoint; the image only
// changes with a redeploy, so caching it keeps Fast Origin Transfer near zero.
export const cacheControl = 'public, max-age=86400, immutable';

/**
 * Branded social-share card. Latin-only copy on purpose: the next/og renderer
 * ships a Latin font, and we don't want CJK glyphs to render as tofu. The
 * bilingual page <title>/<meta> already carries the localized copy; this image
 * is the universal thumbnail.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '84px',
          background: '#faf8f5',
          color: '#2a2521',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, color: '#c8873e', fontWeight: 600, letterSpacing: '-0.5px' }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: '#f5e9d9',
              marginRight: 18,
            }}
          />
          StillHere
        </div>
        <div style={{ fontSize: 66, fontWeight: 700, marginTop: 28, lineHeight: 1.08, letterSpacing: '-1px' }}>
          A private space
        </div>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, color: '#c8873e', letterSpacing: '-1px' }}>
          to remember.
        </div>
        <div style={{ fontSize: 27, color: '#6b615a', marginTop: 30, lineHeight: 1.4, maxWidth: 920 }}>
          Talk with an AI reflection shaped by your own memories of someone you miss.
        </div>
      </div>
    ),
    { ...size },
  );
}
