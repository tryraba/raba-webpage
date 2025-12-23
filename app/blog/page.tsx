import BlogHero from "./components/BlogHero";
import FeaturedPosts from "./components/FeaturedPosts";
import BlogGrid from "./components/BlogGrid";
import BlogCTA from "./components/BlogCTA";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <FeaturedPosts />
      <BlogGrid />
      <BlogCTA />
    </main>
  );
}
