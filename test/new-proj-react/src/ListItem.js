import React from 'react';


class App extends React.Component {

  state = {
    checked: false,
  }

  renderCheckbox = () => {
    if (this.state.checked == true) {
      return 'выбрано';
    }
    else {
      return 'не ввыбрано'
    }
  }
}

onClick = () => this.setState({ checked: !this.state.checked }) = () => {
  this.props.onCheck(this.props.ingredientName, this.state.checked)
};

render()
return (
  <div className="list_item">
    <button>

    </button>
    <button>
      {
        this.renderCheckbox()
      }
    </button>
    <span> {this.props.ingredientName}</span>
  </div>
)

