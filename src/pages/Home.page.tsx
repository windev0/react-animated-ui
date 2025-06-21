import SectionBlock from "../components/SectionBlock";

const HomePage = () => {
  return (
    <div className="p-5 ">
      <h1 className="mb-3 pt-6 text-blue-100 text-2xl">
        Bienvenue sur le projet Animation UI
      </h1>
      <div className="mb-4">
        <p>
          Ce projet démontre l'utilisation de la librairie <b>GSAP</b> pour
          créer des animations interactives dans une interface React. Découvrez
          différentes animations et leur intégration dans des composants
          modernes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SectionBlock
          title="Véhicules en Mouvement"
          description="Animation GSAP.to simulant des véhicules en déplacement."
          route="/gsp-to"
          animationType="vehicle"
        />
        <SectionBlock
          title="Effets de Texte"
          description="Animations de texte dynamiques avec GSAP."
          route="/hero-txt"
          animationType="text"
        />
        <SectionBlock
          title="Liqueur de Fehling"
          description="Simulation de la mise en évidence des sucres."
          route="/fehling-simulation"
          animationType="fehling-simulation"
        />
      </div>
    </div>
  );
};

export default HomePage;
