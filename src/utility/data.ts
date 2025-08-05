export interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
}

export const projects: {
  photoshop: Project[];
  figma: Project[];
  illustrator: Project[];
} = {
  photoshop: [
    { 
      id: 1,
      title: "Bring Me The Horizon Poster",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/photoshop/BMTH.png",
      alt: "Bring Me The Horizon Poster" 
    },
    { 
      id: 2,
      title: "Luna Turns Four Poster",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/photoshop/luna.png",
      alt: "Luna Turns Four Poster" 
    },
    { 
      id: 3,
      title: "Orocan Poster",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/photoshop/orocan_sample.jpg",
      alt: "Orocan Poster" 
    },
    { 
      id: 4,
      title: "TQC Poster",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/photoshop/TICAP_Cross_Guild.png",
      alt: "TQC Poster" 
    },
    { 
      id: 5,
      title: "Strays Poster",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/photoshop/STRAYS.png",
      alt: "Strays Poster" 
    }
  ],
  figma: [
    { 
      id: 1,
      title: "Harvest2Home",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/figma/harvest.jpg",
      alt: "Harvest2Home" 
    },
    { 
      id: 2,
      title: "Rakk",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/figma/rakk.jpg",
      alt: "Rakk" 
    },
    { 
      id: 3,
      title: "TQC",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/figma/TQC.jpg",
      alt: "TQC" 
    },
    { 
      id: 4,
      title: "SmartBudgetor",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket/figma/payatas.jpg",
      alt: "SmartBudgetor" 
    },
  ],
  illustrator: [
    { 
      id: 1,
      title: "Semaphore Poster",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket//sema.png",
      alt: "Bring Me The Horizon Poster" 
    },
    { 
      id: 2,
      title: "Glass",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket//glassed.png",
      alt: "Glass" 
    },
    { 
      id: 3,
      title: "Black shit",
      description: "",
      src: "https://gfhyywaxbdxpbnczfpys.supabase.co/storage/v1/object/public/chumbucket//neww.png",
      alt: "Black shit" 
    },
    { 
      id: 4,
      title: "TQC Poster",
      description: "",
      src: "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/rakk-front.jpg?...",
      alt: "TQC Poster" 
    },
    { 
      id: 5,
      title: "Strays Poster",
      description: "",
      src: "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/rakk-front.jpg?...",
      alt: "Strays Poster" 
    }
  ]
};
