import Autosuggest from 'react-autosuggest';
import React from 'react';




// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, values) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : values.filter(lang =>
    lang.value.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.value}
  </div>
);

export class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }
  

  onChange = (event, { newValue }) => {
    this.setState({
      value: !!newValue.value ? newValue.value : newValue
    });
    this.props.onAutocompleteValueChange(!!newValue.value ? newValue.value : newValue);   
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.autoCompleteValues)
    }); 
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // handleLangChange = () => {
  //   this.props.onSelectLanguage('praveen');            
  // };

  render() {

    // Imagine you have a list of languages that you'd like to autosuggest.
    const languages = this.props.autoCompleteValues;

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Locality, City or Zip Code',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}