import React, { useEffect, useState } from "react";
import { projects } from "./data/projects.js";

const translations = {
  es: {
    home: "Inicio",
    projects: "Proyectos",
    studio: "Estudio",
    contact: "Contacto",
    instagram: "Instagram",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    navigation: "Navegación principal",
    footerNavigation: "Enlaces de pie de página",
    imagePlaceholder: "Espacio para imagen: {label}",
    architecture: "Estudio de arquitectura",
    heroImageLabel: "Fotografía de arquitectura",
    heroDescription: "Diseñamos desde el lugar, las personas y la manera de vivir. Cada proyecto, una nueva conversación.",
    viewProjects: "Descubre nuestros proyectos",
    selectedWork: "Obra seleccionada",
    allProjects: "Ver todos los proyectos",
    manifestoEyebrow: "Una manera de entender",
    manifestoTitleOne: "La vida es juntarse",
    manifestoTitleTwo: "y hacer.",
    manifestoDescription: "Pensamos la arquitectura como una conversación: con quienes la habitan, con el lugar y con el tiempo. Escuchamos, interpretamos y damos forma a espacios que importan.",
    knowStudio: "Conoce el estudio",
    nextIdea: "Nuevas ideas. Nuevas formas. Nuevas arquitecturas.",
    shallWeTalk: "¿Hablamos?",
    processEyebrow: "Una forma de trabajar",
    processTitle: "Cada proyecto empieza por entender.",
    client: "Quién lo habita",
    clientText: "Escuchamos a las personas y entendemos sus necesidades antes de dibujar.",
    place: "Dónde ocurre",
    placeText: "Leemos el contexto, la memoria y las posibilidades de cada lugar.",
    making: "Cómo se construye",
    makingText: "Buscamos soluciones claras, cuidadas y coherentes con la obra.",
    awardTitle: "Una propuesta reconocida.",
    awardText: "La Bassa de Dalt recibe el Premio 5M de la novena edición del CRU, promovido por la Diputación de Castellón.",
    readProject: "Descubre el proyecto",
    projectEyebrow: "Selección de obra",
    projectsTitleFirst: "Arquitecturas",
    projectsTitleSecond: "en proceso.",
    projectsIntro: "Proyectos que nacen de escuchar cada lugar, cada historia y cada forma de habitar.",
    filterLabel: "Filtrar por",
    all: "Todos",
    interior: "Interiorismo",
    urban: "Regeneración urbana",
    sampleNote: "La selección irá creciendo con nuevos proyectos de TRESMES.",
    backProjects: "← Todos los proyectos",
    designYear: "Año",
    projectCategory: "Tipo de proyecto",
    development: "El proyecto",
    projectSubheading: "de la idea a la obra.",
    galleryEyebrow: "En imágenes",
    galleryTitle: "Espacios, ideas y proceso.",
    projectProcessTitle: "Un recorrido compartido.",
    credits: "Colaboraciones",
    nextProject: "Siguiente proyecto",
    imageCaption: "Fotografía pendiente de añadir",
    studyName: "TRESMES · Ontinyent",
    studioTitleFirst: "La vida es juntarse",
    studioTitleSecond: "y hacer.",
    studioIntro: "Nuevas ideas, nuevas formas, nuevas referencias y nuevas arquitecturas. Somos un estudio que entiende el proyecto como un trabajo compartido.",
    studioEyebrow: "Una práctica cercana",
    studioHeading: "Pensar, escuchar y hacer.",
    studioParagraphOne: "TRESMES es un estudio de arquitectura con sede en Ontinyent. Trabajamos desde la conversación y la colaboración, entendiendo cada encargo como una oportunidad para responder a las necesidades de las personas y a las condiciones concretas del lugar.",
    studioParagraphTwo: "Nos interesa una arquitectura que no parte de una fórmula. Observamos, preguntamos, probamos y construimos una respuesta propia para cada proyecto. La luz, los materiales, la memoria del sitio y la manera de utilizarlo forman parte de la misma conversación.",
    studioParagraphThree: "Acompañamos el proceso desde las primeras ideas hasta la obra: buscamos soluciones sencillas y eficaces, prestamos atención a cómo se hacen y cuidamos los detalles que dan carácter a cada espacio.",
    studioImages: "El estudio en proceso",
    studioImageCaptions: ["Mirar el lugar", "Compartir las ideas", "Dar forma al proyecto"],
    valuesEyebrow: "Lo que nos guía",
    values: ["Escuchar", "Interpretar", "Construir"],
    mapEyebrow: "Dónde estamos",
    mapHeading: "En Ontinyent.",
    mapText: "El estudio está en Ontinyent, en la comarca de la Vall d'Albaida. El mapa señala el municipio; no representa una dirección exacta del estudio.",
    mapLink: "Abrir mapa",
    mapTitle: "Mapa de Ontinyent, Valencia",
    contactEyebrow: "Cuéntanos tu idea",
    contactTitleOne: "Una nueva idea",
    contactTitleTwo: "empieza aquí.",
    contactIntro: "¿Tienes un proyecto en mente? Nos encantará escucharte.",
    writeToUs: "Escríbenos",
    emailPlaceholder: "Dirección de correo de muestra. Sustitúyela por el contacto oficial de TRESMES antes de publicar.",
    studioLocation: "Estudio",
    locationName: "Ontinyent, Valencia",
    services: "Ámbitos de trabajo",
    serviceList: "Arquitectura · Interiorismo · Regeneración urbana",
    contactFootnote: "Nuevas arquitecturas. Nuevos lugares para vivir.",
    haveAProject: "¿Tienes un proyecto?",
    bannerTitle: "Hablemos de hacer.",
    tellUs: "Cuéntanos tu idea",
    notFound: "Este espacio está vacío.",
    backHome: "Volver al inicio",
    footerTagline: "Nuevas ideas. Nuevas formas.\nNuevas arquitecturas.",
    esLabel: "Castellano",
    vaLabel: "Valenciano",
    language: "Idioma",
  },
  va: {
    home: "Inici",
    projects: "Projectes",
    studio: "Estudi",
    contact: "Contacte",
    instagram: "Instagram",
    menuOpen: "Obrir menú",
    menuClose: "Tancar menú",
    navigation: "Navegació principal",
    footerNavigation: "Enllaços del peu de pàgina",
    imagePlaceholder: "Espai per a imatge: {label}",
    architecture: "Estudi d'arquitectura",
    heroImageLabel: "Fotografia d'arquitectura",
    heroDescription: "Dissenyem des del lloc, les persones i la manera de viure. Cada projecte, una nova conversa.",
    viewProjects: "Descobreix els nostres projectes",
    selectedWork: "Obra seleccionada",
    allProjects: "Veure tots els projectes",
    manifestoEyebrow: "Una manera d'entendre",
    manifestoTitleOne: "La vida és ajuntar-se",
    manifestoTitleTwo: "i fer.",
    manifestoDescription: "Pensem l'arquitectura com una conversa: amb qui l'habita, amb el lloc i amb el temps. Escoltem, interpretem i donem forma a espais que importen.",
    knowStudio: "Coneix l'estudi",
    nextIdea: "Noves idees. Noves formes. Noves arquitectures.",
    shallWeTalk: "En parlem?",
    processEyebrow: "Una manera de treballar",
    processTitle: "Cada projecte comença per comprendre.",
    client: "Qui l'habita",
    clientText: "Escoltem les persones i entenem les seues necessitats abans de dibuixar.",
    place: "On passa",
    placeText: "Llegim el context, la memòria i les possibilitats de cada lloc.",
    making: "Com es construeix",
    makingText: "Busquem solucions clares, cuidades i coherents amb l'obra.",
    awardTitle: "Una proposta reconeguda.",
    awardText: "La Bassa de Dalt rep el Premi 5M de la novena edició del CRU, promogut per la Diputació de Castelló.",
    readProject: "Descobreix el projecte",
    projectEyebrow: "Selecció d'obra",
    projectsTitleFirst: "Arquitectures",
    projectsTitleSecond: "en procés.",
    projectsIntro: "Projectes que naixen d'escoltar cada lloc, cada història i cada manera d'habitar.",
    filterLabel: "Filtrar per",
    all: "Tots",
    interior: "Interiorisme",
    urban: "Regeneració urbana",
    sampleNote: "La selecció creixerà amb nous projectes de TRESMES.",
    backProjects: "← Tots els projectes",
    designYear: "Any",
    projectCategory: "Tipus de projecte",
    development: "El projecte",
    projectSubheading: "de la idea a l'obra.",
    galleryEyebrow: "En imatges",
    galleryTitle: "Espais, idees i procés.",
    projectProcessTitle: "Un recorregut compartit.",
    credits: "Col·laboracions",
    nextProject: "Projecte següent",
    imageCaption: "Fotografia pendent d'afegir",
    studyName: "TRESMES · Ontinyent",
    studioTitleFirst: "La vida és ajuntar-se",
    studioTitleSecond: "i fer.",
    studioIntro: "Noves idees, noves formes, noves referències i noves arquitectures. Som un estudi que entén el projecte com un treball compartit.",
    studioEyebrow: "Una pràctica pròxima",
    studioHeading: "Pensar, escoltar i fer.",
    studioParagraphOne: "TRESMES és un estudi d'arquitectura amb seu a Ontinyent. Treballem des de la conversa i la col·laboració, entenent cada encàrrec com una oportunitat per a respondre a les necessitats de les persones i a les condicions concretes del lloc.",
    studioParagraphTwo: "Ens interessa una arquitectura que no parteix d'una fórmula. Observem, preguntem, provem i construïm una resposta pròpia per a cada projecte. La llum, els materials, la memòria del lloc i la manera d'utilitzar-lo formen part de la mateixa conversa.",
    studioParagraphThree: "Acompanyem el procés des de les primeres idees fins a l'obra: busquem solucions senzilles i eficaces, parem atenció a com es fan i cuidem els detalls que donen caràcter a cada espai.",
    studioImages: "L'estudi en procés",
    studioImageCaptions: ["Mirar el lloc", "Compartir les idees", "Donar forma al projecte"],
    valuesEyebrow: "Allò que ens guia",
    values: ["Escoltar", "Interpretar", "Construir"],
    mapEyebrow: "On som",
    mapHeading: "A Ontinyent.",
    mapText: "L'estudi és a Ontinyent, a la comarca de la Vall d'Albaida. El mapa assenyala el municipi; no representa una adreça exacta de l'estudi.",
    mapLink: "Obrir mapa",
    mapTitle: "Mapa d'Ontinyent, València",
    contactEyebrow: "Conta'ns la teua idea",
    contactTitleOne: "Una nova idea",
    contactTitleTwo: "comença ací.",
    contactIntro: "Tens un projecte en ment? Ens encantarà escoltar-te.",
    writeToUs: "Escriu-nos",
    emailPlaceholder: "Adreça de correu de mostra. Substitueix-la pel contacte oficial de TRESMES abans de publicar.",
    studioLocation: "Estudi",
    locationName: "Ontinyent, València",
    services: "Àmbits de treball",
    serviceList: "Arquitectura · Interiorisme · Regeneració urbana",
    contactFootnote: "Noves arquitectures. Nous llocs per a viure.",
    haveAProject: "Tens un projecte?",
    bannerTitle: "En parlem i fem.",
    tellUs: "Conta'ns la teua idea",
    notFound: "Aquest espai està buit.",
    backHome: "Tornar a l'inici",
    footerTagline: "Noves idees. Noves formes.\nNoves arquitectures.",
    esLabel: "Castellà",
    vaLabel: "Valencià",
    language: "Idioma",
  },
};

