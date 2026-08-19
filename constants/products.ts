export type Product = {
  id: number;
  slug: string;
  type: "hardware" | "software";
  title: string;
  logos: string[];
  description: string;
  descriptionAr: string;
  productImage: string;
  packageIncludes: string[];
  packageIncludesAr: string[];
  software: string[];
  sketchfabUrl: string;
  keyFeatures?: string[];
  keyFeaturesAr?: string[];
  brochure?: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "faro-orbis",
    type: "hardware",
    title: "FARO® Orbis™ Premium",
    logos: ["sphere-xg.jpg", "scene.png"],
    description:
      "FARO Orbis 2 in 1 Mobile Laser Scanner and stationery scanner all in one device. A unique mobile scanning solution created to optimize workflows and elevate productivity. scan while moving with 5 mm accuracy and you can stop for 15 seconds to scan a station with accuracy 2 mm, Designed for construction, engineering and surveying professionals, Orbis delivers rapid speed of capture, while returning highly accurate 3D visual representations of the real world thru 360 camera for point cloud colorization.",
    descriptionAr:
      "جهاز FARO Orbis هو ماسح ليزري متنقل وثابت في جهاز واحد. حل مسح متنقل فريد صُمم لتحسين سير العمل ورفع الإنتاجية. امسح أثناء الحركة بدقة 5 مم، أو توقف لمدة 15 ثانية لمسح محطة بدقة 2 مم. مصمم لمحترفي البناء والهندسة والمساحة، يوفر Orbis سرعة التقاط عالية مع تمثيل ثلاثي الأبعاد دقيق للعالم الحقيقي عبر كاميرا 360 درجة لتلوين السحابة النقطية.",
    productImage: "/images/product-10.png",
    packageIncludes: [
      "Scanner",
      "Rechargeable Battery",
      "Charging Dock",
      "Protective Carry Case",
    ],
    packageIncludesAr: ["الماسح الضوئي", "بطارية قابلة لإعادة الشحن", "قاعدة شحن", "حقيبة حمل واقية"],
    software: ["FARO Sphere® XG", "FARO® SCENE Software"],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Lightweight and Easy-to-Use",
      "Engineered for the Toughest Environments",
    ],
    keyFeaturesAr: ["خفيف الوزن وسهل الاستخدام", "مصمم هندسيًا لتحمل أقسى البيئات"],
    brochure: "/brochures/FARO® Orbis™ Premium Brochure.pdf",
  },
  {
    id: 2,
    slug: "faro-focus",
    type: "hardware",
    title: "FARO® Focus",
    logos: ["scene.png"],
    description:
      "Your tool to capture, view and understand the world around you. Great for indoor and outdoor use, including spaces where features are positioned further apart. Lightweight and rugged, simple to use, fast to capture and easy to process giving you the most accurate information you need to make the most important decisions.",
    descriptionAr:
      "أداتك لالتقاط ورؤية وفهم العالم من حولك. مثالي للاستخدام الداخلي والخارجي، بما في ذلك المساحات ذات العناصر المتباعدة. خفيف الوزن ومتين، سهل الاستخدام، سريع في الالتقاط وسهل في المعالجة، ليمنحك أدق المعلومات التي تحتاجها لاتخاذ أهم القرارات.",
    productImage: "/images/product-4.png",
    packageIncludes: [
      "Scanner",
      "Rechargeable Battery",
      "Charging Dock",
      "Protective Carry Case",
    ],
    packageIncludesAr: ["الماسح الضوئي", "بطارية قابلة لإعادة الشحن", "قاعدة شحن", "حقيبة حمل واقية"],
    software: ["FARO® SCENE Software"],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "high-speed SSD data storage",
      "Withstand the harshest environments daily",
    ],
    keyFeaturesAr: ["تخزين بيانات SSD عالي السرعة", "يتحمل أقسى الظروف البيئية يوميًا"],
    brochure: "/brochures/Focus premium brochure to print.pdf",
  },
  {
    id: 3,
    slug: "faro-blink",
    type: "hardware",
    title: "FARO® Blink™",
    logos: ["sphere-xg.jpg", "scene.png"],
    description:
      "From site to insights, Blink is a reality capture solution designed for simplicity and accessibility. It brings high-quality visualization and automated workflows into the hands of designers, builders, surveyors, operators, and public safety professionals, helping teams capture, view, and share data seamlessly, regardless of expertise. With Blink, anyone can take control of reality capture on-site and move projects to final delivery efficiently.",
    descriptionAr:
      "من الموقع إلى الرؤى، يُعد Blink حل التقاط واقع مصمم للبساطة وسهولة الاستخدام. يضع تصورًا عالي الجودة وسير عمل آليًا في متناول المصممين والمقاولين والمساحين والمشغلين ومتخصصي السلامة العامة، مما يساعد الفرق على التقاط البيانات ومشاهدتها ومشاركتها بسلاسة بغض النظر عن مستوى الخبرة. مع Blink، يمكن لأي شخص التحكم في التقاط الواقع في الموقع ونقل المشاريع إلى التسليم النهائي بكفاءة.",
    productImage: "/images/product-5.png",
    packageIncludes: [
      "Scanner",
      "Rechargeable Battery",
      "Charging Dock",
      "Protective Carry Case",
    ],
    packageIncludesAr: ["الماسح الضوئي", "بطارية قابلة لإعادة الشحن", "قاعدة شحن", "حقيبة حمل واقية"],
    software: ["FARO Sphere® XG", "FARO® SCENE Software"],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Guided Scanning with Real-Time Feedback",
      "Automatic Point Cloud Processing",
    ],
    keyFeaturesAr: ["مسح موجّه مع ملاحظات فورية", "معالجة تلقائية للسحابة النقطية"],
    brochure: "/brochures/FARO® Blink™ Brochure.pdf",
  },
  {
    id: 4,
    slug: "faro-scene",
    type: "software",
    title: "FARO® SCENE Software",
    logos: ["scene.png"],
    description:
      "FARO SCENE software is specifically designed to process and manage scan data from FARO laser scanners. It utilizes automatic object recognition and registration to produce high-quality data. SCENE allows users to combine scans, colorize point clouds, and export data to various formats, featuring an immersive Virtual Reality (VR) view for data evaluation.",
    descriptionAr:
      "بُرمج FARO SCENE خصيصًا لمعالجة وإدارة بيانات المسح الواردة من ماسحات FARO الليزرية. يستخدم البرنامج التعرف التلقائي على الكائنات والتسجيل لإنتاج بيانات عالية الجودة. يتيح SCENE للمستخدمين دمج عمليات المسح، وتلوين السحابات النقطية، وتصدير البيانات بصيغ متعددة، مع عرض غامر بالواقع الافتراضي (VR) لتقييم البيانات.",
    productImage: "/images/product-9.jpg",
    packageIncludes: [
      "SCENE Software License",
      "VR View Module",
      "WebShare Cloud Access",
      "Export Utilities"
    ],
    packageIncludesAr: ["ترخيص برنامج SCENE", "وحدة عرض الواقع الافتراضي", "الوصول إلى سحابة WebShare", "أدوات التصدير"],
    software: [],
    sketchfabUrl: "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Automatic Scan Registration",
      "Target-less Positioning",
      "Virtual Reality (VR) View",
      "WebShare Cloud Integration"
    ],
    keyFeaturesAr: [
      "تسجيل تلقائي لعمليات المسح",
      "تموضع دون الحاجة لأهداف مرجعية",
      "عرض بالواقع الافتراضي (VR)",
      "تكامل مع سحابة WebShare",
    ],
    brochure: "/brochures/TechSheet_SCENE_Software_EN.pdf", // ✅
  },
  {
    id: 5,
    slug: "faro-sphere-xg",
    type: "software",
    title: "FARO Sphere® XG",
    logos: ["sphere-xg.jpg"],
    description:
      "FARO Sphere XG is a cloud-based digital reality platform that provides a centralized, collaborative experience for reality capture and 3D modeling. When paired with the Stream mobile app, Sphere XG enables faster 3D data capture, processing, and project management from anywhere in the world. It unifies data from stationary scanning, mobile scanning, and 360° photo capture into one environment for 4D progress management.",
    descriptionAr:
      "FARO Sphere XG منصة واقع رقمي سحابية توفر تجربة مركزية وتعاونية لالتقاط الواقع والنمذجة ثلاثية الأبعاد. عند اقترانها بتطبيق Stream للهاتف المحمول، تتيح Sphere XG التقاط بيانات ثلاثية الأبعاد ومعالجتها وإدارة المشاريع بشكل أسرع من أي مكان في العالم. توحّد المنصة البيانات من المسح الثابت والمتنقل والتصوير بزاوية 360 درجة في بيئة واحدة لإدارة التقدم رباعي الأبعاد.",
    productImage: "/images/product-6.png",
    packageIncludes: [
      "Cloud Platform Access",
      "Stream Mobile App Integration",
      "Collaborative Workspace",
    ],
    packageIncludesAr: ["الوصول إلى المنصة السحابية", "تكامل مع تطبيق Stream للهاتف المحمول", "مساحة عمل تعاونية"],
    software: [],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Cloud-based Data Centralization",
      "Real-time Project Collaboration",
      "4D Progress Management (Time Travel)",
      "Integration with Stream Mobile App",
    ],
    keyFeaturesAr: [
      "مركزية البيانات عبر السحابة",
      "تعاون فوري في المشاريع",
      "إدارة تقدم رباعية الأبعاد (السفر عبر الزمن)",
      "تكامل مع تطبيق Stream للهاتف المحمول",
    ],
    brochure: "https://www.faro.com/en/Products/FARO-Sphere-XG", // ✅
  },
  {
    id: 6,
    slug: "faro-as-built",
    type: "software",
    title: "FARO® As-Built™ Software",
    logos: ["as-built-suite.jpg"],
    description:
      "The FARO As-Built Software Suite specifically enables AEC professionals to process 3D laser scan data directly into Autodesk® AutoCAD® and Revit®. It streamlines the creation of accurate 2D plans and 3D models for BIM integration, reducing the time and effort required to convert reality capture data into deliverable design documents.",
    descriptionAr:
      "تُمكّن مجموعة برامج FARO As-Built محترفي الهندسة المعمارية والإنشاءات من معالجة بيانات المسح الليزري ثلاثي الأبعاد مباشرة داخل برنامجي Autodesk® AutoCAD® وRevit®. تُسهّل المجموعة إنشاء مخططات ثنائية الأبعاد ونماذج ثلاثية الأبعاد دقيقة لتكاملها مع BIM، مما يقلل الوقت والجهد اللازمين لتحويل بيانات التقاط الواقع إلى مستندات تصميم قابلة للتسليم.",
    productImage: "/images/product-7.jpg",
    packageIncludes: [
      "As-Built for AutoCAD",
      "As-Built for Revit",
      "As-Built Modeler",
    ],
    packageIncludesAr: ["As-Built لبرنامج AutoCAD", "As-Built لبرنامج Revit", "أداة As-Built للنمذجة"],
    software: [],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Seamless Integration with AutoCAD & Revit",
      "Automated Clash Detection",
      "Efficient Point Cloud Processing",
      "BIM Model Creation & Validation",
    ],
    keyFeaturesAr: [
      "تكامل سلس مع AutoCAD وRevit",
      "كشف تلقائي للتعارضات",
      "معالجة فعالة للسحابة النقطية",
      "إنشاء نماذج BIM والتحقق منها",
    ],
    brochure: "/brochures/CMO15162_Brochure_AsBuilt_AECO_ENG_LT_Web.pdf", // ✅
  },
  {
    id: 7,
    slug: "faro-buildit-construction",
    type: "software",
    title: "FARO® BuildIT Construction",
    logos: ["built-it.jpg"],
    description:
      "FARO BuildIT Construction is a comprehensive verification software solution that enables laser scan data to be compared against CAD/BIM models in real-time. It is designed to minimize waste and rework by detecting errors early, allowing for accurate floor flatness analysis, tank deformation checks, and prefabrication inspection.",
    descriptionAr:
      "FARO BuildIT Construction حل برمجي شامل للتحقق يتيح مقارنة بيانات المسح الليزري بنماذج CAD/BIM في الوقت الفعلي. صُمم لتقليل الهدر وإعادة العمل عبر اكتشاف الأخطاء مبكرًا، مما يتيح تحليلًا دقيقًا لاستواء الأرضيات، وفحص تشوه الخزانات، وفحص عناصر التصنيع المسبق.",
    productImage: "/images/product-8.jpg",
    packageIncludes: [
      "BuildIT Construction License",
      "Real-time Comparison Tools",
      "Analysis Modules",
      "Export Utilities",
    ],
    packageIncludesAr: ["ترخيص BuildIT Construction", "أدوات مقارنة فورية", "وحدات تحليل", "أدوات التصدير"],
    software: [],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Real-time Design to Build Comparison",
      "Floor Flatness Analysis (ASTM/TR34)",
      "Tank Deformation Analysis",
      "Prefabricated Component Inspection",
    ],
    keyFeaturesAr: [
      "مقارنة فورية بين التصميم والتنفيذ",
      "تحليل استواء الأرضيات (ASTM/TR34)",
      "تحليل تشوه الخزانات",
      "فحص عناصر التصنيع المسبق",
    ],
    brochure: "/brochures/TechSheet_BuidIT_Construction_A4_EN.pdf", // ✅
  },

];

/** Product titles for contact-form interest chips */
export const productContactLabels = products.map((p) => p.title);
