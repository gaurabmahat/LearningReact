import { logRoles } from "@testing-library/react";
import { useState } from "react";

const Home = () => {

    //let name = 'Usopp';
    const [blogs, setBlogs] = useState([
        { title: 'My new adventure', body: 'loream ipsum...', author: 'Usopp', id:1 },
        { title: 'Welcome my patient', body: 'loream ipsum...', author: 'Chopper', id:2 },
        { title: 'My world map', body: 'loream ipsum...', author: 'Nami', id:3 }
    ]);

    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title } </h2>
                    <p>Written by { blog.author } </p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;