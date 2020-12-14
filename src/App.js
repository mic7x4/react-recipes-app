import React,{useEffect,useState} from 'react';
import './App.css';

const App = ()=>{
  const APP__ID = 'ab60b5ab';
  const APP_KEY = '3c972572ac703b6e019ff31aa4afa0fd';

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    console.log('This is the worst Effect');
    getRecipes();
  },[]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP__ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);

}



    return  (
      <div className="App">
        <form className="search__form" >
          <input type="text" className="search__bar"/>
          <button type="submit" className="search__button">Search</button>
        </form>
      
      </div>

    );
}


export default App;