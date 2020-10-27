import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import CocktailCard from './CocktailCard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktail : []
    }
  }
componentDidMount() {
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(resp => this.setState({cocktail : resp.data.drinks}))
}


  render() {
    //console.log(this.state.cocktail)
    return (
<>
{this.state.cocktail.map(e => <CocktailCard {...e} />)}
</>
    )
  }
}

export default App;
