// src/data/config.js
import oasis_preview from "../assets/oasis/OASIS_LOGO_PREVIEW.png";
import oasis_products from "../assets/oasis/oasis_products_mockup.png";
import oasis_booth from "../assets/oasis/booth_mockup.png";
import oasis_brochure from "../assets/oasis/brochure_mockup.png";
import oasis_landyard from "../assets/oasis/landyard_mockup.png";
import oasis_box from "../assets/oasis/oasis_box_mockup.png";
import oasis_callingcard from "../assets/oasis/oasis_callingcard_mockup.png";
import oasis_orbi from "../assets/oasis/oasis_orbi.png";
import oasis_tshirt_front from "../assets/oasis/oasis_tshirt_front_mockup.png";
import oasis_tshirt_back from "../assets/oasis/oasis_tshirt_back_mockup.png";
import oasis_logo_final from "../assets/oasis/OASIS LOGO WITH NAMEfinal.png";
import oasis_palette_typo from "../assets/oasis/image.png";

// Resume Import
import resume_file from "../assets/MIRANO_RESUME_2026.pdf";

// EGD Imports
import egd_bathroom_layout from "../assets/EGD/bathroom_layout.png";
import egd_bathroom_mockup from "../assets/mockups/bathroom_mockup_01.png";
import egd_concourse_layout from "../assets/EGD/concourse_layout.png";
import egd_elev_layout from "../assets/EGD/elev_layout.png";
import egd_elev_mockup from "../assets/mockups/elev_mockup.png";
import egd_hospital_layout from "../assets/EGD/hospital_layout.png";
import egd_hospital_mockup from "../assets/mockups/hospital_mockup.png";
import egd_parking_layout from "../assets/EGD/parking_layout.png";
import egd_parking_mockup from "../assets/mockups/parking_mockup.png";
import egd_overall_mockup from "../assets/mockups/egd_mockup.png";

// Logo Imports
import logo_century from "../assets/logos/CENTURY_TUNA_LOGO.png";
import logo_cookie from "../assets/logos/cookie_logo.png";
import logo_cine from "../assets/logos/INITIAL_CINE_LOGO.png";
import logo_jhan from "../assets/logos/JHAN_LOGO.png";
import logo_kapeng_01 from "../assets/logos/KAPENG_BAYAN_01_LOGO.png";
import logo_kapeng_02 from "../assets/logos/KAPENG_BAYAN_02_LOGO.png";
import logo_morning from "../assets/logos/MORNING_CRUMBS_LOGO.png";
import logo_popsiken from "../assets/logos/popsiken_logo.png";

// Layout & Mockup Imports
import layout_chillibara from "../assets/layouts/chillibara_layout.png";
import mockup_chillibara from "../assets/mockups/chillibara_mockup.png";
import layout_kitkat_dieline from "../assets/layouts/kitkat_layout_with_dieline.jpg";
import mockup_kitkat_front from "../assets/mockups/kitkat mockup_front.png";
import mockup_kitkat_back from "../assets/mockups/kitkat mockup_back.png";
import layout_mouse from "../assets/layouts/mouse_layout.png";
import mockup_mouse from "../assets/mockups/mouse_mockup.jpg";
import layout_rebrand from "../assets/layouts/rebrand_layout.jpg";
import mockup_rebrand from "../assets/mockups/rebrand mockup1.jpg";
import layout_waffle from "../assets/layouts/waffle_layout.png";
import mockup_waffle from "../assets/mockups/waffle_mockup.png";

// Poster Imports
import poster_cake from "../assets/posters/cake_poster_layout.jpg";
import poster_chicken from "../assets/posters/chicken_poster_layout.png";
import poster_cookie from "../assets/cookie_poster_layout.png";
import poster_deans from "../assets/dean'slist_poster_layout - Copy.png";
import poster_drawing from "../assets/posters/drawing_layout.png";
import poster_holiday from "../assets/posters/holiday_poster_layout.png";
import poster_org_main from "../assets/posters/org_main_pub_klayout.png";
import poster_org_pub from "../assets/posters/org_pub_layout.png";
import poster_general from "../assets/posters/poster_layout.png";

// Tool Icons
import icon_figma from "../assets/icons/figma_5968705.png";
import icon_illustrator from "../assets/icons/illustrator_5611037.png";
import icon_canva from "../assets/icons/canva.jfif";

