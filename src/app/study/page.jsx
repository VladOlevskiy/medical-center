import Courses from "../(components)/Study/Courses";
import Contact from "../(components)/Home/Contact";
import Workers from "../(components)/Study/Workers";
import { promises as fs } from "fs";

async function getCourses() {
  const file = await fs.readFile(
    process.cwd() + "/public/coursesData.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}

export default async function StudyPage() {
  const allCourses = await getCourses();

  return (
    <>
      <Courses allCourses={allCourses} />
      <Contact />
      <Workers />
    </>
  );
}
