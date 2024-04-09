import styles from "./Courses.module.css";

const courses = [
    {
        link: "https://www.youtube.com/playlist?list=PLt4rWC_3rBbUoDNHIOWEIx-utKIza7DYX",
        img: "https://i.ytimg.com/vi/uexGK4A7Tqg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg",
        title: "Comprehensive JavaScript",
        description: "Detailed JavaScript course to master the web.",
    },
    {
        link: "https://www.youtube.com/playlist?list=PLt4rWC_3rBbVVQF3heb_HFkTQV903I-ZO",
        img: "https://i.ytimg.com/vi/GZr8USsgU7w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg",
        title: "Modern C++",
        description: "C++ for everyone; beginners or !beginners.",
    },
    {
        link: "https://www.youtube.com/playlist?list=PLt4rWC_3rBbUTd1c3r5HGYEOAl68CJTEo",
        img: "https://i.ytimg.com/vi/k9RK2JXONoA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg",
        title: "C# Essentials",
        description: "Getting started with C# - a beginner course.",
    },
    {
        link: "https://www.youtube.com/playlist?list=PLt4rWC_3rBbVVczV94Dz8tibNbiqrO9NH",
        img: "https://i.ytimg.com/vi/mBTaRWQ3W2s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg",
        title: "Linked List (C++)",
        description: "Making a singly linked list data structure using C++.",
    },
    {
        link: "https://www.youtube.com/playlist?list=PLt4rWC_3rBbXK0exH3_CiCQpzlSws-Iby",
        img: "https://i.ytimg.com/vi/hYhUuBx7DII/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg",
        title: "C++ STL Mastery",
        description: "Mastering Modern C++ Standard Template Library.",
    },
];

export default function Courses() {
    return (
        <section className={styles.coursesSection}>
            <h1>Courses</h1>
            <div className={styles.courses}>
                {courses.map((course, i) => (
                    <div className={styles.course} key={i}>
                        <a href={course.link} target="_blank">
                            <img src={course.img} alt={course.title} />
                        </a>
                        <div className={styles.courseDetails}>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <button>
                                <a href={course.link} target="_blank">
                                    Start Watching
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
