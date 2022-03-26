import React from 'react'
import Projects from '../components/Projects'
import { data } from '../data'
const projects = ({projects}) => {
  return (
    <>
      <Projects projects={projects} />
    </>
  )
}

export default projects


export const getStaticProps = async () => {
  const projects = data;
  return {
    props: {
      projects,
    },
  };
};
