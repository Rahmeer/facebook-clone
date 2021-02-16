import './App.css';
import Feed from './Component/Feed';
import Header from './Component/Header';
import Login from './Component/Login';
import Sidebar from './Component/Sidebar';
import Widgets from './Component/Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
