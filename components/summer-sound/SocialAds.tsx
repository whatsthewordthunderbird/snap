// Social Ads — Instagram Story (9:16), Feed Post (1:1), Carousel Card

const SNAP_GREEN = '#1b844a'
const DARK = '#0a1a0f'

// Instagram Story — 9:16 ratio, shown at 200×356
function StoryAd() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram Story · 1080 × 1920</p>
      <div style={{
        width: 280, height: 498,
        background: `linear-gradient(180deg, ${DARK} 0%, #0f2318 50%, #061209 100%)`,
        borderRadius: 16, overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: 22,
      }}>
        {/* Story bar simulation */}
        <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ flex: 1, height: 2, background: i === 1 ? '#fff' : 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
          ))}
        </div>

        {/* Snap badge top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden' }}>
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff' }}>snapfinance</span>
          <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }}>Sponsored</span>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px 0' }}>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, fontWeight: 700, color: SNAP_GREEN, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            Summer 2026
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 38, color: '#fff', lineHeight: 1.05, marginBottom: 16 }}>
            Summer<br />Sound 🔊
          </p>

          {/* Campaign video */}
          <div style={{ height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: 16, position: 'relative' }}>
            <video src="/images/joy_ride_video.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <img src="/images/snap_finance_logo.svg" alt="Snap Finance" style={{ position: 'absolute', bottom: 8, right: 8, height: 14, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
          </div>

          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 14, color: '#fff', fontWeight: 700, marginBottom: 4 }}>
            Get the system.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: 14 }}>
            Consigue el sistema.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
            No credit needed · Pay weekly
          </p>
        </div>

        {/* CTA swipe up */}
        <div>
          <div style={{
            background: SNAP_GREEN, borderRadius: 20, padding: '8px 0',
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

// Feed Post — 1:1, shown at 280×280
function FeedPost() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram Feed · 1080 × 1080</p>
      <div style={{ width: 280, borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb', background: '#fff' }}>
        {/* Fake profile bar */}
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
          background: `linear-gradient(135deg, ${DARK} 0%, #0f2318 100%)`,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
          alignItems: 'flex-start', padding: 24, paddingTop: 16, position: 'relative',
        }}>
          {/* Image */}
          <img src="/images/joy_ride_top.jpg" alt="Summer Sound" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          {/* Gradient from top */}
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${DARK} 0%, rgba(10,26,15,0.6) 15%, rgba(10,26,15,0.15) 25%, transparent 30%)` }} />
          {/* Logo overlay */}
          <img src="/images/snap_finance_logo.svg" alt="Snap Finance" style={{ position: 'absolute', bottom: 10, right: 10, height: 14, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8, zIndex: 1 }} />
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.1, marginBottom: 6, position: 'relative' }}>
            Summer<br />Sound 🔊
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.5)', position: 'relative' }}>
            Pay weekly · No credit needed
          </p>
        </div>

        {/* Caption */}
        <div style={{ padding: '10px 12px' }}>
          <div style={{ background: SNAP_GREEN, borderRadius: 6, padding: '6px 12px', marginBottom: 8, display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', lineHeight: 1 }}>Apply Now</span>
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 9, color: '#6b7280', lineHeight: 1.4 }}>
            <strong style={{ color: '#353849' }}>snapfinance</strong> Get the car audio system you want. Pay over time with Snap. No perfect credit needed. 🎵🔊 <span style={{ color: SNAP_GREEN }}>#SummerSound #CarAudio #SnapFinance</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// Carousel Card — shown at 280×280 (matches Feed Post scale for 1080×1080)
function CarouselCard({ headline, sub, emoji, image }: { headline: string; sub: string; emoji: string; image?: string }) {
  return (
    <div style={{
      width: 280, height: 280, flexShrink: 0,
      background: `linear-gradient(150deg, ${DARK} 0%, #0f2318 100%)`,
      borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      border: `1px solid rgba(27,132,74,0.2)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {image && (
        <>
          <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
        </>
      )}
      <span style={{ fontSize: 36, position: 'relative', zIndex: 1 }}>{emoji}</span>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 6 }}>{headline}</p>
        <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{sub}</p>
      </div>
      <div style={{ height: 2, background: SNAP_GREEN, borderRadius: 2, width: '40%', position: 'relative', zIndex: 1 }} />
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

      {/* Carousel */}
      <div>
        <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram / Facebook Carousel · 1080 × 1080 per card</p>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
          <CarouselCard emoji="🔊" headline="Pioneer CarPlay" sub="Supports Android Auto" image="/images/pioneer_carplay.png" />
          <CarouselCard emoji="💥" headline="JBL Subwoofers" sub="Feel every beat" image="/images/jbl_sub.png" />
          <CarouselCard emoji="🎛️" headline="Kenwood Deck" sub='10" Floating Touch Screen' image="/images/kenwood_deck.jpg" />
          <CarouselCard emoji="💳" headline="No Credit Needed" sub="Apply in seconds" image="/images/no_credit_needed.png" />
        </div>
      </div>
    </div>
  )
}
