import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostsBySearch } from '../utils/utils';
import { PostsContainer } from "../components"

const Search = () => {
    const { query } = useParams();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPostsBySearch(query).then(response => setPosts(response.results));
    }, []);

    return (
        <div>
            {
                posts && (
                    <>
                        <div className="bg-white w-full h-[230px] rounded-md p-8 relative mb-4">
                            <Link to={"/"}>
                                <i class="bi bi-arrow-left-circle absolute top-2 left-2 text-xl cursor-pointer"></i>
                            </Link>
                            <div className="flex flex-col h-full justify-evenly">
                                <div className="text-base">
                                    Encontramos {posts.length} resultados para:
                                </div>
                                <div className="text-4xl font-bold capitalize">
                                    {query}
                                </div>
                            </div>
                        </div>
                        <PostsContainer posts={posts} search={true} />
                    </>
                ) || (
                    <div className="text-lg">...Loading</div>
                ) 
            }
        </div>
    )
}

export default Search