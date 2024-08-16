import AboutUs from "./AboutUs";
import Hero from "./Hero";
import MedicalTourismSYR from "./MedicalTourismSYR";
import Quality from "./Quality"
import Services from "./Services";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <MedicalTourismSYR/>
      <Quality/>
      <Services/>
      
    </div>
  );
}
