import Link from 'next/link'
import DisplayAds from '@/components/tires/DisplayAds'
import SocialAds from '@/components/tires/SocialAds'
import EmailModules from '@/components/tires/EmailModules'
import OnsitePlacements from '@/components/tires/OnsitePlacements'

const ORANGE = '#f97316'
const DARK = '#0f0f12'

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, fontWeight: 700, color: ORANGE, letterSpacing: '0.15em' }}>
        {number}
      </span>
      <div style={{ height: 1, width: 32, background: ORANGE, opacity: 0.4 }} />
      <h2 style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 22, color: '#1a1a2e' }}>
        {title}
      </h2>
    </div>
  )
}

export default function TiresCampaign() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]" style={{ fontFamily: 'Aeonik, sans-serif' }}>

      {/* ── Nav ── */}
      <header className="border-b border-gray-100 bg-white px-8 py-5 flex items-center gap-4">
        <Link href="/" className="text-[#6b7280] text-sm hover:text-[#353849] transition-colors">← Portfolio</Link>
        <span className="text-gray-200">|</span>
        <span className="text-[#353849] text-sm font-bold">Tires Campaign</span>
      </header>

      {/* ── Campaign Brief ── */}
      <section style={{ background: `linear-gradient(160deg, ${DARK} 0%, #1c1c22 60%, #0f0f12 100%)`, padding: '64px 48px' }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
            Campaign 03 · Roll Ready
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 0.95, marginBottom: 12 }}>
            Roll Ready
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 6 }}>
            New tires. No credit needed. Safety shouldn't wait.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, fontStyle: 'italic', marginBottom: 40 }}>
            Neumáticos nuevos. Sin crédito necesario.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Audience',  value: 'Car owners 22–50\nAuto maintenance intent' },
              { label: 'Trigger',   value: '"tire shop near me"\n"tire financing no credit"' },
              { label: 'Markets',   value: 'Salt Lake Valley · West Jordan\nSandy · Provo · Ogden' },
              { label: 'Hook',      value: 'Year-round safety need\nPeak: Apr–May & Sep–Oct' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ color: ORANGE, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sections ── */}
      <div className="max-w-5xl mx-auto px-8 py-16 space-y-20">

        <section>
          <SectionLabel number="01" title="Paid Display Ads" />
          <DisplayAds />
        </section>

        <section>
          <SectionLabel number="02" title="Social Media" />
          <SocialAds />
        </section>

        <section>
          <SectionLabel number="03" title="Email Modules" />
          <EmailModules />
        </section>

        <section>
          <SectionLabel number="04" title="On-site Placements" />
          <OnsitePlacements />
        </section>

      </div>
    </main>
  )
}
