import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>RSVP</h1>
        <p>
        Can we expect you on September 2, 2019?
        </p>
        <ul>
          <li><Link to="/rsvp_no/">No</Link></li>
          <li><Link to="/rsvp_yes/">Yes</Link></li>
        </ul>
      </div>
    );
  }
}
