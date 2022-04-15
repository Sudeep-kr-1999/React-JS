import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            comments: "",
            topic: "React"
        }
    }

    // note:--------- jb-bhi hum event handler use krte hai to event as a parameter us handler ko paas ho jaata h !
    handleUsernameChange = (event) => {
        event.preventDefault();
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    <div>
                        <label htmlFor="comments">Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label htmlFor="topic">Topics</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
