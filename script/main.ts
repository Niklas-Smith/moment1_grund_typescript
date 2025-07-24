"use strict";

interface CourseInfo {
code: string;
name: string;
progression : string; 
syllabus : string;
}

const formData =  document.querySelector<HTMLFormElement>("#addCourse")
  
formData?.addEventListener("submit", (e) => {
e.preventDefault();

let codeValue = document.getElementById("code")  as  HTMLInputElement ;
let nameValue = document.getElementById("name") as  HTMLInputElement ;
let progressionValue = document.getElementById("progression")  as  HTMLInputElement ; 
let syllabusValue =  document.getElementById("syllabus")  as  HTMLInputElement ; 
 


const createCourse: CourseInfo = {
code: codeValue.value,
name: nameValue.value,
progression : progressionValue.value,
syllabus :  syllabusValue.value
 
};

createCourses(createCourse)

saveCourses();  
});



function createCourses(courseInfo: CourseInfo):void {
const courses = document.querySelector(".section_courseinfo") as HTMLUListElement | null;



if(courses) {
courses.innerHTML = `
<ul>
<li>
Kursen har kurskod ${courseInfo.code} och kursnamn: ${courseInfo.name} med progression ${courseInfo.progression} <br>
länk till ${courseInfo.syllabus}

</li>
</ul>

`;


}

}



/*
addCourses?.addEventListener("submit", (e) => {
e.preventDefault();
*/

function saveCourses():void {

    /*
  
formData?.addEventListener("submit", (e) => {
e.preventDefault();*/

let codeValue = document.getElementById("code")  as  HTMLInputElement ;
let nameValue = document.getElementById("name") as  HTMLInputElement ;
let progressionValue = document.getElementById("progression")  as  HTMLInputElement ; 
let syllabusValue =  document.getElementById("syllabus")  as  HTMLInputElement ; 
 


const createCourse: CourseInfo = {
code: codeValue.value,
name: nameValue.value,
progression : progressionValue.value,
syllabus :  syllabusValue.value
 
};




let storage = JSON.parse(localStorage.getItem("CourseList"))
if(storage) {


let courseArray:CourseInfo[] = storage;

        
    courseArray.push(createCourse)       


    let coursStrinify = JSON.stringify(courseArray)

localStorage.setItem("CourseList" , coursStrinify) 

console.log(createCourse);
}  else {

let courseArray:CourseInfo[] = [];

        
    courseArray.push(createCourse)       


    let coursStrinify = JSON.stringify(courseArray)

localStorage.setItem("CourseList" , coursStrinify) 


}
 


} 




/*
addCourses?.addEventListener("submit", (e) => {
e.preventDefault(); 

let codeValue = document.getElementById("code")  as  HTMLInputElement ;
let nameValue = document.getElementById("name") as  HTMLInputElement ;
let progressionValue = document.getElementById("progression")  as  HTMLInputElement ; 
let syllabusValue =  document.getElementById("syllabus")  as  HTMLInputElement ; 
 

localStorage.setItem("courselist", JSON.stringify(createCourse));

} )

/*
let liEl = document.createElement("li") as HTMLLIElement
let break = document.createElement("br")
let coursesInfolist = document.createTextNode(`Kursen har kurskod ${courseInfo.code} och kursnamn: ${courseInfo.name} med progression ${courseInfo.progression}  `)


window.onload = init;


function init () {

}

*/

