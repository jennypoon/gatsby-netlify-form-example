import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <form
          name="rsvp_yes"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              First and Last Name:<br />
              <input type="text" name="guest_name" onChange={this.handleChange} required/>
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" placeholder="email@email.com" name="email" onChange={this.handleChange} required/>
            </label>
          </p>
          <p>
            <label>
              Number of Seats to Reserve<br />
              <input type="number" name="seat_count" placeholder="#" onChange={this.handleChange} required/>
            </label>
          </p>

          <p>
            <label>
              Guests Full Name<br />
              <input type="text" name="plus_ones" onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              Mailing Address:<br />
              <textarea type="text" name="address" placeholder="111 Abc Street, City, X1X 1X1" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
