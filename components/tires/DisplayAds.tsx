// Display Ads — 728×90 Leaderboard, 300×250 Rectangle, 320×50 Mobile Banner

const ORANGE = '#f97316'
const DARK = '#0f0f12'

function SnapBadge() {
  return (
    <div className="flex items-center gap-1">
      <div style={{ width: 14, height: 14, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
        <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 9, fontWeight: 700, color: ORANGE, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Snap Finance
      </span>
    </div>
  )
}

// 728 × 90 Leaderboard
function Leaderboard() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">728 × 90 — Leaderboard</p>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <div style={{
        width: 728, minWidth: 728, height: 90,
        background: `linear-gradient(135deg, ${DARK} 0%, #1c1c22 60%, #0f0f12 100%)`,
        borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 24px', position: 'relative',
      }}>
        {/* Left: logo + headline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', lineHeight: 1.1, margin: 0 }}>
              New tires. No credit needed. 🛞
            </p>
            <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              Big O · Discount Tire · Les Schwab — Local shops near you
            </p>
          </div>
        </div>
        {/* Right: CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            Pay weekly from <strong style={{ color: '#fff' }}>$14/wk</strong>
          </p>
          <div style={{
            background: ORANGE, borderRadius: 20, padding: '8px 18px',
            fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 12,
            color: '#fff', whiteSpace: 'nowrap',
          }}>
            Apply Now →
          </div>
        </div>
        {/* decorative */}
        <div style={{ position: 'absolute', right: -30, top: -30, width: 100, height: 100, borderRadius: '50%', border: `1px solid ${ORANGE}22` }} />
      </div>
      </div>
    </div>
  )
}

// 300 × 250 Rectangle
function Rectangle() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">300 × 250 — Medium Rectangle</p>
      <div style={{
        width: 300, height: 250,
        background: `linear-gradient(170deg, ${DARK} 0%, #1c1c22 100%)`,
        borderRadius: 12, overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: 20,
      }}>
        <img src="/images/tires_phone_right.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.4) 65%, transparent 75%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}><SnapBadge /></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 26, color: '#fff', lineHeight: 1.1, marginBottom: 4 }}>
            Get Rolling<br />Today. 🛞
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Safety shouldn't wait.<br />Pay over time.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
            Neumáticos nuevos. Sin crédito necesario.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            background: ORANGE, borderRadius: 24, padding: '10px 0', textAlign: 'center',
            fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff',
            marginBottom: 8,
          }}>
            Apply in Seconds →
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
            Won't affect your FICO® score
          </p>
        </div>

        {/* decorative rings */}
        <div style={{ position: 'absolute', right: -40, top: 40, width: 120, height: 120, borderRadius: '50%', border: `1px solid ${ORANGE}20` }} />
        <div style={{ position: 'absolute', right: -20, top: 60, width: 80, height: 80, borderRadius: '50%', border: `1px solid ${ORANGE}15` }} />
      </div>
    </div>
  )
}

// 320 × 50 Mobile Banner
function MobileBanner() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">320 × 50 — Mobile Banner</p>
      <div style={{
        width: 320, height: 50,
        background: `linear-gradient(90deg, ${DARK} 0%, #1c1c22 100%)`,
        borderRadius: 6, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', margin: 0 }}>
            Roll out today. 🛞
          </p>
        </div>
        <div style={{
          background: ORANGE, borderRadius: 12, padding: '6px 12px',
          fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 10, color: '#fff',
        }}>
          Apply Now
        </div>
      </div>
    </div>
  )
}

export default function DisplayAds() {
  return (
    <div className="space-y-10">
      <Leaderboard />
      <div className="flex flex-wrap gap-10 items-start">
        <Rectangle />
        <div className="space-y-6">
          <MobileBanner />
          <div className="bg-white rounded-xl p-5 border border-gray-100 max-w-xs">
            <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: ORANGE }}>Targeting Logic</p>
            <ul className="space-y-2 text-xs text-[#6b7280] leading-relaxed">
              <li>🔍 <strong className="text-[#353849]">Search trigger:</strong> "tire shop near me," "buy tires SLC," "tire financing no credit"</li>
              <li>📍 <strong className="text-[#353849]">Geo:</strong> Salt Lake Valley, West Jordan, Sandy, Provo, Ogden</li>
              <li>👤 <strong className="text-[#353849]">Demo:</strong> Car owners 22–50, auto maintenance intent signals</li>
              <li>📅 <strong className="text-[#353849]">Flight:</strong> Year-round · Peak: Apr–May &amp; Sep–Oct</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
