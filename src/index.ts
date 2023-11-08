//create simple express app
import express from "express";
const app = express();
const port = 3000;

//create a route for the app
app.get("/demo", (req, res) => {
  res.send({
    id: 123,
    id_api: null,
    nombre: "SHOCK",
    descripcion_corta:
      "Con un diseño único para que rodar por la ciudad o sus alrededores sea toda una aventura, sin preocuparte por las largas pendientes, las curvas cerradas o los caminos de trocha.",
    url_img_header: null,
    modelo: 2023,
    url_foto: "/uploads/catalogo-motos/shok.png",
    precio_moto: 3999000,
    precio_papeles: 877000,
    id_estilo: 1,
    cilindraje: 113,
    tipo_motor: "4 tiempos, monocilíndrico, SOHC",
    potencia_maxima_hp: 8.71,
    potencia_maxima_rpm: 8000,
    torque_maximo_nm: 9,
    torque_maximo_rpm: 5500,
    relacion_compresion: "9.3 : 1",
    id_tipo_transmision: 2,
    rueda_delantera: "2,50 - R17",
    rueda_trasera: "2,75 - R17",
    dimension_total: "1850 X 650 X 1070",
    distancia_entre_ejes: "1240 mm",
    peso: 89,
    id_freno_delantero: 1,
    id_freno_trasero: 3,
    id_suspension_delantera: 1,
    id_suspension_trasera: 4,
    id_arranque: 1,
    certificacion: "EURO III",
    url_fotos_360: "shock",
    mostrar_ocultar: true,
    slug_moto: "shock",
    seo_titulo: "SHOCK",
    seo_descripcion:
      "Con un diseño único para que rodar por la ciudad o sus alrededores sea toda una aventura.",
    canAdvance: true,
    createdAt: "2021-05-21T10:00:00.000Z",
    updatedAt: "2023-10-03T15:08:16.000Z",
    id_marca: 8,
    MotosColores: [
      {
        id: 355,
        url_foto_color_peque:
          "/uploads/catalogo-motos/colores/peque/victoryshock-verde.jpg",
        url_foto_color_grande:
          "/uploads/catalogo-motos/colores/grande/victoryshock-verde.jpg",
        id_moto: 123,
        id_color: 6,
        Colore: {
          id: 6,
          nombre_color: "Verde",
          codigo_color: "#82ee53",
          slug: "verde",
          state: true,
        },
      },
      {
        id: 356,
        url_foto_color_peque:
          "/uploads/catalogo-motos/colores/peque/victoryshock-rojo.jpg",
        url_foto_color_grande:
          "/uploads/catalogo-motos/colores/grande/victoryshock-rojo.jpg",
        id_moto: 123,
        id_color: 2,
        Colore: {
          id: 2,
          nombre_color: "Rojo",
          codigo_color: "#dd3240",
          slug: "rojo",
          state: true,
        },
      },
    ],
    MotosMarca: {
      id: 8,
      nombre_marca: "Victory",
      slug: "victory",
      state: true,
    },
    MotosTransmision: {
      id: 2,
      nombre_transmision: "Semiautomática",
      tipo_filtro: "semiautomatica",
      slug: "semiautomatica",
    },
    MotosTipoArranque: {
      id: 1,
      nombre_tipo_arranque: "Eléctrico y de pedal",
      slug: "electrico-y-pedal",
      state: true,
    },
    MotosEstilo: {
      id: 1,
      nombre_estilo: "Auto y semiautomáticas",
      slug: "auto-y-semiautomaticas",
      state: true,
    },
    MotosFrenoDelantero: {
      id: 1,
      nombre_freno_delantero: "Disco",
      slug: "disco",
      state: true,
    },
    MotosFrenoTrasero: {
      id: 3,
      nombre_freno_trasero: "Campana",
      slug: "campana",
      state: true,
    },
    MotosSuspensionDelantera: {
      id: 1,
      nombre_suspension_delantera: "Telescópica",
      slug: "telescopica",
      state: true,
    },
    MotosSuspensionTrasera: {
      id: 4,
      nombre_suspension_trasera: "Doble Amortiguador",
      slug: "doble-amortiguador",
      state: true,
    },
    MotosGaleria: [
      {
        id: 562,
        id_moto: 123,
        descripcion: "f1",
        url_foto_peque:
          "/uploads/catalogo-motos/galeria/peque/victoryshock-1.jpg",
        url_foto_grande:
          "/uploads/catalogo-motos/galeria/grande/victoryshock-1.jpg",
        orden: 1,
      },
      {
        id: 563,
        id_moto: 123,
        descripcion: "f2",
        url_foto_peque:
          "/uploads/catalogo-motos/galeria/peque/victoryshock-2.jpg",
        url_foto_grande:
          "/uploads/catalogo-motos/galeria/grande/victoryshock-2.jpg",
        orden: 2,
      },
      {
        id: 564,
        id_moto: 123,
        descripcion: "f3",
        url_foto_peque:
          "/uploads/catalogo-motos/galeria/peque/victoryshock-3.jpg",
        url_foto_grande:
          "/uploads/catalogo-motos/galeria/grande/victoryshock-3.jpg",
        orden: 3,
      },
      {
        id: 565,
        id_moto: 123,
        descripcion: "f4",
        url_foto_peque:
          "/uploads/catalogo-motos/galeria/peque/victoryshock-4.jpg",
        url_foto_grande:
          "/uploads/catalogo-motos/galeria/grande/victoryshock-4.jpg",
        orden: 4,
      },
      {
        id: 566,
        id_moto: 123,
        descripcion: "f5",
        url_foto_peque:
          "/uploads/catalogo-motos/galeria/peque/victoryshock-5.jpg",
        url_foto_grande:
          "/uploads/catalogo-motos/galeria/grande/victoryshock-5.jpg",
        orden: 5,
      },
    ],
  });
});

//start server on the specified port and binding host
app.listen(port, () => console.log(`App listening on port ${port}!`));
