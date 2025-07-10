export default async function getCourses() {
    try {
        const res = await fetch("https://fastapi-course-app.onrender.com/categories/");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Failed to fetch categories:", err);
        return [];
    }
}