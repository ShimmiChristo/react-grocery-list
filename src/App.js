import React from "react";
import ShoppingList from "./components/ShoppingList";


class App extends React.Component {
    state = {
        items: [
            {
                id: 1,
                food: 'apple',
                purchased: false,
            }, 
            {
                id: 2,
                food: 'pears',
                purchased: false,
            }, 
            {
                id: 3,
                food: 'cherries',
                purchased: true,
            }
        ]
    }

    markComplete = (id) => {
        this.setState({ items: this.state.items.map(item => {
            if(item.id === id) {
                item.purchased = !item.purchased;
            }
            return item;
        })
        })
    }

    delItem = (id) => {
        this.setState({ items: [...this.state.items.filter(item => item.id !== id)] })
    }

    render() {
        return (
            <div className="shopping-list">
                 <h1>Shopping List</h1>
                 <div>
                     <ShoppingList 
                        items={this.state.items} 
                        markComplete={this.markComplete} 
                        delItem={this.delItem}
                     />
                </div>
             </div>
           
        )
    }
}

export default App;