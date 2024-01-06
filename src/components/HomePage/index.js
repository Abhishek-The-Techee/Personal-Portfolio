import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Portfolio extends Component {
  state = {
    projectName: "",
    projectLink: "",
    description: "",
  };

  onChangeProjectName = (event) => {
    this.setState({ projectName: event.target.value });
  };

  onChangeProjectLink = (event) => {
    this.setState({ projectLink: event.target.value });
  };

  onChangeProjectDesc = (event) => {
    this.setState({ description: event.target.value });
  };

  renderProjectName = () => {
    const { projectName } = this.state;

    return (
      <div className="form-fields-container">
        <label htmlFor="name" className="label-text">
          Project Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          className="input-box"
          value={projectName}
          onChange={this.onChangeProjectName}
        />
      </div>
    );
  };

  renderProjectLink = () => {
    const { projectLink } = this.state;

    return (
      <div className="form-fields-container">
        <label htmlFor="link" className="label-text">
          Project Link
        </label>
        <br />
        <input
          type="text"
          id="link"
          className="input-box"
          value={projectLink}
          onChange={this.onChangeProjectLink}
        />
      </div>
    );
  };

  renderProjectDesc = () => {
    const { description } = this.state;

    return (
      <div className="form-fields-container">
        <label htmlFor="desc" className="label-text">
          Description
        </label>
        <br />
        <textarea
          rows="4"
          cols="50"
          type="text"
          id="desc"
          className="input-box textarea-box"
          value={description}
          onChange={this.onChangeProjectDesc}
        />
      </div>
    );
  };

  onSubmitForm = (event) => {
    event.prevent.default();
  };

  render() {
    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="left-container">
            <p className="name">Abhishek</p>
            <div className="about-section">
              <p className="designation">UI/UX DESIGNER</p>
              <h1 className="bold-name">Hello, my name is Abhishek</h1>
              <p className="desc">
                I'm Abhishek, I have completed MCA, Now I enrolled with Nxtwave
                in Nxtwave I'm learning 4.0 technologies.
              </p>
              <div className="buttons-container">
                <button className="projects-btn">Projects</button>
                <button className="LinkedIn-btn">LinkedIn</button>
              </div>
            </div>
          </div>
          <div className="right-container">
            <p className="name text-padding">About</p>
            <p className="name text-padding">Projects</p>
            <p className="name text-padding">Contacts</p>
          </div>
        </div>
        <div className="form-container">
          <h1 className="bold-name text-margin">Add Project</h1>
          <hr className="under-line" color="orange" />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {this.renderProjectName()}
            {this.renderProjectLink()}
            {this.renderProjectDesc()}
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>

          <img
            src="https://res.cloudinary.com/dnebrhaqh/image/upload/v1704432927/Vector_n3tjd6.png"
            className="bottom-img"
            alt="bottom bg"
          />
        </div>
      </div>
    );
  }
}
export default Portfolio;
