import OurServices1 from "../assets/our_services_image_1.webp";
import OurServices2 from "../assets/our_services_image_2.webp";
import OurServices3 from "../assets/our_services_image_3.webp";
import Portfolio_Image_1 from "../assets/portfolio_image_1.webp";
import Portfolio_Image_2 from "../assets/portfolio_image_2.webp";
import Portfolio_Image_3 from "../assets/portfolio_image_3.webp";

export const services = {
  coaching: {
    image: OurServices1,
    title: "Asesoría Artística y Vocal Coaching",
    description:
      "Asesorías personalizadas para artistas, cantantes, productores, compositores y músicos que buscan impulsar su carrera.",
  },
  composition: {
    image: OurServices2,
    title: "Composición para Media",
    description:
      "Composiciones personalizadas para cine, televisión, comerciales y videojuegos adaptables a presupuesto y objetivos.",
  },
  mastery: {
    image: OurServices3,
    title: "Mezcla y Masterización",
    description:
      "Ingeniería profesional y eficaz para la mezcla y masterización de proyectos musicales.",
  },
};

export const portfolioSongs = {
  1: {
    image: Portfolio_Image_1,
    song: "https://soundcloud.com/zackarymc101/infierno-credit-sequence?si=bc5ce5534680455eb8140f74ed6ab6f7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  2: {
    image: Portfolio_Image_2,
    song: "https://soundcloud.com/zackarymc101/forseer?si=b97584bca96c42218d01529db20aff77&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  3: {
    image: Portfolio_Image_3,
    song: "https://soundcloud.com/zackarymc101/frustration?si=b4fa00fffa494e2db8b0d6eff2440bcd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
};
