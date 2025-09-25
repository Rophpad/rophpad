import { DesignCard } from "@/components/DesignCard";

export default function OthersPage() {
  return (
    <div className="w-full font-sans items- justify-items-center h-screen">
      <div className="w-full px-8 lg:px-0 lg:max-w-2xl mt-8 flex flex-col gap-16">

        <div className="w-full max-w-3xl h-full flex flex-col items-center gap-8 ">
          <div className="w-full border-b border-dotted border-spacing-8 border-white/10 py-4 flex items-center gap-4">
            <h2 className="text-xl font-medium">Other links</h2>
          </div>

          <div className="w-full h-full ">
            {/* Design list */}
            <DesignCard
              link={"https://www.notion.so/Design-Portfolio-2494347db4b380ae80b6d493b08e8e49?pvs=32"}
              image={"image.png"}
              name={"Design Project"}
              description={"All my design projects."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}