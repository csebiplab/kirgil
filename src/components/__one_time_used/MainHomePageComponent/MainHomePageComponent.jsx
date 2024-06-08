
import HomeBanner from "./HomeBanner/HomeBanner";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback"
import Review from "./Review/Review";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import ChoosesUs from "./ChoosesUs/ChoosesUs";
import AboutUs from "./AboutUs/AboutUs";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import WorkWithUs from "./WorkWithUs/WorkWithUs";
import ExteriorContractors from "./ExteriorContractors/ExteriorContractors";
import ReadyToWork from "./ReadyToWork/ReadyToWork";
import FaqSection from "./FaqSection/FaqSection";
import InstallationCompany from "./InstallationCompany/InstallationCompany";
import RepairCompany from "./RepairCompany/RepairCompany";
import ProjectDesigns from "./ProjectDesigns/ProjectDesigns";
import Experienced from "./Experienced/Experienced";
import Professional from "./Professional/Professional";
import BestStuccoPainting from "./BestStuccoPainting/BestStuccoPainting";
import SelectionPreparation from "./SelectionPreparation/SelectionPreparation";

const MainHomePageComponent = () => {
  return (
    <div>

      <section>
        <HomeBanner />
      </section>

      <section>
        <PartnerNRatings />
      </section>

      <section>
        <AboutUs/>
      </section>

      <section>
        <InstallationCompany/>
      </section>

      <section>
        <Experienced/>
      </section>

      <section>
        <ExteriorContractors/>
      </section>

      <section>
        <Professional/>
      </section>

      <section>
        <RepairCompany/>
      </section>

      <section>
        <BestStuccoPainting/>
      </section>

      <section>
        <SelectionPreparation/>
      </section>

      <section>
        <ProjectDesigns/>
      </section>

      <section>
        <ProjectGallery/>
      </section>

      <section>
        <WorkingProcess/>
      </section>

      <section>
        <Review/>
      </section>

      {/* <section>
        <ChoosesUs/>
      </section>

      <section>
        <WorkWithUs/>
      </section> */}

      <section>
        <FaqSection/>
      </section>

      <section>
        <ReadyToWork/>
      </section>

      <section>
        <GiveUsFeedback/>
      </section>

      
    </div>
  );
};

export default MainHomePageComponent;
