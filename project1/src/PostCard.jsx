function PostCard({ title, body }) {
  return (
    <div className="border-[3px] border-teal-700 py-5 text-center">
      <h1 className="text-xl font-bold ">{title}</h1>
      <hr />
      <p>{body}</p>
    </div>
  );
}
export default PostCard;
