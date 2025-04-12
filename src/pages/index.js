import FeaturedCategories from "@/components/common/FeaturedCategories";
import NewsletterSignup from "@/components/common/NewsletterSignup";
import PopularProducts from "@/components/common/PopularProducts";
import Testimonials from "@/components/common/Testimonials";
import WhyShopWithUs from "@/components/common/WhyShopWithUs";
import HomeHeroSection from "@/components/hero/HomeHeroSection";
import Layout from "@/components/layout";


export default function Home() {
  return (
    <Layout>
    <HomeHeroSection/>
    <FeaturedCategories/>
    <PopularProducts/>
    <WhyShopWithUs/>
    <Testimonials/>
    <NewsletterSignup/>
    </Layout>
   
  );
}
