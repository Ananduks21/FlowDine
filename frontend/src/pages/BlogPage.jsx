import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { sortedBlogs as blogs } from "../data/blogs";

const BlogPage = () => {
  const [featured, ...rest] = blogs;
  return (
    <main data-testid="blog-page" className="pt-32 lg:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">FlowDine Journal</span>
          <h1 className="mt-5 font-display text-5xl lg:text-6xl font-bold text-[#08291f] leading-[1.05]">Notes from the floor.</h1>
          <p className="mt-5 text-lg text-[#2a3e36]/85 max-w-2xl">Honest, no-fluff writing on restaurant operations, growth, and the small details that compound into great service.</p>
        </div>

        {/* Featured */}
        <Link to={`/blog/${featured.slug}`} data-testid="featured-blog" className="mt-16 grid lg:grid-cols-12 gap-8 group">
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#0e4839]/10 shadow-[0_30px_60px_-25px_rgba(8,41,31,0.25)]">
            <img src={featured.cover} alt={featured.title} className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08291f] text-[#f59e0b] text-xs font-mono uppercase">FEATURED · {featured.category}</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">{featured.date} · {featured.readTime}</span>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-[#08291f] leading-[1.1] group-hover:text-[#0e4839] transition">
              {featured.title}
            </h2>
            <p className="mt-5 text-[#2a3e36]/80 text-lg">{featured.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-[#0e4839] font-semibold">
              Read more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              data-testid={`blog-card-${b.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#0e4839]/10 hover:border-[#0e4839]/30 hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_40px_-25px_rgba(8,41,31,0.2)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={b.cover} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#faf8f3]/95 text-[#0e4839] text-[10px] font-mono uppercase tracking-wider">{b.category}</span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs font-mono text-[#2a3e36]/60 mb-3">
                  <span>{b.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {b.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#08291f] leading-tight group-hover:text-[#0e4839] transition">{b.title}</h3>
                <p className="mt-3 text-[#2a3e36]/75 text-sm leading-relaxed line-clamp-2">{b.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[#0e4839] font-semibold text-sm">
                  Read more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

