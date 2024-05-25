// Define the routes and corresponding content
const routes = {
    '#about': `
        <div class="text-content">
            <h1>Golibjon Sunatullaev</h1>
            <h3>Bachelor student</h3><br>
            <h4>Born: <strong>Uzbekistan, Samarkand province</strong></h4>
            <h4>Birthdate: <strong>2001.06.29</strong></h4>
            <h3>Career and Academic Highlights:</h3>
            <p>I am currently a <strong>4th-year bachelor’s student</strong> at <strong>Kangwon National University</strong> in South Korea, majoring in <strong>Computer Science and Engineering</strong>.</p>
            <p>My academic journey has been greatly supported by the prestigious <strong>Korean Government Scholarship</strong> (<strong>GKS</strong>), which covers all my educational expenses. This scholarship reflects my dedication to academic excellence and my potential in the field of computer science.</p>
            <p>I am incredibly grateful for the opportunity to work under the mentorship of <strong>Professor Kim Auk</strong>. His invitation to join the <strong>Human AI laboratory</strong> has been nothing short of life-changing. With his guidance and expertise, I have been able to delve into fascinating projects and expand my knowledge in the field of <strong>AI</strong>. Professor Kim Auk's dedication to nurturing talent and fostering an environment of growth has truly empowered me to reach new heights in my academic journey. I owe a tremendous debt of gratitude to him for believing in my potential and providing me with invaluable opportunities to learn and excel.</p>
        </div>
        <div class="image-content">
            <img src="3x4 rasm.jpg" alt="About Me Image">
        </div>`,

    '#interests': `
        <div class="text-content">
            <h2>Interests & Hobbies</h2>
            <p>When I’m not immersed in algorithms and coding, you’ll likely find me on the field, engaging in various sports activities. From <strong>football to ping pong, badminton to running, and even swimming</strong>—I thrive on the adrenaline rush that sports offer.</p>
            <p>But my interests aren’t limited to just sports. I’m also an <strong>avid reader</strong>, always eager to absorb new information, especially related to my field. And let’s not forget my love for <strong>travel</strong>! Exploring new places has become a rejuvenating escape for me, a way to recharge and unwind from the demands of academic life.</p>
            <h3>Important!</h3>
            <p>Above all, <strong>nothing compares to the joy of spending quality time with my Family</strong>. Their love and support are the pillars that keep me grounded and motivated through every twist and turn of my journey.</p>
        </div>
        <div class="image-content-interest">
            <img src="sport.jpg" alt="Interests and Hobbies Image">
        </div>
    `,
    '#contact': `
    <!-- Contact form -->
    
    <div class="text-content">
            <h2>Contact</h2>
            <h4>Alternatively you can contact me at:<br><br><strong>010-7359-9666</strong><br><strong><a href="mailto:gsunatullaev@gmail.com" style="color: #252525; text-decoration: underline;">gsunatullaev@gmail.com</a></strong>.</h4>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    `
};

// Function to handle navigation and load content
function loadContent(){
    const hash = window.location.hash || '#about';
    const content = routes[hash] || '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>';
    document.getElementById('content').innerHTML = content;
    setActiveLink(hash);    
}
// Function to set the active link
function setActiveLink(hash){
    document.querySelectorAll('nav a').forEach(link => {
        if(link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
}

// Initial content load
window.addEventListener('load',loadContent);

// Handle hash change (i.e., user navigates to a different "page")
window.addEventListener('hashchange', loadContent);
