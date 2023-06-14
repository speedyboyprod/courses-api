const para = new URLSearchParams(location.search);
const courseId = para.get("courseid");

const url = `http://localhost:8081/api/courses/${courseId}`;

fetch(url)
  .then((res) => res.json())
  .then((course) => {
    const message = document.getElementById("messageArea");
    message.innerHTML = `The course instructor is ${course.instructor}. It will begin on ${course.startDate}, and will end in ${course.numDays} Days.`;
  });

const span = document.querySelector("h1 span");
span.innerHTML = `Course ${courseId}`;
