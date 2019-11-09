import React, { Component } from "react";
import ImageCards from "./ImageCards";

class SearchBar extends Component {
  state = {
    userSearchTerm: ""
  };

  onChange = e => {
    console.log("This is the onChange function", e.target.value);
    this.setState({
      userSearchTerm: e.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    let term = this.state.userSearchTerm;
    // let selectedPage = this.state.clickedPage;
    this.props.userSearchTerm(term);
  };

  render() {
    return (
      <div>
        <div className="search-bar ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>SEARCH FOR A GITHUB USER IN BANGALORE  </label>
              <input
                type="text"
                placeholder="Search"
                value={this.state.userSearchTerm}
                onChange={this.onChange}
              />
            </div>
          </form>
        </div>
        {/* <ImageCards clickedPage={this.clickedPage()} /> */}
      </div>
    );
  }
}

export default SearchBar;
