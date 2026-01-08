import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export async function getServerSideProps(){
    const blogData = await fetch("https://dummyjson.com/posts?limit=5&skip=10").then(res => res.json());
    return {
        props: {
            blogData: blogData.posts,
        },
    };
}

export default function BlogPage({ blogData }: { blogData: any[] }) {
    return (
        <>
        <Header />
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogData.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
        </>
        
    );
}