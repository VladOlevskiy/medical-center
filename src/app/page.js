import Hero from "./(components)/Home/Hero.jsx";
import Info from "./(components)/Home/Info.jsx";
import Services from "./(components)/Home/Services.jsx";
import Advantages from "./(components)/Home/Advantages.jsx";
import { promises as fs } from "fs";

async function getServices() {
  const file = await fs.readFile(
    process.cwd() + "/public/servicesData.json",
    "utf8"
  );
  const data = JSON.parse(file);
  console.log(data);
  return data;
}

export default async function Home() {
  const allServices = await getServices();
  return (
    <main>
      <Hero />
      <Info />
      <Services allServices={allServices} />
      <Advantages />
    </main>
  );
}
