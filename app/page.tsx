import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'Aeonik, sans-serif' }}>

      {/* ── Header ── */}
      <header className="border-b border-gray-100 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="/images/snap_instagram_logo.jpg" alt="Snap Finance" className="w-full h-full object-cover" />
          </div>
          <span className="text-[#353849] text-lg font-bold tracking-tight">
            Snap Finance
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 tracking-widest uppercase">Campaign Portfolio · 2026</p>
          <p className="text-xs text-[#353849] font-bold tracking-wide mt-0.5">Peter Anderson</p>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="px-8 md:px-16 pt-20 pb-16 max-w-6xl">
        <p className="text-[#1b844a] text-xs font-bold tracking-widest uppercase mb-5">
          Digital Design Portfolio
        </p>
        <h1 className="text-[#353849] font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
          Modular Campaign<br />Design Systems
        </h1>
        <p className="text-[#6b7280] text-lg leading-relaxed max-w-2xl mb-8">
          Three targeted campaigns showing how promotional creative scales across
          email, paid media, social, and on-site placements — built around
          Snap Finance's audience and brand.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#353849] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">PA</span>
          </div>
          <div>
            <p className="text-[#353849] text-sm font-bold">Peter Anderson</p>
            <p className="text-[#6b7280] text-xs">Digital Designer</p>
          </div>
        </div>
      </section>

      {/* ── Campaign cards ── */}
      <section className="px-8 md:px-16 pb-24 grid md:grid-cols-2 gap-6 max-w-6xl">

        {/* Campaign 01 */}
        <Link href="/campaign/summer-sound" className="group block">
          <div className="rounded-2xl overflow-hidden border border-gray-100 group-hover:border-[#1b844a]/40 group-hover:shadow-2xl transition-all duration-300">
            <div className="h-52 flex items-end p-8 relative overflow-hidden">
              {/* Background image */}
              <img src="/images/summer_sound_hero.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f] via-[#0a1a0f]/70 to-[#0a1a0f]/30" />
              <div className="relative">
                <p className="text-[#1b844a] text-[10px] font-bold tracking-widest uppercase mb-2">Campaign 01</p>
                <p className="text-white text-3xl font-bold leading-tight">Summer Sound</p>
              </div>
            </div>
            <div className="p-8 bg-white">
              <p className="text-[#353849] font-bold mb-2">Car Audio · Bassheads · Geo-Targeted</p>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                Search-triggered creative targeting car audio enthusiasts in key markets.
                Bilingual tone. Summer seasonal. Scales across 8 modular placements.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Display Ads', 'Social', 'Email', 'On-site'].map(tag => (
                  <span key={tag} className="text-xs border border-[#1b844a]/30 text-[#1b844a] rounded-full px-3 py-1 font-bold tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Campaign 02 */}
        <Link href="/campaign/engagement-ring" className="group block">
          <div className="rounded-2xl overflow-hidden border border-gray-100 group-hover:border-[#c9a060]/40 group-hover:shadow-2xl transition-all duration-300">
            <div className="h-52 flex items-end p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #1a0d2e 65%, #0d0a1a 100%)' }}>
              <img src="/images/couple_ring_shopping.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/70 to-[#0a0a14]/30" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: '#c9a060' }}>Campaign 02</p>
                <p className="text-white text-3xl font-bold leading-tight">Get approved.<br />Get the ring.</p>
              </div>
            </div>
            <div className="p-8 bg-white">
              <p className="text-[#353849] font-bold mb-2">Jewelry · Engagement · Lease-to-Own</p>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                The moment matters. We make it possible. Financing creative targeting proposal-ready shoppers across jewelry retail partners.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Display Ads', 'Social', 'Email', 'On-site'].map(tag => (
                  <span key={tag} className="text-xs border rounded-full px-3 py-1 font-bold tracking-wide" style={{ borderColor: 'rgba(201,160,96,0.3)', color: '#c9a060' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Campaign 03 */}
        <Link href="/campaign/tires" className="group block">
          <div className="rounded-2xl overflow-hidden border border-gray-100 group-hover:border-[#f97316]/40 group-hover:shadow-2xl transition-all duration-300">
            <div className="h-52 flex items-end p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f12 0%, #1c1c22 65%, #0f0f12 100%)' }}>
              <img src="/images/tires_phone_right.png" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/70 to-[#0f0f12]/30" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: '#f97316' }}>Campaign 03</p>
                <p className="text-white text-3xl font-bold leading-tight">Roll Ready</p>
              </div>
            </div>
            <div className="p-8 bg-white">
              <p className="text-[#353849] font-bold mb-2">Tires · Auto · Lease-to-Own</p>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
                New tires. No credit needed. Safety-first financing creative targeting car owners at local tire shops across the Salt Lake Valley.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Display Ads', 'Social', 'Email', 'On-site'].map(tag => (
                  <span key={tag} className="text-xs border rounded-full px-3 py-1 font-bold tracking-wide" style={{ borderColor: 'rgba(249,115,22,0.3)', color: '#f97316' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>

      </section>
    </main>
  )
}
