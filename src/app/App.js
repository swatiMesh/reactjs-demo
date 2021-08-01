import React from 'react';
import './App.css';
import Header from './common/header';
class App extends React.Component {

  render() {
    // const styles = {
    //   contentDiv: {
    //     display: "flex",
    //   },
    //   contentMargin: {
    //     marginLeft: "10px",
    //     width: "100%",
    //   },
    // };
    return (
      <>
        <div className="App">
              <Header></Header>
          {/* <div style={styles.contentDiv}>
            <div style={styles.contentMargin}>
              <h1 style={{ padding: "20%" }}>This is Content Area</h1>
            </div>
          </div> */}
        </div>
      </>

    );
  }
}

export default App;