const localize = (value, lang) =>
  typeof value === "string" ? value : value?.[lang] ?? "";

const getRoute = () => window.location.hash.replace(/^#/, "") || "/";

function Mark() {
  return <a className="brand-mark" href="#/" aria-label="TRESMES">tresmes</a>;
}

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function LanguageToggle({ lang, setLang, t }) {
  return (
    <div className="language-toggle" role="group" aria-label={t("language")}>
      <button type="button" aria-pressed={lang === "es"} className={lang === "es" ? "selected" : ""} onClick={() => setLang("es")}>ES</button>
      <span aria-hidden="true">/</span>
      <button type="button" aria-pressed={lang === "va"} className={lang === "va" ? "selected" : ""} onClick={() => setLang("va")}>VA</button>
    </div>
  );
}

function Header({ route, lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [route]);
  const links = [
    ["#/proyectos", t("projects"), "/proyectos"],
    ["#/estudio", t("studio"), "/estudio"],
    ["#/contacto", t("contact"), "/contacto"],
  ];

  return (
    <header className="site-header">
      <Mark />
      <button
        type="button"
        className={`menu-toggle${menuOpen ? " open" : ""}`}
        aria-label={menuOpen ? t("menuClose") : t("menuOpen")}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label={t("navigation")}>
        <a className={route === "/" ? "active" : ""} href="#/">{t("home")}</a>
        {links.map(([href, label, path]) => (
          <a className={route.startsWith(path) ? "active" : ""} href={href} key={path}>{label}</a>
        ))}
      </nav>
      <div className="header-tools">
        <LanguageToggle lang={lang} setLang={setLang} t={t} />
        <a className="header-instagram" href="https://www.instagram.com/tresmes.es/" target="_blank" rel="noreferrer">
          {t("instagram")} <Arrow diagonal />
        </a>
      </div>
    </header>
  );
}

function ImageFrame({ image, label, number = "01", className = "", caption, t }) {
  const description = label || t("imageCaption");
  return (
    <figure className={`image-frame ${className}${image ? " has-image" : ""}`}>
      {image ? (
        <img src={image} alt={description} loading="lazy" />
      ) : (
        <div className="image-placeholder" role="img" aria-label={t("imagePlaceholder").replace("{label}", description)}>
          <span className="frame-index">{number}</span>
          <span className="frame-name">{description}</span>
          <span className="frame-diagram" aria-hidden="true"><i /><i /><i /></span>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function Eyebrow({ children, number }) {
  return <span className="eyebrow">{number && <span className="eyebrow-number">{number}</span>}{children}</span>;
}

function ProjectCard({ project, index, lang, t, className = "" }) {
  return (
    <a className={`project-card ${className}`} href={`#/proyectos/${project.slug}`}>
      <ImageFrame image={project.image} label={project.title} number={String(index + 1).padStart(2, "0")} t={t} />
      <div className="project-meta">
        <div>
          <span className="project-type">{localize(project.category, lang)}{localize(project.location, lang) && <> <span>·</span> {localize(project.location, lang)}</>}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="project-year">{project.year || project.award && localize(project.award, lang)}<Arrow diagonal /></span>
      </div>
    </a>
  );
}

function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-image">
        <ImageFrame image="" label={t("heroImageLabel")} number="T." t={t} />
        <span className="hero-image-caption">{t("architecture")} · Ontinyent</span>
      </div>
      <div className="hero-copy">
        <Eyebrow number="01 / 05">{t("architecture")}</Eyebrow>
        <h1>{t("nextIdea").split(". ").map((line, index, list) => <React.Fragment key={line}>{line}{index < list.length - 1 ? "." : ""}{index < list.length - 1 && <br />}</React.Fragment>)}</h1>
        <p>{t("heroDescription")}</p>
        <a className="text-button" href="#/proyectos">{t("viewProjects")} <Arrow /></a>
        <span className="hero-aside">Ontinyent · Vall d&apos;Albaida</span>
      </div>
      <span className="hero-vertical">TRESMES · {t("architecture")}</span>
    </section>
  );
}

function HomePage({ lang, t }) {
  const trainers = projects.find((project) => project.slug === "rs-trainers");
  const bassa = projects.find((project) => project.slug === "la-bassa-de-dalt");
  return (
    <main>
      <Hero t={t} />
      <section className="home-projects section-pad">
        <div className="section-heading">
          <Eyebrow number="02 / 05">{t("selectedWork")}</Eyebrow>
          <a className="text-button" href="#/proyectos">{t("allProjects")} <Arrow /></a>
        </div>
        <div className="home-project-grid">
          {trainers && <ProjectCard project={trainers} index={0} lang={lang} t={t} className="home-card-tall" />}
          {bassa && <ProjectCard project={bassa} index={1} lang={lang} t={t} />}
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="process-heading">
          <Eyebrow number="03 / 05">{t("processEyebrow")}</Eyebrow>
          <h2>{t("processTitle")}</h2>
        </div>
        <div className="process-grid">
          {[["01", "client", "clientText"], ["02", "place", "placeText"], ["03", "making", "makingText"]].map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{t(title)}</h3><p>{t(copy)}</p></article>
          ))}
        </div>
      </section>
      <section className="award-feature">
        <div className="award-number">5M</div>
        <div className="award-copy">
          <Eyebrow number="04 / 05">CRU · {lang === "es" ? "Argelita" : "Argelita"}</Eyebrow>
          <h2>{t("awardTitle")}</h2>
          <p>{t("awardText")}</p>
          {bassa && <a className="text-button" href={`#/proyectos/${bassa.slug}`}>{t("readProject")} <Arrow /></a>}
        </div>
      </section>
      <section className="manifesto">
        <span className="manifesto-word" aria-hidden="true">tresmes</span>
        <div className="manifesto-copy">
          <Eyebrow number="05 / 05">{t("manifestoEyebrow")}</Eyebrow>
          <h2>{t("manifestoTitleOne")}<br /><span>{t("manifestoTitleTwo")}</span></h2>
          <p>{t("manifestoDescription")}</p>
          <a className="text-button" href="#/estudio">{t("knowStudio")} <Arrow /></a>
        </div>
      </section>
      <section className="closing-line section-pad">
        <Eyebrow>{t("nextIdea")}</Eyebrow>
        <a href="#/contacto">{t("shallWeTalk")} <Arrow diagonal /></a>
      </section>
    </main>
  );
}

function ProjectsPage({ lang, t }) {
  const [filter, setFilter] = useState("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.categoryKey === filter);
  const categories = [
    { id: "all", key: "all" },
    { id: "interior", key: "interior" },
    { id: "urban", key: "urban" },
  ];

  return (
    <main className="inner-page">
      <section className="page-title">
        <Eyebrow number="01 / PROYECTOS">{t("projectEyebrow")}</Eyebrow>
        <h1>{t("projectsTitleFirst")}<br /><span>{t("projectsTitleSecond")}</span></h1>
        <p>{t("projectsIntro")}</p>
      </section>
      <div className="filter-bar" aria-label={t("filterLabel")}>
        <span>{t("filterLabel")}</span>
        {categories.map(({ id, key }) => {
          const count = id === "all" ? projects.length : projects.filter((project) => project.categoryKey === id).length;
          return (
            <button type="button" key={id} className={filter === id ? "selected" : ""} aria-pressed={filter === id} onClick={() => setFilter(id)}>
              {t(key)}<sup>{count}</sup>
            </button>
          );
        })}
      </div>
      <section className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} lang={lang} t={t} />
        ))}
      </section>
      <p className="sample-note">{t("sampleNote")}</p>
      <ContactBanner t={t} />
    </main>
  );
}

