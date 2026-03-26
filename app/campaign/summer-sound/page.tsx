import Link from 'next/link'
import DisplayAds from '@/components/summer-sound/DisplayAds'
import SocialAds from '@/components/summer-sound/SocialAds'
import EmailModules from '@/components/summer-sound/EmailModules'
import OnsitePlacements from '@/components/summer-sound/OnsitePlacements'

export default function SummerSoundCampaign() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]" style={{ fontFamily: 'Aeonik, sans-serif' }}>

      {/* ── Nav ── */}
      <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center gap-4">
        <Link href="/" className="text-[#6b7280] text-sm hover:text-[#353849] transition-colors">
          ← Portfolio
        </Link>
        <span className="text-gray-200">|</span>
        <span className="text-[#353849] font-bold text-sm">Summer Sound Campaign</span>
      </header>

      {/* ── Campaign brief ── */}
      <section className="bg-gradient-to-br from-[#0a1a0f] via-[#0f2318] to-[#061209] px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1b844a] text-xs font-bold tracking-widest uppercase mb-4">
              Campaign 01 · Summer 2026
            </p>
            <h1 className="text-white font-bold leading-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Summer Sound
            </h1>
            <p className="text-[#4ade80]/80 text-lg mb-2 font-bold">
              Get the system. Pay over time.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              <em>Consigue el sistema. Paga con el tiempo.</em>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Audience',  value: 'Latino males, 18–32\nCar culture enthusiasts' },
              { label: 'Trigger',   value: '"Pioneer CarPlay stereo"\n"JBL subwoofer near me"' },
              { label: 'Markets',   value: 'Salt Lake City · Albuquerque\nDenver · Sacramento' },
              { label: 'Hook',      value: 'Summer seasonal\nNo credit needed · Pay weekly' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-[#1b844a] text-[10px] font-bold tracking-widest uppercase mb-2">{label}</p>
                <p className="text-white/80 text-xs leading-relaxed whitespace-pre-line">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 space-y-24">

        <section>
          <SectionLabel number="01" label="Paid Display Ads" />
          <DisplayAds />
        </section>

        <section>
          <SectionLabel number="02" label="Social Media" />
          <SocialAds />
        </section>

        <section>
          <SectionLabel number="03" label="Email Modules" />
          <EmailModules />
        </section>

        <section>
          <SectionLabel number="04" label="On-Site Placements" />
          <OnsitePlacements />
        </section>

      </div>
    </main>
  )
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[#1b844a] text-xs font-bold tracking-widest">{number}</span>
      <h2 className="text-[#353849] font-bold text-2xl">{label}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}
