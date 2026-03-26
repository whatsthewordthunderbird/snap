// Email Modules — Hero header, Feature block, CTA footer
// Rendered at 600px wide (standard email width)

const SNAP_GREEN = '#1b844a'
const DARK = '#0a1a0f'

export default function EmailModules() {
  return (
    <div className="space-y-4">
      <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">Full Email — 600px wide (standard)</p>

      <div style={{ width: '100%', maxWidth: 600, background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb', fontFamily: 'Aeonik, sans-serif' }}>

        {/* ── Email Header ── */}
        <div style={{ background: DARK, padding: '12px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>Snap Finance</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>View in browser</span>
        </div>

        {/* ── Hero Block ── */}
        <div style={{ background: `linear-gradient(160deg, ${DARK} 0%, #0f2318 100%)`, padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
          {/* decorative */}
          <div style={{ position: 'absolute', right: -60, top: -60, width: 200, height: 200, borderRadius: '50%', border: `1px solid ${SNAP_GREEN}20` }} />
          <div style={{ position: 'absolute', right: -30, top: -30, width: 130, height: 130, borderRadius: '50%', border: `1px solid ${SNAP_GREEN}15` }} />

          {/* Hero product image */}
          <div style={{ float: 'right', marginLeft: 24, width: 160, height: 160, borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
            <img src="/images/joy_ride_cropped.jpg" alt="Summer Sound" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,26,15,0.9) 0%, rgba(10,26,15,0.5) 20%, rgba(10,26,15,0.1) 35%, transparent 45%)' }} />
            <img src="/images/snap_finance_logo.svg" alt="Snap Finance" style={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)', height: 18, width: 'auto', filter: 'brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.5))', opacity: 1 }} />
          </div>

          <p style={{ color: SNAP_GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Summer 2026</p>
          <h1 style={{ color: '#fff', fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginBottom: 12 }}>
            Summer Sound 🔊
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 4 }}>
            Get the car audio system you've been wanting — Pioneer, JBL, Kenwood — and pay over time with Snap.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, fontStyle: 'italic', marginBottom: 24 }}>
            Consigue el sistema que quieres. Paga con el tiempo.
          </p>
          <div style={{ clear: 'both' }} />
          <a href="#" style={{
            display: 'inline-block', background: SNAP_GREEN, color: '#fff',
            padding: '14px 32px', borderRadius: 28, fontWeight: 700, fontSize: 14,
            textDecoration: 'none',
          }}>
            Apply in Seconds →
          </a>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, marginTop: 10 }}>
            Won't affect your FICO® score to apply
          </p>
        </div>

        {/* ── Feature Block ── */}
        <div style={{ padding: '40px', background: '#fff' }}>
          <p style={{ color: SNAP_GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, textAlign: 'center' }}>
            How it works
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, textAlign: 'center' }}>
            {[
              { emoji: '🔍', headline: 'Find a Store', body: 'Search 150,000+ retail partners near you' },
              { emoji: '⚡', headline: 'Apply Instantly', body: 'Decision in seconds, no FICO impact' },
              { emoji: '🎵', headline: 'Start Bumping', body: 'Shop now, pay weekly or biweekly' },
            ].map(({ emoji, headline, body }) => (
              <div key={headline}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{emoji}</div>
                <p style={{ fontWeight: 700, fontSize: 13, color: '#353849', marginBottom: 6 }}>{headline}</p>
                <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Offer Bar ── */}
        <div style={{ background: '#f7f7f5', padding: '24px 40px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#353849', marginBottom: 6 }}>
            Approval amounts from <strong>$300 – $5,000</strong> · Pay weekly from <strong style={{ color: SNAP_GREEN }}>$12/wk</strong>
          </p>
          <p style={{ fontSize: 10, color: '#9ca3af' }}>Perfect credit not required.</p>
        </div>

        {/* ── CTA Footer ── */}
        <div style={{ background: DARK, padding: '28px 40px', textAlign: 'center' }}>
          <a href="#" style={{
            display: 'inline-block', background: SNAP_GREEN, color: '#fff',
            padding: '12px 28px', borderRadius: 24, fontWeight: 700, fontSize: 13,
            textDecoration: 'none', marginBottom: 16,
          }}>
            Find a Store Near You
          </a>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, lineHeight: 1.6 }}>
            Snap Finance LLC · Salt Lake City, UT<br />
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)' }}>Unsubscribe</a> · <a href="#" style={{ color: 'rgba(255,255,255,0.3)' }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}
