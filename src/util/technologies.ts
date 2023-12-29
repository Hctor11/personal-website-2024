import type { icon } from "./icons";
import html from "../assets/icons/webdev/html.svg";
import css from "../assets/icons/webdev/css.svg";
import js from "../assets/icons/webdev/javascript.svg";
import ts from "../assets/icons/webdev/typescript.svg";
import astro from "../assets/icons/webdev/astro.svg";
import react from "../assets/icons/webdev/react.svg";
import sass from "../assets/icons/webdev/sass.svg";
import tailwind from "../assets/icons/webdev/tailwind.svg";

import node from '../assets/icons/webdev/nodejs.svg'
import php from '../assets/icons/webdev/php.svg'
import django from '../assets/icons/webdev/django.svg'
import next from '../assets/icons/webdev/nextjs.svg'

import sqlite from '../assets/icons/database/sqlite.svg'
import sql from '../assets/icons/database/mysql.svg'
import postgre from '../assets/icons/database/postgresql.svg'
import sqlserver from '../assets/icons/database/sqlserver.svg'

import mongo from '../assets/icons/database/mongodb.svg'

import python from '../assets/icons/datascience/python.svg'
import r from '../assets/icons/datascience/r.svg'
import julia from '../assets/icons/datascience/julia.svg'
import haskell from '../assets/icons/datascience/haskell.svg'
import excel from '../assets/icons/datascience/excel.svg'

import sklearn from '../assets/icons/datascience/scikitlearn.svg'
import matplotlib from '../assets/icons/datascience/matplotlib.svg'
import numpy from '../assets/icons/datascience/numpy.svg'
import pandas from '../assets/icons/datascience/pandas.svg'
import pytorch from '../assets/icons/datascience/pytorch.svg'

import figma from '../assets/icons/design/figma.svg'
import blender from '../assets/icons/design/blender.svg'
import ps from '../assets/icons/design/photoshop.svg'
import inkscape from '../assets/icons/design/inkscape.svg'
import Spline from '../assets/icons/design/spline.png'

export const frontendIcons: icon[] = [
  {
    path: html.src,
    name: "HTML",
  },
  {
    path: css.src,
    name: "CSS",
  },
  {
    path: js.src,
    name: "JavaScript",
  },
  {
    path: ts.src,
    name: "TypeScript",
  },
  {
    path: astro.src,
    name: "Astro",
  },
  {
    path: react.src,
    name: "React",
  },
  {
    path: sass.src,
    name: "SASS",
  },
  {
    path: tailwind.src,
    name: "TailwindCSS",
  },
];

export const backendIcons: icon[] = [
    {
        path: node.src,
        name: "NodeJS"
    },
    {
        path: php.src,
        name: "PHP"
    },
    {
        path: django.src,
        name: "Django"
    },
    {
        path: next.src,
        name: "NextJS"
    }
]

export const relDatabases: icon[] = [
  {
    path:sqlite.src,
    name: "Sqlite"
  },
  {
    path: sql.src,
    name: "MySql"
  },
  {
    path:postgre.src,
    name: "PostgreSQL"
  },
  {
    path:sqlserver.src,
    name: "SQL Server"
  }
]

export const noRelDB: icon[] = [
  {
    path:mongo.src,
    name: "MongoDB"
  }
]

export const DSTools: icon[] = [
  {
    path:python.src,
    name: "Python"
  },
  {
    path:r.src,
    name: "R"
  },
  {
    path:julia.src,
    name: "Julia"
  },
  {
    path:haskell.src,
    name: "Haskell"
  },
  {
    path:excel.src,
    name: "Excel"
  }
]

export const DSFrameworks: icon[] = [
  {
    path:sklearn.src,
    name: "SciKit Learn"
  },
  {
    path:matplotlib.src,
    name: "Matplotlib"
  },
  {
    path:numpy.src,
    name: "Numpy"
  },
  {
    path:pandas.src,
    name: "Pandas"
  },
  {
    path:pytorch.src,
    name: "PyTorch"
  }
]

export const design: icon[] = [
  {
    path: figma.src,
    name: "Figma"
  },
  {
    path: ps.src,
    name: "Photoshop"
  },
  {
    path: blender.src,
    name: "Blender"
  },
  {
    path: inkscape.src,
    name: "Inkscape"
  },
  {
    path: Spline.src,
    name: "Spline"
  }
]