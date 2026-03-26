// Display Ads — 728×90 Leaderboard, 300×250 Rectangle, 320×50 Mobile Banner

const SNAP_GREEN = '#1b844a'
const DARK = '#0a1a0f'

function SnapBadge() {
  return (
    <div className="flex items-center">
      <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
        <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  )
}

// 728 × 90 Leaderboard
function Leaderboard() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">728 × 90 — Leaderboard</p>
      <div style={{
        width: '100%', maxWidth: 728, height: 90,
        background: `linear-gradient(135deg, ${DARK} 0%, #0f2318 60%, #061209 100%)`,
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
              Summer Sound 🔊
            </p>
            <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              Pioneer · JBL · Kenwood — No credit needed
            </p>
          </div>
        </div>
        {/* Right: CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            Pay weekly from <strong style={{ color: '#fff' }}>$12/wk</strong>
          </p>
          <div style={{
            background: SNAP_GREEN, borderRadius: 20, padding: '8px 18px',
            fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 12,
            color: '#fff', whiteSpace: 'nowrap',
          }}>
            Apply Now →
          </div>
        </div>
        {/* decorative circle */}
        <div style={{ position: 'absolute', right: -30, top: -30, width: 100, height: 100, borderRadius: '50%', border: `1px solid ${SNAP_GREEN}22` }} />
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
        borderRadius: 12, overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: 20, paddingTop: 38,
      }}>
        {/* Full background image */}
        <img src="/images/buying_sub_snap_approved.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.3)', transformOrigin: 'center 60%' }} />
        {/* Gradient from right covering 50% */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(10,26,15,0.95) 0%, rgba(10,26,15,0.85) 25%, rgba(10,26,15,0.5) 45%, rgba(10,26,15,0.15) 60%, transparent 75%)' }} />

        <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}><SnapBadge /></div>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'right' }}>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 26, color: '#fff', lineHeight: 1.1, marginBottom: 4 }}>
            Summer<br />Sound 🔊
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Turn up the bass.<br />Turn up your summer.<br />Pay over time.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
            Sube el bajo. Sube tu verano. Paga con el tiempo.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            background: SNAP_GREEN, borderRadius: 24, padding: '10px 0', textAlign: 'center',
            fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff',
            marginBottom: 8,
          }}>
            Apply in Seconds →
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
            Won't affect your FICO® score
          </p>
        </div>

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
        background: `linear-gradient(90deg, ${DARK} 0%, #0f2318 100%)`,
        borderRadius: 6, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', margin: 0 }}>
            Summer Sound 🔊
          </p>
        </div>
        <div style={{
          background: SNAP_GREEN, borderRadius: 12, padding: '6px 12px',
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
            <p className="text-[#1b844a] text-[10px] font-bold tracking-widest uppercase mb-3">Targeting Logic</p>
            <ul className="space-y-2 text-xs text-[#6b7280] leading-relaxed">
              <li>🔍 <strong className="text-[#353849]">Search trigger:</strong> "pioneer carplay stereo," "JBL subwoofer," "car audio financing"</li>
              <li>📍 <strong className="text-[#353849]">Geo:</strong> Salt Lake City, Albuquerque NM, Denver CO, Sacramento CA</li>
              <li>👤 <strong className="text-[#353849]">Demo:</strong> M, 18–32, Hispanic affinity, auto/music interest</li>
              <li>📅 <strong className="text-[#353849]">Flight:</strong> May 15 – Sep 1, 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