function ProjectPage({ project, lang, t }) {
  if (!project) return <NotFound t={t} />;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const paragraphs = project.story[lang];
  return (
    <main className="inner-page project-detail">
      <a className="back-link" href="#/proyectos">{t("backProjects")}</a>
      <section className="detail-title">
        <div>
          <Eyebrow number={[project.year, localize(project.category, lang)].filter(Boolean).join(" · ") || t("projectCategory")}>
            {localize(project.location, lang)}
          </Eyebrow>
          <h1>{project.title}<span>.</span></h1>
          {project.award && <span className="award-chip">{localize(project.award, lang)}</span>}
        </div>
        <p>{localize(project.description, lang)}</p>
      </section>
      <ImageFrame image={project.image} label={project.title} number="T." className="detail-image" t={t} />
      <section className="detail-story">
        <div className="detail-facts">
          {project.facts.map((fact) => (
            <div key={`${localize(fact.label, lang)}-${localize(fact.value, lang)}`}>
              <span>{localize(fact.label, lang)}</span><b>{localize(fact.value, lang)}</b>
            </div>
          ))}
        </div>
        <div className="detail-text">
          <Eyebrow>{t("development")}</Eyebrow>
          <h2>{project.title}<br /><span>{t("projectSubheading")}</span></h2>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      {project.process?.length > 0 && (
        <section className="project-process">
          <div className="gallery-heading">
            <Eyebrow number="01 / 02">{t("development")}</Eyebrow>
            <h2>{t("projectProcessTitle")}</h2>
          </div>
          <div className="project-process-grid">
            {project.process.map((step, index) => (
              <article key={step.title[lang]}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title[lang]}</h3>
                <p>{step.text[lang]}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      <section className="project-gallery">
        <div className="gallery-heading">
          <Eyebrow number="02 / 02">{t("galleryEyebrow")}</Eyebrow>
          <h2>{t("galleryTitle")}</h2>
        </div>
        <div className="gallery-grid">
          {project.gallery.map((item, index) => (
            <ImageFrame
              key={item.caption[lang]}
              image={item.image}
              label={item.caption[lang]}
              caption={item.caption[lang]}
              number={String(index + 1).padStart(2, "0")}
              className={`gallery-image gallery-${item.shape}`}
              t={t}
            />
          ))}
        </div>
      </section>
      {project.credits?.length > 0 && (
        <section className="project-credits">
          <Eyebrow>{t("credits")}</Eyebrow>
          <div>{project.credits.map((credit) => (
            <div className="credit-row" key={`${localize(credit.label, lang)}-${localize(credit.value, lang)}`}>
              <span>{localize(credit.label, lang)}</span>
              {credit.href
                ? <a href={credit.href} target="_blank" rel="noreferrer">{localize(credit.value, lang)} <Arrow diagonal /></a>
                : <b>{localize(credit.value, lang)}</b>}
            </div>
          ))}</div>
        </section>
      )}
      <a className="next-project" href={`#/proyectos/${next.slug}`}><span>{t("nextProject")}</span><b>{next.title}<Arrow diagonal /></b></a>
    </main>
  );
}

function StudioPage({ lang, t }) {
  const captions = t("studioImageCaptions");
  const values = t("values");
  return (
    <main className="inner-page studio-page">
      <section className="page-title">
        <Eyebrow number="01 / ESTUDIO">{t("studyName")}</Eyebrow>
        <h1>{t("studioTitleFirst")}<br /><span>{t("studioTitleSecond")}</span></h1>
        <p>{t("studioIntro")}</p>
      </section>
      <section className="studio-feature">
        <ImageFrame image="" label={t("studioImages")} number="T." t={t} />
        <div>
          <Eyebrow number="02 / TRESMES">{t("studioEyebrow")}</Eyebrow>
          <h2>{t("studioHeading")}</h2>
          <p>{t("studioParagraphOne")}</p>
          <p>{t("studioParagraphTwo")}</p>
          <p>{t("studioParagraphThree")}</p>
        </div>
      </section>
      <section className="studio-gallery">
        <div className="gallery-heading"><Eyebrow number="03 / ESTUDIO">{t("studioImages")}</Eyebrow></div>
        <div className="studio-gallery-grid">
          {captions.map((caption, index) => <ImageFrame key={caption} image="" label={caption} caption={caption} number={`0${index + 1}`} t={t} />)}
        </div>
      </section>
      <section className="studio-principles">
        <Eyebrow number="04 / TRESMES">{t("valuesEyebrow")}</Eyebrow>
        <div>{values.map((value, index) => <h3 key={value}>{value}<span>0{index + 1}</span></h3>)}</div>
      </section>
      <section className="map-section">
        <div className="map-copy">
          <Eyebrow number="05 / ONTINYENT">{t("mapEyebrow")}</Eyebrow>
          <h2>{t("mapHeading")}</h2>
          <p>{t("mapText")}</p>
          <a className="text-button" href="https://maps.google.com/?q=Ontinyent%2C+Valencia%2C+Spain" target="_blank" rel="noreferrer">{t("mapLink")} <Arrow diagonal /></a>
        </div>
        <iframe
          title={t("mapTitle")}
          src="https://maps.google.com/maps?q=Ontinyent%2C%20Valencia%2C%20Spain&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <ContactBanner t={t} />
    </main>
  );
}

function ContactPage({ lang, t }) {
  return (
    <main className="inner-page contact-page">
      <section className="page-title">
        <Eyebrow number="01 / CONTACTO">{t("contactEyebrow")}</Eyebrow>
        <h1>{t("contactTitleOne")}<br /><span>{t("contactTitleTwo")}</span></h1>
        <p>{t("contactIntro")}</p>
      </section>
      <section className="contact-content">
        <div>
          <Eyebrow>{t("writeToUs")}</Eyebrow>
          <a className="contact-email" href="mailto:hola@tresmes.es">hola@tresmes.es <Arrow diagonal /></a>
          <p>{t("emailPlaceholder")}</p>
          <a className="text-button" href="https://www.instagram.com/tresmes.es/" target="_blank" rel="noreferrer">{t("instagram")} <Arrow diagonal /></a>
        </div>
        <div className="contact-side">
          <span>{t("studioLocation")}</span><p>{t("locationName")}</p>
          <span>{t("services")}</span><p>{t("serviceList")}</p>
        </div>
      </section>
      <div className="contact-footnote"><span>TRESMES · {t("contact")}</span><span>{t("contactFootnote")}</span></div>
    </main>
  );
}

function ContactBanner({ t }) {
  return (
    <section className="contact-banner">
      <Eyebrow number="03 / 03">{t("haveAProject")}</Eyebrow>
      <h2>{t("bannerTitle")}</h2>
      <a href="#/contacto">{t("tellUs")} <Arrow diagonal /></a>
      <span className="banner-brand">tresmes</span>
    </section>
  );
}

function NotFound({ t }) {
  return <main className="page-title"><Eyebrow>Error 404</Eyebrow><h1>{t("notFound")}</h1><a className="text-button" href="#/">{t("backHome")} <Arrow /></a></main>;
}

function Footer({ t }) {
  return (
    <footer className="site-footer">
      <Mark />
      <span className="footer-tagline">{t("footerTagline").split("\n").map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
      <nav aria-label={t("footerNavigation")}><a href="#/proyectos">{t("projects")}</a><a href="#/estudio">{t("studio")}</a><a href="#/contacto">{t("contact")}</a><a href="https://www.instagram.com/tresmes.es/" target="_blank" rel="noreferrer">{t("instagram")} ↗</a></nav>
      <span className="copyright">© {new Date().getFullYear()} TRESMES</span>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [lang, setLang] = useState("es");
  const t = (key) => translations[lang][key];

  useEffect(() => {
    const updateRoute = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "es" ? "es" : "ca";
  }, [lang]);

  let page;
  if (route === "/") page = <HomePage lang={lang} t={t} />;
  else if (route === "/proyectos") page = <ProjectsPage lang={lang} t={t} />;
  else if (route.startsWith("/proyectos/")) {
    const slug = decodeURIComponent(route.slice("/proyectos/".length));
    page = <ProjectPage project={projects.find((item) => item.slug === slug)} lang={lang} t={t} />;
  } else if (route === "/estudio") page = <StudioPage lang={lang} t={t} />;
  else if (route === "/contacto") page = <ContactPage lang={lang} t={t} />;
  else page = <NotFound t={t} />;

  return <><Header route={route} lang={lang} setLang={setLang} t={t} />{page}<Footer t={t} /></>;
}
