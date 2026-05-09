export const blogs = [
  {
    slug: "why-restaurant-service-is-slow",
    title: "Why Is Restaurant Service Slow — And How to Fix It in 2026",
    excerpt: "Slow service kills tips, table turnover, and reviews. Here's the real reason it happens — and the operational fix that actually works.",
    cover: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80",
    author: "Anandu Krishnan",
    role: "Head of Product, FlowDine",
    date: "Feb 4, 2026",
    readTime: "7 min read",
    category: "Operations",
    content: `
      <p>You walk into a packed restaurant on a Friday night. The host smiles. The table is set. Then you wait — twelve minutes for water, twenty for the order to be taken, and another forty-five before food arrives. By dessert, you've decided you're never coming back.</p>
      <p>This isn't a staffing problem. It's a <strong>coordination problem</strong>. And in 2026, it's almost entirely fixable with the right system.</p>

      <h2>The five hidden bottlenecks</h2>
      <p>After studying hundreds of independent restaurants, the same five bottlenecks keep showing up:</p>
      <ul>
        <li><strong>Order capture lag</strong> — waiters write orders on paper, walk to the POS, key them in, and only then does the kitchen start cooking.</li>
        <li><strong>Kitchen blindness</strong> — chefs don't see incoming orders in real time, so prep is reactive, not proactive.</li>
        <li><strong>Table-status guesswork</strong> — managers don't know which tables are paying, paid, or just lingering.</li>
        <li><strong>Billing chaos</strong> — split payments, UPI, cash, and discounts all collide at the counter.</li>
        <li><strong>Communication gaps</strong> — guests can't call a waiter without raising their hand and waiting.</li>
      </ul>

      <h2>Why "more staff" isn't the answer</h2>
      <blockquote>You can throw bodies at slow service. But two extra waiters can't fix a system where information takes five minutes to travel ten feet.</blockquote>
      <p>Adding people increases your wage bill without increasing throughput, because the bottleneck isn't human speed — it's information speed. The order leaves the table fast. It just doesn't <em>arrive</em> at the kitchen, the bar, and the bill all at once.</p>

      <h3>The fix: one system, real-time everywhere</h3>
      <p>A modern restaurant operating system (ROS) like FlowDine collapses these gaps. The moment a guest places an order — whether on a QR menu or via a waiter — every relevant station sees it instantly: KOT prints in the kitchen, the bill is built live, the table status updates on the floor map.</p>

      <h2>What actually changes</h2>
      <ul>
        <li>Order-to-kitchen time drops from 4–6 minutes to under 10 seconds.</li>
        <li>Table turnover increases by 18–25% during peak hours.</li>
        <li>Billing disputes nearly disappear because the bill is live and visible to everyone.</li>
        <li>Guests rate "speed of service" up to 1.4 stars higher on average.</li>
      </ul>

      <p>Slow service is rarely a people problem. It's a <strong>system problem</strong> — and the right system can make every shift feel calm, even when the floor is packed.</p>
    `,
    tags: ["Operations", "Speed", "Service"]
  },
  {
    slug: "manual-vs-digital-restaurant-management",
    title: "Manual vs Digital Restaurant Management: The Honest Comparison",
    excerpt: "Pen-and-paper still works — until it doesn't. Here's a side-by-side look at where manual breaks and where digital actually pays for itself.",
    cover: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&q=80",
    author: "Priya Menon",
    role: "Operations Lead, FlowDine",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    category: "Comparison",
    content: `
      <p>"We've always done it on paper. Why change?" If you've ever said this — or had a partner who has — this article is for you. We're not going to argue that paper is bad. We're going to compare them honestly, side by side, on the metrics that matter to your P&L.</p>

      <h2>Speed of order capture</h2>
      <p>Manual: 90–120 seconds per table (write, walk, key in). Digital QR: 0 seconds — the guest does it. Waiter-assisted digital: 25–40 seconds.</p>

      <h2>Order accuracy</h2>
      <ul>
        <li>Manual: 4–7% of orders have at least one error (wrong item, wrong portion, missing modifier).</li>
        <li>Digital: under 0.5%, because the guest confirms what they tapped.</li>
      </ul>

      <h2>Billing speed</h2>
      <blockquote>The average manual bill takes 6–9 minutes to close at peak hours. A digital bill closes in under 90 seconds — including split payments across UPI and cash.</blockquote>

      <h2>Where manual still wins</h2>
      <p>Let's be fair. Paper is unbeatable for:</p>
      <ul>
        <li>One-table cafés with a single owner-operator</li>
        <li>Pop-ups with no reliable internet</li>
        <li>Catering where the menu changes every event</li>
      </ul>

      <h3>Where digital pays for itself in under 60 days</h3>
      <p>Anywhere with 8+ tables, 2+ shifts, or any kind of staff turnover. The math is unforgiving: even a ₹1,999/month plan saves more in reduced billing errors and faster turnover than it costs — usually within the first 6 weeks.</p>

      <h2>The verdict</h2>
      <p>Manual is fine if your restaurant fits in your head. The moment it doesn't — the moment you're juggling staff, shifts, suppliers, and guests — digital isn't a luxury. It's the thing that lets you sleep at night.</p>
    `,
    tags: ["Comparison", "ROI", "POS"]
  },
  {
    slug: "best-restaurant-management-software",
    title: "How to Choose the Best Restaurant Management Software (Without Wasting Money)",
    excerpt: "There are 200+ POS and ROS platforms in the market. Here's the no-nonsense framework we recommend to every restaurant owner who asks us.",
    cover: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    author: "Rohan Kapoor",
    role: "Founder, FlowDine",
    date: "Jan 19, 2026",
    readTime: "8 min read",
    category: "Buyer's Guide",
    content: `
      <p>Most restaurant software reviews are written by affiliates who get paid when you click. This one isn't. We're going to give you a five-question checklist that cuts through the marketing noise.</p>

      <h2>Question 1: Does it own the full guest journey?</h2>
      <p>A real ROS handles the moment a guest scans a QR code through the moment the table is cleared. If a "POS" only handles billing, you'll end up duct-taping three other tools to it.</p>

      <h2>Question 2: Is the kitchen first-class?</h2>
      <ul>
        <li>Does it have a real KOT (Kitchen Order Ticket) system?</li>
        <li>Can chefs mark items "ready" in real time?</li>
        <li>Does it separate prep stations (tandoor, cold, bar)?</li>
      </ul>
      <p>If the kitchen is an afterthought, your service will always be reactive.</p>

      <h2>Question 3: How does it handle Indian payment reality?</h2>
      <blockquote>UPI, cash, card, partial-cash + partial-UPI, "I'll pay for our table only" — Indian billing is uniquely complex. Test the split-payment flow in the demo before you buy anything.</blockquote>

      <h2>Question 4: What's the staff learning curve?</h2>
      <p>Your servers turn over every 9–14 months on average. If onboarding takes more than 30 minutes, you'll feel the pain forever. Look for systems that pass the "new waiter on Friday night" test.</p>

      <h3>Question 5: What does it cost when things break?</h3>
      <p>Internet down? Printer offline? Power fluctuation? Ask the vendor exactly what happens. Good systems queue locally and sync when back online. Bad ones lose orders.</p>

      <h2>Our honest recommendation</h2>
      <p>If you're a small café (under 10 tables), a basic POS is enough. If you're a full-service restaurant with a kitchen, multiple shifts, or any reservation flow, you need a true ROS — like FlowDine. The price difference is small. The operational difference is enormous.</p>
    `,
    tags: ["Buyer's Guide", "Software", "Decision"]
  },
  {
    slug: "qr-ordering-benefits",
    title: "QR Ordering: 9 Benefits Restaurant Owners Don't Talk About",
    excerpt: "Beyond \"contactless\" — QR ordering quietly changes economics, reviews, and even how much guests spend. Here's what the data actually shows.",
    cover: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1600&q=80",
    author: "Sneha Iyer",
    role: "Growth, FlowDine",
    date: "Jan 11, 2026",
    readTime: "5 min read",
    category: "Growth",
    content: `
      <p>QR ordering had its moment during the pandemic, then it got dismissed as a "covid thing." That was a mistake. The restaurants that kept QR ordering quietly outperform the ones that didn't — and not for the reasons you'd guess.</p>

      <h2>1. Higher average order value</h2>
      <p>When guests browse a digital menu with photos, they order 14–22% more on average. The visual triggers add-ons in a way no waiter description can.</p>

      <h2>2. Zero order-taking errors</h2>
      <p>The guest taps exactly what they want. The kitchen sees exactly what was tapped. Disputes drop to near zero.</p>

      <h2>3. Servers do the high-value work</h2>
      <ul>
        <li>Less time taking orders</li>
        <li>More time recommending wine, checking on tables, upselling desserts</li>
        <li>Tips go up 8–15%</li>
      </ul>

      <h2>4. Live menu changes</h2>
      <blockquote>86 the salmon at 8pm? Hide it from the digital menu in one tap. No reprinting, no waiter announcements, no apologies.</blockquote>

      <h3>5. Real customer data</h3>
      <p>Phone numbers, return visits, favorite dishes — every QR scan is a data point you can use to bring guests back.</p>

      <h2>6. Faster table turnover</h2>
      <p>Guests order within 90 seconds of sitting down. That's 4–6 minutes saved per table. Across a 30-table restaurant on a Saturday, that's an extra 25–40 covers.</p>

      <h2>7. Multilingual menus, instantly</h2>
      <p>Tourists, business travelers, regional guests — one QR can serve five languages.</p>

      <h2>8. Built-in waiter call & bill request</h2>
      <p>No more raised hands. No more eye-contact games. Guests tap, staff respond.</p>

      <h2>9. Reviews go up</h2>
      <p>The number-one review complaint in casual dining is "slow service." QR ordering kills that complaint at the root.</p>

      <p>QR isn't the future. It's the present. The restaurants that haven't adopted it are quietly losing margin to the ones that have.</p>
    `,
    tags: ["QR", "Growth", "Guest Experience"]
  },
  {
    slug: "restaurant-analytics-for-profit",
    title: "Restaurant Analytics for Profit: The 6 Numbers That Actually Matter",
    excerpt: "Most restaurant dashboards drown you in data. These six numbers — checked weekly — are enough to grow margin in any concept.",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    author: "Vikram Shetty",
    role: "Analytics, FlowDine",
    date: "Jan 3, 2026",
    readTime: "9 min read",
    category: "Analytics",
    content: `
      <p>Owners often tell us, "I have analytics. I just don't know what to do with them." That's because most dashboards show 40 metrics and prioritize none. Here are the six we tell every FlowDine customer to watch — weekly, religiously.</p>

      <h2>1. Cover count by daypart</h2>
      <p>Not just "how many guests today" — but how many at lunch, dinner, weekend brunch. This tells you where to push promotions and where to cut staff.</p>

      <h2>2. Average check size</h2>
      <ul>
        <li>By daypart</li>
        <li>By server (yes, your staff matter more than you think)</li>
        <li>By menu category</li>
      </ul>

      <h2>3. Best-seller velocity</h2>
      <blockquote>Your top 5 dishes likely drive 60–70% of revenue. If one of them slips, you'll feel it in two weeks. Analytics catches it on day three.</blockquote>

      <h3>4. Table turnover time</h3>
      <p>Average minutes from "seated" to "table free." If this creeps up by even 8 minutes, you've lost a full seating during peak. Find the bottleneck — usually billing or kitchen.</p>

      <h2>5. Comp & discount rate</h2>
      <p>How much revenue is being given away in voids, comps, and discounts? Anything over 4% deserves a hard conversation.</p>

      <h2>6. Revenue per available seat hour (RevPASH)</h2>
      <p>The single most important number in restaurant economics. Multiply your average check by your turnover rate, divide by available seat hours. Track it weekly. Move it monthly.</p>

      <h2>How FlowDine helps</h2>
      <p>Every metric above is on the FlowDine dashboard, live, with weekly trend lines. You don't build reports. You read them.</p>
      <p>The owners who grow margin in 2026 won't be the ones with the most data. They'll be the ones who watch the right six numbers — and act on them.</p>
    `,
    tags: ["Analytics", "Profit", "Dashboards"]
  }
];

export const getBlogBySlug = (slug) => blogs.find(b => b.slug === slug);
export const getRelatedBlogs = (slug, count = 3) => blogs.filter(b => b.slug !== slug).slice(0, count);
