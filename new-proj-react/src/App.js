import React from 'react';
import ListItem from './ListItem';
import './App.css';


class App extends React.Component {

  state = {
    chosen: 0,
    ingredients: {
      'имя ингредиента': 'выбран или нет'
    },
  }

  onCheck = (ingredientName, checked) => {
    console.log(ingredientName, checked);

    // const x = ...this.state.ingredients

    // this.state.ingredients[ingredientName] = checked; лучше делать через сетСтейт
    //1) Копируем объект
    const newIngredients = { ...this.state.ingredients };
    //2)Изменяем его
    newIngredients[ingredientName] = checked;
    //3)   Передаем измененную копию
    this.setState({
      ingredients: newIngredients,

    })
  }

  render() {
    return (
      <div className="App">
        <h1>Пицца</h1>
        <ListItem ingredientName="Огурцы" onCLick={this.onCheck} />
        <ListItem ingredientName="Сыр" onCLick={this.onCheck} />
        <ListItem ingredientName="Помидоры" onCLick={this.onCheck} />
        <ListItem ingredientName="Ананасы" onCLick={this.onCheck} />
        <ListItem ingredientName="Перец" onCLick={this.onCheck} />
        <ListItem ingredientName="Грибы" onCLick={this.onCheck} />
      </div>
    );
  }
}
export default App;
