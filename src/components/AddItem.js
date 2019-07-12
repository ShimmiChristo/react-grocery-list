import React, { Component } from 'react'

export class AddItem extends Component {
		state = {
			title: ''
		}

		onChange = (e) => {
			this.setState({ [e.target.name]: e.target.value})
		}

		onSubmit = (e) => {
			e.preventDefault();
		}

    render() {
        return (
            <form>
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

export default AddItem
