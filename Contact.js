import React from 'react'
import '../style/contact.css';

const Contact = () => {
  return (
    <>
     <div class="title"><div class="t"><img src="" height="50px" width="50px"/> EduWiz</div></div>
     <div class="container">
    
    <div class="one">
{/* <img src="https://th.bing.com/th/id/OIP.O-4UjsFbmQe225qkXLo8yQHaHa?w=626&h=626&rs=1&pid=ImgDetMain"/> */}
    </div>
    <div class="two">
      <div class="text">CONTACT US</div>
      <div class="form">
<form>
  <div class="n"> Type Username: <input type="text"/></div>
 <div class="n"> Type Email address:<input type="email"/></div> 
 <div class="n">Confirm Email:<input type="email"/></div> 
 <div class="n">Type your message here:<input type="textarea"/></div> 
 <div class="n"><button>SUBMIT</button><button>RESET</button></div>
</form>
</div>
    </div>
  </div>
  <div class="four">
  <div class="f1">
  <table cellpadding-left="40px" cellpadding-right="40px" cellpadding="5px" cell spacing="50px" width="600px">
                <tr>
                    <th>Contact Us</th>
                    <th>Quick Links</th>
                    <th>Follow Us</th>
                </tr>
                <tr>
                    <td>FAQs</td>
                    <td><a href="">Home</a></td>
                    <td cellpadding-left="60px">
                        <div class="socials">
                            <div class="insta" ><img src="https://th.bing.com/th/id/OIP.EG7xKNfFkC6AVFyaV3KBxAHaHa?w=512&h=512&rs=1&pid=ImgDetMain" height="20px" width="20px"/>
                            </div>
                            <div class="fb"><img src="https://th.bing.com/th/id/OIP.srdUFqsSrfDXiY2dMQyQvwHaHa?rs=1&pid=ImgDetMain" height="20px" width="20px"/></div>
                            <div class="lin"><img src="https://th.bing.com/th/id/OIP.7VqKnlo-T5YgCyg_AmPeCwHaHa?w=1067&h=1067&rs=1&pid=ImgDetMain" height="20px" width="20px"/></div>
                            <div class="twit" ><img src="" height="20px" width="20px"/></div>


                        </div>
                    </td>


                </tr>
                <tr>
                    <td>Post a query</td>
                    <td><a href="contact.html">Contact Us</a></td>
                </tr>
                <tr>
                    <td>Post a query</td>
                    <td><a href="about.html">About Us</a></td>

                </tr>
                <tr>
                    <td>Give your Feedback</td>
                    <td><a href="">Services</a></td>

                </tr>
                <tr>
                    <td>+91 742345678</td>


                </tr>
                <tr>
                    <td>EduWizlearn@gmail.com</td>


                </tr>



            </table>
  </div>
</div>
    </>
  )
}

export default Contact
