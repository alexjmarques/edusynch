import { CourseProps } from '@interfaces/course';
import { useState } from 'react';

function useCouses(pageLimit: number) {
  const [courses, setCouses] = useState<CourseProps[]>([])

  function fetchCourse(page: number) {
    const virtualPage = ((page - 1) * pageLimit) <= 0 ? 0 : ((page - 1) * pageLimit)

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${virtualPage}&_limit=${pageLimit}`)
      .then(res => res.json())
      .then(setCouses).catch(window.alert)
  }
  return {
    fetchCourse,
    courses
  }
}

export { useCouses }