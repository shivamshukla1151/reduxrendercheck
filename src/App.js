import './App.css';
import Child from './component/Child';
import Grandparent from './component/Grandparent';
function App() {
    return (
        <div className="App">
            <Grandparent />
        </div>
    );
}

export default App;
