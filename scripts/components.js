var ContainerArea = React.createClass ({
	getInitialState: function() {
		return {input: ""};
	},
	handleChange: function() {
		this.setState({input: "TEXT CHANGED"});
		console.log(this.state.input);
	},
	render: function() {
		return (
			<div>
				<TextArea onChange={this.handleChange}/>
				<ResultArea text={this.state.input}/>
			</div>
		);
	}
});

var TextArea = React.createClass ({
	render: function() {
		return (
			<div className="text-area">
				<h2>Enter text here</h2>
				<textarea className="text-box" onChange={this.props.onChange}></textarea>
			</div>
		);
	}
})

var ResultArea = React.createClass ({
	render: function() {
		return (
			<div className="result-area">
				<h2>Result</h2>
				<p>{this.props.text}</p>
			</div>
		);
	}
})

ReactDOM.render(<ContainerArea />, document.getElementById("container"));