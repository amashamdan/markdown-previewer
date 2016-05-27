var ContainerArea = React.createClass ({
	render: function() {
		return (
			<div>
				<TextArea />
				<ResultArea />
			</div>
		);
	}
});

var TextArea = React.createClass ({
	render: function() {
		return (
			<div className="text-area">
				<h2>Enter text here</h2>
				<textarea className="text-box"></textarea>
			</div>
		);
	}
})

var ResultArea = React.createClass ({
	render: function() {
		return (
			<div className="result-area">
				<h2>Result</h2>
			</div>
		);
	}
})

ReactDOM.render(<ContainerArea />, document.getElementById("container"));