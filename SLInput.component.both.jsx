// slInput component - represents a single input item
SLInput = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        initialValue:React.PropTypes.string,
        attributes: React.PropTypes.object,
        errors: React.PropTypes.array,
        handleChange: React.PropTypes.func,
    },

    getDefaultProps: function() {
        return {
            label: "",
            initialValue: "",
            attributes: {},
            errors: [],
            handleChange: function(event) { 
                this.setState({ inputValue: event.target.value });
            },
        };
    },

    getInitialState: function() {
        return {
            inputValue: this.props.initialValue
        };
    },

    renderErrors: function() {
        return this.props.errors.map((error) => {
            return (<div className="ui visible warning message">{error}</div>);
        });
    },

    renderLabel: function() {
        if (_.isEmpty(this.props.label)) return (null);
        return (<label>{this.props.label}</label>);
    },

    render() {
        console.log("Hi!", this);

        return (
            <div className="field">
                {this.renderLabel()}
                <input
                    type="text" 
                    {...this.props.attributes}
                    onChange={this.props.handleChange.bind(this)} 
                    value={this.state.inputValue} />
                {this.renderErrors()}
            </div>
        );
    }
});