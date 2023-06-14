const courseDeptInput = document.getElementById("courseDept");
const courseNumInput = document.getElementById("courseNum");
const courseNameInput = document.getElementById("courseName");
const instructorInput = document.getElementById("instructor");
const courseStartInput = document.getElementById("courseStart");
const courseDaysInput = document.getElementById("courseDays");

document.getElementById("addBtn").addEventListener("click", () => {
  const bodyData = {
    id: "",
    dept: courseDeptInput.value,
    courseNum: courseNumInput.value,
    courseName: courseNameInput.value,
    instructor: instructorInput.value,
    startDate: courseStartInput.value,
    numDays: +courseDaysInput.value,
  };
  const url = "http://localhost:8081/api/courses";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((newItem) => {
      console.log(newItem);
      location.href = "./index.html";
    });
});
