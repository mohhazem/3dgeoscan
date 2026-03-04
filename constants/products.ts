export type Product = {
  id: number;
  slug: string;
  type: "hardware" | "software"; // ← add this
  title: string;
  logos: string[];
  description: string;
  productImage: string;
  packageIncludes: string[];
  software: string[];
  sketchfabUrl: string;
  keyFeatures?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "faro-orbis",
    type: "hardware", // ← hardware
    title: "FARO® Orbis™ Premium",
    logos: ["sphere-xg.jpg","scene.png"],
    description:
      "FARO Orbis 2 in 1 Mobile Laser Scanner and stationery scanner all in one device. A unique mobile scanning solution created to optimize workflows and elevate productivity. scan while moving with 5 mm accuracy and you can stop for 15 seconds to scan a station with accuracy 2 mm, Designed for construction, engineering and surveying professionals, Orbis delivers rapid speed of capture, while returning highly accurate 3D visual representations of the real world thru 360 camera for point cloud colorization.",
    productImage: "/images/product-10.png",
    packageIncludes: [
      "Scanner",
      "Rechargeable Battery",
      "Charging Dock",
      "Protective Carry Case",
    ],
    software: ["FARO Sphere® XG","FARO® SCENE Software"],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Lightweight and Easy-to-Use",
      "Engineered for the Toughest Environments",
    ],
  },
  {
    id: 2,
    slug: "faro-focus",
    type: "hardware", // ← hardware
    title: "FARO® Focus",
    logos: ["sphere-xg.jpg","scene.png"],
    description:
      "Your tool to capture, view and understand the world around you. Great for indoor and outdoor use, including spaces where features are positioned further apart. Lightweight and rugged, simple to use, fast to capture and easy to process giving you the most accurate information you need to make the most important decisions.",
    productImage: "/images/product-4.png",
    packageIncludes: [
      "Scanner",
      "Rechargeable Battery",
      "Charging Dock",
      "Protective Carry Case",
    ],
    software: ["FARO Sphere® XG","FARO® SCENE Software"],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "high-speed SSD data storage",
      "Withstand the harshest environments daily",
    ],
  },
  {
    id: 3,
    slug: "faro-blink",
    type: "hardware", // ← hardware
    title: "FARO® Blink™",
    logos: ["sphere-xg.jpg","scene.png"],
    description:
      "From site to insights, Blink is a reality capture solution designed for simplicity and accessibility. It brings high-quality visualization and automated workflows into the hands of designers, builders, surveyors, operators, and public safety professionals, helping teams capture, view, and share data seamlessly, regardless of expertise. With Blink, anyone can take control of reality capture on-site and move projects to final delivery efficiently.",
    productImage: "/images/product-5.png",
    packageIncludes: [
      "Scanner",
      "Rechargeable Battery",
      "Charging Dock",
      "Protective Carry Case",
    ],
    software: ["FARO Sphere® XG","FARO® SCENE Software"],
    sketchfabUrl:
      "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Guided Scanning with Real-Time Feedback",
      "Automatic Point Cloud Processing",
    ],
  },
  {
    id: 5,
    slug: "faro-sphere-xg",
    type: "software", // ← software
    title: "FARO Sphere® XG",
    logos: ["sphere-xg.jpg"],
    description:
      "FARO Sphere XG is a cloud-based digital reality platform that provides a centralized, collaborative experience for reality capture and 3D modeling. When paired with the Stream mobile app, Sphere XG enables faster 3D data capture, processing, and project management from anywhere in the world. It unifies data from stationary scanning, mobile scanning, and 360° photo capture into one environment for 4D progress management.",
    productImage: "/images/product-6.png",
    packageIncludes: [
      "Cloud Platform Access",
      "Stream Mobile App Integration",
      "Collaborative Workspace",
      "Unlimited Cloud Storage"
    ],
    software: [],
    sketchfabUrl: "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Cloud-based Data Centralization",
      "Real-time Project Collaboration",
      "4D Progress Management (Time Travel)",
      "Integration with Stream Mobile App"
    ]
  },
  {
    id: 6,
    slug: "faro-as-built",
    type: "software", // ← software
    title: "FARO® As-Built™ Software",
    logos: ["as-built-suite.jpg"],
    description:
      "The FARO As-Built Software Suite specifically enables AEC professionals to process 3D laser scan data directly into Autodesk® AutoCAD® and Revit®. It streamlines the creation of accurate 2D plans and 3D models for BIM integration, reducing the time and effort required to convert reality capture data into deliverable design documents.",
    productImage: "/images/product-7.jpg",
    packageIncludes: [
      "As-Built for AutoCAD",
      "As-Built for Revit",
      "As-Built Modeler"
    ],
    software: [],
    sketchfabUrl: "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Seamless Integration with AutoCAD & Revit",
      "Automated Clash Detection",
      "Efficient Point Cloud Processing",
      "BIM Model Creation & Validation"
    ]
  },
  {
    id: 7,
    slug: "faro-buildit-construction",
    type: "software", // ← software
    title: "FARO® BuildIT Construction",
    logos: ["built-it.jpg"],
    description:
      "FARO BuildIT Construction is a comprehensive verification software solution that enables laser scan data to be compared against CAD/BIM models in real-time. It is designed to minimize waste and rework by detecting errors early, allowing for accurate floor flatness analysis, tank deformation checks, and prefabrication inspection.",
    productImage: "/images/product-8.jpg",
    packageIncludes: [
      "BuildIT Construction License",
      "Real-time Comparison Tools",
      "Analysis Modules",
      "Export Utilities"
    ],
    software: [],
    sketchfabUrl: "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Real-time Design to Build Comparison",
      "Floor Flatness Analysis (ASTM/TR34)",
      "Tank Deformation Analysis",
      "Prefabricated Component Inspection"
    ]
  },
  {
    id: 4,
    slug: "faro-scene",
    type: "software", // ← software
    title: "FARO® SCENE Software",
    logos: ["scene.png"],
    description:
      "FARO SCENE software is specifically designed to process and manage scan data from FARO laser scanners. It utilizes automatic object recognition and registration to produce high-quality data. SCENE allows users to combine scans, colorize point clouds, and export data to various formats, featuring an immersive Virtual Reality (VR) view for data evaluation.",
    productImage: "/images/product-9.jpg",
    packageIncludes: [
      "SCENE Software License",
      "VR View Module",
      "WebShare Cloud Access",
      "Export Utilities"
    ],
    software: [],
    sketchfabUrl: "https://sketchfab.com/models/282954bbc43c416fac30eb458a6afd0e/embed",
    keyFeatures: [
      "Automatic Scan Registration",
      "Target-less Positioning",
      "Virtual Reality (VR) View",
      "WebShare Cloud Integration"
    ]
  },
];