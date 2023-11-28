import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import MainContainer from './components/MainContainer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"/watch",
        element:<WatchPage />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Head />
      <RouterProvider router={appRouter} />

       {/**
       *Head
       Body
          sideBar
            menuLists
          mainContainer
            buttonList
            VideoContainer
              videoWatch
        */}
    </div>
        </Provider> 
  );
}

export default App;
