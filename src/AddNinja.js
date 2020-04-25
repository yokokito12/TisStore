import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleOnKeyUp = (e) => {
        //Set the state for every state property
        this.setState({
            //Same as ['name'] : e.target.value
            [e.target.id] : e.target.value
        });
    }
    addNinja = (e) => {
        e.preventDefault();

        console.log(this.state);

    }
    render(){
        return (
            <div className="AddNinja-form">
                <form onSubmit={this.addNinja}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' onKeyUp={this.handleOnKeyUp}/>
                    </div>

                    <div>
                        <label htmlFor='age'>Age:</label> 
                        <input type='text' id='age' onKeyUp={this.handleOnKeyUp}/>
                    </div>
                    <div>
                        <label htmlFor='belt'>Belt:</label>
                        <input type='text' id='belt' onKeyUp={this.handleOnKeyUp}/>
                    </div>
                    <button>Add Ninja</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;