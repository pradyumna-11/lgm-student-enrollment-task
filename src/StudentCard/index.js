import "./index.css";

const StudentCard = (props) => {
  const { studentCardDetails } = props;
  const {
    studentId,
    studentName,
    studentWebsite,
    studentImage,
    studentMail,
    studentGender,
    skillsList,
  } = studentCardDetails;
  const str = skillsList.join(",");
  console.log(studentWebsite, studentImage);
  return (
    <li className="student-card" id={studentId}>
      <div className="student-details">
        <h3 className="student-name">Name : {studentName}</h3>
        <p className="student-gender">Gender : {studentGender}</p>
        <p className="student-mail">Email : {studentMail}</p>
        <p className="student-website">
          Website : <a href="/">{studentWebsite}</a>
        </p>
        <p className="student-skills">Skills : {str}</p>
      </div>
      <img src={studentImage} className="student-image" alt="student-img" />
    </li>
  );
};

export default StudentCard;
