import OurServices1 from "@/assets/our_services_image_1.webp";
import OurServices2 from "@/assets/our_services_image_2.webp";
import OurServices3 from "@/assets/our_services_image_3.webp";
import Portfolio_Image_1 from "@/assets/portfolio_image_1.webp";
import Portfolio_Image_2 from "@/assets/portfolio_image_2.webp";
import Portfolio_Image_3 from "@/assets/portfolio_image_3.png";
import Member_1 from "@/assets/our_team_img_1.webp";
import Member_2 from "@/assets/our_team_img_2.webp";
import Member_3 from "@/assets/our_team_img_3.webp";
import Member_4 from "@/assets/our_team_img_4.webp";
import Reference1 from "@/assets/reference_img_1.jpg";
import Reference2 from "@/assets/reference_img_2.jpg";
import Reference3 from "@/assets/reference_img_3.jpg";
import BlogPostImage1 from "@/assets/business_references_img_6.svg";
import BlogPostImage2 from "@/assets/business_references_img_1.svg";
import BlogPostImage3 from "@/assets/blog_post_img_3.jpeg";
import BlogPostImage4 from "@/assets/portfolio_image_3.png";
import BlogPostImage5 from "@/assets/portfolio_image_1.webp";
import BlogPostImage7 from "@/assets/recognitions_bg_img.png";

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

export const allBlogPosts = [
  {
    author: "Isaac Ceballos",
    title: "IMC Manda a Sus Artistas a Nivel Internacional",
    description:
      "¡IMC se vuelve internacional! IMC se alía con JMI para el programa Ethno, un taller en donde artistas de 18 a 30 años de diversos países se juntan para aprender de canciones folclóricas de alrededor d...",
    date: "12 feb. 2024",
    image: BlogPostImage1,
    achievement: "goals",
    url: "/blog/metas-cumplidas/imc-manda-a-sus-artistas-a-nivel-internacional",
  },
  {
    author: "Isaac Ceballos",
    title: "IMC en la Global Game Jam",
    description:
      "IMC participa a nivel internacional El fin de semana del 28 de Enero IMC participó en la Global Game Jam, un reto a nivel global donde en 48 horas se les pide a varios equipos elaborar un videojuego c...",
    date: "12 feb. 2024",
    image: BlogPostImage2,
    achievement: "recognitions",
    url: "/blog/reconocimientos/imc-en-la-global-game-jam",
  },
  {
    author: "Isaac Ceballos",
    title: "Nuestra Liricista Gana Premio Estatal",
    description:
      '¡Una canción muy queretana! El día 29 de noviembre de 2022 Nuestra liricista Giselle Maldonado ganó un premio estatal por parte de la competencia de SEJUVE Querétaro " Canta a la queretana" por su com...',
    date: "12 feb. 2024",
    image: BlogPostImage3,
    achievement: "recognitions",
    url: "/blog/reconocimientos/nuestra-liricista-gana-premio-estatal",
  },
  {
    author: "Isaac Ceballos",
    title: "Nuestro Compositor Es Reconocido En Berklee",
    description:
      "Isaac Maldonado (Nuestro compositor) Reconocido en Berklee El pasado 28 de Agosto de 2023, Isaac Maldonado apareció en un artículo en la página oficial de instagram de Berklee College of Music en dond...",
    date: "12 feb. 2024",
    image: BlogPostImage4,
    achievement: "recognitions",
    url: "/blog/reconocimientos/nuestro-compositor-es-reconocido-en-berklee",
  },
  {
    author: "Isaac Ceballos",
    title: "Premio Internacional A Mejor Soundtrack",
    description:
      'Una Obra Digna De Laurel La colaboración de IMC con el equipo del director queretano Didier Richards para su corto "Infierno" Dio frutos al ser presentado en diversos festivales a nivel internacional ...',
    date: "12 feb. 2024",
    image: BlogPostImage5,
    achievement: "recognitions",
    url: "/blog/reconocimientos/premio-internacional-a-mejor-soundtrack",
  },
  {
    author: "Isaac Ceballos",
    title:
      "María José Obtiene Beca Al Quedar En El Ensamble De Su Preparatoria",
    description:
      "¡Felicidades! María José pudo obtener una beca para entrar a la preparatoria de su preferencia después de tomar asesorías en IMC. Sus habilidades vocales le dieron acceso a una beca artística como voc...",
    date: "12 feb. 2024",
    image: BlogPostImage4,
    achievement: "goals",
    url: "/blog/metas-cumplidas/maria-jose-obtiene-beca-al-quedar-en-el-ensamble-de-su-preparatoria",
  },
  {
    author: "Isaac Ceballos",
    title: "Victoria Obtiene Papel Estelar En Heathers",
    description:
      '¡Que Bello! Victoria, una de nuestras artistas tomando asesorías en IMC logro obtener lo que ella describe como su "Papel Soñado" una vez que se abrieron las audiciones para la adaptación al español d...',
    date: "12 feb. 2024",
    image: BlogPostImage7,
    achievement: "goals",
    url: "/blog/metas-cumplidas/victoria-obtiene-papel-estelar-en-heathers",
  },
  {
    author: "Isaac Ceballos",
    title: "Victor Consigue Papel Estelar Para la Obra In The Heights",
    description:
      "¡Felicidades! Después de meses de preparación nuestro alumno Víctor que empezó con sus asesorías en IMC logró pasar por el proceso de audición para conseguir un papel Estelar en la adaptación al españ...",
    date: "12 feb. 2024",
    image: BlogPostImage4,
    achievement: "goals",
    url: "/blog/metas-cumplidas/victor-consigue-papel-estelar-para-la-obra-in-the-heights",
  },
];

