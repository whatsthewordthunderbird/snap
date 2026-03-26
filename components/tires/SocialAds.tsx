// Social Ads — Instagram Story (9:16), Feed Post (1:1), Carousel Cards

const ORANGE = '#f97316'
const DARK = '#0f0f12'

function StoryAd() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram Story · 1080 × 1920</p>
      <div style={{
        width: 280, height: 498,
        background: `linear-gradient(180deg, ${DARK} 0%, #1c1c22 50%, #0f0f12 100%)`,
        borderRadius: 16, overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: 22,
      }}>
        {/* Story bar */}
        <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ flex: 1, height: 2, background: i === 1 ? '#fff' : 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
          ))}
        </div>

        {/* Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden' }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff' }}>snapfinance</span>
          <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }}>Sponsored</span>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px 0' }}>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, fontWeight: 700, color: ORANGE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            Roll Ready
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 38, color: '#fff', lineHeight: 1.05, marginBottom: 16 }}>
            New Tires.<br />Today. 🛞
          </p>

          {/* Campaign video */}
          <div style={{ height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
            <video src="/images/tireguy_video.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 14, color: '#fff', fontWeight: 700, marginBottom: 4 }}>
            Safety shouldn't wait.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: 14 }}>
            La seguridad no puede esperar.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
            No credit needed · Pay weekly
          </p>
        </div>

        {/* CTA */}
        <div>
          <div style={{
            background: ORANGE, borderRadius: 20, padding: '10px 0',
            textAlign: 'center', fontFamily: 'Aeonik, sans-serif', fontWeight: 700,
            fontSize: 13, color: '#fff', marginBottom: 8,
          }}>
            Apply in Seconds →
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
            Won't affect your FICO® score
          </p>
        </div>
      </div>
    </div>
  )
}

function FeedPost() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram Feed · 1080 × 1080</p>
      <div style={{ width: 280, borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb', background: '#fff' }}>
        {/* Profile bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderBottom: '1px solid #f3f4f6' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden' }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, fontWeight: 700, color: '#353849' }}>snapfinance</span>
          <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 8, color: '#9ca3af', marginLeft: 'auto' }}>Sponsored</span>
        </div>

        {/* Image area */}
        <div style={{
          width: 280, height: 280,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          alignItems: 'flex-start', padding: 24, position: 'relative', overflow: 'hidden',
          background: `linear-gradient(135deg, ${DARK} 0%, #1c1c22 100%)`,
        }}>
          <img src="/images/tires_phone_right.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% center' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, rgba(15,15,18,0.85) 0%, rgba(15,15,18,0.75) 30%, rgba(15,15,18,0.55) 55%, transparent 75%)` }} />
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 7, fontWeight: 700, color: ORANGE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, position: 'relative', zIndex: 1 }}>Roll Ready · 2026</p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.1, marginBottom: 6, position: 'relative', zIndex: 1 }}>
            Bald tires?<br />Bold move.<br />Fix it today.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1 }}>
            Pay weekly · Apply in seconds
          </p>
        </div>

        {/* Caption */}
        <div style={{ padding: '10px 12px' }}>
          <div style={{ background: ORANGE, borderRadius: 6, padding: '6px 12px', marginBottom: 8, display: 'inline-block' }}>
            <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff' }}>Find a Shop</span>
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 9, color: '#6b7280', lineHeight: 1.4 }}>
            <strong style={{ color: '#353849' }}>snapfinance</strong> New tires shouldn't break the bank. Finance yours at a local shop near you with Snap. No perfect credit needed. 🛞🔥 <span style={{ color: ORANGE }}>#RollReady #NewTires #SnapFinance</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// Card width + gap = 280 + 12 = 292px per slot
// Total panorama width across 4 cards = 4×280 + 3×12 = 1156px
const CARD_SLOT = 292

function CarouselCard({ headline, sub, emoji, panoramaIndex }: {
  headline: string; sub: string; emoji: string; panoramaIndex: number
}) {
  const offsetX = panoramaIndex * CARD_SLOT
  return (
    <div style={{
      width: 280, height: 280, flexShrink: 0,
      backgroundImage: 'url(/images/wide_carousel_tires.png)',
      backgroundSize: '1156px auto',
      backgroundPosition: `-${offsetX}px center`,
      borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.50)', borderRadius: 12 }} />
      <span style={{ fontSize: 36, position: 'relative', zIndex: 1 }}>{emoji}</span>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 6 }}>{headline}</p>
        <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{sub}</p>
      </div>
      <div style={{ height: 2, background: ORANGE, borderRadius: 2, width: '40%', position: 'relative', zIndex: 1 }} />
    </div>
  )
}

export default function SocialAds() {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-10 items-start">
        <StoryAd />
        <FeedPost />
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram / Facebook Carousel · 1080 × 1080 per card</p>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
          <CarouselCard emoji="🛞" headline="New Tires" sub="Shop local tire shops near you" panoramaIndex={0} />
          <CarouselCard emoji="⚡" headline="Apply Instantly" sub="Decision in seconds" panoramaIndex={1} />
          <CarouselCard emoji="💰" headline="Pay Over Time" sub="Weekly or biweekly plans" panoramaIndex={2} />
          <CarouselCard emoji="✅" headline="No Perfect Credit" sub="Everyone deserves safe tires" panoramaIndex={3} />
        </div>
      </div>
    </div>
  )
}
