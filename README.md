<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Learning Platform</title>
</head>
<body>
    <h1>Professional Learning Platform</h1>

    <section>
        <h2>Overview</h2>
        <p>The <strong>Professional Learning Platform</strong> is a gamified, AI-driven web application designed to help users enhance their skills through personalized challenges, learning paths, and immersive training experiences. It enables users to track their learning progress, take on skill-based tasks, earn rewards, and discover courses tailored to their career goals. With AI-powered recommendations, users are guided toward the next skill they need to master, creating an engaging, interactive, and goal-oriented learning environment.</p>
    </section>

    <section>
        <h2>Features</h2>
        <ul>
            <li><strong>Skill Assessment & Personalization:</strong> Users input their current skill set, and the platform suggests personalized learning paths and challenges to enhance those skills.</li>
            <li><strong>Gamified Learning:</strong> Users earn scores and SkillSprint points by completing challenges and tasks, leveling up as they progress.</li>
            <li><strong>AI-Powered Challenges:</strong> The platform adapts to the user’s progress, presenting new challenges based on their level and learning goals.</li>
            <li><strong>Cross-Tech Tasks:</strong> Users are encouraged to tackle challenges from other domains (e.g., Business Analysis, Java) to gain a broader perspective and improve their problem-solving abilities.</li>
            <li><strong>AI Chat Feature:</strong> The AI chat guide offers advice on which skill to focus on next based on the user’s goals and current progress.</li>
            <li><strong>Interactive Courses:</strong> Courses are designed in a gamified format, making learning enjoyable and easy to understand.</li>
        </ul>
    </section>

    <section>
        <h2>Tech Stack</h2>
        <ul>
            <li><strong>Frontend:</strong> React.js (for a dynamic and responsive user interface)</li>
            <li><strong>Backend:</strong> Node.js with Express.js (for handling API requests and user data)</li>
            <li><strong>Database:</strong> MongoDB (for storing user progress, scores, and learning data)</li>
            <li><strong>AI Technologies:</strong>
                <ul>
                    <li>Machine Learning: Personalized skill recommendations based on user data</li>
                    <li>Natural Language Processing (NLP): AI chat feature for guidance and recommendations</li>
                </ul>
            </li>
            <li><strong>Authentication:</strong> JWT (JSON Web Tokens) for secure authentication</li>
            <li><strong>Styling:</strong> CSS and modern UI frameworks for a responsive and clean design</li>
        </ul>
    </section>

    <section>
        <h2>Installation</h2>
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (v14 or higher)</li>
            <li>MongoDB (local installation or MongoDB Atlas)</li>
        </ul>

        <h3>Steps</h3>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/your-username/professional-learning-platform.git</code></pre>
                <pre><code>cd professional-learning-platform</code></pre>
            </li>
            <li>Install dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Set up environment variables (e.g., database URI, API keys) in a <strong>.env</strong> file:
                <pre><code>MONGO_URI=your-mongodb-uri</code></pre>
                <pre><code>JWT_SECRET=your-secret-key</code></pre>
            </li>
            <li>Run the development server:
                <pre><code>npm run dev</code></pre>
            </li>
            <li>Open the application in your browser at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li>
        </ol>
    </section>

    <section>
        <h2>Usage</h2>
        <ul>
            <li><strong>User Registration & Skill Setup:</strong> Upon registration, users input their current skills and learning goals. Based on this, they are taken to the personalized dashboard.</li>
            <li><strong>Dashboard Overview:</strong> The dashboard displays the user’s skill progress, challenges, completed tasks, and a real-time scoring system.</li>
            <li><strong>Courses and Learning Paths:</strong> The AI chat guide suggests new courses and skill paths based on the user’s progress and goals.</li>
            <li><strong>Challenges:</strong> Users engage with gamified tasks and skill-based challenges. Completing these challenges earns them SkillSprint points and helps them level up.</li>
            <li><strong>Cross-Tech Tasks:</strong> Weekly tasks from other domains are available to help users broaden their learning and enhance logical thinking.</li>
        </ul>
    </section>

</body>
</html>
