import { Books } from "@/widgets/Books/index.js";
import { Categories } from "@/widgets/Categories/index.js";

const MainPage = () => {
  return (
    <div>
      <div className="mb-4">
        <Categories />
      </div>
      <Books />
    </div>
  );
};

export default MainPage;
