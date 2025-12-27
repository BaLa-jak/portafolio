import type {Page, Links, Socials } from "@types"

// Global
export const SITE: Page = {
  TITLE: "Yadid portfolio",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.", 

}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "About me", 
    HREF: "#me", 
  },
  { 
    TEXT: "Projects", 
    HREF: "#projects", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  // { 
  //   TEXT: "Projects", 
  //   HREF: "/projects", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "yadidelias@gmail.com",
    HREF: "mailto:yadidelias@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "BaLa",
    HREF: "https://github.com/BaLa-jak"
  },
]

