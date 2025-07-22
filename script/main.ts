interface CourseInfo {
code: string;
name: string;
progression : string; 
syllabus : string
}


function createCourses(courseInfo: CourseInfo):void {
const courses = document.querySelector(".ul_coursesinfo") as HTMLUListElement | null



if(courses) {
courses.innerHTML = `
<li>
Kursen har kurskod ${courseInfo.code} och kursnamn: ${courseInfo.name} med progression ${courseInfo.progression} <br>
länk till ${courseInfo.syllabus}

</li>


`
}

}







/*
let liEl = document.createElement("li") as HTMLLIElement
let break = document.createElement("br")
let coursesInfolist = document.createTextNode(`Kursen har kurskod ${courseInfo.code} och kursnamn: ${courseInfo.name} med progression ${courseInfo.progression}  `)
*/

