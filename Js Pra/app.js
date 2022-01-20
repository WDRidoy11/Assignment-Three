let Name = document.querySelector('.Name');
let Roll = document.querySelector('.Roll');
let Gpa = document.querySelector('.Gpa');
let Namep = prompt('Enter your name');
let Rollp = prompt('Enter your Roll');
let inputt = prompt('Enter you marks :');
Name.innerHTML = Namep;
Roll.innerHTML = Rollp;
if (inputt >= 80) {
    Gpa.innerHTML = "A+";
} else if (inputt >= 70) {
    Gpa.innerHTML = "A";
} else if (inputt >= 60) {
    Gpa.innerHTML = "A-";
} else if (inputt >= 50) {
    Gpa.innerHTML = "B";
} else if (inputt >= 40) {
    Gpa.innerHTML = "C";
} else if (inputt >= 33) {
    Gpa.innerHTML = "D";
} else {
    Gpa.innerHTML = "F";
}