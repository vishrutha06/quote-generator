import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const quotes = [
  {
    quote: "All our dreams can come true; if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    quote: "However difficult life may seem, there is always something you can do and succeed at",
    author: "Stephen Hawking"
  },
  {
    quote: "People begin to become successful the minute they decide to be",
    author: "Harvey MacKay"
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  { quote: "Nothing is impossible, the word itself says ‘I’m possible’!”", author: " Audrey Hepburn" },
  {
    quote: "Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.",
    author: "Dwayne Johnson"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Do what you can, with what you’ve got, where you are.",
    author: "Teddy Roosevelt"
  },
  {
    quote: "Success consists of going from failure to failure without loss of enthusiasm",
    author: "Winston Churchill"
  },
  {
    quote: "Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.",
    author: "Amelia Earhart"
  },
  {
    quote: "Victory is sweetest when you’ve known defeat.",
    author: "Malcolm S. Forbes"
  }
];

const colors = [
  "#D99AAB",
  "#1FA675",
  "#0D688C",
  "#0889A6",
  "#BF9411",
  "#D99AAB",
  "#BF9411",
  "#0D688C",
  "#1FA675",
  "#0889A6",
  "#F27C38",
  "#F27C38"
];

class MyReactElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Your attitude determines your direction.",
      author: "Ralph Waldo Emerson",
      color: "#0889A6"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    this.setState({
      quote: quotes[randomNumber].quote,
      author: quotes[randomNumber].author,
      color: colors[randomNumber]
    });
  }

  render() {
    return (
      <div
        id="main"
        style={{
          backgroundColor: this.state.color,
          transition: "background-color 1s"
        }}
      >
      <h1>QUOTES</h1>
        <div id="quote-box">
          <div id="text-box">
            <i
              className="fa fa-quote-left"
              id="quote-left"
              style={{
                color: this.state.color,
                transition: "background-color 1s"
              }}
            >
              {" "}
            </i>
            <p
              id="text"
              style={{
                color: this.state.color,
                transition: "background-color 1s"
              }}
            >
              {this.state.quote}
            </p>
          </div>
          <p
            id="author"
            style={{
              color: this.state.color,
              transition: "background-color 1s"
            }}
          >
            -{this.state.author}
          </p>
          <div id="buttons">
            <div>
              <button
                id="button"
                onClick={this.handleClick}
                style={{
                  backgroundColor: this.state.color,
                  transition: "background-color 1s",
                  color: "black"
                }}
              >
                **CLICK FOR MORE QUOTES**
              </button>
            </div>
            <div>
              <a
                id="tweet-quote"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet/?text=${
                  this.state.quote
                } - ${this.state.author}`}
                
              >
                <button
                  id="button"
                  style={{
                    backgroundColor: this.state.color,
                    transition: "background-color 1s"
                    
                  }}
                >
                  <i
                    className="fab fa-twitter"
                    style={{
                      color: "Black"
                    }}
                    >
                      Twitter
                    </i>
                  
                </button>
              </a>
            </div>
          </div>
        </div>
        <section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
						</h1>
						<p class="text-small">
							
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					# BY VISHRUTHA R K#
				</p>
			</footer>
      </div>
      
    );
  }
}
ReactDOM.render(<MyReactElement />, document.getElementById("root"));
