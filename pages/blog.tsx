import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export async function getServerSideProps() {
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
            {/* Page Content */}
            <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-10">
                        Blog Posts
                    </h1>

                    <ul className="space-y-6">
                        {blogData.map((post) => (
                            <li
                                key={post.id}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                            >
                                <article className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {post.body}
                                    </p>

                                    <div className="mt-4">
                                        <a
                                            href={`/blog/${post.id}`}
                                            className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700"
                                        >
                                            Read more →
                                        </a>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </>

    );
}