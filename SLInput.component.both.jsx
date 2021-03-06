// slInput component - represents a single input item
SLInput = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        value: React.PropTypes.any,
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

    inputValue: function() {
      if (!_.isUndefined(this.props.value)) {
        return this.props.value
      }
      else {
        return this.state.inputValue
      }
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

    handleChange(e) {
        this.setState({inputValue:e.target.value})
        if (this.props.handleChange)
          this.props.handleChange(e)
    },

    render() {
        var fieldCssClasses = _.isEmpty(this.props.errors) ? "field" : "field error";

        return (
            <div className={fieldCssClasses}>
                {this.renderLabel()}
                {this.renderErrors()}
                <input
                    type="text"
                    {...this.props.attributes}
                    onChange={this.handleChange}
                    value={this.inputValue()} />
            </div>
        );
    }
});
