import './App.css';
import Feed from './Component/Feed';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
