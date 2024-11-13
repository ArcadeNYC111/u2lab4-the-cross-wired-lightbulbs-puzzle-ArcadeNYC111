// YOUR CODE HERE
console.log("Script Running.");
const switch1 = document.querySelector("#switch1");
const switch2 = document.querySelector("#switch2");
const switch3 = document.querySelector("#switch3");
const switch4 = document.querySelector("#switch4");
const switch5 = document.querySelector("#switch5");
const switch6 = document.querySelector("#switch6");
const switch7 = document.querySelector("#switch7");
const switch8 = document.querySelector("#switch8");
const switch9 = document.querySelector("#switch9");

const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");
    light3.classList.toggle("active");
    light8.classList.toggle("active");
}
const change39 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");
    light1.classList.toggle("active");
    light7.classList.toggle("active");
}
const change40 = () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");
    light4.classList.toggle("active");
    light6.classList.toggle("active");   
    light8.classList.toggle("active");
}
const change41 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    light2.classList.toggle("active");
    light9.classList.toggle("active");
}
const change42 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    const light4 = document.querySelector("#lightbulb4");
    const light5 = document.querySelector("#lightbulb5");
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    const light8 = document.querySelector("#lightbulb8");
    light1.classList.toggle("active");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
    light4.classList.toggle("active");
    light5.classList.toggle("active");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
    light8.classList.toggle("active");
}
const change43 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light4 = document.querySelector("#lightbulb4");
    light1.classList.toggle("active");
    light4.classList.toggle("active");
}
const change57 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light3 = document.querySelector("#lightbulb3");
    const light5 = document.querySelector("#lightbulb5");
    const light7 = document.querySelector("#lightbulb7");
    light2.classList.toggle("active");
    light3.classList.toggle("active");
    light5.classList.toggle("active");
    light7.classList.toggle("active");

}
const change45 = () => {
    const light5 = document.querySelector("#lightbulb5");
    const light9 = document.querySelector("#lightbulb9");
    light5.classList.toggle("active");
    light9.classList.toggle("active");
}
const change46 = () => {
    const light6 = document.querySelector("#lightbulb6");
    const light7 = document.querySelector("#lightbulb7");
    light6.classList.toggle("active");
    light7.classList.toggle("active");
}
switch1.addEventListener('change', change38);
switch2.addEventListener('change',change39);
switch3.addEventListener('change',change40);
switch4.addEventListener('change',change41);
switch5.addEventListener('change',change42);
switch6.addEventListener('change',change43);
switch7.addEventListener('change',change57);
switch8.addEventListener('change',change45);
switch9.addEventListener('change',change46);
