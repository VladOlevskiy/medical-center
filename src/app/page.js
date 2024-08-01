import Hero from "./(components)/Home/Hero.jsx";
import Info from "./(components)/Home/Info.jsx";
import Services from "./(components)/Home/Services.jsx";
import Advantages from "./(components)/Home/Advantages.jsx";

async function getProjects() {
  const res = await fetch("http://localhost:3000/servicesData.json");
  const projects = await res.json();

  return projects;
}

export default async function Home() {
  const allServices = await getProjects();
  return (
    <main>
      <Hero />
      <Info />
      <Services allServices={allServices} />
      <Advantages />
    </main>
  );
}
