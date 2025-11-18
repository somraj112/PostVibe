---

# **PostVibe — Share your vibe, one post at a time**

PostVibe is a lightweight, modern micro-social blogging platform where users can post short text updates, share images, interact with others, and explore a dynamic real-time feed. Designed with a clean UI and fast performance, PostVibe focuses on simplicity and core social interaction without unnecessary complexity.

---

## **🧩 Problem Statement**

Many social platforms today feel cluttered, slow, or overloaded with complex features that distract from simple communication. People want a fast, minimal, and responsive way to:

* Share short posts and images
* Engage in discussions
* Follow trends
* Browse a clean social feed

**PostVibe** solves this by delivering a micro-social platform built for speed, simplicity, and seamless interaction. Its interface is optimized for **desktop, tablet, and mobile**, keeping the experience lightweight and intuitive.

---

## **🧱 System Architecture**

### **High-Level Architecture**

```
Frontend → Backend (API) → Database
```

### **Tech Overview**

* **Frontend:** React.js, React Router, Redux, Material-UI
* **Backend:** Node.js + Express.js
* **Database:** MongoDB (Compass for dev, Atlas for production)
* **Auth:** JWT-based signup/login
* **Media Storage:** Cloudinary (image upload + CDN)
* **Hosting:**

  * Frontend → Vercel / Netlify
  * Backend → Render / Railway
  * Database → MongoDB Atlas

### **Request Flow Example**

1. User creates a post.
2. Frontend uploads image to Cloudinary (or backend proxies upload).
3. Backend saves post details + Cloudinary image URL to MongoDB.
4. Frontend updates Redux store.
5. Feed refreshes instantly with the new post.

---

## **✨ Key Features**

| Category                           | Features                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| **Authentication & Authorization** | Signup, login, logout with JWT; profile editing (username, bio, avatar).           |
| **CRUD Operations**                | Users can create posts, edit profile, delete their own posts, add/delete comments. |
| **Frontend Routing**               | Home Feed, Login, Signup, Profile, Create Post, Post Details.                      |
| **Pagination**                     | Feed supports page-based or cursor-based pagination.                               |
| **Searching**                      | Search users by name or username.                                                  |
| **Sorting (Trending)**             | Trending page showing posts with most likes within the past week.                  |
| **Filtering**                      | Filter posts by hashtags (e.g., #technology).                                      |
| **Hosting**                        | Frontend → Vercel, Backend → Render.                                               |

---

## **🛠️ Tech Stack**

| Layer              | Technologies                                   |
| ------------------ | ---------------------------------------------- |
| **Frontend**       | React, Redux, React Router, Material-UI, Axios |
| **Backend**        | Node.js, Express.js                            |
| **Database**       | MongoDB                                        |
| **Authentication** | JWT / OAuth (future integration)               |
| **Media Storage**  | Cloudinary                                     |
| **Deployment**     | Vercel, Render, Netlify, Railway               |

---

## **📡 API Overview**

| Endpoint                  | Method | Description                | Access        |
| ------------------------- | ------ | -------------------------- | ------------- |
| `/api/auth/signup`        | POST   | Register new user          | Public        |
| `/api/auth/login`         | POST   | Authenticate user          | Public        |
| `/api/users/:id`          | GET    | Fetch user profile + posts | Public        |
| `/api/posts`              | GET    | Fetch feed (paginated)     | Public / Auth |
| `/api/posts`              | POST   | Create a new post          | Auth          |
| `/api/posts/:id/comments` | POST   | Add a comment              | Auth          |

---
Made with ❤️ by Somraj
