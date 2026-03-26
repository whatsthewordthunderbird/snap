import Link from 'next/link'
import DisplayAds from '@/components/engagement-ring/DisplayAds'
import SocialAds from '@/components/engagement-ring/SocialAds'
import EmailModules from '@/components/engagement-ring/EmailModules'
import OnsitePlacements from '@/components/engagement-ring/OnsitePlacements'

const GOLD = '#c9a060'
const DARK = '#0a0a14'
const SNAP_GREEN = '#1b844a'

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span style={{ fontFamily: 'Aeonik, sans-serif', fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.15em' }}>
        {number}
      </span>
      <div style={{ height: 1, width: 32, background: GOLD, opacity: 0.4 }} />
      <h2 style={{ fontFamily: 'Aeonik, sans-serif', fontWeight: 700, fontSize: 22, color: '#1a1a2e' }}>
        {title}
      </h2>
    </div>
  )
}

export default function EngagementRingCampaign() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]" style={{ fontFamily: 'Aeonik, sans-serif' }}>

      {/* ── Nav ── */}
      <header className="border-b border-gray-100 bg-white px-8 py-5 flex items-center gap-4">
        <Link href="/" className="text-[#6b7280] text-sm hover:text-[#353849] transition-colors">← Portfolio</Link>
        <span className="text-gray-200">|</span>
        <span className="text-[#353849] text-sm font-bold">Engagement Ring Campaign</span>
      </header>

      {/* ── Campaign Brief ── */}
      <section style={{ background: `linear-gradient(160deg, ${DARK} 0%, #1a0d2e 60%, #0d0a1a 100%)`, padding: '64px 48px' }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
            Campaign 02 · The Ring
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 0.95, marginBottom: 12 }}>
            The Ring
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 6 }}>
            The moment matters. We make it possible.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, fontStyle: 'italic', marginBottom: 40 }}>
            El momento importa. Nosotros lo hacemos posible.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Audience',  value: 'Adults 24–38\nProposal-ready shoppers' },
              { label: 'Trigger',   value: '"engagement rings near me"\n"diamond ring financing"' },
              { label: 'Markets',   value: 'Salt Lake City · Albuquerque\nDenver · Sacramento' },
              { label: 'Hook',      value: "Year-round proposals\nValentine's · Holiday season" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ color: GOLD, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</p>
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
