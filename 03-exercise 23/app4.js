const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const sss = document.querySelectorAll('span');

for (let i = 0 ; i < sss.length ; i++) {
    sss[i].style.color = colors[i];
}
