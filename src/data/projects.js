// Añade las imágenes en public/images/ y completa image / gallery[].image.
// Las galerías conservan huecos editables hasta incorporar las fotografías definitivas.
export const projects = [
  {
    slug: "rs-trainers",
    title: "RS Trainers",
    categoryKey: "interior",
    category: { es: "Interiorismo", va: "Interiorisme" },
    location: { es: "", va: "" },
    year: "2023",
    image: "",
    description: {
      es: "De una planta baja con muy poca luz a un espacio preciso, eficiente y diseñado a partir de las necesidades del cliente, el lugar y la obra.",
      va: "D'una planta baixa amb molt poca llum a un espai precís, eficient i dissenyat a partir de les necessitats del client, el lloc i l'obra.",
    },
    story: {
      es: [
        "El proyecto parte de una planta baja con muy poca luz. La intervención busca obtener un espacio muy controlado mediante recursos sencillos y eficientes, respondiendo a tres preguntas: quién lo utilizará, dónde se encuentra y cómo se construye.",
        "Una masa de bloques de hormigón texturizados organiza el espacio y genera los baños y los boxes. Frente a esta presencia contundente, los detalles elaborados artesanalmente aportan precisión y cercanía.",
        "La intervención separa al usuario de la preexistencia y establece una línea horizontal a 2,40 metros de altura. A partir de ella, el espacio se tiñe de negro absoluto: una operación que ordena la percepción y da identidad al conjunto.",
        "RS Trainers formó parte de la Muestra de Arquitectura Reciente del CTAV, que recoge proyectos de 2023, 2024 y 2025. La exposición itinerante pudo visitarse en València, Xàtiva, Gandia y Ontinyent, en el Centre Cultural Caixa Ontinyent.",
      ],
      va: [
        "El projecte parteix d'una planta baixa amb molt poca llum. La intervenció busca obtindre un espai molt controlat amb recursos senzills i eficients, responent a tres preguntes: qui l'utilitzarà, on es troba i com es construeix.",
        "Una massa de blocs de formigó texturitzats organitza l'espai i genera els banys i els boxs. Enfront d'aquesta presència contundent, els detalls elaborats artesanalment aporten precisió i proximitat.",
        "La intervenció allunya l'usuari de la preexistència i estableix una línia horitzontal a 2,40 metres d'altura. A partir d'ella, l'espai es tenyeix de negre absolut: una operació que ordena la percepció i dona identitat al conjunt.",
        "RS Trainers va formar part de la Mostra d'Arquitectura Recent del CTAV, que recull projectes de 2023, 2024 i 2025. L'exposició itinerant es va poder visitar a València, Xàtiva, Gandia i Ontinyent, al Centre Cultural Caixa Ontinyent.",
      ],
    },
    facts: [
      { label: { es: "Cliente", va: "Client" }, value: "Ricard Sanfélix Wellness" },
      { label: { es: "Proyecto de marca", va: "Projecte de marca" }, value: "Studio Malmö" },
      { label: { es: "Año", va: "Any" }, value: "2023" },
      { label: { es: "Muestra", va: "Mostra" }, value: { es: "CTAV · Arquitectura reciente", va: "CTAV · Arquitectura recent" } },
    ],
    process: [
      { title: { es: "Leer lo existente", va: "Llegir allò existent" }, text: { es: "Partir de una planta baja con muy poca luz y comprender las condiciones del espacio.", va: "Partir d'una planta baixa amb molt poca llum i comprendre les condicions de l'espai." } },
      { title: { es: "Ordenar con materia", va: "Ordenar amb matèria" }, text: { es: "Usar bloques de hormigón texturizados para distribuir los usos y formar los boxes y baños.", va: "Utilitzar blocs de formigó texturitzats per a distribuir els usos i formar els boxs i els banys." } },
      { title: { es: "Trazar un límite", va: "Traçar un límit" }, text: { es: "Marcar una línea a 2,40 metros para separar la intervención de la preexistencia.", va: "Marcar una línia a 2,40 metres per a separar la intervenció de la preexistència." } },
      { title: { es: "Cuidar el contraste", va: "Cuidar el contrast" }, text: { es: "Combinar detalles artesanales con el negro absoluto que define la identidad del espacio.", va: "Combinar detalls artesanals amb el negre absolut que defineix la identitat de l'espai." } },
    ],
    gallery: [
      { image: "", caption: { es: "La planta baja antes de la intervención", va: "La planta baixa abans de la intervenció" }, shape: "wide" },
      { image: "", caption: { es: "Bloques de hormigón texturizados organizan el espacio", va: "Blocs de formigó texturitzats organitzen l'espai" }, shape: "tall" },
      { image: "", caption: { es: "Contraste entre materialidad y detalles artesanales", va: "Contrast entre materialitat i detalls artesanals" }, shape: "square" },
      { image: "", caption: { es: "La línea de los 2,40 metros y el negro absoluto", va: "La línia dels 2,40 metres i el negre absolut" }, shape: "wide" },
    ],
    credits: [
      { label: { es: "Cliente", va: "Client" }, value: "Ricard Sanfélix Wellness", href: "https://www.instagram.com/ricard_sanfelix_wellness/" },
      { label: { es: "Identidad de marca", va: "Identitat de marca" }, value: "Studio Malmö", href: "https://www.instagram.com/studio_malmo/" },
      { label: { es: "Muestra de arquitectura", va: "Mostra d'arquitectura" }, value: "CTAV · Arquitectos de Valencia", href: "https://www.instagram.com/arquitectosdevalencia/" },
    ],
  },
  {
    slug: "la-bassa-de-dalt",
    title: "La Bassa de Dalt",
    categoryKey: "urban",
    category: { es: "Regeneración urbana", va: "Regeneració urbana" },
    location: { es: "Argelita, Castellón", va: "Argelita, Castelló" },
    year: "",
    award: { es: "Premio 5M · IX edición del CRU", va: "Premi 5M · IX edició del CRU" },
    image: "",
    description: {
      es: "Una propuesta para reconectar Argelita con el río y su entorno mediante gestos tranquilos, atentos al lugar y a la vida del municipio.",
      va: "Una proposta per a reconnectar Argelita amb el riu i el seu entorn amb gestos tranquils, atents al lloc i a la vida del municipi.",
    },
    story: {
      es: [
        "La propuesta nace de haber vivido el espacio: de pasear por las calles de Argelita y conversar con sus vecinos para comprender la realidad social del municipio. Esa mirada permitió reconocer un pueblo desconectado del río, pese a que es uno de sus lugares más visitados cuando llega el buen tiempo.",
        "También aparecieron otras condiciones: un tejido introspectivo de calles estrechas, una relación limitada con el entorno y una vida comunitaria dispersa. El proyecto responde a estas necesidades con una intervención que busca conectar y aportar resiliencia.",
        "La propuesta es tranquila, como el murmullo del río que inspira sus trazos. Busca reencontrarse con la morfología histórica del territorio y responder con gestos mínimos capaces de producir resultados amplios.",
        "La Bassa de Dalt recibió el Premio 5M de la novena edición del Concurso de Regeneración Urbana (CRU), promovido por la Diputación de Castellón.",
      ],
      va: [
        "La proposta naix d'haver viscut l'espai: de passejar pels carrers d'Argelita i conversar amb els seus veïns per a comprendre la realitat social del municipi. Aquesta mirada va permetre reconéixer un poble desconnectat del riu, tot i que és un dels seus llocs més visitats quan arriba el bon oratge.",
        "També van aparéixer altres condicions: un teixit introspectiu de carrers estrets, una relació limitada amb l'entorn i una vida comunitària disgregada. El projecte respon a aquestes necessitats amb una intervenció que busca connectar i aportar resiliència.",
        "La proposta és tranquil·la, com la remor del riu que inspira els seus traços. Busca retrobar-se amb la morfologia històrica del territori i respondre amb gestos mínims capaços de produir resultats amplis.",
        "La Bassa de Dalt va rebre el Premi 5M de la novena edició del Concurs de Regeneració Urbana (CRU), promogut per la Diputació de Castelló.",
      ],
    },
    facts: [
      { label: { es: "Localización", va: "Localització" }, value: { es: "Argelita, Castellón", va: "Argelita, Castelló" } },
      { label: { es: "Distinción", va: "Distinció" }, value: { es: "Premio 5M · CRU", va: "Premi 5M · CRU" } },
      { label: { es: "Promotor", va: "Promotor" }, value: { es: "Diputación de Castellón", va: "Diputació de Castelló" } },
      { label: { es: "En colaboración", va: "En col·laboració" }, value: "Oscar Marza" },
    ],
    process: [
      { title: { es: "Conocer Argelita", va: "Conéixer Argelita" }, text: { es: "Recorrer el municipio, visitar distintos lugares y conversar con sus vecinos.", va: "Recórrer el municipi, visitar diversos llocs i conversar amb els seus veïns." } },
      { title: { es: "Encontrar el lugar", va: "Trobar el lloc" }, text: { es: "La visita a Argelita permite reconocer el vínculo con el río y las condiciones del entorno.", va: "La visita a Argelita permet reconéixer el vincle amb el riu i les condicions de l'entorn." } },
      { title: { es: "Trazar la propuesta", va: "Traçar la proposta" }, text: { es: "Las primeras trazas buscan reconectar el pueblo con el río y su paisaje mediante gestos mínimos.", va: "Les primeres traces busquen reconnectar el poble amb el riu i el seu paisatge amb gestos mínims." } },
      { title: { es: "Compartir el proyecto", va: "Compartir el projecte" }, text: { es: "La propuesta se presenta al Concurso de Regeneración Urbana y recibe el Premio 5M.", va: "La proposta es presenta al Concurs de Regeneració Urbana i rep el Premi 5M." } },
    ],
    gallery: [
      { image: "", caption: { es: "Argelita y la relación del pueblo con el río", va: "Argelita i la relació del poble amb el riu" }, shape: "wide" },
      { image: "", caption: { es: "Recorridos y primeras trazas del proyecto", va: "Recorreguts i primeres traces del projecte" }, shape: "tall" },
      { image: "", caption: { es: "Una propuesta para reconectar el tejido urbano", va: "Una proposta per a reconnectar el teixit urbà" }, shape: "square" },
      { image: "", caption: { es: "Premio 5M de la novena edición del CRU", va: "Premi 5M de la novena edició del CRU" }, shape: "wide" },
    ],
    credits: [
      { label: { es: "En colaboración", va: "En col·laboració" }, value: "Oscar Marza", href: "https://www.instagram.com/oscarmarza/" },
      { label: { es: "Concurso", va: "Concurs" }, value: { es: "CRU · Diputación de Castellón", va: "CRU · Diputació de Castelló" }, href: "https://www.instagram.com/cru_concurso/" },
      { label: { es: "Promotor", va: "Promotor" }, value: { es: "Diputación de Castellón", va: "Diputació de Castelló" }, href: "https://www.instagram.com/dipcas/" },
      { label: { es: "Municipio", va: "Municipi" }, value: { es: "Ayuntamiento de Argelita", va: "Ajuntament d'Argelita" }, href: "https://www.instagram.com/ayuntamientodeargelita/" },
    ],
  },
];
