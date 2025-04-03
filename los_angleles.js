document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".Info_1");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }else {
                entry.target.classList.remove("active"); 
            }
        });
    }, { threshold: 0.1 });

    images.forEach((img) => {
        observer.observe(img);
    });
});

