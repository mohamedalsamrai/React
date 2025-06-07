import ButtonCard from "./ButtonCard";
import PostCard from "./PostCard";

function Content() {
  return (
    <div class="grid grid-cols-2 items-start gap-5 mx-[20%]">
      <div class="space-y-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div>
        <ButtonCard />
      </div>
    </div>
  );
}
export default Content;
