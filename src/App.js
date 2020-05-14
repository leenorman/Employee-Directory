import API from "./API";

class App extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = "https://randomuser.me/api/?results=50&nat=us,dk,fr,gb";
    return fetch(url)
      .then((response) => response.json())
      .then((parsedJSON) => this.setState({ results: parsedJSON.results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <API dataObject={this.state.results} />
      </div>
    );
  }
}

export default App;
// class App extends React.Component {
//   state = {
//     users,
//     first: 1,
//     last: 1,
//     email: 1,
//     sort: "",
//     search: ""

//   }

//   handleNameSort = (name, order) => {
//     this.setState({
//       users: this.state.users.sort((a, b) => (a.name[name] > b.name[name] ? order : -order))
//     });
//   }

//   handleSort = (name, order) => {
//     this.setState({
//       users: this.state.users.sort((a, b) => (a[name] > b[name] ? order : -order))
//     });
//   }

//   searchFilter = (name) => {
//     this.setState({
//       users: users.filter(person => {
//         returnperson.name.first.toLowerCase().includes(name.toLowerCase())
//           || person.name.last.toLowerCase().includes(name.toLowerCase())
//           || PerformanceResourceTiming.email.replace(/\D/g, "").includes(name)
//           || person.email.includes(name)
//       }),
//       search: name

//   })
// }
//   render() {
//     return (
//       <div className="App">
//         <div className="nav navbar">
//           <Navbar />
//         </div>
//         <div className="container py-3 text-center">
//           <SearchBar />
//           <div className="card">
//             <UserList />
//             <input type="text" placeholder="Search by User Name" className="form-control text left" onChange={(e) => this.searchFilter(e.target.value)} />

//       </div>

//        <div className="filter d-flex justify-content-between h4">
//               <div className="">
//                 FIRST NAME
//                 <i className={this.state.first > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
//                   onClick={() => { this.handleNameSort("first", this.state.first); this.setState({ first: -this.state.first, sort:"first" }) }}></i>
//               </div>

//               <div className="">
//                   LAST NAME
//                 <i className={this.state.last > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
//                   onClick={() => { this.handleNameSort("last", this.state.last); this.setState({ last: -this.state.last, sort:"last" }) }}></i>
//               </div>

//               <div className="">
//                 EMAIL
//                 <i className={this.state.email > 0 ? "fas fa-sort-amount-down-alt" : "fas fa-sort-amount-up-alt"}
//               onClick={() => { this.handleSort("email", this.state.email); this.setState({ email: -this.state.email, sort: "email" }) }}></i>
//             </div>
//           </div>
//         </div>

//          <div>
//           {this.state.search? `Searching for "${this.state.search}" : `: ""}
//           Showing {this.state.employees.length} matching users
//           {this.state.sort? `, by ${this.state.sort} ${this.state[this.state.sort] < 0? "A-Z":"Z-A"}` : ""}
//         </div>

//         <div className="container flex-wrap">
//           {
//             this.state.users.map((users) => {
//               //console.log(user)
//               return (
//                 <UserList
//                   person={user}
//                 />
//               )
//             })
//           }
//         </div>
//       </div>
//     );
//   }
// };

// export default App;