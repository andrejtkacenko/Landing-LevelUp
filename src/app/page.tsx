import { Header } from '@/components/layout/header';
import { Hero } from '@/components/landing/hero';
import { GamesShowcase } from '@/components/landing/games-showcase';
import { CommunityHighlights } from '@/components/landing/community-highlights';
import { EventCalendar } from '@/components/landing/event-calendar';
import { MemberBenefits } from '@/components/landing/member-benefits';
import { Faq } from '@/components/landing/faq';
import { GameRecommender } from '@/components/landing/game-recommender';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <GamesShowcase />
        <CommunityHighlights />
        <EventCalendar />
        <MemberBenefits />
        <GameRecommender />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
