# 🎓 Assignment & Review Dashboard — Joineazy Frontend Intern Task

## 👤 Author
**Name:** C Chandu  
**Email:** shashanth.chandu@gmail.com  
**Role Applied:** Frontend Intern  
**Date:** 1st November 2025  

---

## 🚀 Project Overview
This project is a **responsive Assignment & Review Dashboard** built for the **Joineazy Frontend Internship Task**.  
It demonstrates role-based functionality for **Students** and **Admins (Professors)** using **React.js** and **Tailwind CSS**.

- **Students** can view assignments and confirm submissions through a **double-verification flow**.  
- **Admins** can create and manage assignments, attach Drive links, and monitor student progress visually through progress bars.  

No backend is used — data is **simulated via localStorage** for persistence.

---

## 🧱 Tech Stack
- **Frontend Framework:** React.js  
- **Styling:** Tailwind CSS (v3)  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Data Simulation:** LocalStorage / Mock JSON  
- **Deployment:**  Vercel  

---

## 📁 Folder Structure

src/
├── components/
│ ├── AdminView.jsx
│ ├── StudentView.jsx
│ ├── AssignmentCard.jsx
│ ├── Header.jsx
│ └── RoleSwitcher.jsx
├── data/
│ └── mockAssignments.json
├── App.jsx
├── index.css
└── main.jsx

yaml
Copy code

---

## 🧩 Component Breakdown

| Component | Purpose |
|------------|----------|
| **AdminDashboard.jsx** | Allows admin to create assignments and view submission progress. |
| **StudentDashboard.jsx** | Displays assignments and handles submission confirmation. |
| **AssignmentCard.jsx** | Reusable card component for displaying assignment info. |
| **Header.jsx** | Top navigation bar with project title. |
| **RoleSwitcher.jsx** | Dropdown to toggle between Student and Admin views. |

---

## 🧠 Features
✅ Role-based dashboard (Student/Admin)  
✅ Double-verification submission confirmation  
✅ LocalStorage persistence (data retained on reload)  
✅ Admin progress bars for submission tracking  
✅ Clean and modular component structure  
✅ Fully responsive design (mobile + desktop)  
✅ Mock data simulation (no backend required)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/shashanthroyal/joineazy-assignment
cd joineazy-assignment

2️⃣ Install Dependencies
bash
Copy code
npm install

3️⃣ Run Development Server
bash
Copy code
npm run dev

4️⃣ Build for Production
bash
Copy code
npm run build

🖥️ Live Demo
Deployed : https://joineazy-assignment-sayz.vercel.app/
Demo Video: https://www.loom.com/share/92849e70bf714738b47bcb47315f7aaa
GitHub Repository: https://github.com/shashanthroyal/joineazy-assignment

🧩 How It Works
👨‍🎓 Student View
Displays the list of assignments.
Allows students to mark assignments as submitted via double confirmation.
Shows submission status as "Pending" or "Submitted".

👨‍🏫 Admin View
Admins can create assignments (title, description, Drive link).
Displays all created assignments.
Shows progress bars representing submission completion for each assignment.

🎨 Design Decisions
Tailwind CSS for responsive design and clean layout.
React Hooks to manage data and UI state without external libraries.
LocalStorage used as a mock database for simple persistence.
Component-based architecture for scalability and reusability.

📚 Future Improvements
Add authentication (role-based login).
Connect to a real backend API.
Implement analytics for submission timelines.

📜 License

This project was developed solely for the Joineazy Internship Task and is not for commercial use.

Developed by C Chandu 🧑‍💻
https://github.com/shashanthroyal | https://www.linkedin.com/in/chandu-c-mern/

