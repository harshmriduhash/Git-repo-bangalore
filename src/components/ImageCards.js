import React, { Component } from "react";

class ImageCards extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onClickpage = this.onClickpage.bind(this);
  // }
  state = {
    avatar: '',
    login:  ''
  };
  onClickImage = (forks, avatar, login, html_url, score) => {
    this.setState({
      avatar,
      forks,
      login,
      html_url,
      score
    });
  };
  componentDidMount=()=>{
    if(this.props.data[0]){

      this.setState({
        avatar: this.props.data[0].avatar_url,
        login: this.props.data[0].login
      })
    }
  }

  componentWillReceiveProps=()=>{
    if(this.props.data[0]){

      this.setState({
        avatar: this.props.data[0].avatar_url,
        login: this.props.data[0].login
      })
    }
  }
  onClickpage = index => {
    this.props.index(index);
  };

  render() {
    // console.log("edeff", this.props.data[0].avatar_url);
    // if(!this.props.data[0]) return ;
    let users = this.props.data;
    let s = [1, 2, 3, 4, 5];
    let pagination = s.map((page, index) => {
      let index1 = index + 1;
      console.log("d==>", index1);
      return (
        <div>
          <a className="active item" onClick={() => this.onClickpage(index1)}>
            {index1}
          </a>
        </div>
      );
    });
    let renderUsers = this.props.data.map((user, index) => {
      return (
        <div
          className="ui items"
          //  onClick={() => this.onClickImage(user.forks, users.items[index].owner.avatar_url)}
          onClick={() =>
            this.onClickImage(
              user.forks,
              users[index].avatar_url,
              users[index].login,
              users[index].html_url,
              users[index].score
            )
          }
        >
          <div className="item">
            <a className="ui tiny image">
              <img src={users[index].avatar_url} />
            </a>
            <div className="content">
              <a className="header">{users[index].login}</a>
              <div className="description" />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="wrapper">
        <div>
          <h2 className="header1">USER</h2>
          <div className="ui card userRender">
            <div className="image">
              <img src={this.state.avatar} />
            </div>
            <div class="content">
              <a class="header">{this.state.login}</a>
              <div class="meta">
                <span class="date">SCORE:{this.state.score}</span>
              </div>
              <div class="description">
                <a href={this.state.html_url}>
                  Click here for {this.state.login} github page
                </a>
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="archive icon" />
                FORKS:{this.state.forks}
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="header1">USERS</h2>
          <div
            className="renderUsers renderUsersScroll"
            style={{ width: "400px" }}
          >
            {renderUsers}
          </div>
          <div class="ui pagination menu">{pagination}</div>
        </div>
      </div>
    );
  }
}

export default ImageCards;
