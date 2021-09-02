import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []      
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(result => result.json())
      .then(result =>
        this.setState({
          data: result
        })
      );
  }

   render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "No",
              accessor: "id",
            },
            {
              Header: "Title",
              accessor: "title",
            },
          ]}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));


