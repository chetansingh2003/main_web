let loadMoreBtn = document.getElementById("loadMoreBtn");
let courseList = document.getElementById("courseList");

// Dummy New Course Data
let newCourses = [
    {
        img: "course4.jpg",
        title: "Advanced Excel Mastery",
        students: "👥 3 Students",
        category: "In Skill Courses"
    },
    {
        img: "course5.jpg",
        title: "Digital Marketing Essentials",
        students: "👥 5 Students",
        category: "In Marketing Courses"
    },
    {
        img: "course6.jpg",
        title: "Programming in Python",
        students: "👥 10 Students",
        category: "In Coding Courses"
    }
];

let index = 0;

loadMoreBtn.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
        if (index >= newCourses.length) {
            loadMoreBtn.innerText = "No More Courses";
            loadMoreBtn.disabled = true;
            return;
        }

        let c = newCourses[index];

        let card = document.createElement("div");
        card.className = "course-card";

        card.innerHTML = `
            <img src="${c.img}" class="course-img">
            <h4 class="course-title">${c.title}</h4>
            <p class="students">${c.students}</p>
            <p class="category">${c.category}</p>
            <a href="#" class="learn-more">Learn More →</a>
        `;

        courseList.appendChild(card);
        index++;
    }
});
