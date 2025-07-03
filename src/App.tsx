
import './App.css';
import { DaNangMap } from './components/DaNangMap';
import { LayerControl } from './components/LayerControl';

function App() {
  const handleLayerToggle = (layerId: string, enabled: boolean) => {
    console.log(`Layer ${layerId} toggled: ${enabled}`);
    // TODO: Implement layer toggle logic
  };

  const handleAddManualCircle = () => {
    console.log('Add manual circle');
    // TODO: Implement manual circle addition
  };

  return (
    <div className="w-full h-screen relative">
      {/* Main Map */}
      <DaNangMap className="w-full h-full" />
      
      {/* Control Panel - Fixed positioned */}
      <div className="absolute top-4 left-4 z-10">
        <LayerControl
          onLayerToggle={handleLayerToggle}
          onAddManualCircle={handleAddManualCircle}
        />
      </div>
    </div>
  );
}

export default App;
