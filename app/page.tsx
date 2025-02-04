interface BlogPost {
  id: number;
  title: string;
  date: string;
  views: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "FRNDS & FMLY",
    date: "2024-01-15",
    views: 1234,
  },
  {
    id: 2,
    title: "Actos de bondad",
    date: "2024-01-10",
    views: 856,
  },
  {
    id: 3,
    title: "Todo con amor",
    date: "2024-01-05",
    views: 2045,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8">Fragmentos ⚡️</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.08] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {post.views.toLocaleString()}
              </span>
            </div>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}
