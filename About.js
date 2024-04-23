import React from 'react'
import '../style/about.css';

const About = () => {
  return (
    <>
    <header>
        <h1 class="tenth" >About Us</h1>
    </header>

    <main>
    <section class="team-section">
            <h2 class="mb-4" >Our Team</h2>
            <div class="team-members">
                <article class="team-member" onclick="toggleInfo(this)">
                    <img src="https://c8.alamy.com/comp/2AB7K6M/friends-having-fun-at-restaurant-three-boys-and-two-girls-making-selfie-and-laughing-on-foreground-boy-holding-smart-phone-all-wear-casual-clothes-2AB7K6M.jpg" alt="Eshant Gupta" />
                    <div class="team-member-info">
                        <h5>Eshant Gupta</h5>
                        <p>Web Developer</p>
                    </div>
                </article>
                <article class="team-member" onclick="toggleInfo(this)">
                    <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="Safiya Nasir" />
                    <div class="team-member-info">
                        <h5>Safiya Nasir</h5>
                        <p>Designer</p>
                    </div>
                </article>
                <article class="team-member" onclick="toggleInfo(this)">
                    <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="Medha Bharadwaj" />
                    <div class="team-member-info">
                        <h5>Medha Bharadwaj</h5>
                        <p>Content Writer</p>
                    </div>
                </article>
                <article class="team-member" onclick="toggleInfo(this)">
                    <img src="https://www.gstatic.com/webp/gallery/3.jpg" alt="Swyam Kumar" />
                    <div class="team-member-info">
                        <h5>Swyam Kumar</h5>
                        <p>Marketing Specialist</p>
                    </div>
                </article>
                <article class="team-member" onclick="toggleInfo(this)">
                    <img src="https://www.gstatic.com/webp/gallery/4.jpg" alt="Prateek Misra" />
                    <div class="team-member-info">
                        <h5>Prateek Misra</h5>
                        <p>Project Manager</p>
                    </div>
                </article>
            </div>
        </section>


        <div class="what-we-do mt-4">
            <h2 class="mb-4" >What We Do</h2>
            <p class="lead">
                Our team provides an intuitive platform for youngsters who crave knowledge and have an interest in their fields. Our website does the same."Our mission is to empower young minds by offering a user-friendly space where they can explore and deepen their understanding of various subjects. We understand the importance of curiosity and passion in the learning journey, and our platform is designed to fuel these qualities.

            </p>
        </div>
        <div class="eleventh project-animation">
            <h2 class="twelve">
                Our Project
            </h2>
            <p >
                Through engaging content, interactive resources, and a supportive community, we aim to foster a love for continuous learning. Whether it's delving into the latest advancements in technology, exploring creative pursuits, or gaining insights into diverse fields, our website is a gateway to limitless possibilities.
            </p>
        </div>
        <footer>
        &copy; 2023 EduWiz
    </footer>



    </main>
    </>

  )
}

export default About
