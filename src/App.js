// import Todo from "./components/Todo";
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
    // <div>
    //   <h1>My To-Dos</h1>
    //   <Todo text = "Learn"/>
    //   <Todo text = "Change"/>
    //   <Todo text = "Patch"/>
    // </div>


    
      <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>

        <Route path='/favourites'>
          <FavouritesPage />
        </Route>

      </Switch>

      </Layout>



  );
}

export default App;
