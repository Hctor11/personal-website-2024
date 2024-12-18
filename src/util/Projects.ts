import type { icon } from "./icons";

// technologies icons
import react from "../assets/icons/webdev/react.svg";
import pandas from "../assets/icons/datascience/pandas.svg";
import tailwind from "../assets/icons/webdev/tailwind.svg";
import ts from "../assets/icons/webdev/typescript.svg";

import blender from "../assets/icons/design/blender.svg";
import ps from "../assets/icons/design/photoshop.svg";

import next from "../assets/icons/webdev/nextjs.svg";
import axios from "../assets/icons/webdev/axios.svg";
import typescript from "../assets/icons/webdev/typescript.svg";

import vue from "../assets/icons/webdev/vue.svg";
import nuxt from "../assets/icons/webdev/nuxt.svg";

// project images
import qrgenerator from "../assets/images/proyects/qr-generator.png";
import reactres from "../assets/images/proyects/ReactResources.png";
import pascaline from "../assets/images/proyects/pascaline.png";
import minitranslator from "../assets/images/proyects/Minitranslator.png";

// dribble images
import d1 from "../assets/images/dribbble/d1.png";
import d2 from "../assets/images/dribbble/d2.png";
import d7 from "../assets/images/dribbble/d7.png";
import d9 from "../assets/images/dribbble/d9.png";

// advertisements images
import ad1 from "../assets/images/advertisements/ad1.png";
import ad2 from "../assets/images/advertisements/ad2.png";
import ad3 from "../assets/images/advertisements/ad3.png";
import ad4 from "../assets/images/advertisements/ad4.png";

// socialmedia images
import sm1 from "../assets/images/socialmedia/sm1.png";
import sm2 from "../assets/images/socialmedia/sm2.png";
import sm3 from "../assets/images/socialmedia/sm3.png";
import sm4 from "../assets/images/socialmedia/sm4.png";
import sm5 from "../assets/images/socialmedia/sm5.png";
import sm6 from "../assets/images/socialmedia/sm6.png";
import sm7 from "../assets/images/socialmedia/sm7.png";
import sm8 from "../assets/images/socialmedia/sm8.png";
import sm9 from "../assets/images/socialmedia/sm9.png";
import sm10 from "../assets/images/socialmedia/sm10.png";
import sm11 from "../assets/images/socialmedia/sm11.png";

// sputnik images
import sp1 from "../assets/images/sputnik/poster1.png";
import sp2 from "../assets/images/sputnik/poster2.png";
import sp3 from "../assets/images/sputnik/poster3.png";
import sp4 from "../assets/images/sputnik/poster44.png";

// nothing phone 2a
import n1 from "../assets/images/nothing/n1.png";
import n2 from "../assets/images/nothing/n2.png";
import n3 from "../assets/images/nothing/n3.png";
import n4 from "../assets/images/nothing/n4.png";
import n5 from "../assets/images/nothing/n5.png";
import n6 from "../assets/images/nothing/n6.png";

// Alexandria
import a1 from "../assets/images/alexandria/a1.png";
import a2 from "../assets/images/alexandria/a2.png";
import a3 from "../assets/images/alexandria/a3.png";
import a4 from "../assets/images/alexandria/a4.png";
import a5 from "../assets/images/alexandria/a5.png";
import a6 from "../assets/images/alexandria/a6.png";
import a7 from "../assets/images/alexandria/a7.png";
import a8 from "../assets/images/alexandria/a8.png";
import a9 from "../assets/images/alexandria/a9.png";
import a10 from "../assets/images/alexandria/a10.png";
import a11 from "../assets/images/alexandria/a11.png";



export interface codeProject {
  title: string;
  subtitle: string;
  description: string;
  stack: icon[];
  image: string;
  link: string;
}

export interface image {
  src: string;
  link?: string;
}

export interface imageGallery {
  title: string;
  subtitle: string;
  description?: string;
  projectLink?: string;
  columns: number;
  images: image[];
}

export const allCodeProjects: codeProject[] = [
  {
    title: "Pascaline",
    subtitle: "Calculators hub",
    description:
      "Pascaline is a one-stop-shop for all kinds of calculators for math, physics, and statistics.",
    stack: [
      {
        path: next.src,
        name: "Next",
      },
      {
        path: tailwind.src,
        name: "TailwindCSS",
      },
    ],
    image: pascaline.src,
    link: "https://pascaline.vercel.app/",
  },
  {
    title: "QR Generator",
    subtitle: "Minimal QR Code Generator",
    description:
      "This Vue.js application allows users to generate QR codes dynamically based on their input.",
    stack: [
      {
        path: nuxt.src,
        name: "Nuxt",
      },
      {
        path: vue.src,
        name: "Vue JS",
      },
      {
        path: tailwind.src,
        name: "TailwindCSS",
      },
    ],
    image: qrgenerator.src,
    link: "https://qr-generator-woad.vercel.app/",
  },
  {
    title: "React Resouces",
    subtitle: "Hub of React tools and packages",
    description:
      "Hub of React Resources, using Pandas to make data as a JSON array and mapping it in React Components.",
    stack: [
      {
        path: react.src,
        name: "React",
      },
      {
        path: pandas.src,
        name: "Pandas",
      },
      {
        path: tailwind.src,
        name: "TailwindCSS",
      },
      {
        path: ts.src,
        name: "TypeScript",
      },
    ],
    image: reactres.src,
    link: "https://hctor11.github.io/react-resources/",
  },
  {
    title: "Mini-Translator",
    subtitle: "Translator web app",
    description: "Minimalist translator website.",
    stack: [
      {
        path: next.src,
        name: "NextJS",
      },
      {
        path: axios.src,
        name: "Axios",
      },
      {
        path: typescript.src,
        name: "TypeScript",
      },
      {
        path: tailwind.src,
        name: "Tailwind",
      },
    ],
    image: minitranslator.src,
    link: "https://mini-translator.vercel.app/",
  },
];

