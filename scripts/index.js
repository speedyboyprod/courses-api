const courseTable = document.getElementById("courseTable");
const tbody = document.getElementById("courseInfo");

const url = `http://localhost:8081/api/courses`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((course) => {
      const row = tbody.insertRow();

      const cellDep = row.insertCell();
      cellDep.innerHTML = course.dept;

      const cellCourseNum = row.insertCell();
      cellCourseNum.innerHTML = course.courseNum;

      const cellTitle = row.insertCell();
      cellTitle.innerHTML = course.courseName;

      const cellDetails = row.insertCell();

      const anchor = document.createElement("a");
      anchor.href = `./details.html?courseid=${course.id}`;
      anchor.text = `See details`;

      cellDetails.appendChild(anchor);
    });
  });

document.getElementById("addCourse").addEventListener("click", () => {
  location.href = "./new-courses.html";
});
