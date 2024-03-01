export const getAllPosts = async () => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news?limit=5&offset=0");
    const data = await response.json();

    return data
}