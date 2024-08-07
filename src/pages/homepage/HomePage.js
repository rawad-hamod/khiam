import AboutUs from "./AboutUs";
import HomePageCarousel from "./HomePageCarousel";
import MedicalTourismSYR from "./MedicalTourismSYR";
import Quality from "./Quality"
import Services from "./Services";

export default function HomePage() {
  return (
    <div>
      <HomePageCarousel />
      <AboutUs />
      <MedicalTourismSYR/>
      <Quality/>
      <Services/>
      
    </div>
  );
}
