import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //let name = 'Usopp';
    const [blogs, setBlogs] = useState([
        { title: 'My new adventure', body: 'loream ipsum...', author: 'Usopp', id:1 },
        { title: 'Welcome my patient', body: 'loream ipsum...', author: 'Chopper', id:2 },
        { title: 'My world map', body: 'loream ipsum...', author: 'Nami', id:3 }
    ]);

    const [name, setName] = useState('Usopp');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Use effect ran');
        console.log(name)
    }, [name]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('Chopper')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;