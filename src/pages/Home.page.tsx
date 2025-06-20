import SectionBlock from "../components/SectionBlock";

const HomePage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenue sur le projet Animation UI</h1>
      <p>
        Ce projet démontre l'utilisation de la librairie <b>GSAP</b> pour créer
        des animations interactives dans une interface React. Découvrez
        différentes animations et leur intégration dans des composants modernes.
      </p>
      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <SectionBlock
          title="Véhicules en Mouvement"
          description="Animation GSAP.to simulant des véhicules en déplacement."
          route="/gsp-to"
          animationType="vehicle"
        />
        {/* <SectionBlock
          title="Effets de Texte"
          description="Animations de texte dynamiques avec GSAP."
          route="/text-effects"
          animationType="text"
        />
        <SectionBlock
          title="Transitions de Pages"
          description="Transitions fluides entre les pages."
          route="/page-transitions"
          animationType="page"
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