const CONFIG = {
  name: "Francine Joy P. Mirano",
  nickname: "cine",
  tagline: "Hi, I'm cine! I design cute visuals that actually work.",
  school: "Polytechnic University of the Philippines",
  degree: "Diploma in Information Technology",

  resume_url: resume_file,

  socials: {
    github: "https://github.com/cinez04",        
    linkedin: "https://www.linkedin.com/in/mirano-francine-49565a36b/", 
    email: "francinejoymirano@gmail.com",                     
    portfolio: "https://behance.net/yourusername",      
  },

  experiences: [
    {
      company: "DOST - ADVANCE SCIENCE AND TECHNOLOGY INSTITUTE",
      role: "Software Intern for NAIRA Project",
      period: "September 2025 - December 2025",
      location: "Katipunan, Quezon City",
      points: [
        "UI/UX design and prototyping for NAIRA using Figma; translated designs into front-end code.",
        "Participated in V2X system testing under DOST-ASTI research projects.",
        "Collaborated with developers and researchers to align design, functionality, and testing outcomes."
      ]
    },
    {
      company: "K GOLD BEAUTY ESSENTIALS",
      role: "Creatives Intern",
      period: "July 2025 - August 2025",
      location: "Marikina City",
      points: [
        "Produced and optimized engaging TikTok video content utilizing CapCut to enhance visual appeal.",
        "Designed marketing graphics and compelling product mockups to support digital campaigns.",
        "Developed a fully functional e-commerce website on Shopify for the Hello SuperYou business."
      ]
    },
    {
      company: "AHEAD TUTORIAL AND REVIEW CENTER",
      role: "IT and Web Maintenance Intern",
      period: "September 2024 - February 2025",
      location: "Katipunan, Quezon City",
      points: [
        "Designed and prototyped interactive web pages using Figma, translating wireframes into high-fidelity experiences.",
        "Executed rigorous QA testing and functionality checks within WordPress.",
        "Drove continuous refinement of UI by proposing design and performance feedback."
      ]
    },
    {
      company: "FREELANCING",
      role: "Research and Ghostwriter",
      period: "2020 - 2024",
      location: "Self-Employed",
      points: [
        "Consulted and supported clients in content development, specializing in complex arguments and refining drafts.",
        "Managed and executed successful delivery of diverse client projects across multiple sectors.",
        "Maintained long-term client relationships by consistently delivering high-quality work."
      ]
    }
  ],

  leadership: [
    {
      org: "PUP PEER FACILITATORS ORGANIZATION",
      role: "Annual Youth Conference Committee Member",
      period: "2024 - 2025",
      points: [
        "Documentation and Publication Member: Authored official Meeting Minutes (MOM) and managed production of promotional materials.",
        "Graphics Design Committee Co-Head: Co-led a seven-person Graphics Design team responsible for all visual assets."
      ]
    }
  ],

  skills: [
    "HTML/CSS",
    "WordPress",
    "Shopify",
    "UI/UX Design",
    "Branding",
    "Social Media Content Planning",
    "Documentation (MOM)",
    "E-commerce Content Management"
  ],

  tools: [
    { 
      name: "Adobe Photoshop", 
      icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" 
    },
    { 
      name: "Adobe Illustrator", 
      icon: icon_illustrator 
    },
    { 
      name: "Figma", 
      icon: icon_figma 
    },
    { 
      name: "Canva", 
      icon: icon_canva 
    }
  ],

  projects: [
    {
      title: "OASIS Multimedia Projects",
      type: "oasis",
      description: "A comprehensive brand ecosystem and digital interface designed to streamline the OJT administration process.",
      tags: ["Multimedia", "Branding", "UI/UX"],
      image: oasis_preview,
      emoji: "🖥️",
      client: "OASIS",
      year: "2024",
      services: "Multimedia Design, Branding, UI/UX",
      brief: "The OASIS project required a cohesive identity to transform complex internship administrative data into a user-friendly experience.",
      process: "I developed a modular visual system where the core 'wave' motif and teal-to-forest-green gradient were applied across all assets.",
      result: "The final execution established a professional presence that bridges the gap between digital management and real-world application.",
      palette_typo: oasis_palette_typo,
      details: [
        {
          title: "Brand Consistency",
          text: "Every touchpoint, from calling cards to large-scale booth apparel, reinforces the OASIS identity.",
          image: oasis_products,
        },
        {
          title: "Brand Assets Gallery",
          images: [
            oasis_logo_final,
            oasis_callingcard,
            oasis_brochure,
            oasis_landyard,
            oasis_box,
            oasis_tshirt_front,
            oasis_tshirt_back,
            oasis_orbi
          ],
        },
      ]
    },
    {
      title: "Environmental Graphic Design",
      type: "egd",
      description: "Wayfinding and environmental graphics designed for clarity and aesthetic integration in various spaces.",
      tags: ["EGD", "Wayfinding", "Signage"],
      image: egd_overall_mockup,
      emoji: "🏢",
      client: "Various",
      year: "2023",
      services: "Environmental Graphic Design",
      brief: "Creating effective wayfinding systems that guide users through complex environments while maintaining a cohesive visual language.",
      process: "Analyzing spatial flow and user touchpoints to design intuitive signage that blends seamlessly with the architecture.",
      result: "A series of functional and visually engaging environmental graphics applied across hospital, concourse, and parking facilities.",
      pairs: [
        { layout: egd_bathroom_layout, mockup: egd_bathroom_mockup, label: "Restroom Signage" },
        { layout: egd_concourse_layout, mockup: egd_overall_mockup, label: "Concourse Wayfinding" },
        { layout: egd_elev_layout, mockup: egd_elev_mockup, label: "Elevator Directory" },
        { layout: egd_hospital_layout, mockup: egd_hospital_mockup, label: "Hospital Wing Navigation" },
        { layout: egd_parking_layout, mockup: egd_parking_mockup, label: "Parking Level Indicators" },
      ]
    },
    {
      title: "Logofolio",
      type: "logos",
      description: "A collection of identity designs focusing on brand personality and scalability.",
      tags: ["Branding", "Logo Design"],
      image: logo_morning,
      emoji: "🎨",
      client: "Various",
      year: "2023",
      services: "Brand Identity Design",
      images: [
        logo_morning, logo_cookie, logo_century, logo_popsiken,
        logo_kapeng_01, logo_kapeng_02, logo_jhan, logo_cine
      ]
    },
    {
      title: "Posters",
      type: "posters",
      description: "Curated collection of posters for social media, branding, and academic events.",
      tags: ["Poster Design", "Social Media", "Branding"],
      image: poster_holiday,
      emoji: "🖼️",
      client: "Various",
      year: "2023-2024",
      services: "Graphic Design, Art Direction",
      brief: "Designing high-impact posters that effectively communicate messages across social media and physical platforms.",
      process: "Utilizing vibrant color palettes and structured layouts to grab attention and drive engagement for various events and brands.",
      result: "A diverse gallery of posters showcasing versatility in style—from minimalist academic layouts to energetic promotional materials.",
      images: [
        poster_holiday, poster_cake, poster_chicken, poster_cookie, 
        poster_org_main, poster_org_pub, poster_deans, poster_general, poster_drawing
      ]
    },
    {
      title: "Layouts & Mockups",
      type: "layout-mockup",
      description: "Publication and promotional designs shown from dielines to final presentation.",
      tags: ["Layout", "Print", "Mockup"],
      image: mockup_kitkat_front,
      emoji: "📖",
      client: "Various",
      year: "2023",
      services: "Layout Design, Print Design, Mockup Presentation",
      brief: "Translating brand messages into engaging print and digital layouts, ensuring technical precision for production.",
      process: "Developing grids and dielines to structure content effectively, followed by high-fidelity mockups for visualization.",
      result: "A collection of polished promotional materials that showcase a balance between creative layout and practical application.",
      items: [
        { 
          layout: layout_kitkat_dieline, 
          mockups: [mockup_kitkat_front, mockup_kitkat_back], 
          label: "KitKat Packaging", 
          hasDieline: true 
        },
        { layout: layout_chillibara, mockup: mockup_chillibara, label: "Chillibara Branding" },
        { layout: layout_mouse, mockup: mockup_mouse, label: "Product Layout" },
        { layout: layout_rebrand, mockup: mockup_rebrand, label: "Rebrand Presentation" },
        { layout: layout_waffle, mockup: mockup_waffle, label: "Waffle Stall Branding" },
      ]
    }
  ],

  achievements: [
    { title: "Creative Excellence Award", org: "Internship" },
    { title: "Computer System Services NC II", org: "TESDA" },
    { title: "Visual Graphic Design NC III", org: "TESDA" },
  ],
};

export default CONFIG;
