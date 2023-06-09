var typed = new Typed(".leader",{
    strings: ["THE FIRST HYPERSCALE CLOUD IN AFRICA"],
    typeSpeed: 70,
    showCursor: false
})

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show1');
        }else {
            entry.target.classList.remove('show1');
        }    
    });
});
const animationElements1 = document.querySelectorAll('.animation');
animationElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        }else {
            entry.target.classList.remove('show2');
        }    
    });
});
const animationElements2 = document.querySelectorAll('.animationH');
animationElements2.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        }else {
            entry.target.classList.remove('show2');
        }    
    });
});
const animationElements3 = document.querySelectorAll('.animation_reverse');
animationElements3.forEach((el) => observer3.observe(el));

