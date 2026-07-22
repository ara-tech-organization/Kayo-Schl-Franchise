import { useCallback, useState } from 'react'
import { Header, Ladder } from './components/Header'
import { Hero, ProofBar } from './components/Hero'
import { Opportunity, Investment, Scenarios } from './components/Investment'
import { CaseStudy, WhyKayo, SupportMatrix, Qualification, Roadmap } from './components/Proof'
import { Leadership, Faq } from './components/Leadership'
import { Apply, Footer, StickyBar, ContactRail, PopupForm } from './components/Apply'
import VideoModal from './components/VideoModal'
import { useReveal, useScrollSpy } from './hooks/useReveal'
import { LADDER, CONTACT } from './data/content'

const LADDER_IDS = LADDER.map((r) => r.id)

export default function App() {
  // null = closed, 'auto' = 10s timer, 'brochure' = a "Get a Brochure" CTA
  const [popup, setPopup] = useState(null)
  const [video, setVideo] = useState(null)

  useReveal()
  useScrollSpy(LADDER_IDS)

  // Guard against being wired straight to an onClick, which would pass an event.
  const openPopup = useCallback((variant) => setPopup(typeof variant === 'string' ? variant : 'auto'), [])
  const closePopup = useCallback(() => setPopup(null), [])

  const playVideo = useCallback((src, title) => setVideo({ src, title }), [])
  const closeVideo = useCallback(() => setVideo(null), [])

  // Until the real PDF exists, the brochure CTAs gate it behind the qualification form.
  const getBrochure = useCallback(() => {
    if (CONTACT.brochureUrl) window.open(CONTACT.brochureUrl, '_blank', 'noopener')
    else setPopup('brochure')
  }, [])

  return (
    <>
      <Header />
      <Ladder />

      <main>
        <Hero onGetBrochure={getBrochure} onPlayVideo={playVideo} />
        <ProofBar />
        <Opportunity />
        <Investment />
        <Scenarios onGetBrochure={getBrochure} />
        <CaseStudy onPlayVideo={playVideo} />
        <WhyKayo />
        <SupportMatrix />
        <Qualification />
        <Roadmap />
        <Leadership />
        <Faq />
        <Apply />
      </main>

      <Footer />
      <StickyBar />
      <ContactRail onContact={openPopup} />
      <PopupForm variant={popup} onOpen={openPopup} onClose={closePopup} />
      <VideoModal src={video?.src} title={video?.title} onClose={closeVideo} />
    </>
  )
}
