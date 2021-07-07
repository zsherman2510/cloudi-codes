import React from "react";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
export default function CoursePage({ course }) {
  console.log(course);
  return (
    <Layout>
      <h1>{course.title}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/courses?slug=${slug}`);
  const courses = await res.json();

  return {
    props: {
      course: courses[0],
    },
  };
}
