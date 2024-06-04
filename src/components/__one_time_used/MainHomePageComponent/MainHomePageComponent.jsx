
import HomeBanner from "./HomeBanner/HomeBanner";
import PartnerNRatings from "./PartnerNRatings/PartnerNRatings";
import GiveUsFeedback from "./GiveUsFeedback/GiveUsFeedback"
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import ProjectUs from "./ProjectUs/ProjectUs";
import BestServices from "./BestServices/BestServices";
import OurExperience from "./OurExperience/OurExperience";
import Quality from "./Quality/Quality";
import TrustUs from "./TrustUs/TrustUs";
import GeneralContractors from "./GeneralContractors/GeneralContractors";
import KeyServices from "./KeyServices/KeyServices";
import Services from "./Services/Services";
import Review from "./Review/Review";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import ChoosetheRight from "./ChoosetheRight/ChoosetheRight";
import AboutUs from "./AboutUs/AboutUs";
import WorkingProcess from "./WorkingProcess/WorkingProcess";
import WorkWithUs from "./WorkWithUs/WorkWithUs";
import CostBudgeting from "./CostBudgeting/CostBudgeting";
import ExteriorContractors from "./ExteriorContractors/ExteriorContractors";

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
        <ExteriorContractors/>
      </section>
      <section>
        <WorkWithUs/>
      </section>

      {/* <section>
        <BestServices/>
      </section>

      

      <section>
        <KeyServices/>
      </section>

      <section>
        <Services/>
      </section>

      <section>
        <OurExperience/>
      </section>

      <section>
        <ProjectGallery/>
      </section>

      <section>
        <GeneralContractors/>
      </section>

      <section>
        <WorkingProcess/>
      </section>

      <section>
        <Quality/>
      </section>

      <section>
        <WorkWithUs/>
      </section>

      <section>
        <CostBudgeting/>
      </section>

      <section>
        <TrustUs/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <ChoosetheRight/>
      </section>

      <section>
        <ProjectUs/>
      </section>

      <section>
        <OurServiceAreas/>
      </section>

      <section>
        <GiveUsFeedback/>
      </section> */}
      
    </div>
  );
};

export default MainHomePageComponent;
