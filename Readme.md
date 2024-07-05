# 🌳 Welcome to the Deep Tree Repository! 👋

Experience the beauty and complexity of data structures with our Deep Tree Visualization Web Application. Featuring a dynamic visualization of a Deep Tree Data Structure with an impressive 10,000 nodes, this web application offers an intuitive and interactive experience. Secure authentication ensures that only authorized users can interact with the nodes, allowing you to explore, expand, and contract tree nodes seamlessly. Additionally, you can modify node values, making it a powerful tool for learning and development.

## 🚀 Tech-Stack

Our project is built with a modern and robust tech stack to ensure high performance and scalability:

- **Frontend:**
  - [ReactJS](https://reactjs.org/) + [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
- **Database:**
  - [PostgreSQL](https://www.postgresql.org/)
- **Visualization:**
  - [D3.js](https://d3js.org/)

## ✨ Features

- **User Authentication:** Secure login and registration system to protect user data.
- **Interactive Visualization:** Explore a tree with 10,000 nodes, expand and contract nodes with ease.
- **Node Manipulation:** Modify the values of individual nodes in real-time.
- **Responsive Design:** Enjoy a seamless experience across various devices with Tailwind CSS.
- **Fast and Efficient:** Built with Vite for a lightning-fast development environment and optimized build process.

## 📸 Screenshots

- Login.jsx <br /> <br />
<img width="300px" src="https://github.com/sohelkh1211/Deep_Tree/assets/125993375/e5655c2e-13e9-4c48-9a0b-a24badb95882" /> <br />
- Register.jsx <br /><br />
<img width="300px" rounded="10px" src="https://github.com/sohelkh1211/Deep_Tree/assets/125993375/532b4c7a-508d-48b2-82af-c02056748f49" /> <br />
- PostgreSQL <br /><br />
<img width="300px"  rounded="10px" src="https://github.com/sohelkh1211/Deep_Tree/assets/125993375/8f471e8a-216f-4ced-b37f-07960a6bfdf1" /> <br />

## 📚 Getting Started

### Prerequisites

- Node.js 
- PostgreSQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/deep-tree-repo.git
   ```
   
 2. Navigate to the frontend folder:
  
     ```sh
     cd frontend
     ```
  
  3. Install dependencies for the frontend:
  
     ```sh
     npm install --legacy-peer-deps
     ```
  
  4. Set up your PostgreSQL database.

     ```sh
     Download and Install PostgreSQL https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
     Setup username and password
     Create new Database by right clicking on server. name it as Deep_Tree.
     Create new Table users using following command
     ```
     ```sh
     CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     first_name VARCHAR(10) NOT NULL,
     last_name VARCHAR(10) NOT NULL,
     username VARCHAR(255) UNIQUE NOT NULL,
     password_hash TEXT NOT NULL
     );
     ```
5. Install dependencies for the backend:
   
   ```sh
   cd backend
   npm install
   ```
   
### Running the Application
  
  1. Start the backend server:
  
     ```sh
     node index.js
     ```
  
  2. Start the frontend development server:
  
     ```sh
     npm run dev
     ```
