import { Component } from "react";
import { v4 } from "uuid";
import StudentCard from "./StudentCard";
import "./App.css";

class App extends Component {
  state = {
    studentsList: [],
    studentName: "",
    studentMail: "",
    studentWebsite: "",
    studentImage: "",
    studentGender: "",

    skillsList: [],
    errorMsg: false,
  };

  onSubmitForm = (event) => {
    const {
      studentMail,
      studentName,
      studentGender,
      studentImage,
      studentWebsite,
      skillsList,
    } = this.state;

    event.preventDefault();

    if (
      studentName === "" ||
      studentWebsite === "" ||
      studentMail === "" ||
      studentImage === "" ||
      studentGender === "" ||
      skillsList.length === 0
    ) {
      this.setState({ errorMsg: true });
    } else {
      const { studentName, studentMail, studentGender, studentImage } =
        this.state;
      const newStudentItem = {
        studentId: v4(),
        studentName,
        studentMail,
        studentGender,
        studentImage,
        studentWebsite,
        skillsList,
      };
      const javaSkillEl = document.getElementById("javaSkill");
      javaSkillEl.checked = false;

      const htmlSkillEl = document.getElementById("htmlSkill");
      htmlSkillEl.checked = false;

      const cssSkillEl = document.getElementById("cssSkill");
      cssSkillEl.checked = false;
      const maleRadioButtonEl = document.getElementById("maleRadioButton");
      maleRadioButtonEl.checked = false;

      const femaleRadioButtonEl = document.getElementById("femaleRadioButton");
      femaleRadioButtonEl.checked = false;
      this.setState((prevState) => ({
        studentsList: [...prevState.studentsList, newStudentItem],
      }));
      this.setState({
        errorMsg: false,
        studentGender: "",
        studentImage: "",
        studentMail: "",
        studentName: "",
        studentWebsite: "",
        skillsList: [],
      });
    }
  };

  changeName = (event) => {
    this.setState({ studentName: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ studentMail: event.target.value });
  };

  changeGender = (event) => {
    this.setState({ studentGender: event.target.value });
  };

  changeWebsite = (event) => {
    this.setState({ studentWebsite: event.target.value });
  };

  changeImage = (event) => {
    this.setState({ studentImage: event.target.value });
  };

  addJavaSkill = () => {
    const { skillsList } = this.state;
    if (skillsList.length === 0 || !skillsList.includes("Java")) {
      this.setState((prevState) => ({
        skillsList: [...prevState.skillsList, "Java"],
      }));
    } else {
      const newSkillsList = skillsList.filter((each) => each !== "Java");
      this.setState({ skillsList: newSkillsList });
    }
  };

  addHtmlSkill = () => {
    const { skillsList } = this.state;
    if (skillsList.length === 0 || !skillsList.includes("Html")) {
      this.setState((prevState) => ({
        skillsList: [...prevState.skillsList, "Html"],
      }));
    } else {
      const newSkillsList = skillsList.filter((each) => each !== "Html");
      this.setState({ skillsList: newSkillsList });
    }
  };

  addCssSkill = () => {
    const { skillsList } = this.state;
    if (skillsList.length === 0 || !skillsList.includes("Css")) {
      this.setState((prevState) => ({
        skillsList: [...prevState.skillsList, "Css"],
      }));
    } else {
      const newSkillsList = skillsList.filter((each) => each !== "Css");
      this.setState({ skillsList: newSkillsList });
    }
  };

  clearDetails = () => {
    this.setState({
      studentGender: "",
      studentImage: "",
      studentMail: "",
      studentName: "",
      studentWebsite: "",
      skillsList: [],
    });
    const javaSkillEl = document.getElementById("javaSkill");
    javaSkillEl.checked = false;

    const htmlSkillEl = document.getElementById("htmlSkill");
    htmlSkillEl.checked = false;

    const cssSkillEl = document.getElementById("cssSkill");
    cssSkillEl.checked = false;

    const maleRadioButtonEl = document.getElementById("maleRadioButton");
    maleRadioButtonEl.checked = false;

    const femaleRadioButtonEl = document.getElementById("femaleRadioButton");
    femaleRadioButtonEl.checked = false;
  };

  render() {
    const {
      errorMsg,
      studentName,
      studentMail,
      studentImage,
      studentWebsite,
      studentsList,
    } = this.state;
    console.log(studentsList);
    return (
      <div className="bg-container">
        <div className="header-container">Student Enrollment Form</div>
        <div className="section-containers">
          <div className="section-1">
            <form className="student-form" onSubmit={this.onSubmitForm}>
              <h1 className="student-details">Student Details</h1>
              <div className="field-container">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input-field"
                  id="name"
                  onChange={this.changeName}
                  value={studentName}
                />
              </div>
              <div className="field-container">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                  id="email"
                  onChange={this.changeEmail}
                  value={studentMail}
                />
              </div>
              <div className="field-container">
                <label className="label" htmlFor="website">
                  Website
                </label>
                <input
                  type="text"
                  placeholder="Enter your website"
                  className="input-field"
                  id="website"
                  onChange={this.changeWebsite}
                  value={studentWebsite}
                />
              </div>
              <div className="field-container">
                <label className="label" htmlFor="image">
                  Image Link
                </label>
                <input
                  type="text"
                  placeholder="Enter your image link"
                  className="input-field"
                  id="image"
                  onChange={this.changeImage}
                  value={studentImage}
                />
              </div>
              <div className="field-container">
                <label className="label" htmlFor="Gender">
                  Gender
                </label>
                <div className="radios-outer-container">
                  <div className="radio-inner-container">
                    <input
                      type="radio"
                      name="gender"
                      className="radio-field"
                      onChange={this.changeGender}
                      id="maleRadioButton"
                      value="Male"
                    />
                    <label className="gender-label" htmlFor="maleRadioButton">
                      Male
                    </label>
                  </div>
                  <div className="radio-inner-container">
                    <input
                      type="radio"
                      name="gender"
                      className="radio-field"
                      onChange={this.changeGender}
                      id="femaleRadioButton"
                      value="Female"
                    />
                    <label className="gender-label" htmlFor="femaleRadioButton">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="field-container">
                <label className="label">Skills</label>
                <div className="skills-container">
                  <input
                    type="checkbox"
                    value="Java"
                    className="checkbox-button"
                    onChange={this.addJavaSkill}
                    id="javaSkill"
                  />
                  <label className="checkbox-label" htmlFor="javaSkill">
                    Java
                  </label>

                  <input
                    type="checkbox"
                    value="HTML"
                    className="checkbox-button"
                    onChange={this.addHtmlSkill}
                    id="htmlSkill"
                  />
                  <label className="checkbox-label" htmlFor="htmlSkill">
                    HTML
                  </label>

                  <input
                    type="checkbox"
                    value="CSS"
                    className="checkbox-button"
                    onChange={this.addCssSkill}
                    id="cssSkill"
                  />
                  <label className="checkbox-label" htmlFor="cssSkill">
                    CSS
                  </label>
                </div>
              </div>
              <div className="buttons-container">
                <button className="enroll-button" type="submit">
                  Enroll Student
                </button>
                <button
                  className="clear-button"
                  type="button"
                  onClick={this.clearDetails}
                >
                  Clear
                </button>
              </div>
              {errorMsg ? (
                <p className="error-msg">Please Enter all details</p>
              ) : null}
            </form>
          </div>
          <div className="section-2">
            <h3 className="students-heading">Enrolled Students</h3>
            <ul className="students-cards-container">
              {studentsList.map((each) => (
                <StudentCard studentCardDetails={each} key={each.studentId} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
