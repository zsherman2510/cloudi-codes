import React from "react";
import Layout from "../../components/Layout";
import { API_URL, PER_PAGE } from "../../config/index";
function CoursesPage({ courses, page, total }) {
  console.log(courses, page, total);
  return (
    <Layout>
      <h1>Courses Page</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const totalRes = await fetch(`${API_URL}/courses/count`);

  const total = await totalRes.json();

  //calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  const eventRes = await fetch(
    `${API_URL}/courses?_limit=${PER_PAGE}&_start=${start}`
  );

  const courses = await eventRes.json();

  return {
    props: { courses, page: +page, total },
  };
}

export default CoursesPage;
