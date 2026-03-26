// On-site Placements — Homepage Hero Banner, Category Promo Strip, Product Financing Widget

const SNAP_GREEN = '#1b844a'
const GOLD = '#c9a060'
const DARK = '#0a0a14'

function HeroBanner() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Homepage Hero Banner — Full Width</p>
      <div style={{
        width: '100%', maxWidth: 900, height: 300,
        background: `linear-gradient(135deg, ${DARK} 0%, #1a0d2e 65%, #0d0a1a 100%)`,
        borderRadius: 16, overflow: 'hidden', position: 'relative',
        display: 'flex', alignItems: 'center', padding: '0 56px', fontFamily: 'Aeonik, sans-serif',
      }}>
        {/* Hero image right */}
        <div style={{ position: 'absolute', right: 56, top: '50%', transform: 'translateY(-50%)', width: 220, height: 220, borderRadius: 12, overflow: 'hidden' }}>
          <img src="/images/couple_ring_shopping.png" alt="Couple ring shopping" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        {/* Decorative rings */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: 400, height: 400, borderRadius: '50%', border: `1px solid ${GOLD}10`, transform: 'translate(30%, -30%)' }} />

        <div style={{ maxWidth: 400 }}>
          <p style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>The Ring · 2026</p>
          <h2 style={{ color: '#fff', fontSize: 40, fontWeight: 700, lineHeight: 1.05, marginBottom: 12 }}>
            The Moment<br />Matters.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
            Kay · Zales · Jared · Local Jewelers<br />
            No credit needed. Apply in seconds.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ background: SNAP_GREEN, borderRadius: 24, padding: '12px 28px', fontWeight: 700, fontSize: 14, color: '#fff' }}>
              Apply Now →
            </div>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>Won't affect your FICO®</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PromoStrip() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Category Page Promo Strip — Full Width</p>
      <div style={{
        width: '100%', maxWidth: 900, height: 64,
        background: `linear-gradient(90deg, ${DARK} 0%, #1a0d2e 100%)`,
        borderRadius: 10, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 28px',
        fontFamily: 'Aeonik, sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 18 }}>💍</span>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, margin: 0 }}>
            The Ring — Finance your engagement ring with Snap
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, margin: 0 }}>
            From <strong style={{ color: '#fff' }}>$18/week</strong> · No credit needed
          </p>
          <div style={{ background: SNAP_GREEN, borderRadius: 20, padding: '8px 20px', fontWeight: 700, fontSize: 12, color: '#fff', whiteSpace: 'nowrap' }}>
            Apply in Seconds
          </div>
        </div>
      </div>
    </div>
  )
}

function FinancingWidget() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Product Page — Snap Financing Widget</p>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        <div style={{ width: 320, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', overflow: 'hidden', fontFamily: 'Aeonik, sans-serif' }}>
          {/* Product image */}
          <div style={{ height: 160, overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/diamond_ring.webp" alt="Diamond ring" style={{ width: '127%', height: '127%', objectFit: 'contain' }} />
          </div>
          <div style={{ padding: 20 }}>
            <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4 }}>Kay Jewelers</p>
            <p style={{ fontWeight: 700, fontSize: 16, color: '#353849', marginBottom: 4 }}>Round Diamond Solitaire Ring</p>
            <p style={{ fontSize: 22, fontWeight: 700, color: '#353849', marginBottom: 16 }}>$1,299.99</p>

            {/* Snap widget */}
            <div style={{ background: DARK, borderRadius: 10, padding: 16, border: `1px solid ${GOLD}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', overflow: 'hidden' }}>
                  <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 12, margin: 0 }}>Finance with Snap</p>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginBottom: 8 }}>
                As low as <strong style={{ color: '#fff' }}>$42/week</strong> with Snap Lease-to-Own
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginBottom: 12 }}>
                Perfect credit not required · Apply in seconds
              </p>
              <div style={{ background: SNAP_GREEN, borderRadius: 20, padding: '8px 0', textAlign: 'center', fontWeight: 700, fontSize: 12, color: '#fff' }}>
                Apply Now — Won't affect FICO®
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ background: '#353849', borderRadius: 8, padding: '10px 0', textAlign: 'center', fontWeight: 700, fontSize: 13, color: '#fff' }}>
                Add to Cart
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 20, maxWidth: 280, fontFamily: 'Aeonik, sans-serif' }}>
          <p style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Widget Notes</p>
          <ul style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.7, paddingLeft: 18, margin: 0, listStyleType: 'disc' }}>
            <li>Dynamically calculates weekly payment from product price</li>
            <li>Links directly to Snap apply flow with merchant pre-fill</li>
            <li>Shown at Kay, Zales, Jared, and 150k+ partner locations</li>
            <li>Bilingual toggle available (EN/ES)</li>
            <li>100-Day payoff option surfaced for qualifying products</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function OnsitePlacements() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      <PromoStrip />
      <FinancingWidget />
    </div>
  )
}
