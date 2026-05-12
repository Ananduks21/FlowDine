import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, Twitter, Linkedin, Link as LinkIcon, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { getBlogBySlug, getRelatedBlogs } from "../data/blogs";
import { useContactModal } from "../context/ContactModalContext";
import NotFoundPage from "./NotFoundPage";
import { toast } from "sonner";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug);
  const { setOpen } = useContactModal();

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} · FlowDiner`;
      const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
      meta.name = "description";
      meta.content = blog.excerpt;
      if (!meta.parentNode) document.head.appendChild(meta);
    }
    return () => { document.title = "FlowDiner — Run Your Entire Restaurant From One System"; };
  }, [blog]);

  if (!blog) return <NotFoundPage />;

  const related = getRelatedBlogs(slug, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  return (
    <main data-testid="blog-detail-page" className="pt-28">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-5 lg:px-10 py-6">
        <nav className="flex items-center gap-2 text-sm text-[#2a3e36]/70" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#0e4839]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/blog" className="hover:text-[#0e4839]">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#08291f] font-medium truncate max-w-[60%]">{blog.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-5 lg:px-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e4839]/8 text-[#0e4839] text-xs font-mono uppercase tracking-wider">{blog.category}</span>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#08291f] leading-[1.05]">{blog.title}</h1>
        <p className="mt-6 text-xl text-[#2a3e36]/85 leading-relaxed">{blog.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#0e4839]/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#0e4839] flex items-center justify-center text-[#f59e0b] font-display font-bold">
              {blog.author.split(' ').map(n => n[0]).join('').slice(0,2)}
            </div>
            <div>
              <p className="font-display font-semibold text-[#08291f]">{blog.author}</p>
              <p className="text-xs text-[#2a3e36]/60">{blog.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#2a3e36]/70">
            <span>{blog.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="max-w-5xl mx-auto px-5 lg:px-10 mt-10">
        <div className="rounded-3xl overflow-hidden border border-[#0e4839]/10 shadow-[0_30px_60px_-25px_rgba(8,41,31,0.25)]">
          <img src={blog.cover} alt={blog.title} loading="eager" className="w-full h-[300px] sm:h-[460px] object-cover" />
        </div>
      </div>

      {/* Body + sticky share */}
      <div className="max-w-5xl mx-auto px-5 lg:px-10 mt-12 grid lg:grid-cols-12 gap-10">
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32 flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2a3e36]/50 mb-1">Share</span>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" data-testid="share-twitter" className="w-10 h-10 rounded-full border border-[#0e4839]/15 flex items-center justify-center hover:bg-[#0e4839] hover:text-[#f59e0b] hover:border-[#0e4839] transition-colors text-[#0e4839]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" data-testid="share-linkedin" className="w-10 h-10 rounded-full border border-[#0e4839]/15 flex items-center justify-center hover:bg-[#0e4839] hover:text-[#f59e0b] hover:border-[#0e4839] transition-colors text-[#0e4839]">
              <Linkedin className="w-4 h-4" />
            </a>
            <button onClick={copyLink} data-testid="share-copy" className="w-10 h-10 rounded-full border border-[#0e4839]/15 flex items-center justify-center hover:bg-[#0e4839] hover:text-[#f59e0b] hover:border-[#0e4839] transition-colors text-[#0e4839]">
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </aside>

        <article className="lg:col-span-11 prose-flow max-w-3xl" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-5 lg:px-10 mt-20">
        <div className="bg-[#08291f] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#f59e0b]/15 rounded-full blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-3xl lg:text-5xl font-bold text-[#faf8f3] leading-tight">Ready to run your restaurant differently?</h3>
            <p className="mt-5 text-[#e9e3d2]/85 text-lg max-w-xl mx-auto">See FlowDiner on a 15-minute live demo with your own menu.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button data-testid="blog-demo-btn" onClick={() => setOpen(true)} className="bg-[#f59e0b] hover:bg-[#fbbf24] text-[#08291f] rounded-full px-7 h-13 py-3.5 font-bold">Book a Demo →</Button>
              <Button data-testid="blog-pricing-btn" onClick={() => navigate("/pricing")} variant="outline" className="border-2 border-[#faf8f3]/30 hover:border-[#faf8f3] hover:bg-[#faf8f3]/10 text-[#faf8f3] rounded-full px-7 h-13 py-3.5 font-semibold bg-transparent">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="max-w-5xl mx-auto px-5 lg:px-10 mt-12">
        <Link to="/blog" data-testid="back-to-blogs" className="inline-flex items-center gap-2 text-[#0e4839] font-semibold hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
      </div>

      {/* Related */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 mt-20 mb-10">
        <h3 className="font-display text-3xl font-bold text-[#08291f] mb-8">Related reading</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map(r => (
            <Link key={r.slug} to={`/blog/${r.slug}`} data-testid={`related-${r.slug}`} className="group bg-white rounded-3xl overflow-hidden border border-[#0e4839]/10 hover:-translate-y-1 hover:border-[#0e4839]/30 transition-all duration-300">
              <div className="h-44 overflow-hidden">
                <img src={r.cover} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#f59e0b]">{r.category}</span>
                <h4 className="mt-2 font-display text-lg font-bold text-[#08291f] leading-snug">{r.title}</h4>
                <div className="mt-3 inline-flex items-center gap-1 text-[#0e4839] text-sm font-semibold">
                  Read <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetailPage;

