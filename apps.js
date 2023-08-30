
//getElementById
const para1 = document.getElementById("paragraph-1");
const para2 = document.getElementById("paragraph-2");
const para3 = document.getElementById("paragraph-3");
const para4 = document.getElementById("paragraph-4");
const para5 = document.getElementById("paragraph-5");
//getElementsByTagName
const allParagraphs = document.getElementsByTagName('p');
const titles = document.getElementsByTagName("h1");
const sections = document.getElementsByTagName("section");
const divs= document.getElementsByTagName("div");
const aTags= document.getElementsByTagName("a");
//getElementsByClassName
const div1=document.getElementsByClassName("div-1");
const div2=document.getElementsByClassName("div-2");
const para6=document.getElementsByClassName("paragraph-6");
const title2=document.getElementsByClassName("title-2")
const title3=document.getElementsByClassName("title-3")
//querySelector and querySelectorAll
const firstId=document.querySelector("#first-id")
const allIds=document.querySelectorAll("#first-id")
const aside=document.querySelector(".my-aside")
const tableHead=document.querySelector('[title="table-header"]')
const allTableHead=document.querySelectorAll('[title="table-header"]')
const allTableCells=document.querySelectorAll('td:nth-child(even)')



//modificare continut innerHTML, modificare type si adaugare clasa
titles[0].textContent="Hello World"
let paraSection=document.querySelector(".paragraphs")
console.log(paraSection.innerHTML)

let myInpt=document.querySelector(".input-box")

myInpt.type="checkbox"

myInpt.classList+=" one-more"
console.log(myInpt.className)


//style elements

para1.style.color="yellowgreen";
para1.style.border="2px solid red";
para1.style.display="inline-block";
para1.style.margin="0px"
para1.style.fontSize="30px"

//Create elements

const main=document.getElementsByTagName("main")

const footer=document.createElement("footer")

main[0].append(footer)

footer.textContent="This is the footer"

aside.removeChild(firstId)

let secondId=document.querySelector("#second-id");
aside.removeChild(secondId)