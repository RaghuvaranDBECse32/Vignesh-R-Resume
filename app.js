// Initial Mock Database for Portfolio Feed
const DEFAULT_POSTS = [
  {
    id: "post-project-1",
    author: {
      name: "Vignesh R",
      avatar: "assets/vignesh_real.jpg",
      headline: "MBA Candidate at St. Joseph's College of Engineering | HR & Finance Specialization"
    },
    category: "project",
    timestamp: "2 weeks ago",
    content: `Delighted to share my latest MBA Research Project! 🎓

I conducted a comprehensive research study involving 176 respondents using purposive sampling to assess job seekers' attitudes towards taking additional placement-focused courses to secure employment.

Key Methodologies Applied:
• Percentage Analysis & Frequency Distribution
• Independent Sample t-Test
• Chi-Square Test
• One-Way ANOVA (using SPSS)

Key Insights & Findings:
• Identified critical skill gaps influencing graduate employability.
• Analyzed correlation between student attitudes and industry demand.
• Generated actionable insights for colleges and training institutes to optimize their career guidance and skill development programs.

Explore the project details below!`,
    tags: ["#ResearchProject", "#HRAnalytics", "#SPSS", "#Employability", "#PlacementPrep"],
    projectDetails: {
      title: "A Study on the Attitudes of Job Seekers Towards Taking Additional Courses to Secure Placement",
      description: "A comprehensive statistical analysis evaluating how job seekers view professional certifications, skill bootcamps, and placement courses in boosting their recruitment rates. Done as part of MBA coursework in 2026.",
      tags: ["SPSS", "ANOVA", "Chi-Square", "HR Analytics", "Data-Driven Decisions"]
    },
    likes: 48,
    hasLiked: false,
    comments: [
      { name: "Priya Sharma", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop", text: "Excellent research work, Vignesh! The methodology is solid. Sourcing additional skills is indeed vital in today's job market.", time: "1w ago" },
      { name: "Prof. S. Ramaswamy", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop", text: "Great application of t-Test and ANOVA for HR data. Well done, Vignesh.", time: "5d ago" }
    ]
  },
  {
    id: "post-internship-1",
    author: {
      name: "Vignesh R",
      avatar: "assets/vignesh_real.jpg",
      headline: "MBA Candidate at St. Joseph's College of Engineering | HR & Finance Specialization"
    },
    category: "news",
    timestamp: "3 months ago",
    content: `Thrilled to share that I have completed my HR Internship at Maatrum Technologies & Legal Ventures Pvt. Ltd.! 💼✨

During my tenure as an HR Intern, I gained invaluable hands-on experience in corporate HR operations:
• Candidate Sourcing & Screening: Leveraged platforms like Naukri, LinkedIn, Apna, and TN Jobs to identify potential talent.
• Onboarding Coordination: Managed the end-to-end documentation, document verification, and records maintenance for new hires.
• Employee Engagement: Collaborated with senior HR managers to organize workplace engagement activities and maintain recruitment trackers.

Grateful to my mentors and the team for their guidance. Ready to apply these learnings to my career in People Operations!`,
    tags: ["#HRInternship", "#TalentAcquisition", "#HumanResources", "#Recruitment", "#Onboarding", "#MBA"],
    likes: 56,
    hasLiked: false,
    comments: [
      { name: "Sneha Iyer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop", text: "Congratulations on completing the internship! Sourcing experience is key.", time: "2m ago" }
    ]
  },
  {
    id: "post-blog-1",
    author: {
      name: "Vignesh R",
      avatar: "assets/vignesh_real.jpg",
      headline: "MBA Candidate at St. Joseph's College of Engineering | HR & Finance Specialization"
    },
    category: "blog",
    timestamp: "1 month ago",
    content: `I've just published a new article: "The Strategic Fusion of HR and Finance: Why HR Analytics Needs Financial Reporting."

As an MBA candidate specializing in both HR & Finance, I am fascinated by the intersection between people operations and corporate numbers. Historically, HR was perceived as qualitative, while Finance was strictly quantitative. However, modern HR Analytics is bridging this gap by tying human talent metrics to the company's financial bottom line.

In this blog, I deep dive into:
1. Calculating the ROI of Employee Retention & Onboarding Programs.
2. Using Ratio Analysis to quantify Employee Turnover costs.
3. Aligning Workforce Planning with Capital Allocation models.

Read the full text below!`,
    tags: ["#HRAnalytics", "#CorporateFinance", "#WorkforcePlanning", "#ROI", "#MBAInsights"],
    blogDetails: {
      title: "The Strategic Fusion of HR and Finance: Why HR Analytics Needs Financial Reporting",
      body: `### The Strategic Fusion of HR and Finance: Why HR Analytics Needs Financial Reporting
Written by: Vignesh R, MBA

For decades, Human Resources (HR) and Finance departments have operated in silos. HR focused on employee happiness, culture, and staffing, while Finance monitored cash flows, operating profit, and return on investment (ROI). 

However, in the modern data-driven economy, this separation is no longer tenable. Personnel expenses represent one of the largest operating costs for almost any organization. Therefore, optimization of talent acquisition, employee retention, and workforce productivity directly impacts corporate profitability.

#### 1. The Real Cost of Employee Turnover
When an employee leaves, HR calculates the retention rate. But without Finance, the business fails to see the real damage. Employee turnover costs typically include:
- Sourcing Costs: Job board subscriptions, recruitment tools (Naukri, LinkedIn Recruiter).
- Onboarding Costs: Managerial hours spent training, documentation verification time.
- Opportunity Costs: Decreased productivity during the onboarding curve (often takes 3-6 months for a new hire to reach full capacity).

Studies suggest that replacing a mid-level manager costs between 50% to 150% of their annual salary. HR analytics must translate raw turnover percentages into financial numbers to convince decision-makers to invest in retention programs.

#### 2. HR Analytics Meets Financial Metrics
To build a cohesive strategy, HR professionals should leverage key financial metrics:
- **Revenue per Employee (RPE):** Total Revenue / Headcount. This measures the productivity of the workforce.
- **Human Capital ROI (HCROI):** (Revenue - (Operating Expenses - Compensation Costs)) / Compensation Costs. This indicates the return on investment for employee wages and benefits.
- **Labor Cost Revenue Ratio:** Total Personnel Cost / Total Revenue. Essential for understanding how labor expenses scale with business performance.

#### Conclusion
By combining the qualitative expertise of HR with the analytical rigor of Finance, future leaders can design high-performing organizations. HR analytics is not just about keeping employees; it's about optimizing the business's most valuable asset—its human capital.`
    },
    likes: 38,
    hasLiked: false,
    comments: [
      { name: "Arjun Mehta", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop", text: "Spot on analysis! Human Capital ROI is a metric that more CFOs should monitor closely.", time: "3w ago" }
    ]
  },
  {
    id: "post-internship-2",
    author: {
      name: "Vignesh R",
      avatar: "assets/vignesh_real.jpg",
      headline: "MBA Candidate at St. Joseph's College of Engineering | HR & Finance Specialization"
    },
    category: "news",
    timestamp: "1 year ago",
    content: `Reflecting on my experience as an Intern in Compliance & Customer Service at Indian Overseas Bank! 🏦

This internship gave me a strong foundation in risk management and administrative operations:
• CKYC Verifications: Conducted Central KYC verifications for individual and commercial accounts, ensuring absolute accuracy and regulatory compliance.
• Customer Service Operations: Addressed customer queries directly at the front office, solving complaints and processing account service requests.

An invaluable introduction to operational risk compliance and customer relation management in the banking sector.`,
    tags: ["#Compliance", "#BankingInternship", "#IOB", "#RiskManagement", "#CustomerService"],
    likes: 29,
    hasLiked: false,
    comments: []
  }
];

// Industry News Database for Right Sidebar Detail Modal
const INDUSTRY_NEWS = {
  "hr-trends": {
    title: "HR Trends: AI in Recruitment and Talent Acquisition",
    type: "Industry Trend",
    headline: "How AI is changing the landscape of Candidate Sourcing & Onboarding",
    body: `### HR Trends: AI in Recruitment and Talent Acquisition

AI-powered recruiting software is transforming candidate screening. AI tools analyze resumes, match candidates to job requirements, and run candidate communication workflows automatically.

#### Key Advancements:
1. **Automated Sourcing:** AI crawlers scan databases like LinkedIn, Naukri, and local portals to find profiles that meet job requirements.
2. **AI Screening:** Predictive algorithms evaluate past success data to rank candidates, minimizing human bias in the early phases.
3. **Conversational Chatbots:** Virtual assistants handle scheduling, answer basic candidate queries, and request missing documents.

#### The HR Perspective:
While AI offers huge productivity gains (reducing time-to-hire by up to 30%), human HR professionals remain vital. Emotional intelligence, interview management, culture assessment, and offer negotiations are uniquely human functions. AI should be treated as a helper tool rather than a replacement.`,
    tags: ["AI", "Recruitment", "HR Tech", "Talent Acquisition"]
  },
  "capital-market": {
    title: "Capital Markets Volatility Analysis",
    type: "Financial Markets",
    headline: "Understanding market trends and investment structures in 2026",
    body: `### Capital Markets Volatility Analysis

Capital markets are experiencing fluctuations driven by shifts in global interest rates, inflation trends, and technological disruptions.

#### Critical Elements:
1. **Interest Rate Trajectory:** Central banks are recalibrating interest rates, affecting bond yields and corporate cost of capital.
2. **Retail vs. Institutional Portfolios:** Increased participation of retail investors through tech platforms is introducing new liquidity patterns.
3. **Sustainable Finance:** ESG (Environmental, Social, Governance) funds are attracting larger chunks of corporate capital allocations.

#### What it means for Finance Professionals:
Understanding ratio analysis, cost analysis, and financial reporting is crucial. Analysts must model projections with higher stress thresholds to accommodate market fluctuations.`,
    tags: ["Capital Markets", "Finance", "Volatility", "Corporate Treasury"]
  },
  "employability-gap": {
    title: "Job Seekers Skill Gap Study",
    type: "Career Research",
    headline: "Study shows why additional skills and certifications are key to placement",
    body: `### Job Seekers Skill Gap Study

A recent nationwide survey highlights a growing mismatch between academic curriculum and corporate expectations. Over 65% of hiring managers state that fresh graduates lack key hands-on skills in HR systems, business analytics, and technical databases.

#### Crucial Skill Demands:
1. **In HR:** Knowledge of HRMS tools, HR analytics (SPSS, Excel forecasting), and structured recruitment workflows.
2. **In Finance:** Practical understanding of budgeting, cost analysis, and data systems like SQL and Power BI.
3. **In Soft Skills:** Project coordination, problem-solving, and cross-functional communication.

#### Recommended Strategy:
Job seekers must take targeted, additional certifications (e.g. NPTEL, Power BI, Financial Modeling) to stand out and prove placement readiness.`,
    tags: ["Employability", "Skills Gap", "Career Development", "Placement Prep"]
  },
  "people-ops": {
    title: "People Operations vs. Traditional HR",
    type: "HR Strategy",
    headline: "Shifting from compliance-first HR to employee-first Operations",
    body: `### People Operations vs. Traditional HR

The evolution of Human Resources has birthed "People Operations" (People Ops). While traditional HR focuses on policies, payroll, compliance, and risk mitigation, People Ops is designed around employee experience, productivity, and organizational enablement.

#### Core Contrasts:
- **Approach:** HR is reactive (enforcing rules, hiring on demand). People Ops is proactive (optimizing onboarding, building career development paths).
- **Data Usage:** People Ops is heavily data-driven, utilizing engagement scores, net promoter scores (eNPS), and recruitment metrics to optimize workflows.
- **Goal:** Maximizing employee performance and workplace engagement to drive long-term business ROI.`,
    tags: ["People Ops", "HR Strategy", "Employee Experience", "Talent Management"]
  }
};

class PortfolioApp {
  constructor() {
    this.posts = JSON.parse(localStorage.getItem("vignesh_portfolio_posts")) || DEFAULT_POSTS;
    this.currentFilter = "all";
    this.searchQuery = "";
    this.theme = localStorage.getItem("vignesh_theme") || "light";
    this.connections = parseInt(localStorage.getItem("vignesh_connections")) || 482;
    
    this.initDOM();
    this.initEventListeners();
    this.applyTheme();
    this.renderConnections();
    this.renderFeed();
  }

  initDOM() {
    this.feedContainer = document.getElementById("feed-container");
    this.searchInput = document.getElementById("search-input");
    this.themeToggle = document.getElementById("theme-toggle");
    
    // Modal Selectors
    this.postModal = document.getElementById("post-modal");
    this.articleModal = document.getElementById("article-modal");
    this.contactModal = document.getElementById("contact-modal");
    
    // Composer elements
    this.composerTrigger = document.getElementById("composer-trigger");
    this.composerPhoto = document.getElementById("composer-photo");
    this.composerVideo = document.getElementById("composer-video");
    this.composerEvent = document.getElementById("composer-event");
    this.composerArticle = document.getElementById("composer-article");
    
    // Modal buttons
    this.postModalClose = document.getElementById("post-modal-close");
    this.postModalCancel = document.getElementById("post-modal-cancel");
    this.postSubmitBtn = document.getElementById("post-submit-btn");
    this.postText = document.getElementById("post-text");
    this.postCategory = document.getElementById("post-category");
    this.postTags = document.getElementById("post-tags");
    
    // Contact Modal triggers
    this.navContact = document.getElementById("nav-contact");
    this.contactModalClose = document.getElementById("contact-modal-close");
    this.contactModalCloseBtn = document.getElementById("contact-modal-close-btn");
    this.resumeDownloadBtn = document.getElementById("btn-download-resume");
    
    // Article Modal buttons
    this.articleModalClose = document.getElementById("article-modal-close");
    this.articleModalCloseBtn = document.getElementById("article-modal-close-btn");
  }

  initEventListeners() {
    // Theme switching
    this.themeToggle.addEventListener("click", () => this.toggleTheme());

    // Search input
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderFeed();
    });

    // Filtering
    const filterPills = document.querySelectorAll(".feed-filter__pill");
    filterPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        filterPills.forEach(p => p.classList.remove("active"));
        e.target.classList.add("active");
        
        // Match active link in navbar
        const filterVal = e.target.getAttribute("data-filter");
        this.currentFilter = filterVal;
        this.updateNavbarActiveLink(filterVal);
        this.renderFeed();
      });
    });

    // Navbar Navigation filters
    const navLinks = document.querySelectorAll(".header__link");
    navLinks.forEach(link => {
      if (link.hasAttribute("data-tab")) {
        link.addEventListener("click", (e) => {
          const tabVal = link.getAttribute("data-tab");
          this.currentFilter = tabVal;
          
          // Match active pill
          const pill = document.querySelector(`.feed-filter__pill[data-filter="${tabVal}"]`);
          if (pill) {
            document.querySelectorAll(".feed-filter__pill").forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
          }
          
          this.updateNavbarActiveLink(tabVal);
          this.renderFeed();
        });
      }
    });

    // Composer triggers
    const openComposer = (cat = "news") => {
      this.postCategory.value = cat;
      this.postText.value = "";
      this.postTags.value = "";
      this.postSubmitBtn.disabled = true;
      this.postModal.classList.add("active");
      
      const categoryTitles = {
        "news": "Create a Post",
        "project": "Share a Project",
        "blog": "Publish a Blog / Article"
      };
      document.getElementById("post-modal-title").innerText = categoryTitles[cat] || "Create a Post";
      this.postText.focus();
    };

    this.composerTrigger.addEventListener("click", () => openComposer("news"));
    this.composerPhoto.addEventListener("click", () => openComposer("project"));
    this.composerVideo.addEventListener("click", () => openComposer("news"));
    this.composerEvent.addEventListener("click", () => openComposer("news"));
    this.composerArticle.addEventListener("click", () => openComposer("blog"));

    // Post modal closing
    const closePostModal = () => this.postModal.classList.remove("active");
    this.postModalClose.addEventListener("click", closePostModal);
    this.postModalCancel.addEventListener("click", closePostModal);

    // Enable/Disable post button based on text
    this.postText.addEventListener("input", (e) => {
      this.postSubmitBtn.disabled = e.target.value.trim().length === 0;
    });

    // Submit post
    this.postSubmitBtn.addEventListener("click", () => {
      const text = this.postText.value.trim();
      const cat = this.postCategory.value;
      const rawTags = this.postTags.value.split(",");
      const formattedTags = rawTags
        .map(t => t.trim())
        .filter(t => t.length > 0)
        .map(t => t.startsWith("#") ? t : "#" + t);

      const newPost = {
        id: "post-" + Date.now(),
        author: {
          name: "Vignesh R",
          avatar: "assets/vignesh_real.jpg",
          headline: "MBA Candidate at St. Joseph's College of Engineering | HR & Finance Specialization"
        },
        category: cat,
        timestamp: "Just now",
        content: text,
        tags: formattedTags,
        likes: 0,
        hasLiked: false,
        comments: []
      };

      if (cat === "project") {
        newPost.projectDetails = {
          title: text.split("\n")[0].substring(0, 80),
          description: text.split("\n").slice(1).join("\n").substring(0, 200) + "...",
          tags: formattedTags.map(t => t.replace("#", ""))
        };
      } else if (cat === "blog") {
        newPost.blogDetails = {
          title: text.split("\n")[0].substring(0, 80),
          body: text
        };
      }

      this.posts.unshift(newPost);
      this.savePosts();
      closePostModal();
      this.renderFeed();
    });

    // Contact modal
    const openContactModal = () => this.contactModal.classList.add("active");
    const closeContactModal = () => this.contactModal.classList.remove("active");
    this.navContact.addEventListener("click", openContactModal);
    this.contactModalClose.addEventListener("click", closeContactModal);
    this.contactModalCloseBtn.addEventListener("click", closeContactModal);

    // Resume Download Mock
    this.resumeDownloadBtn.addEventListener("click", () => this.downloadResume());

    // Article Modal closing
    const closeArticleModal = () => this.articleModal.classList.remove("active");
    this.articleModalClose.addEventListener("click", closeArticleModal);
    this.articleModalCloseBtn.addEventListener("click", closeArticleModal);
  }

  updateNavbarActiveLink(tabVal) {
    document.querySelectorAll(".header__nav .header__link").forEach(link => {
      link.classList.remove("active");
    });
    if (tabVal === "all") {
      document.getElementById("nav-feed").classList.add("active");
    } else if (tabVal === "project") {
      document.getElementById("nav-projects").classList.add("active");
    } else if (tabVal === "blog") {
      document.getElementById("nav-blogs").classList.add("active");
    }
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("vignesh_theme", this.theme);
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.theme);
    const themeIcon = this.themeToggle.querySelector("i");
    if (this.theme === "dark") {
      themeIcon.className = "fa-solid fa-sun";
    } else {
      themeIcon.className = "fa-solid fa-moon";
    }
  }

  renderConnections() {
    document.getElementById("connection-count").innerText = this.connections;
  }

  savePosts() {
    localStorage.setItem("vignesh_portfolio_posts", JSON.stringify(this.posts));
  }

  connectUser(recId) {
    const item = document.getElementById(recId);
    if (!item) return;
    const btn = item.querySelector(".recommend-item__btn");
    
    if (!btn.classList.contains("connected")) {
      btn.innerText = "Pending";
      btn.classList.add("connected");
      btn.disabled = true;
      
      this.connections++;
      localStorage.setItem("vignesh_connections", this.connections);
      this.renderConnections();
    }
  }

  downloadResume() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    // ── Helpers ──────────────────────────────────────────────
    const addText = (text, x, fontSize, style = "normal", color = [30, 30, 30]) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", style);
      doc.setTextColor(...color);
      doc.text(text, x, y);
    };

    const addWrapped = (text, x, fontSize, style = "normal", color = [80, 80, 80], maxWidth = contentWidth) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", style);
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      y += lines.length * (fontSize * 1.35);
    };

    const sectionHeader = (title) => {
      y += 10;
      doc.setFillColor(10, 102, 194); // LinkedIn blue
      doc.rect(margin, y, contentWidth, 1.5, "F");
      y += 10;
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(10, 102, 194);
      doc.text(title.toUpperCase(), margin, y);
      y += 14;
    };

    const bullet = (text, indent = 8) => {
      doc.setFontSize(9.5);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      const lines = doc.splitTextToSize("• " + text, contentWidth - indent);
      doc.text(lines, margin + indent, y);
      y += lines.length * 13;
    };

    // ── HEADER BLOCK ─────────────────────────────────────────
    // Blue header background
    doc.setFillColor(10, 102, 194);
    doc.rect(0, 0, pageWidth, 90, "F");

    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("VIGNESH R", margin, 38);

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("MBA Candidate | Human Resources & Finance Specialization", margin, 55);

    doc.setFontSize(9);
    doc.setTextColor(200, 230, 255);
    doc.text("St. Joseph's College of Engineering, Chennai, India", margin, 70);
    doc.text("+91 7358461411   |   vvvigneshvikki1411@gmail.com   |   linkedin.com/in/vignesh-r26", margin, 83);

    y = 108;

    // ── SUMMARY ──────────────────────────────────────────────
    sectionHeader("Professional Summary");
    addWrapped(
      "MBA candidate specializing in Human Resources & Finance with hands-on experience in talent acquisition, employee onboarding, workforce planning, HR analytics, financial reporting, and statutory compliance. Adept at leveraging data-driven approaches to optimize HR and finance operations.",
      margin, 9.5, "normal", [60, 60, 60]
    );

    // ── EDUCATION ────────────────────────────────────────────
    sectionHeader("Education");

    doc.setFontSize(10.5); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
    doc.text("MBA – Human Resources & Finance", margin, y);
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 100);
    doc.text("2024 – 2026  |  CGPA: 8.4", pageWidth - margin, y, { align: "right" });
    y += 13;
    doc.setFontSize(9.5); doc.setFont("helvetica", "italic"); doc.setTextColor(60, 60, 60);
    doc.text("St. Joseph's College of Engineering, Chennai", margin, y);
    y += 18;

    doc.setFontSize(10.5); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
    doc.text("Bachelor of Business Administration (BBA)", margin, y);
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 100);
    doc.text("2021 – 2024  |  CGPA: 6.3", pageWidth - margin, y, { align: "right" });
    y += 13;
    doc.setFontSize(9.5); doc.setFont("helvetica", "italic"); doc.setTextColor(60, 60, 60);
    doc.text("Government Arts and Science College, Nandanam, Chennai", margin, y);
    y += 18;

    // ── INTERNSHIP EXPERIENCE ────────────────────────────────
    sectionHeader("Internship Experience");

    doc.setFontSize(10.5); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
    doc.text("HR Intern", margin, y);
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 100);
    doc.text("Feb 2026 – May 2026", pageWidth - margin, y, { align: "right" });
    y += 13;
    doc.setFontSize(9.5); doc.setFont("helvetica", "italic"); doc.setTextColor(10, 102, 194);
    doc.text("Maatrum Technologies & Legal Ventures Pvt. Ltd.", margin, y);
    y += 14;
    bullet("Sourced and screened candidates using Naukri, LinkedIn, Apna, and TN Jobs.");
    bullet("Managed end-to-end onboarding documentation, verification, and records maintenance.");
    bullet("Collaborated with senior HR managers to organize employee engagement activities and maintain recruitment trackers.");
    y += 4;

    doc.setFontSize(10.5); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
    doc.text("Compliance & Customer Service Intern", margin, y);
    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(100, 100, 100);
    doc.text("Jun 2025 – Jul 2025", pageWidth - margin, y, { align: "right" });
    y += 13;
    doc.setFontSize(9.5); doc.setFont("helvetica", "italic"); doc.setTextColor(10, 102, 194);
    doc.text("Indian Overseas Bank", margin, y);
    y += 14;
    bullet("Conducted Central KYC (CKYC) verifications for individual and commercial accounts.");
    bullet("Handled customer queries, complaints, and account service requests at the front office.");
    y += 4;

    // ── RESEARCH PROJECT ─────────────────────────────────────
    sectionHeader("Research Project");

    doc.setFontSize(10.5); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
    addWrapped(
      "A Study on the Attitudes of Job Seekers Towards Taking Additional Courses to Secure Placement  (2026)",
      margin, 10.5, "bold", [30, 30, 30]
    );
    bullet("Collected and analyzed survey responses from 176 respondents using purposive sampling.");
    bullet("Applied statistical tools: Percentage Analysis, Chi-Square Test, Independent Sample t-Test, and One-Way ANOVA using SPSS.");
    bullet("Generated insights for colleges and training institutes to optimize career guidance programs.");
    y += 4;

    // ── CORE SKILLS ──────────────────────────────────────────
    sectionHeader("Core Skills & Competencies");

    const skillCols = [
      ["HR Skills", "Talent Acquisition · Onboarding · Workforce Planning · Employee Engagement · HR Analytics"],
      ["Finance Skills", "Budgeting · Financial Reporting · Cost Analysis · Ratio Analysis · Capital Markets"],
      ["Technical Tools", "SPSS · MS Excel · SQL (MySQL) · Power BI · Canva · PowerPoint"],
      ["Certifications", "Power BI · Data Analytics · NPTEL – Business Law · FINMARK"],
    ];

    skillCols.forEach(([label, values]) => {
      doc.setFontSize(9.5); doc.setFont("helvetica", "bold"); doc.setTextColor(30, 30, 30);
      doc.text(label + ":", margin, y);
      doc.setFont("helvetica", "normal"); doc.setTextColor(60, 60, 60);
      const lines = doc.splitTextToSize(values, contentWidth - 90);
      doc.text(lines, margin + 92, y);
      y += lines.length * 13 + 2;
    });

    // ── FOOTER ───────────────────────────────────────────────
    y += 8;
    doc.setDrawColor(10, 102, 194);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
    doc.setFontSize(8); doc.setFont("helvetica", "italic"); doc.setTextColor(140, 140, 140);
    doc.text("Generated from Vignesh R's Professional Portfolio  |  linkedin.com/in/vignesh-r26", pageWidth / 2, y, { align: "center" });

    doc.save("Vignesh_R_Resume.pdf");
  }

  loadNewsDetail(newsKey) {
    const newsItem = INDUSTRY_NEWS[newsKey];
    if (!newsItem) return;

    document.getElementById("article-type").innerText = newsItem.type;
    document.getElementById("view-title").innerText = newsItem.title;
    document.getElementById("view-headline").innerText = newsItem.headline;
    
    // Inject formatted content
    const bodyContainer = document.getElementById("view-body");
    bodyContainer.innerHTML = newsItem.body
      .replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/#### (.*)/g, '<h4>$1</h4>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/• (.*)/g, '<li>$1</li>');

    // Tags
    const tagsContainer = document.getElementById("view-tags");
    tagsContainer.innerHTML = "";
    newsItem.tags.forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "article-view__tag";
      tagSpan.innerText = "#" + tag;
      tagsContainer.appendChild(tagSpan);
    });

    this.articleModal.classList.add("active");
  }

  loadPostDetail(postId) {
    const post = this.posts.find(p => p.id === postId);
    if (!post) return;

    document.getElementById("article-type").innerText = post.category.toUpperCase() + " DETAILS";
    document.getElementById("view-title").innerText = post.projectDetails ? post.projectDetails.title : (post.blogDetails ? post.blogDetails.title : "Post Details");
    document.getElementById("view-headline").innerText = post.author.headline;

    const bodyContainer = document.getElementById("view-body");
    const content = post.blogDetails ? post.blogDetails.body : (post.projectDetails ? `${post.content}\n\n### Project Overview\n${post.projectDetails.description}` : post.content);
    
    bodyContainer.innerHTML = content
      .replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/#### (.*)/g, '<h4>$1</h4>')
      .replace(/\n/g, '<br>')
      .replace(/• (.*)/g, '<li>$1</li>');

    const tagsContainer = document.getElementById("view-tags");
    tagsContainer.innerHTML = "";
    post.tags.forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "article-view__tag";
      tagSpan.innerText = tag;
      tagsContainer.appendChild(tagSpan);
    });

    this.articleModal.classList.add("active");
  }

  toggleLike(postId) {
    const post = this.posts.find(p => p.id === postId);
    if (!post) return;

    post.hasLiked = !post.hasLiked;
    post.likes += post.hasLiked ? 1 : -1;
    this.savePosts();
    this.renderFeed();
  }

  toggleCommentSection(postId) {
    const section = document.getElementById(`comments-${postId}`);
    if (section) {
      section.classList.toggle("active");
    }
  }

  submitComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    if (text.length === 0) return;

    const post = this.posts.find(p => p.id === postId);
    if (!post) return;

    post.comments.push({
      name: "Visitor Profile",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
      text: text,
      time: "Just now"
    });

    this.savePosts();
    this.renderFeed();
    
    // Auto-reopen comment section
    const section = document.getElementById(`comments-${postId}`);
    if (section) section.classList.add("active");
  }

  renderFeed() {
    this.feedContainer.innerHTML = "";

    // Filter and Search logic
    let filteredPosts = this.posts;
    if (this.currentFilter !== "all") {
      filteredPosts = filteredPosts.filter(p => p.category === this.currentFilter);
    }

    if (this.searchQuery !== "") {
      filteredPosts = filteredPosts.filter(p => {
        const textMatch = p.content.toLowerCase().includes(this.searchQuery);
        const tagMatch = p.tags.some(t => t.toLowerCase().includes(this.searchQuery));
        const catMatch = p.category.toLowerCase().includes(this.searchQuery);
        const nameMatch = p.author.name.toLowerCase().includes(this.searchQuery);
        return textMatch || tagMatch || catMatch || nameMatch;
      });
    }

    if (filteredPosts.length === 0) {
      this.feedContainer.innerHTML = `
        <div class="card no-results">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>No matches found</h3>
          <p>Try searching for keywords like "SPSS", "HR", "Finance", "ANOVA", "Internship", or tag keywords.</p>
        </div>
      `;
      return;
    }

    filteredPosts.forEach(post => {
      const postCard = document.createElement("div");
      postCard.className = "card post";
      postCard.id = post.id;

      // Category specific tag badge
      const badgeClass = post.category;
      const categoryLabel = post.category === "news" ? "News / Update" : (post.category === "project" ? "Research Project" : "Blog / Article");

      // Check comments list
      let commentsHTML = "";
      post.comments.forEach(comment => {
        commentsHTML += `
          <div class="comment-item">
            <img src="${comment.avatar}" alt="${comment.name}" class="comment-item__avatar">
            <div class="comment-item__bubble">
              <div class="comment-item__header">
                <span class="comment-item__name">${comment.name}</span>
                <span class="comment-item__time">${comment.time}</span>
              </div>
              <p class="comment-item__text">${comment.text}</p>
            </div>
          </div>
        `;
      });

      // Layout templates for Projects and Blogs inside the feed
      let mediaContent = "";
      if (post.category === "project" && post.projectDetails) {
        mediaContent = `
          <div class="post__media-project">
            <div class="project-preview">
              <h4 class="project-preview__title">${post.projectDetails.title}</h4>
              <p class="project-preview__desc">${post.projectDetails.description}</p>
              <div class="project-preview__tags">
                ${post.projectDetails.tags.map(t => `<span class="project-preview__tag">${t}</span>`).join("")}
              </div>
              <button class="project-preview__btn" onclick="window.app.loadPostDetail('${post.id}')">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> View Project Details
              </button>
            </div>
          </div>
        `;
      } else if (post.category === "blog" && post.blogDetails) {
        mediaContent = `
          <div class="post__media-project">
            <div class="project-preview" style="border-left: 4px solid var(--primary-color);">
              <h4 class="project-preview__title">${post.blogDetails.title}</h4>
              <p class="project-preview__desc">${post.content.substring(0, 160)}...</p>
              <button class="project-preview__btn" style="background-color: transparent; border: 1px solid var(--primary-color); color: var(--primary-color);" onclick="window.app.loadPostDetail('${post.id}')">
                <i class="fa-solid fa-book-open"></i> Read Full Article
              </button>
            </div>
          </div>
        `;
      }

      // Check if text has content and add Read More for extremely long general posts
      const isLongText = post.content.length > 280 && !post.blogDetails && !post.projectDetails;
      const displayedContent = isLongText ? post.content.substring(0, 280) + "..." : post.content;
      const readMoreLink = isLongText ? `<span class="read-more" onclick="window.app.loadPostDetail('${post.id}')">see more</span>` : "";

      postCard.innerHTML = `
        <div class="post__header">
          <div class="post__author-info">
            <img src="${post.author.avatar}" alt="${post.author.name}" class="post__author-avatar">
            <div class="post__author-meta">
              <span class="post__author-name">${post.author.name}</span>
              <span class="post__author-headline">${post.author.headline}</span>
              <div class="post__time-row">
                <span>${post.timestamp}</span>
                <span>•</span>
                <i class="fa-solid fa-earth-americas" title="Shared with Public"></i>
              </div>
            </div>
          </div>
          <span class="post__badge ${badgeClass}">${categoryLabel}</span>
        </div>

        <div class="post__content">
          <span>${displayedContent}</span>${readMoreLink}
          <div style="margin-top: 8px; color: var(--primary-color); font-weight: 500;">
            ${post.tags.join(" ")}
          </div>
        </div>

        ${mediaContent}

        <div class="post__social-stats">
          <div class="post__social-likes">
            <div class="post__like-bubbles">
              <span class="post__like-bubble like"><i class="fa-solid fa-thumbs-up"></i></span>
              <span class="post__like-bubble insight"><i class="fa-solid fa-lightbulb"></i></span>
            </div>
            <span>${post.likes} reactions</span>
          </div>
          <div>
            <span>${post.comments.length} comments</span>
          </div>
        </div>

        <div class="post__actions">
          <button class="post__action-btn ${post.hasLiked ? 'active' : ''}" onclick="window.app.toggleLike('${post.id}')">
            <i class="fa-regular fa-thumbs-up" style="${post.hasLiked ? 'font-weight: 900;' : ''}"></i>
            <span>Like</span>
          </button>
          <button class="post__action-btn" onclick="window.app.toggleCommentSection('${post.id}')">
            <i class="fa-regular fa-comment-dots"></i>
            <span>Comment</span>
          </button>
          <button class="post__action-btn" onclick="window.app.loadPostDetail('${post.id}')">
            <i class="fa-regular fa-folder-open"></i>
            <span>Details</span>
          </button>
        </div>

        <div class="comments-section" id="comments-${post.id}">
          <div class="comments-section__composer">
            <img src="assets/vignesh_real.jpg" alt="Visitor" class="comments-section__avatar">
            <div class="comments-section__input-wrapper">
              <input type="text" class="comments-section__input" id="comment-input-${post.id}" placeholder="Add a comment..." onkeydown="if(event.key === 'Enter') window.app.submitComment('${post.id}')">
              <button class="comments-section__submit" onclick="window.app.submitComment('${post.id}')">Post</button>
            </div>
          </div>
          <div class="comments-section__list">
            ${commentsHTML}
          </div>
        </div>
      `;

      this.feedContainer.appendChild(postCard);
    });
  }
}

// Instantiate App & Bind to window for HTML onclick actions
document.addEventListener("DOMContentLoaded", () => {
  window.app = new PortfolioApp();
});
