import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "../components/ui/button";

const NotFoundPage = () => (
  <main data-testid="not-found-page" className="min-h-screen flex items-center justify-center px-5 pt-24 pb-16">
    <div className="text-center max-w-xl">
      <div className="relative inline-block">
        <div className="font-display text-[10rem] sm:text-[14rem] font-bold text-[#0e4839] leading-none">404</div>
        <div className="absolute -top-3 -right-6 w-20 h-20 rounded-full bg-[#f59e0b]/30 blur-2xl animate-pulse" />
        <Compass className="absolute top-12 right-0 w-12 h-12 text-[#f59e0b] animate-spin" style={{ animationDuration: "8s" }} />
      </div>
      <h1 className="mt-6 font-display text-3xl lg:text-4xl font-bold text-[#08291f]">Looks like that table doesn't exist.</h1>
      <p className="mt-4 text-[#2a3e36]/80 text-lg">The page you're looking for has been moved, removed, or never existed in the first place.</p>
      <div className="mt-9 flex flex-wrap gap-3 justify-center">
        <Link to="/">
          <Button data-testid="404-home-btn" className="bg-[#0e4839] hover:bg-[#08291f] text-[#faf8f3] rounded-full px-7 h-12 font-semibold">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back home
          </Button>
        </Link>
        <Link to="/blog">
          <Button data-testid="404-blog-btn" variant="outline" className="border-2 border-[#0e4839]/20 hover:border-[#0e4839] hover:bg-transparent text-[#08291f] rounded-full px-7 h-12 font-semibold bg-transparent">
            Read the journal
          </Button>
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundPage;
