// An array of links for navigation bar
const navBarLinks = [
  // { name: "Home", url: "/" },
  // { name: "Productos", url: "/products" },
  // { name: "Servicios", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Mano a Mano con el Tarot", url: "/cursos/mano-a-mano" },
  // { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
    {
    section: "Sobre Paz",
    links: [
      { name: "Sobre nosotras", url: "/about" },
      { name: "Cursos", url: "/cursos" },
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};