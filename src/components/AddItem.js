import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddItem extends Component {
		state = {
			title: ''
		}

		onChange = (e) => {
			this.setState({ [e.target.name]: e.target.value})
		}

		onSubmit = (e) => {
			e.preventDefault();
			this.props.addItem(this.state.title);
			this.setState({ title: '' });
		}

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            	<input 
								type="text" 
								name="title" 
								placeholder="Add Item"
								value={this.state.title}
								onChange={this.onChange}
							/>
							<input 
								type="submit"
								name='submit'
								className='btn'
							/>
            </form>
        )
    }
}

AddItem.propTypes = {
	addItem: PropTypes.func.isRequired
}


export default AddItem
