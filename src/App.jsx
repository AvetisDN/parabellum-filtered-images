import EmptyScreen from "./components/EmptyScreen";
import FilteredGallery from "./components/filtered-gallery/FilteredGallery";

function App() {
  return (
    <div className="w-full min-h-screen bg-dark text-white font-serif">
      <EmptyScreen />
      <FilteredGallery />
      <EmptyScreen />
    </div>
  );
}

export default App;
