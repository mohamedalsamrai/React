import ButtonCard from "./ButtonCard";
import PostCard from "./PostCard";

function Content() {
  const posts = [
    { title: "First Post", body: "This is the body of the first post." },
    { title: "Second Post", body: "This is the body of the second post." },
    { title: "Third Post", body: "This is the body of the third post." },
    { title: "Fourth Post", body: "This is the body of the fourth post." },
    { title: "Fifth Post", body: "This is the body of the fifth post." },
  ];

  return (
    <div className="grid grid-cols-2 items-start gap-5 mx-[20%]">
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <PostCard key={idx} title={post.title} body={post.body} />
        ))}
      </div>
      <div>
        <ButtonCard />
      </div>
    </div>
  );
}
export default Content;
