import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import { NONAME } from 'dns';

export class ShoppingListItem extends Component {
    getStyle = () => {
        return { 
            background: "#eee",
            width: '300px',
            padding: '10px',
            textDecoration: this.props.item.purchased ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.item;
        return (
            <div style={this.getStyle()}>
                <div>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                     {title} 
                     <button onClick={this.props.delItem.bind(this, id) } style={btnStyle}>x</button>
                </div>
            </div>
        )
    }
}

// PropTypes
ShoppingListItem.propTypes = { 
    item: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

const btnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px',
    borderRadius: '10%',
    float: 'right'
}

export default ShoppingListItem
