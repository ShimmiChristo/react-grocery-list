import React, {Component} from "react";
import ShoppingListItem from "./ShoppingListItem";
// import App from "../App";
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    render() {
        return this.props.items.map((item) => ( 
            <ShoppingListItem key={item.id} 
                item={item} 
                purchased={item.purchased} 
                markComplete={this.props.markComplete} 
                delItem={this.props.delItem}
            />
        ))
    }
}

// PropTypes
ShoppingList.propTypes = {
    items: PropTypes.array
}

export default ShoppingList;