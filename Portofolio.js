const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const btn = document.getElementById("about-me-section");
const btn2 = document.getElementById("resume-section");
const btn3 = document.getElementById("work-section");
const btn4 = document.getElementById("Contact-section");


button1.addEventListener("click", () => {
    
    button1.style.backgroundColor = "#FC8818";
    button3.style.backgroundColor = "#E0E8EF";
    button2.style.backgroundColor = "#E0E8EF";
    button4.style.backgroundColor = "#E0E8EF";
    btn.style.display = 'block';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';

});


button2.addEventListener("click", () => {

    button2.style.backgroundColor = "#FC8818";
    button1.style.backgroundColor = "#E0E8EF";
    button3.style.backgroundColor = "#E0E8EF";
    button4.style.backgroundColor = "#E0E8EF";
    btn2.style.display = 'block';
    btn.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    
    
});


button3.addEventListener("click", () => {

    button3.style.backgroundColor = "#FC8818";
    button2.style.backgroundColor = "#E0E8EF";
    button1.style.backgroundColor = "#E0E8EF";
    button4.style.backgroundColor = "#E0E8EF";
    btn3.style.display = 'block';
    btn2.style.display = 'none';
    btn.style.display = 'none';
    btn4.style.display = 'none';

});


button4.addEventListener("click", () => {

    button4.style.backgroundColor = "#FC8818";
    button2.style.backgroundColor = "#E0E8EF";
    button3.style.backgroundColor = "#E0E8EF";
    button1.style.backgroundColor = "#E0E8EF";
    btn4.style.display = 'block';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn.style.display = 'none';

});

