import { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItems: {
        id: "",
        text: "",
      },
    };
  }
  handleChange(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        id: uuidv4(),
      },
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("items", this.state.items);
    const newItems = this.state.currentItems;
    if (newItems.text !== "") {
      const item = [...this.state.items, newItems];
      this.setState({
        items: item,
        currentItems: {
          text: "",
          id: "",
        },
      });
    }
    console.log('userId', this.state.items.id)
  }
  deleteItem(id) {
    const { items } = this.state;
   console.log('id', items.id)
    return items.filter(user=> user.id !== id)
  }
  mapItems = () =>
    
    this.state.items.map((user) => (
      
      <div className="list" key={user.id}>
        <h2>{user.text}</h2>
        <button onClick={() => this.deleteItem(this.state.items.id)}>delete</button>
      </div>
    ));
  render() {
    const { text } = this.state.currentItems;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={text}
            onChange={(e) => this.handleChange(e)}
            placeholder="Enter text"
          />
          <button type="submit" onSubmit={(e) => this.handleSubmit(e)}>
            Enter
          </button>
        </form>
        <div>{this.mapItems()}</div>
      </div>
    );
  }
}

export default App;
