import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import uuid from 'uuid';
import ShoppingList from "./components/ShoppingList";
import Header from './components/layout/Header';
import AddItem from './components/AddItem';
import About from './components/pages/About';

class App extends React.Component {
    state = {
			items: []
		}
		
		componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
				.then(response => response.json())
				.then(json => this.setState({items: json}))
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

		// delete item
    delItem = (id) => {
			fetch('https://jsonplaceholder.typicode.com/todos/{$id}', {
				method: 'DELETE'
			})
			.then (response => response.json())
			.then(json => this.setState({ items: [...this.state.items.filter(item => item.id !== id)] }))

		}
			
		// add new item
		addItem = (title) => {
			fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST', 
				body: JSON.stringify({
					title: title
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
				.then(response => response.json())
				.then(json => this.setState({ items: [...this.state.items,  json ]}))

		}

    render() {
        return (
					<Router>
            <div className="shopping-container" style={shoppingContainer}>
							<div className="container">
                <Header />
								<Route exact path="/" render={props => (
									<React.Fragment>
										<AddItem addItem={this.addItem} />
										<ShoppingList 
											items={this.state.items} 
											markComplete={this.markComplete} 
											delItem={this.delItem}
											/>
									</React.Fragment>
								)} />
								<Route path="/about" component={About} />
							</div>
						</div>
					</Router>
        )
		}
		
	}

	const shoppingContainer = {
		maxWidth: '500px'
	}

export default App;