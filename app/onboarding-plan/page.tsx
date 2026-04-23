import type { Metadata } from 'next';
import Image from 'next/image';
import { PrintButton } from './PrintButton';

export const metadata: Metadata = {
  title: 'AI Chatbot Intake + Phone Line Onboarding Plan | Affillia Security',
  description:
    'A branded onboarding plan for Affillia Security covering AI chatbot intake, phone line strategy, CRM storage, and implementation priorities.',
};

const phoneNumber = '+44 XXX XXX XXXX';

const comparisonRows = [
  ['Feel', 'Transactional, bureaucratic', 'Conversational, personal'],
  ['Flexibility', 'Fixed questions in a fixed order', "Dynamic, following the client's lead"],
  ['Abandonment', 'Higher, especially after the first step', 'Lower, with each message as a micro-commitment'],
  ['Depth of insight', 'Structured but limited', 'Open-ended, so clients reveal more naturally'],
  ['Brand alignment', 'Risks feeling like generic SaaS', 'Feels closer to speaking with a discreet receptionist'],
];

const chatSteps = [
  {
    title: 'Greeting & Trust Building',
    copy:
      "Good evening. Thank you for reaching out to Affillia Security. I'm an AI assistant here to understand your needs so I can connect you with the right member of our team. Everything you share here is treated with complete confidentiality. If you would prefer to speak with someone directly, I can provide our phone number at any point.",
  },
  {
    title: 'Contact Collection',
    copy:
      'Thank you, [Name]. How would you prefer we follow up with you - email or phone?',
  },
  {
    title: 'Needs Discovery',
    copy:
      "Could you tell me a little about what prompted you to reach out today? No detail is too small or too vague - I'm here to listen.",
  },
  {
    title: 'Service Identification',
    copy:
      'It sounds like you may be looking for [residential security / close personal protection / risk advisory]. Have I understood that correctly?',
  },
  {
    title: 'Contextual Follow-Up',
    copy:
      'The assistant asks two or three relevant questions based on the client response, covering property context, urgency, preferred follow-up, and whether the enquiry is exploratory or time-sensitive.',
  },
  {
    title: 'Close & Handoff',
    copy:
      'Thank you for sharing that with me, [Name]. One of our senior consultants will review this personally and reach out via [preferred method] within 24 hours to arrange a confidential conversation.',
  },
];

const guardrails = [
  ['Never give security advice', 'The AI collects needs; it does not assess risk or advise on tactics.'],
  ['Never quote pricing', 'Pricing is bespoke and should be handled by the consultant.'],
  ['Never pretend to be human', 'Transparency builds trust with high-net-worth clients.'],
  ['Always offer the phone number', 'Sensitive or hesitant clients need a direct human alternative.'],
  ['Flag urgency', 'Immediate danger or active threats should be routed to the 24/7 monitored line.'],
];

const phonePlacements = [
  ['Navbar', 'Phone icon and number always visible'],
  ['Hero section', 'Dual CTAs: Start Confidential Chat and Call Directly'],
  ['Chat widget', 'Opening message includes phone as an alternative'],
  ['Chat fallback', 'AI offers phone when the user seems hesitant or sensitive'],
  ['Contact page', 'Prominent phone section with operating hours'],
  ['Footer', 'Phone number repeated as a trust anchor'],
];

const crmFields = [
  ['client_name', 'Extracted by AI', 'James Whitfield'],
  ['client_email', 'Extracted by AI', 'j@example.com'],
  ['client_phone', 'Extracted by AI, if provided', '+44 7XXX XXX XXX'],
  ['preferred_contact', 'Extracted by AI', 'phone'],
  ['service_type', 'Extracted by AI', 'Residential Security'],
  [
    'summary',
    'AI-generated summary',
    'Client is concerned about recent break-ins near a primary residence in Mayfair and is seeking on-site personnel plus a system review.',
  ],
  ['key_concerns', 'Extracted by AI', 'recent local break-ins; family safety; property perimeter'],
  ['timeline', 'Extracted by AI', 'within 2 weeks'],
  ['urgency_level', 'AI-assessed', 'medium'],
  ['sentiment', 'AI-assessed', 'concerned but measured'],
  ['full_transcript', 'Raw conversation', 'Complete chat log'],
  ['status', 'System', 'new_inquiry'],
];

