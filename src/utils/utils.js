export const getAllPosts = async () => {
    const response = await fetch("http://localhost:3000/news?limit=5&offset=0", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();

    return data
}