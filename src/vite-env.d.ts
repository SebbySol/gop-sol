/// <reference types="vite/client" />

declare module 'vanta/dist/vanta.fog.min' {
  const FOG: (config: any) => any;
  export default FOG;
}

// Swiper CSS module declarations
declare module 'swiper/css' {}
declare module 'swiper/css/effect-coverflow' {}
declare module 'swiper/css/pagination' {}
declare module 'swiper/css/autoplay' {}
