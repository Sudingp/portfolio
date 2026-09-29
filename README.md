# Sudin G Poojary - Personal Portfolio

A sleek, responsive, and modern personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** featuring a **Modern Dark Bento-Grid aesthetic**.

![Portfolio Preview](public/preview.png) *(Optional preview placeholder)*

---

## ✨ Features

- **Modern Bento Grid Layout**: Dynamic cards for bio, live IST timezone clock, continuous learning goals, and key metrics.
- **Categorized Tech Stack Radar**: Filterable skill chips (AI/ML & GenAI, Programming Languages, Backend, Databases, Tools) with proficiency tags.
- **Interactive Project Showcase**: Filterable tabs (AI & GenAI, Machine Learning, Data Engineering, Full Stack) with direct GitHub links and an interactive Architecture Deep-Dive modal.
- **Experience & Education Timeline**: Detailed vertical milestones for Soukhya Tech Pvt Ltd and Dayananda Sagar University.
- **1-Click Copy Email**: Instant clipboard copying with celebration confetti feedback.
- **Direct Resume Download**: Pre-configured download button serving `public/resume.pdf`.
- **Centralized Data File**: All content and profile details can be edited in a single file: `src/data/portfolioData.js`.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production output will be in the `dist/` directory.

---

## 🛠️ How to Customize Your Information

All your personal details, projects, skills, education, and links are located in:
👉 [`src/data/portfolioData.js`](src/data/portfolioData.js)

### Updating Resume
Replace `public/resume.pdf` with your latest resume PDF file.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Import Project**.
3. Select your repository and click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **Deploy**.
