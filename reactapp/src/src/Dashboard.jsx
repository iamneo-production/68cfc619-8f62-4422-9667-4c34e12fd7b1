import React from 'react';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dash">
      <div className="dash-task-manager">
        <div className="dash-left-bar">
          <div className="dash-upper-part">
          </div>

          <div className="dash-left-content">
            <ul className="dash-action-list">
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=7856&format=png" alt="" />
                <span> All</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=47238&format=png" alt="" />
                <span>Important</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=svtnhdRW69p0&format=png" alt="" />
                <span>Upcoming</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=15929&format=png" alt="" />
                <span>Pending</span>
              </li>

              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=11668&format=png" alt="" />
                <span>Notifications</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=110360&format=png" alt="" />
                <span>Chat Room</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=124442&format=png" alt="" />
                <span>Inbox</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=7837&format=png" alt="" />
                <span>Trash</span>
              </li>
            </ul>

            <ul className="dash-category-list">
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=OWi1FRGoDmTl&format=png" alt="" />
                <span>Study Plan</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=EgI9TcxOImkf&format=png" alt="" />
                <span>Menstruation</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=9796&format=png" alt="" />
                <span>Fitness</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=35588&format=png" alt="" />
                <span>Health</span>
              </li>
              <li className="dash-item">
                <img className="bad" src="https://img.icons8.com/?size=512&id=33902&format=png" alt="" />
                <span>Entertainment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="dash-page-content">
          <div className="dash-header">To-Do Sprint</div>
          <div className="dash-content-categories">
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-1" checked/>
              <label className="dash-category" htmlFor="opt-1">All</label>
            </div>
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-2" />
              <label className="dash-category" htmlFor="opt-2">Important</label>
            </div>
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-3" />
              <label className="dash-category" htmlFor="opt-3">Upcoming</label>
            </div>
            <div className="dash-label-wrapper">
              <input className="dash-nav-item" name="nav" type="radio" id="opt-4" />
              <label className="dash-category" htmlFor="opt-4">Pending</label>
            </div>
          </div>

          <div className="dash-tasks-wrapper">
            <div className="dash-task">
              <label htmlFor="item-1">
                <span className="dash-label-text">Movie with friends at PVR</span>
              </label>
              <span className="dash-tag approved">Completed</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-2">
                <span className="dash-label-text">Group study</span>
              </label>
              <span className="dash-tag repeated">Repeated</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-3">
                <span className="dash-label-text">Sleep</span>
              </label>
              <span className="dash-tag approved">Completed</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-8">
                <span className="dash-label-text">Buy groceries</span>
              </label>
              <span className="dash-tag delayed">Delayed</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-4">
                <span className="dash-label-text">Walk at the park</span>
              </label>
              <span className="dash-tag approved">Completed</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-5">
                <span className="dash-label-text">Dinner at home</span>
              </label>
              <span className="dash-tag progress">In Progress</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-7">
                <span className="dash-label-text">Visit the Chapel</span>
              </label>
              <span className="dash-tag failed">Failed</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-10">
                <span className="dash-label-text">Write Diary</span>
              </label>
              <span className="dash-tag archieve">Archive</span>
            </div>
            

            <div className="dash-task">
              <label htmlFor="item-9">
                <span className="dash-label-text">Attend coding contest</span>
              </label>
              <span className="dash-tag postponed">Postponed</span>
            </div>
            <div className="dash-task">
              <label htmlFor="item-6">
                <span className="dash-label-text">Hangout with friends</span>
              </label>
              <span className="dash-tag waiting">Deleted</span>
            </div>
          </div>
        </div>

        <div className="dash-right-bar">
          <div className="dash-top-part">
            <img className="top" src="https://img.icons8.com/?size=512&id=23265&format=png" alt="" />
            <div className="dash-count">A</div>
          </div>
          <div className="dash-header">Schedule For Today</div>
          <div className="dash-right-content">
            <div className="dash-task-box dash-yellow">
              <div className="dash-description-task">
                <div className="dash-time">08:00 - 09:00 AM</div>
                <div className="dash-task-name">Movie</div>
              </div>
              <div className="dash-members">
                <img className="mem"src={img7} alt="member" />
                <img className="mem"src={img2} alt="member-2" />
                <img className="mem"src={img3} alt="member-3" />
                <img className="mem"src={img4} alt="member-4" />
              </div>
            </div>
            <div className="dash-task-box dash-blue">
              <div className="dash-description-task">
                <div className="dash-time">10:00 - 11:00 AM</div>
                <div className="dash-task-name">Group Study</div>
              </div>
              <div className="dash-members">
                <img className="mem"src={img8} alt="member" />
                <img className="mem"src={img2} alt="member-2" />
                <img className="mem"src={img3} alt="member-3" />
              </div>
            </div>
            <div className="dash-task-box dash-red">
              <div className="dash-description-task">
                <div className="dash-time">01:00 - 02:00 PM</div>
                <div className="dash-task-name">Sleep</div>
              </div>
              <div className="dash-members">
                <img className="mem"src={img2} alt="member" />
              </div>
            </div>
            <div className="dash-task-box dash-green">
              <div className="dash-description-task">
                <div className="dash-time">03:00 - 04:00 PM</div>
                <div className="dash-task-name">Walking</div>
              </div>
              <div className="dash-members">
                <img className="mem"src={img4} alt="member" />
                <img className="mem"src={img2} alt="member-2" />
              </div>
            </div>
            <div className="dash-task-box dash-blue">
              <div className="dash-description-task">
                <div className="dash-time">08:00 - 09:00 PM</div>
                <div className="dash-task-name">Dinner</div>
              </div>
              <div className="dash-members">
                <img className="mem"src={img4} alt="member" />
                <img className="mem"src={img8} alt="member-2" />
                <img className="mem"src={img3} alt="member-3" />
                <img className="mem"src={img2} alt="member-4" />
              </div>
            </div>
            <div className="dash-task-box dash-yellow">
              <div className="dash-description-task">
                <div className="dash-time">11:00 - 12:00 PM</div>
                <div className="dash-task-name">Hangout</div>
              </div>
              <div className="dash-members">
                <img className="mem"src={img2} alt="member" />
                <img className="mem"src={img8} alt="member-2" />
                <img className="mem"src={img3} alt="member-3" />
                <img className="mem"src={img4} alt="member-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


