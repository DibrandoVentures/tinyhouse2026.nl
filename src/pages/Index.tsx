import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArticleContent from "@/components/ArticleContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="artikel">
        <ArticleContent />
      </div>
      <Footer className="bg-slate-50" />
    </div>
  );
};

export default Index;
