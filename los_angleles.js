document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".Info_1");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, { threshold: 0.1 });

    images.forEach((img) => {
        observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded",()=>{
    let Image = document.querySelectorAll(".Img-Main")

    let observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle("active",entry.isIntersecting);
        })
    },{threshold:0})
    Image.forEach(img => observer.observe(img));
})


document.addEventListener("DOMContentLoaded",()=>{
    let Text = document.querySelectorAll(".One, .Two ,.Threee")

    let observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle("active",entry.isIntersecting);
        })
    },{threshold:0.3})
    Text.forEach(tex => observer.observe(tex));
})
