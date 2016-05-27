/* The initial text shown in the textarea by default. */
var initialText = "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ . \nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in \nSpain. \n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"

/* ContainerArea component, the parent component of the text input and output. */
var ContainerArea = React.createClass ({
	/* input propoerty added to this.state. It holds the text that will go into the results area. Initially set to the default text in initialText. */
	getInitialState: function() {
		return {input: initialText};
	},
	/* This methods is called from TextArea whenever a change is made in the textarea. */
	handleChange: function(data) {
		/* The input property is set to the data read from textarea. */
		this.setState({input: data});
	},
	/* Render function, renders a TextArea and ResultsArea components.
	handleChange callback is passed via props to TextArea.
	ResultArea text prop is set to the property input. */
	render: function() {
		return (
			<div>
				<TextArea onChange={this.handleChange}/>
				<ResultArea text={this.state.input}/>
			</div>
		);
	}
});

/* The TextArea component where the user inputs the markdown */
var TextArea = React.createClass ({
	/* this method calls handleChange method from ContainerArea. The text in the textarea is passed as parameter. */
	textChange: function(e) {
		this.props.onChange(e.target.value);
	},
	/* textarea calls textChange method when the text changes.
	The default value to appear in the textarea in the text in initialText. */
	render: function() {
		return (
			<div className="text-area">
				<h2>Enter text here</h2>
				<textarea className="text-box" onChange={this.textChange} defaultValue={initialText}></textarea>
			</div>
		);
	}
})

/* ResultArea component. This is where the output is displayed. */
var ResultArea = React.createClass ({
	/* This changes the markdown to formatted text using marked library. This function was taken from React's tutorial. */
	rawMarkup: function() {
		var rawMarkup = marked(this.props.text.toString(), {sanitize: true});
    	return { __html: rawMarkup };
	},
	/* rawMarkup is called from the span element and the returned value is rendered.
	<span dangerouslySetInnerHTML must be used for the output to be displayed, cannot be named anyhing else. This is in React for security reasons and keep the programmer aware of security concerns. */
	render: function() {
		return (
			<div className="result-area">
				<h2>Result</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
})

/* Renders ContainerArea and places it container div. */
ReactDOM.render(<ContainerArea />, document.getElementById("container"));

