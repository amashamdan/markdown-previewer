var ContainerArea = React.createClass ({
	getInitialState: function() {
		return {input: ""};
	},
	handleChange: function(data) {
		this.setState({input: data});
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
	textChange: function(e) {
		this.props.onChange(e.target.value);
	},
	render: function() {
		return (
			<div className="text-area">
				<h2>Enter text here</h2>
				<textarea className="text-box" onChange={this.textChange}></textarea>
			</div>
		);
	}
})

var ResultArea = React.createClass ({
	rawMarkup: function() {
		var rawMarkup = marked(this.props.text.toString(), {sanitize: true});
    	return { __html: rawMarkup };
	},
	render: function() {
		return (
			<div className="result-area">
				<h2>Result</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
})

ReactDOM.render(<ContainerArea />, document.getElementById("container"));