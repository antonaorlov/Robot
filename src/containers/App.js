import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { robots } from "./robots";
import ErrorBoundry from '../components/ErrorBoundry'
//PROPS are things that come form STATE
//STATE Is an obejct that Description the application
//STATE >> PROPS

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  //Order: Constructor render componentDidMount Render  (redner twice due to state changes in componentdidmount)
  // componentDidMount(){ //when page refreshes this emthod called
  //     fetch('https://jsonplaceholder.cypress.io/todos/1')
  //     .then((response) => response.json())
  //     .then(users=>{
  //         this.setState({robots:users});
  //     })

  // }

  onSearchChange = (event) => {
    //use arrows if making own function
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOTS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
