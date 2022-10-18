import { useRouter } from "next/router";

const Courses = () => {
  const router = useRouter();
  const { course } = router.query;

  return <h1>Course: {course}</h1>;
};
export default Courses;
