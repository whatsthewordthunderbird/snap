// Email Modules — Full 600px email for The Ring campaign

const SNAP_GREEN = '#1b844a'
const GOLD = '#c9a060'
const DARK = '#0a0a14'

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
        <div style={{ background: `linear-gradient(160deg, ${DARK} 0%, #1a0d2e 100%)`, padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
          {/* decorative */}
          <div style={{ position: 'absolute', right: -60, top: -60, width: 200, height: 200, borderRadius: '50%', border: `1px solid ${GOLD}20` }} />
          <div style={{ position: 'absolute', right: -30, top: -30, width: 130, height: 130, borderRadius: '50%', border: `1px solid ${GOLD}15` }} />

          {/* Campaign image */}
          <div style={{ float: 'right', marginLeft: 24, width: 160, height: 160, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
            <img src="/images/couple_ring_shopping.png" alt="Couple ring shopping" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          <p style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>The Ring · 2026</p>
          <h1 style={{ color: '#fff', fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginBottom: 12 }}>
            The moment matters. 💍
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, marginBottom: 4 }}>
            The ring you've been dreaming of is within reach. Finance it with Snap — no perfect credit needed.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, fontStyle: 'italic', marginBottom: 24 }}>
            El momento importa. Nosotros lo hacemos posible.
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
          <p style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, textAlign: 'center' }}>
            How it works
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, textAlign: 'center' }}>
            {[
              { emoji: '💍', headline: 'Find the Ring', body: 'Shop at 150,000+ retail partners near you' },
              { emoji: '⚡', headline: 'Apply Instantly', body: 'Decision in seconds, no FICO impact' },
              { emoji: '✨', headline: 'Say Yes', body: 'Take it home today, pay weekly or biweekly' },
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
            Approval amounts from <strong>$300 – $5,000</strong> · Pay weekly from <strong style={{ color: SNAP_GREEN }}>$18/wk</strong>
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
            Find a Jeweler Near You
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
