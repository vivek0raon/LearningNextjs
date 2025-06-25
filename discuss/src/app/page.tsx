import TopicCreateForm from "@/components/topics/TopicCreateForm";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl fond-bold m-2">HomePage</h1>
      </div>
      <div>
        <TopicCreateForm/>
      </div>
    </div>
  );
}
