import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = ()=>{
  const APP__ID = 'ab60b5ab';
  const APP_KEY = '3c972572ac703b6e019ff31aa4afa0fd';

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    getRecipes();
  },[]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP__ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

}



    return  (
      <div className="App">
        <form className="search__form" >
          <input type="text" className="search__bar"/>
          <button type="submit" className="search__button">Search</button>
        </form>
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label}  image= {recipe.recipe.image} calories={recipe.recipe.calories}/>
        ))};
      </div>

    );
}


export default App;