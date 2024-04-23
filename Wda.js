import React from "react";
import "../style/wda.css";
import { Link } from "react-router-dom";

const Wda = () => {
  return (
    <>
      <div class="container">
        <div class="one">
          <div class="one_p">
            <div class="i">
              <img src="https://thewritersblockph.files.wordpress.com/2021/02/fairlyn.png?w=748" height="40px" width="40px" />
            </div>
            <div class="t">Welcome!</div>
          </div>
          <div class="one_b">
            <div>
              <button>
                <img src="https://th.bing.com/th/id/OIP.1ZRO08RKn07WF7h-d5yE9AHaG1?w=1061&h=980&rs=1&pid=ImgDetMain" height="20px" width="20px" />
                <Link to="/1">Take a quiz!</Link>
              </button>
            </div>

            <div>
              <button>
                <img src="https://th.bing.com/th/id/OIP.cufCzEe_CbR1IjrtbWrkRwAAAA?rs=1&pid=ImgDetMain" height="20px" width="20px" />
                <Link to="/contact">Contact</Link>
              </button>
            </div>
            <div>
              <button>
                <img src="https://th.bing.com/th/id/OIP.KUkS6P-lkQqCYs0G410hWwHaHa?rs=1&pid=ImgDetMain" height="20px" width="20px" />
                <Link to="/about">About Us</Link>
              </button>
            </div>
            <div>
              <button>
                <img src="https://th.bing.com/th/id/OIP.3xL61Yd44XAA_o1xZH66SQHaHE?w=920&h=879&rs=1&pid=ImgDetMain" height="20px" width="20px" />
                <Link to="/home">Home</Link>
              </button>
            </div>
          </div>
        </div>
        <div class="two">
          <div class="nav">
            <div>
              <div class="title">

                EduWiz
              </div>
            </div>
            <div class="search">
              <input type="search" placeholder="search here" />
            </div>
          </div>
          <div class="slides">
            <div class="aa">
              <div class="a" id="ek" onclick="ek()">
                <div class="a1">
                  <img src="https://media.istockphoto.com/id/1097811822/photo/bookshelf-of-irish-legal-books.webp?b=1&s=170667a&w=0&k=20&c=74NKH9fFgNCD0iZlzpjaRj4WacH2jm-B2AunFvKBj34=" height="90px" width="100px" />
                </div>
                <div class="a2">
                  <div class="a3">English 101</div>
                  <div class="a4">Learn the basics</div>
                  <div class="a5">34 students</div>
                  <div class="a6">Lessons 8/12</div>
                  <div class="a7">67% completed</div>
                </div>
              </div>
              <div class="a" id="do" onclick="panch()">
                <div class="a1">
                  <img src="https://th.bing.com/th/id/OIP.RieeWCQGeYXBKd3vqWnp7gHaEK?w=800&h=450&rs=1&pid=ImgDetMain" height="90px" width="100px" />
                </div>
                <div class="a2">
                  <div class="a3">Trigonometry</div>
                  <div class="a4">Graph of tangent function</div>
                  <div class="a5">42 students</div>
                  <div class="a6">Lessons 9/10</div>
                  <div class="a7">90% completed</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bb">
            <div class="a" id="teen" onclick="teen()">
              <div class="a1">
                <img src="https://th.bing.com/th/id/OIP.ZdLDjeiahTYszdL6a7z4IQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain" height="90px" width="100px" />
              </div>
              <div class="a2">
                <div class="a3">World Economy</div>
                <div class="a4">Leading Markets</div>
                <div class="a5">53 students</div>
                <div class="a6">Lessons 6/11</div>
                <div class="a7">55% completed</div>
              </div>
            </div>
            <div class="a" onclick="chaar()">
              <div class="a1">
                <img src="https://i.ytimg.com/vi/ag3WIHia74M/hqdefault.jpg" height="90" width="100px" />
              </div>
              <div class="a2">
                <div class="a3">Human Biology</div>
                <div class="a4">How the brain works?</div>
                <div class="a5">27 students</div>
                <div class="a6">Lessons 2/7</div>
                <div class="a7">29% completed</div>
              </div>
            </div>
          </div>
          <div class="fi">
                <div class="todo">
                    <div id="app"></div>
                 
                </div>
                <div class="quote">" The beautiul thing about <span>learning</span> is that no one can take it away from
                    you."</div>
            </div>
        </div>

        <div class="three">
          <div class="title2">Ongoing Lesson</div>
          <div class="video" onclick="cheh()">
            <div class="pic">
              <img src="https://www.d4clinic.ie/wp-content/uploads/2013/11/spl026900.jpg" height="130px" width="210px" />
            </div>
            <div class="v1">Science Basics</div>
            <div class="v2">students online : 34/67</div>
            <div class="v3">ends in 43 mins</div>
          </div>
          <div class="title3">Your Quizzes</div>
          <div class="quiz">
            <div class="q1">
              <div class="icon"></div>
              <div class="texts1">Linear Algebra</div>

              <div class="per">98%</div>
            </div>
            <div class="q1">
              <div class="icon"></div>
              <div class="texts1">Modern History</div>
              <div class="per">72%</div>
            </div>
            <div class="q1">
              <div class="icon"></div>
              <div class="texts1">S-block elements</div>
              <div class="per">84%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="four">
        <div class="f1">
          <table
            cellpadding-left="40px"
            cellpadding-right="40px"
            cellpadding="5px"
            cell
            spacing="50px"
            width="600px"
          >
            <tr>
              <th>Contact Us</th>
              <th>Quick Links</th>
              <th>Follow Us</th>
            </tr>
            <tr>
              <td>FAQs</td>
              <td>
                <Link to="/home">Home</Link>
              </td>
              <td cellpadding-left="60px">
                <div class="socials">
                  <div class="insta" onclick="insta()">
                  <img src="https://th.bing.com/th/id/OIP.EG7xKNfFkC6AVFyaV3KBxAHaHa?w=512&h=512&rs=1&pid=ImgDetMain" height="20px" width="20px"/>
                  </div>
                  <div class="fb" onclick="fb()">
                  <img src="https://th.bing.com/th/id/OIP.srdUFqsSrfDXiY2dMQyQvwHaHa?rs=1&pid=ImgDetMain" height="20px" width="20px"/>
                  </div>
                  <div class="lin" onclick="in()">
                  <img src="https://th.bing.com/th/id/OIP.7VqKnlo-T5YgCyg_AmPeCwHaHa?w=1067&h=1067&rs=1&pid=ImgDetMain" height="20px" width="20px"/>
                  </div>
                  <div class="twit" onclick="twit()">
                  <img src="https://media.tenor.com/A4SMkb7kCGUAAAAC/twitter.gif" height="20px" width="20px"/>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Post a query</td>
              <td>
                <Link to="/contact">Contact Us</Link>
              </td>
            </tr>
            <tr>
              <td>Post a query</td>
              <td>
                <Link to="/about">About Us</Link>
              </td>
            </tr>
            <tr>
              <td>Give your Feedback</td>
              <td>
                <a href="">Services</a>
              </td>
            </tr>
            <tr>
              <td>+91 742345678</td>
            </tr>
            <tr>
              <td>EduWizlearn@gmail.com</td>
            </tr>
          </table>
        </div>
        <div class="f2">
          <img src="https://cdn-icons-png.flaticon.com/256/104/104663.png" height="20px" width="20px" /> 2023 your company
          .All rights reserved
        </div>
      </div>
    </>
  );
};

export default Wda;
