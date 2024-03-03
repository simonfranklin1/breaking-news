// Posts

export const getAllPosts = async () => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news?limit=4&offset=1", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();

    return data;
}

export const getTopNews = async () => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/top", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    return data;
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

export const getUserPosts = async(id, token) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/user/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    const data = await response.json();

    return data;
}

export const getPostById = async(id, token) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/find/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    const data = await response.json();

    return data;    
}

export const commentPost = async(id, token, comment) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/comment/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            comment
        })
    });
    
    const data = await response.json();

    return data;
}

export const likePost = async(id, token) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/like/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    
    const data = await response.json();

    return data;
}

export const updatePost = async(id, token, post) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/news/update/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            title: post.title,
            text: post.text,
            banner: post.banner
        })
    });
    
    const data = await response.json();

    return data;
}

// Users

export const login = async (email, password) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    });

    const data = await response.json();

    return data;
}

export const signup = async({ name, email, password, avatar, background }) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name, 
            username: generateUserName(name), 
            email,  
            password, 
            avatar, 
            background 
        })
    });

    const data = await response.json();

    return data;
}

export const getUser = async (id, token) => {
    const response = await fetch("https://api-breakingnews-08eu.onrender.com/user/findById/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    const data = await response.json();

    return data;
}

// Utils

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);

    return JSON.parse(data);
}

export const limitText = (str, number) => {
    if (str.length < number) return str

    return str.substring(0, number) + "...";
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
  }