import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Plant from './pages/Plant';
import Recipe from './pages/Recipe';
import Account from './pages/Account';
import ShowPlant from './components/Plants/ShowPlant';
import ShowRecipe from './components/Recipes/ShowRecipe'


function App() {
  return (
    <div className="App">

   

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plants" component={Plant}/>
        <Route exact path= "/plants/:plantId" component={ShowPlant}/>
        <Route exact path="/recipes" component={Recipe}/>
        <Route exact path="/recipes/:recipeId" component={ShowRecipe}/>
        <Route exact path="/account" component={Account}/>
        {/* <Route exact path="/profile" component={Profile}/> For later */}
      </Switch>

      <Navbar/>






     
    </div>
  );
}

export default App;
