import { useState, useEffect } from "react";
import headshot from './headshot.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const sections = ["about", "education", "experience", "teams", "projects", "certifications", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);
      const current = offsets.reduce((closest, section) => {
        return Math.abs(section.top - 100) < Math.abs(closest.top - 100) ? section : closest;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll reveal: fade sections in as you scroll down
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Dynamic System Identification and Control",
      tags: ["MATLAB", "Signal Processing", "PID Control", "Bode Analysis"],
      summary: "Modeled and analyzed an unknown black-box dynamic system using experimental input-output data.",
      details: [
        "Verified system properties including linearity and time-invariance through time-shift testing and response comparison.",
        "Constructed empirical Bode plots across a wide frequency range to characterize system behavior in the frequency domain.",
        "Estimated the system transfer function and identified poles and zeros based on frequency response data.",
        "Applied signal processing techniques to reduce noise and improve accuracy of experimental measurements.",
        "Designed and tuned a PID controller to achieve desired performance metrics for rise time, overshoot, and steady-state error.",
        "Validated system model and controller performance through comparison of simulated and experimental responses."
      ]
    },
    {
      title: "Automated Fluid Dispenser",
      tags: ["SolidWorks", "C", "Arduino", "System Integration"],
      summary: "Designed, programmed, and prototyped an automated fluid dispenser ensuring functionality and compliance with pharmaceutical safety standards.",
      details: [
        "The user enters specific parameters through the device's interface, and the system begins operation.",
        "A DC motor drives a turntable to ensure thorough mixing, while a powder wheel mechanism precisely dispenses powdered substances into test tubes.",
        "A peristaltic pump injects the exact amount of liquid required.",
        "This coordinated process produces up to five API solutions efficiently within 120 seconds, meeting pharmaceutical industry standards.",
        "Performed data verification and quality control checks to validate dispensing accuracy across all simultaneous outputs."
      ]
    },
    {
      title: "Autonomous Search and Rescue Drones",
      tags: ["MATLAB", "Mathematical Modeling", "Simulation"],
      summary: "Developed a MATLAB simulation for hurricane search and rescue drones, enabling real-time data transmission and optimized search patterns for disaster response.",
      details: [
        "Designed a multi-agent drone system that autonomously navigates a disaster-affected region.",
        "Drones prioritize areas with the highest likelihood of finding missing persons, dynamically adjusting search patterns based on real-time data.",
        "Focused on denser regions near the storm's center where there are likely to be more survivors.",
        "Drones relay information about missing individuals and provide valuable data to human search teams, enhancing their efficiency and safety.",
        "Created density map visualizations using MATLAB to model hurricane impact zones."
      ]
    },
    {
      title: "Temporary Housing for FIFA 2026",
      tags: ["Teamwork", "Mathematical Modeling", "Research", "CAD"],
      summary: "Developed a sustainable, modular housing design for FIFA athletes in Toronto, incorporating energy-efficient cooling solutions tailored to local resources.",
      details: [
        "Designed temporary housing near BMO Field that can be repurposed following the tournament.",
        "Aimed to reduce energy consumption and construction waste to address the UN's triple planetary crisis.",
        "Addressed urban construction concerns including traffic disruptions, pedestrian flow, noise pollution, and air quality.",
        "Managed additional infrastructure needs for electricity, water, and waste services while minimizing disruption to the surrounding area.",
        "Met both environmental and economic targets throughout the design process."
      ]
    },
    {
      title: "Flower Hanger Design Project",
      tags: ["SolidWorks", "Structural Design", "Load Analysis", "Stress Analysis"],
      summary: "Designed a hanging plant support system using both hand calculations and SolidWorks modeling for cross-validation.",
      details: [
        "Performed load and stress analysis to verify structural integrity under expected weight conditions.",
        "Developed detailed sketches and engineering drawings to support the design process.",
        "Selected appropriate materials based on strength, safety, and practical constraints.",
        "Applied the engineering design process from concept development to finalized analytical design."
      ]
    },
    {
      title: "Gearbox Group Design Project",
      tags: ["Machine Design", "SolidWorks", "Power Transmission", "Fatigue Analysis", "3D Printing", "AGMA"],
      summary: "Designed a single-stage spur gear transmission system across four phases, from initial gear selection through fatigue verification, shaft analysis, and 3D printed prototyping. The gearbox successfully passed both the top speed and hill climb events in competition.",
      details: [
        "Selected a 3:1 gear ratio using a 15-tooth pinion and 45-tooth gear with a 1.5 mm module and 15 mm face width, achieving a center distance of 45 mm within the required design envelope.",
        "Performed AGMA-based gear fatigue analysis for bending and contact stress. The pinion achieved a bending safety factor of 2.5 and the gear achieved 3.8, with both gears passing contact fatigue at a safety factor of 1.9.",
        "Conducted full shaft fatigue analysis using the DE-Gerber criterion, identifying the pinion shaft as the most critical component with a safety factor of 1.02 at the keyway location.",
        "Adapted the design for 3D printing by replacing keyways with hex shaft sections, removing retaining rings, and increasing the pinion shaft diameter by 15% to improve the weakest safety factor.",
        "Designed a two-part housing with dovetail connections, bushing supports, and D-profile shaft ends for sprocket attachment, all within a 110 x 80 x 60 mm footprint.",
        "Delivered the final prototype within the 7.45-hour print time limit, designed for continuous operation over 5 years (approximately 1.31 x 10^8 cycles at 50 RPM).",
        "Developed detailed CAD models, engineering drawings, and a full bill of materials in SolidWorks."
      ]
    },
    {
      title: "Mini Baja Sled Prototype",
      tags: ["Engineering Design", "SolidWorks", "Prototyping", "Stakeholder Collaboration"],
      summary: "Worked with the Queen's Mini Baja SAE design team as a stakeholder to engineer and construct a weighted test sled for use in their competition preparations.",
      details: [
        "Collaborated directly with the Queen's Mini Baja design team to understand their testing needs for off-road vehicle components including shocks, center of mass, jump takeoff/landing, and general off-road performance.",
        "Designed the sled in SolidWorks and built a prototype that could endure repeated use across multiple testing sessions.",
        "Provided a consistent testing process that delivered accurate data for component evaluation ahead of competition.",
        "Verified compliance with mechanical standards and safety requirements throughout fabrication and testing."
      ]
    }
  ];

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollTo(id)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "0.85rem",
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: activeSection === id ? "#c45d3e" : "#5a5a5a",
        fontWeight: activeSection === id ? 600 : 400,
        padding: "8px 0",
        transition: "color 0.3s",
        borderBottom: activeSection === id ? "2px solid #c45d3e" : "2px solid transparent",
      }}
    >
      {label}
    </button>
  );

  const SectionTitle = ({ children }) => (
    <h2 className="section-title" style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#2a2a2a",
      marginBottom: "0.3rem",
      letterSpacing: "-0.01em",
    }}>{children}</h2>
  );

  const Divider = () => (
    <div style={{ width: "60px", height: "3px", background: "#c45d3e", marginBottom: "2rem", borderRadius: "2px" }} />
  );

  const Tag = ({ children }) => (
    <span className="skill-tag" style={{
      display: "inline-block",
      background: "#f5ebe4",
      color: "#7a5c47",
      fontSize: "0.75rem",
      fontFamily: "'DM Sans', sans-serif",
      padding: "4px 10px",
      borderRadius: "20px",
      marginRight: "6px",
      marginBottom: "6px",
      fontWeight: 500,
    }}>{children}</span>
  );

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "1.8rem",
    marginBottom: "1.2rem",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    border: "1px solid #f0ebe6",
    transition: "box-shadow 0.3s",
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#333", background: "#faf8f5", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        body { background: #faf8f5; }
        a { color: #c45d3e; text-decoration: none; }
        a:hover { text-decoration: underline; }
        ::selection { background: #c45d3e; color: #fff; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }

        /* Card hover: lift + shadow + subtle border color */
        .card-hover {
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s !important;
        }
        .card-hover:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.1) !important;
          transform: translateY(-4px) !important;
          border-color: #d4a989 !important;
        }

        /* Project cards */
        .project-toggle { cursor: pointer; }
        .project-toggle:hover {
          background: #fdf9f6 !important;
          transform: translateY(-4px) !important;
        }

        /* Skill tags: pop on hover */
        .skill-tag {
          transition: all 0.25s ease !important;
          cursor: default;
        }
        .skill-tag:hover {
          background: #c45d3e !important;
          color: #fff !important;
          transform: scale(1.08);
        }

        /* Buttons: scale + glow */
        .btn-primary {
          transition: all 0.3s ease !important;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(196, 93, 62, 0.4);
        }
        .btn-outline {
          transition: all 0.3s ease !important;
        }
        .btn-outline:hover {
          background: #c45d3e !important;
          color: #fff !important;
          transform: scale(1.05);
        }

        /* Headshot: subtle zoom on hover */
        .headshot-img {
          transition: transform 0.5s ease, box-shadow 0.5s ease !important;
        }
        .headshot-img:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(196, 93, 62, 0.25) !important;
        }

        /* Nav links: underline slide in */
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #c45d3e;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Cert checkmark: bounce on hover */
        .cert-icon {
          transition: transform 0.3s ease;
        }
        .cert-icon:hover {
          transform: scale(1.15) rotate(5deg);
        }

        /* Contact email button glow pulse */
        .contact-btn {
          transition: all 0.3s ease !important;
        }
        .contact-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 25px rgba(196, 93, 62, 0.5);
        }

        /* Section titles: underline expand on hover */
        .section-title {
          display: inline-block;
          position: relative;
          cursor: default;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c45d3e;
          transition: width 0.4s ease;
        }
        .section-title:hover::after {
          width: 100%;
        }

        /* Scroll reveal animation */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* LinkedIn arrow hover */
        .linkedin-link {
          transition: all 0.3s ease;
          display: inline-block;
        }
        .linkedin-link:hover {
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-grid { flex-direction: column !important; text-align: center !important; }
          .hero-grid > div:first-child { align-items: center !important; }
          .section-padding { padding: 3rem 1.2rem !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .card-hover:hover { transform: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250, 248, 245, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ebe5dd" : "none",
        transition: "all 0.35s",
        padding: scrolled ? "0.6rem 2rem" : "1rem 2rem",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => scrollTo("about")} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem", fontWeight: 700, color: "#2a2a2a",
          }}>
            SJ
          </button>
          <div className="desktop-nav" style={{ display: "flex", gap: "1.5rem" }}>
            {[["about","About"],["education","Education"],["experience","Experience"],["teams","Teams / ECs"],["projects","Projects"],["certifications","Certs"],["contact","Contact"]].map(([id,label]) => (
              <NavLink key={id} id={id} label={label} />
            ))}
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#2a2a2a",
          }}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div style={{
            background: "rgba(250,248,245,0.98)", padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "0.5rem",
            borderTop: "1px solid #ebe5dd",
          }}>
            {[["about","About"],["education","Education"],["experience","Experience"],["teams","Teams / ECs"],["projects","Projects"],["certifications","Certs"],["contact","Contact"]].map(([id,label]) => (
              <NavLink key={id} id={id} label={label} />
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" style={{ paddingTop: "120px", paddingBottom: "4rem", maxWidth: "1100px", margin: "0 auto", padding: "120px 2rem 4rem" }}>
        <div className="hero-grid fade-up" style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#c45d3e", fontWeight: 500, marginBottom: "0.8rem" }}>
              Applied Mechanical Engineering
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "#2a2a2a",
              lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}>
              Sarina Javidan
            </h1>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#555", maxWidth: "560px", marginBottom: "1.5rem" }}>
              Third-year engineering student at Queen's University with a focus on mechanical systems, testing and validation, and data-driven problem solving. I like understanding how things work, especially when something goes wrong. I'm interested in the intersection of hands-on engineering and analytical thinking, whether that means building and testing physical systems or digging into data to figure out what happened and why.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("projects")} style={{
                background: "#c45d3e", color: "#fff", border: "none", borderRadius: "8px",
                padding: "12px 28px", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}>View My Work</button>
              <button className="btn-outline" onClick={() => scrollTo("contact")} style={{
                background: "transparent", color: "#c45d3e", border: "2px solid #c45d3e", borderRadius: "8px",
                padding: "12px 28px", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}>Get in Touch</button>
            </div>
          </div>
          <img
            className="headshot-img"
            src={headshot}
            alt="Sarina Javidan"
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              border: "4px solid #fff",
              boxShadow: "0 8px 30px rgba(196, 93, 62, 0.12)",
              flexShrink: 0,
            }}
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-padding reveal" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle>Education</SectionTitle>
        <Divider />
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
          <div style={cardStyle} className="card-hover">
            <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c45d3e", fontWeight: 500, marginBottom: "0.5rem" }}>2023 - 2027</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", marginBottom: "0.4rem", color: "#2a2a2a" }}>Queen's University</h3>
            <p style={{ color: "#666", fontSize: "0.95rem", marginBottom: "0.8rem" }}>B.A.Sc., Mathematics and Engineering</p>
            <p style={{ color: "#666", fontSize: "0.9rem", fontStyle: "italic" }}>Concentration in Applied Mechanical Engineering</p>
          </div>
          <div style={cardStyle} className="card-hover">
            <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c45d3e", fontWeight: 500, marginBottom: "0.5rem" }}>2021 - 2022</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", marginBottom: "0.4rem", color: "#2a2a2a" }}>John Abbott College (CEGEP)</h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Engineering Science</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-padding reveal" style={{ padding: "4rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionTitle>Experience</SectionTitle>
          <Divider />
          {[
            {
              role: "Curriculum Coordinator",
              org: "Science Quest, Queen's Engineering Society",
              location: "Kingston, ON",
              date: "Apr 2025 - Aug 2025",
              points: [
                "Created and led interactive STEM workshops and camp programs for students in grades 1 through 8, making science and engineering accessible for all learners.",
                "Developed full week summer camp schedules with themes like mechanics, physics, and civil engineering for ages 9 to 13, alongside kindergarten STEM activities.",
                "Led training sessions for 10+ instructors covering curriculum delivery, safety practices, and inclusive teaching methods.",
                "Collected and applied feedback from students, families, and staff to improve program quality and accessibility."
              ]
            },
            {
              role: "Retail Salesworker",
              org: "Urban Customz",
              location: "Richmond Hill, ON",
              date: "May 2024 - Aug 2024",
              points: [
                "Managed customer orders, printed designs on apparel and canvases, and prepared materials for production in a custom printing environment.",
                "Used Photoshop and Canva to edit and create designs for posters and clothing.",
                "Balanced multiple tasks while maintaining organization and accuracy in a fast-paced setting."
              ]
            },
            {
              role: "Secretary",
              org: "Queen Med Clinic",
              location: "Richmond Hill, ON",
              date: "May 2024 - Aug 2024",
              points: [
                "Handled data entry, recordkeeping, and expense tracking to support daily office operations.",
                "Coordinated meetings, documented minutes, and maintained organized filing systems for efficient workflow."
              ]
            },
            {
              role: "Retail Salesworker",
              org: "SHE",
              location: "Richmond Hill, ON",
              date: "May 2023 - Aug 2023",
              points: [
                "Managed store operations independently during shifts, including handling transactions, organizing inventory, and maintaining store presentation.",
                "Developed strong time management and accountability while working in a fast-paced retail environment."
              ]
            }
          ].map((exp, i) => (
            <div key={i} style={{ ...cardStyle, marginBottom: "1rem" }} className="card-hover">
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a2a2a" }}>{exp.role}</h3>
                  <p style={{ color: "#888", fontSize: "0.9rem" }}>{exp.org} | {exp.location}</p>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#c45d3e", fontWeight: 500, whiteSpace: "nowrap" }}>{exp.date}</span>
              </div>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "0.3rem" }}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Design Teams */}
      <section id="teams" className="section-padding reveal" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle>Design Teams / Extracurriculars</SectionTitle>
        <Divider />
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
          {[
            {
              team: "Q-HERC Human-Powered Sub-Team",
              org: "Queen's University HERC Design Team",
              date: "Jul 2025 - Present",
              desc: "Responsible for the design and fabrication of the chassis, braking system, and seating layout for a human-powered rover developed for testing on simulated lunar terrain. Involved in both design and construction, ensuring safety, durability, and ergonomic performance. Collaborating with other sub-teams on fabrication planning, simulations, and performance testing. The HP team works alongside the RC team, which will represent Queen's and Canada at the 2026 NASA Human Exploration Rover Challenge.",
              tags: ["Testing and Validation", "Fabrication", "Safety", "SolidWorks"]
            },
            {
              team: "Mechanical Sub-Team",
              org: "Queen's Relectric Car Team",
              date: "Jan 2024 - Apr 2025",
              desc: "Worked on a student design team converting a Jeep into a fully electric vehicle. Designed and modeled mechanical components in SolidWorks and assisted in assembling and testing prototypes. Collaborated with electrical and controls sub-teams to integrate mechanical systems, performed structural and thermal analyses, and contributed to improving safety, performance, and overall vehicle efficiency.",
              tags: ["SolidWorks", "System Integration", "Structural Analysis", "Thermal Analysis"]
            }
          ].map((team, i) => (
            <div key={i} style={cardStyle} className="card-hover">
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c45d3e", fontWeight: 500 }}>{team.date}</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a2a2a", margin: "0.5rem 0 0.2rem" }}>{team.team}</h3>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "0.8rem" }}>{team.org}</p>
              <p style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "1rem" }}>{team.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {team.tags.map((t, j) => <Tag key={j}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteering */}
      <section style={{ padding: "0 2rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={cardStyle} className="card-hover">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a2a2a" }}>Design Director</h3>
              <p style={{ color: "#888", fontSize: "0.85rem" }}>Iranian Association of Queen's University</p>
            </div>
            <span style={{ fontSize: "0.85rem", color: "#c45d3e", fontWeight: 500 }}>Sep 2025 - Present</span>
          </div>
          <p style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.65, marginTop: "0.6rem" }}>
            Design visual materials including event posters, Instagram graphics, and logos. Collaborate with the executive team to develop cohesive visual branding for campus events.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding reveal" style={{ padding: "4rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionTitle>Projects</SectionTitle>
          <Divider />
          <div style={{ display: "grid", gap: "1rem" }}>
            {projects.map((proj, i) => (
              <div
                key={i}
                className="card-hover project-toggle"
                onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                style={{
                  ...cardStyle,
                  cursor: "pointer",
                  borderLeft: expandedProject === i ? "4px solid #c45d3e" : "4px solid transparent",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a2a2a", marginBottom: "0.4rem" }}>{proj.title}</h3>
                    <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: 1.6 }}>{proj.summary}</p>
                  </div>
                  <span style={{
                    fontSize: "1.2rem", color: "#c45d3e", marginLeft: "1rem", flexShrink: 0,
                    transform: expandedProject === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}>+</span>
                </div>
                {expandedProject === i && (
                  <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #f0ebe6" }}>
                    <ul style={{ paddingLeft: "1.2rem", margin: "0 0 1rem 0" }}>
                      {proj.details.map((d, j) => (
                        <li key={j} style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "0.4rem" }}>{d}</li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {proj.tags.map((t, j) => <Tag key={j}>{t}</Tag>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peer Tutoring */}
      <section style={{ padding: "0 2rem 2rem", maxWidth: "1100px", margin: "0 auto", marginTop: "2rem" }}>
        <SectionTitle>Tutoring</SectionTitle>
        <Divider />
        <div style={cardStyle} className="card-hover">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a2a2a" }}>Peer Tutor</h3>
              <p style={{ color: "#888", fontSize: "0.85rem" }}>EngLinks, Queen's University</p>
            </div>
            <span style={{ fontSize: "0.85rem", color: "#c45d3e", fontWeight: 500 }}>Sep 2024 - Present</span>
          </div>
          <p style={{ color: "#555", fontSize: "0.92rem", lineHeight: 1.65, marginTop: "0.6rem" }}>
            Tutoring first-year students in calculus and math courses, preparing them for midterms and finals. Developing enriched problems to enhance sessions and improve student understanding. Collaborating with faculty to support students' academic success.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding reveal" style={{ padding: "4rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionTitle>Certifications</SectionTitle>
          <Divider />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { name: "Standard First Aid & CPR", issuer: "Canadian Red Cross", date: "Jul 2025" },
              { name: "Health and Safety Awareness", issuer: "Queen's University", date: "Apr 2025" },
              { name: "WHMIS 2015", issuer: "Queen's University", date: "Apr 2025" },
            ].map((cert, i) => (
              <div key={i} style={{
                ...cardStyle,
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }} className="card-hover">
                <div className="cert-icon" style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  background: "linear-gradient(135deg, #f5ebe4, #e8d5c4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: "1.2rem" }}>✓</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "0.95rem", color: "#2a2a2a", fontWeight: 600 }}>{cert.name}</h3>
                  <p style={{ color: "#888", fontSize: "0.85rem" }}>{cert.issuer} | {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding" style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle>Skills and Tools</SectionTitle>
        <Divider />
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.2rem" }}>
          <div style={cardStyle} className="card-hover">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#2a2a2a", marginBottom: "0.8rem" }}>Engineering and Technical</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {["Testing and Validation", "Structural Design", "Structural Analysis", "Thermal Analysis", "Load Analysis", "Stress Analysis", "System Integration", "Root Cause Analysis", "Quality Control", "Data Verification", "Control Systems Design", "PID", "Bode Plot Analysis", "Frequency Response Analysis", "Signal Processing", "Machine Design", "Power Transmission", "Engineering Design", "Mathematical Modeling", "Quantitative Analysis", "Statistical Analysis"].map((s,i) => <Tag key={i}>{s}</Tag>)}
            </div>
          </div>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
            <div style={cardStyle} className="card-hover">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#2a2a2a", marginBottom: "0.8rem" }}>Software and Tools</h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {["SolidWorks", "MATLAB", "CAD", "Arduino", "C Programming", "Python", "SQL", "Tableau", "Excel", "Word", "PowerPoint", "MS Office Suite", "Photoshop", "Canva", "Technical Reporting"].map((s,i) => <Tag key={i}>{s}</Tag>)}
              </div>
            </div>
            <div style={cardStyle} className="card-hover">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#2a2a2a", marginBottom: "0.8rem" }}>Interpersonal and Other</h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {["Leadership", "Teamwork", "Curriculum Development", "Presentation Skills", "Organization Skills", "Written Communication", "Research Skills", "Creativity and Innovation"].map((s,i) => <Tag key={i}>{s}</Tag>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding" style={{
        padding: "5rem 2rem",
        background: "linear-gradient(135deg, #2a2a2a 0%, #3d2e27 100%)",
        color: "#fff",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.2rem",
            fontWeight: 700,
            marginBottom: "1rem",
          }}>Let's Connect</h2>
          <p style={{ color: "#c9b8a8", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            I'm always happy to connect with people working in engineering, data, or anything that involves solving interesting problems. Feel free to reach out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", alignItems: "center" }}>
            <a className="contact-btn" href="mailto:sarina.javidan@queensu.ca" style={{
              color: "#fff", background: "#c45d3e", padding: "14px 36px", borderRadius: "8px",
              fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", display: "inline-block",
            }}>sarina.javidan@queensu.ca</a>
            <p style={{ color: "#c9b8a8", fontSize: "0.9rem" }}>+1 (514) 717-9306</p>
            <a className="linkedin-link" href="https://www.linkedin.com/in/sarina-javidan" target="_blank" rel="noopener noreferrer" style={{
              color: "#c45d3e", fontSize: "0.9rem",
            }}>LinkedIn Profile →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "1.5rem 2rem",
        textAlign: "center",
        color: "#999",
        fontSize: "0.8rem",
        background: "#2a2a2a",
        borderTop: "1px solid #3a3a3a",
      }}>
        Sarina Javidan | Queen's University | 2026
      </footer>
    </div>
  );
};

export default Portfolio;