export const allDesignProjects: imageGallery[] = [
  {
    title: "Alexandria (2024)",
    subtitle: "Branding and UI/UX Design study case",
    description:
      "Brading and UI/UX study for Alexandria desktop application, clean, minimal and functional.",
    columns: 1,
    images: [
      {
        src: a1.src,
        link: "https://www.behance.net/gallery/198063719/Alexandria-Note-taking-app-study-case",
      },
      {
        src: a9.src,
        link: "https://www.behance.net/gallery/198063719/Alexandria-Note-taking-app-study-case",
      },
      {
        src: a10.src,
        link: "https://www.behance.net/gallery/198063719/Alexandria-Note-taking-app-study-case",
      },
      {
        src: a11.src,
        link: "https://www.behance.net/gallery/198063719/Alexandria-Note-taking-app-study-case",
      },
    ],
    projectLink: "https://www.behance.net/gallery/198063719/Alexandria-Note-taking-app-study-case"
  },
  {
    title: "Nothing Phone 2a (2024)",
    subtitle: "Advertising and 3D",
    description:
      "This project showcases the elegance and innovation of a minimalist smartphone design, focusing on essential features and a sleek aesthetic.",
    columns: 1,
    images: [
      {
        src: n1.src,
        link: "https://www.behance.net/gallery/195124709/Nothing-Phone-%282a%29",
      },
      {
        src: n2.src,
        link: "https://www.behance.net/gallery/195124709/Nothing-Phone-%282a%29",
      },
      {
        src: n3.src,
        link: "https://www.behance.net/gallery/195124709/Nothing-Phone-%282a%29",
      },
      {
        src: n4.src,
        link: "https://www.behance.net/gallery/195124709/Nothing-Phone-%282a%29",
      }
    ],
    projectLink: "https://www.behance.net/gallery/195124709/Nothing-Phone-%282a%29"
  },
  {
    title: "Sputnik (2023)",
    subtitle: "Collection of posters",
    description:
      "'Sputnik' is a series of posters inspired by the iconic Sputnik satellite. Each poster captures the essence of Sputnik's historical significance and technological marvel through visually striking designs.",
    columns: 2,
    images: [
      {
        src: sp1.src,
        link: "https://www.behance.net/gallery/174574421/Sputnik",
      },
      {
        src: sp2.src,
        link: "https://www.behance.net/gallery/174574421/Sputnik",
      },
      {
        src: sp3.src,
        link: "https://www.behance.net/gallery/174574421/Sputnik",
      },
      {
        src: sp4.src,
        link: "https://www.behance.net/gallery/174574421/Sputnik",
      },
    ],
    projectLink: "https://www.behance.net/gallery/174574421/Sputnik"
  },
  {
    title: "Dribble Screens",
    subtitle: "Collection of UI screens",
    columns: 3,
    images: [
      {
        src: d9.src,
        link: "https://dribbble.com/shots/24667325-Mobile-app-description-section?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Mobile%20app%20description%20section&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Mobile%20app%20description%20section&utm_medium=Social_Share",
      },
      {
        src: d7.src,
        link: "https://dribbble.com/shots/23608105-Calculator-app-landing-page?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Calculator%20app%20landing%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Calculator%20app%20landing%20page&utm_medium=Social_Share",
      },
      {
        src: d1.src,
        link: "https://dribbble.com/shots/22781774-Business-platform-Landing-page?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Business%20platform%20Landing%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Business%20platform%20Landing%20page&utm_medium=Social_Share",
      },
      {
        src: d2.src,
        link: "https://dribbble.com/shots/22521183-Data-management-dashboard?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Data%20management%20dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Data%20management%20dashboard&utm_medium=Social_Share",
      }
    ],
  },
  {
    title: "Social Media Design (2019)",
    subtitle: "Social Media Projects",
    columns: 3,
    images: [
      {
        src: sm1.src,
      },
      {
        src: sm2.src,
      },
      {
        src: sm3.src,
      },
      {
        src: sm4.src,
      },
      {
        src: sm5.src,
      },
      {
        src: sm6.src,
      },
      {
        src: sm7.src,
      },
      {
        src: sm8.src,
      },
      {
        src: sm9.src,
      },
      {
        src: sm10.src,
      },
      {
        src: sm11.src,
      },
    ],
  },
  {
    title: "Advertisement Design (2019)",
    subtitle: "Collection of Advertisements",
    columns: 3,
    images: [
      {
        src: ad1.src,
      },
      {
        src: ad2.src,
      },
      {
        src: ad3.src,
      },
      {
        src: ad4.src,
      },
    ],
  },
];
