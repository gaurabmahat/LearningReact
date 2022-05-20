import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //let name = 'Usopp';
    const [blogs, setBlogs] = useState([
        { title: 'My new adventure', body: 'loream ipsum...', author: 'Usopp', id:1 },
        { title: 'Welcome my patient', body: 'loream ipsum...', author: 'Chopper', id:2 },
        { title: 'My world map', body: 'loream ipsum...', author: 'Nami', id:3 }
    ]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Usopp')} title="Usopp's Blogs!" />
        </div>
    );
}
 
export default Home;