"use strict";
var formData = document.querySelector("#addCourse");
formData === null || formData === void 0 ? void 0 : formData.addEventListener("submit", function (e) {
    e.preventDefault();
    var codeValue = document.getElementById("code");
    var nameValue = document.getElementById("name");
    var progressionValue = document.getElementById("progression");
    var syllabusValue = document.getElementById("syllabus");
    var createCourse = {
        code: codeValue.value,
        name: nameValue.value,
        progression: progressionValue.value,
        syllabus: syllabusValue.value
    };
    createCourses(createCourse);
    saveCourses();
});
function createCourses(courseInfo) {
    var courses = document.querySelector(".section_courseinfo");
    if (courses) {
        courses.innerHTML = "\n<ul>\n<li>\nKursen har kurskod ".concat(courseInfo.code, " och kursnamn: ").concat(courseInfo.name, " med progression ").concat(courseInfo.progression, " <br>\nl\u00E4nk till ").concat(courseInfo.syllabus, "\n\n</li>\n</ul>\n\n");
    }
}
/*
addCourses?.addEventListener("submit", (e) => {
e.preventDefault();
*/
function saveCourses() {
    /*
  
formData?.addEventListener("submit", (e) => {
e.preventDefault();*/
    var codeValue = document.getElementById("code");
    var nameValue = document.getElementById("name");
    var progressionValue = document.getElementById("progression");
    var syllabusValue = document.getElementById("syllabus");
    var createCourse = {
        code: codeValue.value,
        name: nameValue.value,
        progression: progressionValue.value,
        syllabus: syllabusValue.value
    };
    var storage = JSON.parse(localStorage.getItem("CourseList"));
    if (storage) {
        var courseArray = storage;
        courseArray.push(createCourse);
        var coursStrinify = JSON.stringify(courseArray);
        localStorage.setItem("CourseList", coursStrinify);
        console.log(createCourse);
    }
    else {
        var courseArray = [];
        courseArray.push(createCourse);
        var coursStrinify = JSON.stringify(courseArray);
        localStorage.setItem("CourseList", coursStrinify);
    }
}
