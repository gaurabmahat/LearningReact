import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //let name = 'Usopp';
    const [blogs, setBlogs] = useState([
        { title: 'My new adventure', body: 'loream ipsum...', author: 'Usopp', id:1 },
        { title: 'Welcome my patient', body: 'loream ipsum...', author: 'Chopper', id:2 },
        { title: 'My world map', body: 'loream ipsum...', author: 'Nami', id:3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;