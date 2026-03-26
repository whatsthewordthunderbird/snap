// On-site Placements — Homepage Hero Banner, Category Promo Strip, Product-Page Financing Badge

const SNAP_GREEN = '#1b844a'
const DARK = '#0a1a0f'

// Homepage Hero Banner
function HeroBanner() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Homepage Hero Banner — Full Width</p>
      <div style={{
        width: '100%', maxWidth: 900, height: 300,
        background: `linear-gradient(135deg, ${DARK} 0%, #0f2318 65%, #061209 100%)`,
        borderRadius: 16, overflow: 'hidden', position: 'relative',
        display: 'flex', alignItems: 'center', padding: '0 56px', fontFamily: 'Aeonik, sans-serif',
      }}>
        {/* Hero image right */}
        <div style={{ position: 'absolute', right: 56, top: '50%', transform: 'translateY(-50%)', width: 220, height: 220, borderRadius: 12, overflow: 'hidden' }}>
          <img src="/images/buying_subwoofer_2.jpg" alt="Car subwoofer" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,26,15,0.4), transparent)' }} />
          <img src="/images/snap_finance_logo.svg" alt="Snap Finance" style={{ position: 'absolute', bottom: 10, right: 10, height: 16, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
        </div>

        {/* Decorative rings */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: 400, height: 400, borderRadius: '50%', border: `1px solid ${SNAP_GREEN}10`, transform: 'translate(30%, -30%)' }} />

        <div style={{ maxWidth: 400 }}>
          <p style={{ color: SNAP_GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Summer Sound · 2025</p>
          <h2 style={{ color: '#fff', fontSize: 40, fontWeight: 700, lineHeight: 1.05, marginBottom: 12 }}>
            Get the System.<br />Pay Over Time.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
            Pioneer · JBL · Kenwood · Rockford Fosgate<br />
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

// Category Promo Strip
function PromoStrip() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Category Page Promo Strip — Full Width</p>
      <div style={{
        width: '100%', maxWidth: 900, height: 64,
        background: `linear-gradient(90deg, ${DARK} 0%, #0f2318 100%)`,
        borderRadius: 10, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 28px',
        fontFamily: 'Aeonik, sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 18 }}>🔊</span>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, margin: 0 }}>
            Summer Sound — Finance your car audio system with Snap
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, margin: 0 }}>
            From <strong style={{ color: '#fff' }}>$12/week</strong> · No credit needed
          </p>
          <div style={{ background: SNAP_GREEN, borderRadius: 20, padding: '8px 20px', fontWeight: 700, fontSize: 12, color: '#fff', whiteSpace: 'nowrap' }}>
            Apply in Seconds
          </div>
        </div>
      </div>
    </div>
  )
}

// Product-Page Financing Badge / Widget
function FinancingWidget() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Product Page — Snap Financing Widget</p>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Simulated product page context */}
        <div style={{ width: 320, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', overflow: 'hidden', fontFamily: 'Aeonik, sans-serif' }}>
          {/* Product image */}
          <div style={{ height: 160, overflow: 'hidden' }}>
            <img src="/images/pioneer_receiver.webp" alt="Pioneer receiver" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 43%' }} />
          </div>
          <div style={{ padding: 20 }}>
            <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4 }}>Pioneer</p>
            <p style={{ fontWeight: 700, fontSize: 16, color: '#353849', marginBottom: 4 }}>AVH-W4500NEX CarPlay Receiver</p>
            <p style={{ fontSize: 22, fontWeight: 700, color: '#353849', marginBottom: 16 }}>$649.99</p>

            {/* ── Snap widget ── */}
            <div style={{ background: `${DARK}`, borderRadius: 10, padding: 16, border: `1px solid ${SNAP_GREEN}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: SNAP_GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 8, fontWeight: 700 }}>S</span>
                </div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 12, margin: 0 }}>Finance with Snap</p>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginBottom: 8 }}>
                As low as <strong style={{ color: '#fff' }}>$28/week</strong> with Snap Lease-to-Own
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
          <p style={{ color: SNAP_GREEN, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Widget Notes</p>
          <ul style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.7, paddingLeft: 18, margin: 0, listStyleType: 'disc' }}>
            <li>Dynamically calculates weekly payment from product price</li>
            <li>Links directly to Snap apply flow with merchant pre-fill</li>
            <li>Shown only in Snap-eligible retail categories</li>
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
