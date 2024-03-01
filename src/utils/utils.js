export const getAllPosts = async () => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news?limit=5&offset=1", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();

    return data;
}

export const getTopNews = async () =>{
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/top", { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    return data;
}

export const limitText = (str, number) => {
    if(str.length < number) return str
  
    return str.substring(0, number) + "...";
}

export const getPostsBySearch = async (search) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/search?title=" + search, { 
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    return data
}