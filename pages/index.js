import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import Comparison from "../components/Comparison";
import Pricing from "../components/Pricing";
import Instructor from "../components/Instructor";
import { API_URL } from "../config";
import styles from "../styles/Home.module.css";

export default function Home({ courses }) {
  return (
    <Layout>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree courses={courses} />
      <Comparison />
      <Pricing />
      <Instructor />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/courses?_limit=8`);

  const courses = await res.json();

  return {
    props: { courses },
    revalidate: 100,
  };
}
