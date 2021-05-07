import React from "react";


class Course extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className="course">
        <div className="courseImg" style={{backgroundImage:`url(${this.props.courseImg})`}} ></div>
        <div className="courseDesc">
          <h3 id="courseName">{this.props.courseName}</h3>
          <hr />
          <small>
            type : <span id="courseType">{this.props.courseType}</span>
          </small>
          <br />
          <small>
            status : <span id="status" style={{color:"green",fontWeight:"bold"}}>
              {
                this.props.completed?
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" style={{margin:"0px 5px",fontWeight:"bold"}} fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                </svg>
                :
                ''
              }
              {this.props.courseStatus}
            </span>
          </small>
        </div>
      </div>
    );
  }
}

export default Course;