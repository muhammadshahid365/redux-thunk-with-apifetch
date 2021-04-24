import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/actions'

 class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }
    static lastPostId = 100;
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim() === "" || this.state.body.trim() === "") {
            document.querySelector("#error").innerText = "Please fill required fields!";
        } else {
            const post = {
                id: ++Form.lastPostId,
                title: this.state.title,
                body: this.state.body
            };
            this.setState({
                title: "",
                body: ""
            })
            // fetch("https://jsonplaceholder.typicode.com/posts", {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(post)
            // }).then(res => res.json())
            //     .then(data => console.log(data));
            this.props.addPost(post);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <div id="error" style={{ color: "red" }}></div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />

                    </div><br />
                    <div>
                        <label>Body</label>
                        <textarea type="text" name="body" onChange={this.onChange} value={this.state.body} />
                    </div><br />
                    <div>
                        <button type="submit" > Post</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(null, { addPost })(Form)