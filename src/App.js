import React, { Component, canvas } from 'react';
import logo from './assets/logo.svg';
import userpic from './assets/default-user-pic.svg';
import gmappic from './assets/capture-e1552573152526.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      food: false,
      confirm: false,
    };
  }
  togglelocation = () => {
    if (this.state.location) {
      this.setState({ location: false });
    } else {
      this.setState({ location: true });
    }
  };
  render() {
    let location;
    if (this.state.location)
      location = (
        <div>
          <img
            src={gmappic}
            height={150}
            width={1050}
            style={{ marginTop: '-0.8%' }}
          />
          <input
            style={{
              position: 'absolute',
              marginLeft: '-50%',
              width: '20%',

              marginTop: '3%',
            }}
          />
          <div>
            <div
              style={{
                backgroundColor: '#f2e0db',
                width: '20%',

                marginLeft: '15%',
              }}
            >
              <p style={{ color: 'black' }}>Covent Garden</p>
              <div>
                <button
                  style={{
                    backgroundColor: '#fdeae5',
                    marginBottom: '10%',
                    width: '80%',
                    color: 'red',
                  }}
                >
                  Order
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#f2e0db',
                width: '20%',
                position: 'absolute',
                marginLeft: '40%',
                marginTop: '-9%',
              }}
            >
              <p style={{ color: 'black' }}>Covent Garden</p>
              <div>
                <button
                  style={{
                    backgroundColor: '#fdeae5',
                    marginBottom: '10%',
                    width: '80%',
                    color: 'red',
                  }}
                >
                  Order
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#f2e0db',
                width: '20%',
                position: 'absolute',
                marginLeft: '65%',
                marginTop: '-9%',
              }}
            >
              <p style={{ color: 'black' }}>Covent Garden</p>
              <div>
                <button
                  style={{
                    backgroundColor: '#fdeae5',
                    marginBottom: '10%',
                    width: '80%',
                    color: 'red',
                  }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    else location = <div />;
    return (
      <div className="App">
        <div className="mainDiv">
          <div>
            <img src={logo} alt="logo" style={{ marginTop: '2%' }} />

            <img
              src={userpic}
              alt="logo"
              style={{
                position: 'absolute',
                marginLeft: '24%',
                marginTop: '3%',
              }}
            />

            <a
              href="#"
              style={{
                color: 'black',
                position: 'absolute',
                marginLeft: '27%',
                marginTop: '4%',
                fontSize: '50',
                fontFamily: 'bold',
              }}
            >
              Login
            </a>
          </div>
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 5,
              width: '70%',
            }}
          />
          <div />
          <div>
            <p
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 30,
                marginTop: '-0.5%',
              }}
            >
              order & collect
            </p>
          </div>
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 3,
              width: '70%',
              marginTop: '-1%',
            }}
          />
          <div>
            <a
              href="#"
              onClick={this.togglelocation}
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: '-61%',
              }}
            >
              1 Pick a location
            </a>
          </div>
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 1,
              width: '70%',
            }}
          />
          {location}
          <div>
            <a
              href="#"
              onClick={this.togglelocation}
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: '-60%',
              }}
            >
              2 Select your food
            </a>
          </div>
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 1,
              width: '70%',
            }}
          />
          <div>
            <a
              href="#"
              onClick={this.togglelocation}
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: '-63%',
              }}
            >
              3 Payment
            </a>
          </div>
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 1,
              width: '70%',
            }}
          />
          <div>
            <a
              href="#"
              onClick={this.togglelocation}
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: '-63%',
              }}
            >
              4 Confirm
            </a>
          </div>
          <hr
            style={{
              color: 'black',
              backgroundColor: 'black',
              height: 1,
              width: '70%',
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
