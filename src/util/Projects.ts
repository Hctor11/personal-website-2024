import type { icon } from "./icons";

// technologies icons
import react from '../assets/icons/webdev/react.svg'
import pandas from '../assets/icons/datascience/pandas.svg'
import tailwind from '../assets/icons/webdev/tailwind.svg'
import ts from '../assets/icons/webdev/typescript.svg'

import blender from '../assets/icons/design/blender.svg'
import ps from '../assets/icons/design/photoshop.svg'

import next from '../assets/icons/webdev/nextjs.svg'
import axios from '../assets/icons/webdev/axios.svg'
import typescript from '../assets/icons/webdev/typescript.svg'

import vue from '../assets/icons/webdev/vue.svg'
import nuxt from '../assets/icons/webdev/nuxt.svg'

// project images
import qrgenerator from '../assets/images/proyects/qr-generator.png'
import reactres from '../assets/images/proyects/ReactResources.png'
import sputnik from '../assets/images/proyects/Sputnik.png'
import minitranslator from '../assets/images/proyects/Minitranslator.png'

// dribble images
import d1 from '../assets/images/dribbble/d1.png'
import d2 from '../assets/images/dribbble/d2.png'
import d3 from '../assets/images/dribbble/d3.png'
import d4 from '../assets/images/dribbble/d4.png'
import d5 from '../assets/images/dribbble/d5.png'
import d6 from '../assets/images/dribbble/d6.png'

// advertisements images
import ad1 from "../assets/images/advertisements/ad1.png"
import ad2 from "../assets/images/advertisements/ad2.png"
import ad3 from "../assets/images/advertisements/ad3.png"
import ad4 from "../assets/images/advertisements/ad4.png"

// socialmedia images
import sm1 from "../assets/images/socialmedia/sm1.png"
import sm2 from "../assets/images/socialmedia/sm2.png"
import sm3 from "../assets/images/socialmedia/sm3.png"
import sm4 from "../assets/images/socialmedia/sm4.png"
import sm5 from "../assets/images/socialmedia/sm5.png"
import sm6 from "../assets/images/socialmedia/sm6.png"
import sm7 from "../assets/images/socialmedia/sm7.png"
import sm8 from "../assets/images/socialmedia/sm8.png"
import sm9 from "../assets/images/socialmedia/sm9.png"
import sm10 from "../assets/images/socialmedia/sm10.png"
import sm11 from "../assets/images/socialmedia/sm11.png"

export interface codeProject{
    title:string;
    subtitle: string;
    description: string;
    stack: icon[];
    image: string;
    link: string;
}

export interface image{
    src: string;
    link?: string;
}

export interface imageGallery{
    title:string;
    subtitle: string;
    columns: number;
    images: image[];
}

export const allCodeProjects:codeProject[] = [
    {
        title: 'QR Generator',
        subtitle: 'Minimal Code Generator',
        description: 'This Vue.js application allows users to generate QR codes dynamically based on their input.',
        stack: [
            {   
                path: nuxt.src,
                name: "Nuxt"
            },
            {   
                path: vue.src,
                name: "Vue JS"
            },
            {   
                path: tailwind.src,
                name: "TailwindCSS"
            }
        ],
        image: qrgenerator.src,
        link: "https://qr-generator-woad.vercel.app/"
    },
    {
        title: 'React Resouces',
        subtitle: 'Hub of React tools and packages',
        description: 'Hub of React Resources, using Pandas to make data as a JSON array and mapping it in React Components.',
        stack: [
            {   
                path: react.src,
                name: "React"
            },
            {   
                path: pandas.src,
                name: "Pandas"
            },
            {   
                path: tailwind.src,
                name: "TailwindCSS"
            },
            {   
                path: ts.src,
                name: "TypeScript"
            }
        ],
        image: reactres.src,
        link: "https://hctor11.github.io/react-resources/"
    },
    {
        title: 'Sputnik',
        subtitle: 'Posters for the Sputnik Spatial Mission',
        description: 'Behance project about Sputnik, using Blender for the model and Photoshop to make the graphic design.',
        stack: [
            {   
                path: ps.src,
                name: "Photoshop"
            },
            {   
                path: blender.src,
                name: "Blender"
            }
        ],
        image: sputnik.src,
        link: "https://www.behance.net/gallery/174574421/Sputnik"
    },
    {
        title: 'Mini-Translator',
        subtitle: 'Translator web app',
        description: 'Minimalist translator website.',
        stack: [
            {   
                path: next.src,
                name: "NextJS"
            },
            {   
                path: axios.src,
                name: "Axios"
            },
            {   
                path: typescript.src,
                name: "TypeScript"
            },
            {   
                path: tailwind.src,
                name: "Tailwind"
            }
        ],
        image: minitranslator.src,
        link: "https://mini-translator.vercel.app/"
    }
]

export const allDesignProjects:imageGallery[] = [
    {
        title: "Dribble Screens",
        subtitle: "Collection of UI screens",
        columns: 3,
        images: [
            {
                src: d1.src,
                link: "https://dribbble.com/shots/22781774-Business-platform-Landing-page?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Business%20platform%20Landing%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Business%20platform%20Landing%20page&utm_medium=Social_Share"
            },{
                src: d2.src,
                link: "https://dribbble.com/shots/22521183-Data-management-dashboard?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Data%20management%20dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Data%20management%20dashboard&utm_medium=Social_Share"
            },{
                src: d3.src,
                link: "https://dribbble.com/shots/21773263-Tech-eCommerce-Landing-page?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Tech%20eCommerce%20Landing%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Tech%20eCommerce%20Landing%20page&utm_medium=Social_Share"
            },{
                src: d4.src,
                link: "https://dribbble.com/shots/21626539-BiterBit-logotype?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=BiterBit%20logotype&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=BiterBit%20logotype&utm_medium=Social_Share"
            },{
                src: d5.src,
                link: "https://dribbble.com/shots/20799312-Antares-Design-Studio-header-page?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Antares%20Design%20Studio%20header%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Antares%20Design%20Studio%20header%20page&utm_medium=Social_Share"
            },{
                src: d6.src,
                link: "https://dribbble.com/shots/23022968-Gallery-app-UI?utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Gallery%20app%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HectorRivera222&utm_content=Gallery%20app%20UI&utm_medium=Social_Share"
            }           
        ]    
    },
    {
        title: "Social Media Desing",
        subtitle: "Social Media Projects",
        columns: 3,
        images: [
            {
                src: sm1.src
            },
            {
                src: sm2.src
            },
            {
                src: sm3.src
            },
            {
                src: sm4.src
            },
            {
                src: sm5.src
            },
            {
                src: sm6.src
            },
            {
                src: sm7.src
            },
            {
                src: sm8.src
            },
            {
                src: sm9.src
            },
            {
                src: sm10.src
            },
            {
                src: sm11.src
            }
        ]
    },{
        title: "Advertisement Design",
        subtitle: "Collection of Advertisements",
        columns: 3,
        images: [
            {
                src:ad1.src
            },
            {
                src:ad2.src
            },
            {
                src:ad3.src
            },
            {
                src:ad4.src
            }
        ]
    }
]