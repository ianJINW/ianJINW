import { motion } from "motion/react";
import axios from "axios";
import { useEffect, useState, type FC } from "react";

interface Post { id: number; title: string; body: string; }

const Post: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data.slice(0, 5)))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text font-sans p-8 max-w-2xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-heading font-heading mb-8"
      >
        Recent Posts
      </motion.h1>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.01 }}
            className="bg-social border border-border rounded-xl p-5 shadow-card"
          >
            <h2 className="text-lg font-semibold text-heading mb-2">{post.title}</h2>
            <p className="text-sm leading-relaxed">{post.body}</p>
          </motion.article>
        ))}
      </div>

      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-8 bg-accent text-white px-6 py-3 rounded-lg font-medium"
      >
        Load more
      </motion.a>
    </div>
  );
}

export default Post