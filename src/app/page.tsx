import { HeroSection } from '@/components/Home/HeroSection'
import { FeaturedProducts } from '@/components/Home/FeaturedProducts'
import { StatsSection } from '@/components/Home/StatsSection'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <StatsSection />
    </div>
  )
} 