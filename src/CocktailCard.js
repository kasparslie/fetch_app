import React, {Component} from 'react'


class CocktailCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <>
            <img src={this.props.strDrinkThumb} width="150px" alt="drink"></img>
            
            <p>glass type:{this.props.strGlass}</p>
            <p>{this.props.strInstructions}</p>
            <h3>Ingredients</h3>
            <ul>
            <li>{this.props.strIngredient1}</li>
            <li>{this.props.strIngredient2}</li>
            <li>{this.props.strIngredient3}</li>
            <li>{this.props.strIngredient4}</li>
            <li>{this.props.strIngredient5}</li>
            <li>{this.props.strIngredient6}</li>
            <li>{this.props.strIngredient7}</li>
            <li>{this.props.strIngredient8}</li>
            <li>{this.props.strIngredient9}</li>
            <li>{this.props.strIngredient10}</li>
            </ul>          
            </>
        )
    }
}

export default CocktailCard