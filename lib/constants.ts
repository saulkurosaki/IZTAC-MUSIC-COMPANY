import OurServices1 from "../assets/our_services_image_1.webp";
import OurServices2 from "../assets/our_services_image_2.webp";
import OurServices3 from "../assets/our_services_image_3.webp";
import Portfolio_Image_1 from "../assets/portfolio_image_1.webp";
import Portfolio_Image_2 from "../assets/portfolio_image_2.webp";
import Portfolio_Image_3 from "../assets/portfolio_image_3.webp";
import Member_1 from "../assets/our_team_img_1.webp";
import Member_2 from "../assets/our_team_img_2.webp";
import Member_3 from "../assets/our_team_img_3.webp";
import Member_4 from "../assets/our_team_img_4.webp";
import Reference1 from "../assets/reference_img_1.jpg";
import Reference2 from "../assets/reference_img_2.jpg";
import Reference3 from "../assets/reference_img_3.jpg";

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

export const teamMembers = {
  Isaac: {
    image: Member_1,
    name: "Isaac Maldonado, CEO",
    description:
      "Fundador y director de IMC. También es compositor, vocal coach y asesor artístico con más de 10 años de experiencia en la industria",
  },
  Giselle: {
    image: Member_2,
    name: "Giselle Maldonado, Liricista",
    description: "Compositora, liricista y Creadora creativa",
  },
  Roxana: {
    image: Member_3,
    name: "Roxana Ceballos, Administradora",
    description: "Encargada de Administración y relaciones internacionales",
  },
  Beni: {
    image: Member_4,
    name: "Beni Choi, Asistente",
    description: "Asistente en los diversos departamentos",
  },
};

export const referencesInfo = {
  Majo: {
    quote:
      "Gracias a las asesorías en IMC pude tener una audición para una beca exitosa en la universidad que quería",
    author: "María José - Alumna becada de UVM",
    avatar: Reference1,
  },
  Victoria: {
    quote:
      "Con las asesorías en IMC logré expandir mi zona de confort con seguridad y logré conseguir mi papel soñado en mi musical favorito",
    author: "Victoria - Estelar en Heathers",
    avatar: Reference2,
  },
  Victor: {
    quote:
      "Estudiar en IMC me ayudo a mejorar mis técnicas y asi lograr tener mi primer papel en un musical semi-profesional",
    author: "Victor Villas - Protagónico en The Heights",
    avatar: Reference3,
  },
};
