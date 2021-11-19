import { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import { Title } from '@components/elements';
import { useCouses } from '@hooks/useCourses';
import { usePagination } from '@hooks/usePagination';
import { InputButton } from '@components/forms';

function CourseList() {
  const { courses, fetchCourse } = useCouses(6)
  const { actualPage, setActualPage } = usePagination()

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    fetchCourse(actualPage)
  }, [actualPage])

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const renderData = () => {
    return courses.map((course, i) => {
      return (
        <div key={course.id} className="bg-white p-3 rounded-md pb-4 h-full mb-5">
          <div className="image__full">
            <img className="w-screen" src={course.thumbnailUrl} />
          </div>
          <div className="flex flex-row pt-2 pb-2">
            <div className="w-8/12">
              <ReactStars
                onChange={ratingChanged}
                count={5}
                size={24}
                value={randomIntFromInterval(1, 5)}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <div className="w-4/12 flex-shrink items-end">
              <span className="bg-quaternary font-normal text-center p-2 float-right text-mini uppercase rounded">{randomIntFromInterval(10, 30)} lessons</span></div>
          </div>
          <div className="pt-2 pb-2">
            <Title title={course.title} className=" text-secundary font-bold text-regular-x float-left pr-2" />
          </div>

        </div>
      )
    })
  }
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid mm:grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
        {renderData()}
      </div>
      <div className="w-full flex flex-wrap justify-center items-center py-10">
        {
          Array(courses.length).fill('').map((_, index) => {
            return <InputButton
              className={`h-4 w-4 ml-2 rounded-full   ${(index === actualPage - 1) ? 'bg-secundary ' : 'bg-primary'}`}
              key={index}
              onClick={() => setActualPage(index + 1)}
              disabled={index === actualPage - 1}>
            </InputButton>
          })
        }
      </div>
    </div>
  )
}

export { CourseList }