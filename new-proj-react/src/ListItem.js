import React from 'react';


class ListItem extends React.Component {

  state = {
    checked: false,
  }

  renderCheckbox = () => {
    if (this.state.checked == true) {
      return 'выбрано';
    }
    else {
      return 'не выбрано'
    }
  }

  // {onClick = () => this.setState({ checked: !this.state.checked } = () => {
  //   this.props.onCheck(this.props.ingredientName, this.state.checked)
  // });}

  render() {
    return (
      <div className="list_item">
        <button>
          {
            this.renderCheckbox()
          }
        </button>
        <span> {this.props.ingredientName}</span>
      </div>
    );
  }
}






export default ListItem;