// Social Ads — Instagram Story (9:16), Feed Post (1:1), Carousel Cards

const SNAP_GREEN = '#1b844a'
const GOLD = '#c9a060'
const DARK = '#0a0a14'

function StoryAd() {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-2 font-bold tracking-widest uppercase">Instagram Story · 1080 × 1920</p>
      <div style={{
        width: 280, height: 498,
        background: `linear-gradient(180deg, ${DARK} 0%, #1a0d2e 50%, #0d0a1a 100%)`,
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
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            The Ring
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 38, color: '#fff', lineHeight: 1.05, marginBottom: 16 }}>
            The Moment<br />Matters. 💍
          </p>

          {/* Campaign image */}
          <div style={{ height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
            <img src="/images/couple_ring_shopping.png" alt="Couple ring shopping" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 14, color: '#fff', fontWeight: 700, marginBottom: 4 }}>
            We make it possible.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: 14 }}>
            Nosotros lo hacemos posible.
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
            No credit needed · Pay weekly
          </p>
        </div>

        {/* CTA */}
        <div>
          <div style={{
            background: SNAP_GREEN, borderRadius: 20, padding: '10px 0',
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
        }}>
          {/* Background image */}
          <img src="/images/engagement_main.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          {/* Gradient overlay from left, covering 60% */}
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${DARK} 0%, ${DARK} 30%, rgba(10,10,20,0.85) 58%, transparent 75%)` }} />
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 7, fontWeight: 700, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, position: 'relative', zIndex: 1 }}>The Ring · 2026</p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.1, marginBottom: 6, position: 'relative', zIndex: 1 }}>
            The Moment<br />Matters. 💍
          </p>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1 }}>
            Pay weekly · No credit needed
          </p>
        </div>

        {/* Caption */}
        <div style={{ padding: '10px 12px' }}>
          <div style={{ background: SNAP_GREEN, borderRadius: 6, padding: '6px 12px', marginBottom: 8, display: 'inline-block' }}>
            <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff' }}>Apply Now</span>
          </div>
          <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 9, color: '#6b7280', lineHeight: 1.4 }}>
            <strong style={{ color: '#353849' }}>snapfinance</strong> The ring you've been dreaming of. The moment you'll never forget. Pay over time with Snap. 💍✨ <span style={{ color: SNAP_GREEN }}>#TheRing #EngagementSeason #SnapFinance</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function CarouselCard({ headline, sub, emoji, image, panoramaOffset }: { headline: string; sub: string; emoji: string; image?: string; panoramaOffset?: string }) {
  return (
    <div style={{
      width: 280, height: 280, flexShrink: 0,
      borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      border: `1px solid rgba(201,160,96,0.2)`,
      position: 'relative', overflow: 'hidden',
      ...(panoramaOffset ? {
        backgroundImage: `url(/images/wide_wedding.png)`,
        backgroundSize: '1156px auto',
        backgroundPosition: panoramaOffset,
      } : {
        background: `linear-gradient(150deg, ${DARK} 0%, #1a0d2e 100%)`,
      }),
    }}>
      {panoramaOffset && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />}
      {image && !panoramaOffset && (
        <>
          <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        </>
      )}
      <span style={{ fontSize: 36, position: 'relative', zIndex: 1 }}>{emoji}</span>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 6 }}>{headline}</p>
        <p style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{sub}</p>
      </div>
      <div style={{ height: 2, background: GOLD, borderRadius: 2, width: '40%', position: 'relative', zIndex: 1 }} />
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
          <CarouselCard emoji="💍" headline="The Ring" sub="Find your perfect match" panoramaOffset="0px center" />
          <CarouselCard emoji="⚡" headline="Apply Instantly" sub="Decision in seconds" panoramaOffset="-292px center" />
          <CarouselCard emoji="💰" headline="Pay Over Time" sub="Weekly or biweekly plans" panoramaOffset="-584px center" />
          <CarouselCard emoji="✨" headline="No Perfect Credit" sub="Everyone deserves the moment" panoramaOffset="-876px center" />
        </div>
      </div>
    </div>
  )
}