export const achievementsInfo = [
  {
    title: "IMC Manda a Sus Artistas a Nivel Internacional",
    date: "10 de Enero de 2019",
    image: BlogPostImage1,
    url: "/blog/metas-cumplidas/imc-manda-a-sus-artistas-a-nivel-internacional",
  },
  {
    title:
      "María José Obtiene Beca Al Quedar En El Ensamble De Su Preparatoria",
    date: "15 de Septiembre de 2023",
    image: BlogPostImage4,
    url: "/blog/metas-cumplidas/maria-jose-obtiene-beca-al-quedar-en-el-ensamble-de-su-preparatoria",
  },
  {
    title: "Victoria Obtiene Papel Estelar En Heathers",
    date: "25 de Diciembre de 2024",
    image: BlogPostImage7,
    url: "/blog/metas-cumplidas/victoria-obtiene-papel-estelar-en-heathers",
  },
  {
    title: "Victor Consigue Papel Estelar Para la Obra In The Heights",
    date: "28 de Agosto de 2023",
    image: BlogPostImage4,
    url: "/blog/metas-cumplidas/victor-consigue-papel-estelar-para-la-obra-in-the-heights",
  },
];

export const recognitionsInfo = [
  {
    title: "IMC en la Global Game Jam",
    date: "28 de Enero de 2024",
    image: BlogPostImage2,
    url: "/blog/reconocimientos/imc-en-la-global-game-jam",
  },
  {
    title: "Nuestra Liricista Gana Premio Estatal",
    date: "29 de Noviembre de 2022",
    image: BlogPostImage3,
    url: "/blog/reconocimientos/nuestra-liricista-gana-premio-estatal",
  },
  {
    title: "Nuestro Compositor Es Reconocido En Berklee",
    date: "28 de Agosto de 2023",
    image: BlogPostImage4,
    url: "/blog/reconocimientos/nuestro-compositor-es-reconocido-en-berklee",
  },
  {
    title: "Premio Internacional A Mejor Soundtrack",
    date: "24 de Marzo de 2023",
    image: BlogPostImage5,
    url: "/blog/reconocimientos/premio-internacional-a-mejor-soundtrack",
  },
];
