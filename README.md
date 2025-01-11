# Professional Learning Platform

## Overview
The **Professional Learning Platform** is a gamified, AI-driven web application designed to help users enhance their skills through personalized challenges, learning paths, and immersive training experiences. It enables users to track their learning progress, complete skill-based tasks, earn rewards, and discover courses tailored to their career goals. The platform uses AI-powered recommendations to guide users toward the next skill they need to master, creating an engaging, interactive, and goal-oriented learning environment.

## Features

- **Skill Assessment & Personalization**: Users input their current skill set, and the platform suggests personalized learning paths and challenges to enhance those skills.
- **Gamified Learning**: Users earn scores and SkillSprint points by completing challenges and tasks, leveling up as they progress.
- **AI-Powered Challenges**: The platform adapts to the user’s progress, presenting new challenges based on their level and learning goals.
- **Cross-Tech Tasks**: Users are encouraged to tackle challenges from other domains (e.g., Business Analysis, Java) to gain a broader perspective and improve their problem-solving abilities.
- **AI Chat Feature**: The AI chat guide offers advice on which skill to focus on next based on the user’s goals and current progress.
- **Interactive Courses**: Courses are designed in a gamified format, making learning enjoyable and easy to understand.

## Tech Stack

- **Frontend**: React.js (for a dynamic and responsive user interface)
- **Backend**: Node.js with Express.js (for handling API requests and user data)
- **Database**: MongoDB (for storing user progress, scores, and learning data)
- **AI Technologies**:
  - **Machine Learning**: Personalized skill recommendations based on user data
  - **Natural Language Processing (NLP)**: AI chat feature for guidance and recommendations
- **Authentication**: JWT (JSON Web Tokens) for secure authentication
- **Styling**: CSS and modern UI frameworks for a responsive and clean design

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/professional-learning-platform.git
    cd professional-learning-platform
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables** (e.g., database URI, API keys) in a `.env` file:

    ```makefile
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    ```

5. **Open the application** in your browser at [http://localhost:3000](http://localhost:3000)

## Usage

- **User Registration & Skill Setup**: Upon registration, users input their current skills and learning goals. Based on this information, they are directed to their personalized dashboard.
- **Dashboard Overview**: The dashboard displays the user’s skill progress, challenges, completed tasks, and a real-time scoring system.
- **Courses and Learning Paths**: The AI chat guide suggests new courses and skill paths based on the user’s progress and goals.
- **Challenges**: Users engage with gamified tasks and skill-based challenges. Completing these challenges earns them SkillSprint points and helps them level up.
- **Cross-Tech Tasks**: Weekly tasks from other domains are available to help users broaden their learning and enhance logical thinking.