const stackRows = [
  ['Chat UI', 'Custom React component', 'Must match the premium website aesthetic.'],
  ['AI Backend', 'Vercel AI SDK + OpenAI GPT-4o-mini', 'Built for Next.js, supports streaming, low cost.'],
  ['Database', 'Supabase PostgreSQL', 'Encrypted at rest, row-level security, auth built in.'],
  ['Summarization', 'Second LLM call after conversation', 'Produces structured data and consultant-ready summary.'],
  ['Notifications', 'Resend email + optional Slack webhook', 'Creates immediate alerts for new enquiries.'],
  ['Phone tracking', 'Manual CRM entry', 'Calls are logged into the same intake pipeline.'],
];

const priorityRows = [
  ['MVP', 'Branded chat widget, Vercel AI SDK, Supabase storage, summarization, phone number across site', '1-2 weeks'],
  ['V2', 'Admin dashboard with inquiry pipeline and consultation logging', '2-3 weeks'],
  ['V3', 'Client portal, proposal generation, document uploads', '3-4 weeks'],
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-semibold text-[#101010] md:text-4xl">{title}</h2>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded border border-[#D8D2C7] bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-[#1A202C] text-[#E8E6E1]">
          <tr>
            {headers.map((header) => (
              <th className="px-4 py-3 font-semibold" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="border-t border-[#E7E2D8]" key={row.join('-')}>
              {row.map((cell, index) => (
                <td
                  className={index === 0 ? 'px-4 py-3 font-semibold text-[#1A202C]' : 'px-4 py-3 text-[#343434]'}
                  key={`${cell}-${index}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FlowCard({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' | 'gold' }) {
  const toneClass =
    tone === 'dark'
      ? 'border-[#1A202C] bg-[#1A202C] text-[#E8E6E1]'
      : tone === 'gold'
        ? 'border-[#B08D57] bg-[#B08D57] text-[#1A202C]'
        : 'border-[#D8D2C7] bg-white text-[#101010]';

  return (
    <div className={`rounded border px-4 py-3 text-center text-sm font-semibold shadow-sm ${toneClass}`}>
      {children}
    </div>
  );
}

function Arrow() {
  return <div className="flex items-center justify-center py-2 text-xl text-[#B08D57]">↓</div>;
}

export default function OnboardingPlanPage() {
  return (
    <main className="bg-[#F7F7F7] text-[#101010]">
      <style>{`
        @page { size: A4; margin: 14mm; }
        @media print {
          body { background: #ffffff !important; }
          .no-print { display: none !important; }
          .page-break { break-before: page; }
          .avoid-break { break-inside: avoid; }
          main { background: #ffffff !important; }
        }
      `}</style>

      <div className="no-print sticky top-0 z-20 border-b border-[#D8D2C7] bg-[#F7F7F7]/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <span className="text-sm font-semibold text-[#1A202C]">Affillia Security onboarding plan</span>
          <PrintButton />
        </div>
      </div>

      <article className="mx-auto max-w-5xl bg-[#F7F7F7]">
        <section className="relative overflow-hidden bg-[#1A202C] px-8 py-14 text-[#E8E6E1] md:px-12">
          <div className="absolute right-0 top-0 h-56 w-56 border-l border-[#B08D57]/30 opacity-70 [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]" />
          <div className="relative z-10 max-w-3xl">
            <Image
              src="/affseclogodarktrans.png"
              alt="Affillia Security"
              width={210}
              height={52}
              className="mb-10"
              priority
            />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D57]">
              Client Onboarding Strategy
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">
              AI Chatbot Intake + Phone Line
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E8E6E1]/85">
              A discreet, conversational intake journey for high-net-worth clients that combines
              a branded AI liaison with a visible direct phone line and a consultant-ready CRM
              workflow.
            </p>
          </div>
        </section>

        <section className="px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Strategic Rationale" title="Why a Chatbot Beats a Form" />
          <p className="mb-6 max-w-3xl leading-7 text-[#343434]">
            HNWIs are used to conversations, not forms. A calm greeting that acknowledges
            confidentiality immediately feels more aligned with a premium security firm than a
            rigid multi-step form.
          </p>
          <DataTable headers={['Aspect', 'Multi-Step Form', 'AI Chatbot']} rows={comparisonRows} />
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Journey Design" title="Revised Full Client Journey" />
          <div className="grid gap-6 md:grid-cols-[1fr_1fr_1fr]">
            <div className="avoid-break">
              <FlowCard tone="dark">Client lands on site</FlowCard>
              <Arrow />
              <FlowCard>How would you like to proceed?</FlowCard>
              <Arrow />
              <div className="grid grid-cols-2 gap-3">
                <FlowCard tone="gold">Start Confidential Chat</FlowCard>
                <FlowCard tone="gold">Call Us Directly</FlowCard>
              </div>
            </div>

            <div className="avoid-break">
              <FlowCard tone="dark">AI Chatbot Intake</FlowCard>
              <Arrow />
              <FlowCard>Greeting & confidentiality notice</FlowCard>
              <Arrow />
              <FlowCard>Name & preferred contact method</FlowCard>
              <Arrow />
              <FlowCard>Open-ended needs discovery</FlowCard>
              <Arrow />
              <FlowCard>Timeline, urgency & follow-up questions</FlowCard>
              <Arrow />
              <FlowCard tone="gold">AI summarizes conversation</FlowCard>
            </div>

            <div className="avoid-break">
              <FlowCard tone="dark">Phone Conversation</FlowCard>
              <Arrow />
              <FlowCard>Consultant logs notes manually in CRM</FlowCard>
              <Arrow />
              <FlowCard tone="gold">CRM record created</FlowCard>
              <Arrow />
              <FlowCard>Admin dashboard: new inquiry</FlowCard>
              <Arrow />
              <FlowCard>Consultant reviews summary</FlowCard>
              <Arrow />
              <FlowCard>Consultation call scheduled</FlowCard>
              <Arrow />
              <FlowCard>Bespoke proposal drafted</FlowCard>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <FlowCard tone="gold">Client accepts: contract & deposit</FlowCard>
            <FlowCard>Client declines: deal lost or on hold</FlowCard>
          </div>
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Conversation Design" title="The AI Chatbot as Virtual Liaison" />
          <div className="grid gap-4">
            {chatSteps.map((step, index) => (
              <div
                className="avoid-break rounded border border-[#D8D2C7] bg-white p-5 shadow-sm"
                key={step.title}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#1A202C] text-sm font-semibold text-[#B08D57]">
                    {index + 1}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#1A202C]">{step.title}</h3>
                </div>
                <p className="leading-7 text-[#343434]">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Risk Controls" title="Critical AI Guardrails" />
          <DataTable headers={['Rule', 'Why It Matters']} rows={guardrails} />
          <div className="mt-8 rounded border-l-4 border-[#B08D57] bg-white p-6">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-[#1A202C]">
              Urgent Threat Response
            </h3>
            <p className="leading-7 text-[#343434]">
              If the user mentions immediate danger or a specific active threat, the assistant
              should stop intake and say: I want to make sure you get the fastest possible
              response. Please call us directly at {phoneNumber}; our line is monitored 24/7.
            </p>
          </div>
        </section>

        <section className="px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Trust Signal" title="Phone Number Strategy" />
          <p className="mb-6 max-w-3xl leading-7 text-[#343434]">
            The phone number is not only an alternative channel. Its prominence tells prospective
            clients that Affillia Security is a real, available team and that sensitive enquiries
            can move directly to a human conversation.
          </p>
          <DataTable headers={['Placement', 'Execution']} rows={phonePlacements} />
          <div className="mt-8 grid gap-4 rounded border border-[#D8D2C7] bg-[#1A202C] p-6 text-[#E8E6E1] md:grid-cols-2">
            <div className="rounded border border-[#B08D57]/60 px-6 py-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B08D57]">Primary CTA</p>
              <p className="mt-3 font-serif text-2xl font-semibold">Start Confidential Chat</p>
            </div>
            <div className="rounded border border-[#B08D57]/60 px-6 py-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B08D57]">Direct Line</p>
              <p className="mt-3 font-serif text-2xl font-semibold">Call {phoneNumber}</p>
            </div>
          </div>
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Backend Workflow" title="Summarization & CRM Storage" />
          <div className="grid gap-4 md:grid-cols-5">
            {['Client', 'Chat Widget', '/api/chat', 'LLM API', 'Supabase + Admin Dashboard'].map(
              (step, index) => (
                <div className="avoid-break" key={step}>
                  <FlowCard tone={index === 0 || index === 4 ? 'dark' : 'light'}>{step}</FlowCard>
                  {index < 4 && <div className="hidden py-2 text-center text-[#B08D57] md:block">→</div>}
                </div>
              )
            )}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded border border-[#D8D2C7] bg-white p-5">
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#1A202C]">Live Chat Loop</h3>
              <p className="leading-7 text-[#343434]">
                User messages are sent with conversation history to the API route. The AI response
                streams back into the branded chat interface.
              </p>
            </div>
            <div className="rounded border border-[#D8D2C7] bg-white p-5">
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#1A202C]">Completion Loop</h3>
              <p className="leading-7 text-[#343434]">
                When the conversation ends, the transcript is summarized, structured fields are
                extracted, the CRM record is created, and the admin team receives a new inquiry
                notification.
              </p>
            </div>
          </div>
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="CRM Record" title="What Gets Saved" />
          <DataTable headers={['Field', 'Source', 'Example']} rows={crmFields} />
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Admin View" title="Consultant-Ready Inquiry Summary" />
          <div className="rounded border border-[#D8D2C7] bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4 border-b border-[#E7E2D8] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B08D57]">New Inquiry</p>
                <h3 className="mt-2 font-serif text-3xl font-semibold text-[#1A202C]">James Whitfield</h3>
              </div>
              <div className="text-sm font-semibold text-[#343434]">Received: 23 Apr 2026, 10:32 AM</div>
            </div>
            <div className="mb-5 flex flex-wrap gap-3">
              {['Residential Security', 'Urgency: Medium', 'Preferred Contact: Phone'].map((tag) => (
                <span className="rounded border border-[#B08D57]/50 bg-[#FAF8F5] px-3 py-2 text-sm font-semibold text-[#1A202C]" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Summary</h4>
            <p className="leading-7 text-[#343434]">
              Client is concerned about recent break-ins in the neighborhood. Primary residence in
              Mayfair. Looking for 24/7 on-site personnel and a system upgrade. Timeline: within
              two weeks.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {['View Full Transcript', 'Schedule Consultation', 'Send Follow-Up', 'Move to Next Stage'].map(
                (action) => (
                  <div className="rounded border border-[#D8D2C7] px-3 py-3 text-center text-sm font-semibold text-[#1A202C]" key={action}>
                    {action}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="page-break px-8 py-12 md:px-12">
          <SectionHeading eyebrow="Implementation" title="Recommended Stack" />
          <DataTable headers={['Component', 'Technology', 'Why']} rows={stackRows} />
          <div className="mt-10">
            <SectionHeading eyebrow="Delivery Plan" title="Implementation Priority" />
            <DataTable headers={['Phase', 'What', 'Effort']} rows={priorityRows} />
          </div>
          <div className="mt-10 rounded bg-[#1A202C] p-8 text-[#E8E6E1]">
            <h3 className="mb-4 font-serif text-3xl font-semibold">Key Design Principle</h3>
            <p className="leading-8 text-[#E8E6E1]/85">
              The site should feel like walking into a premium security firm&apos;s reception: the
              client is greeted calmly, offered a discreet choice of channel, and guided toward the
              right consultant. The chatbot is the digital receptionist; the phone number is the
              direct line to the partner&apos;s office.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
