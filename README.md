# 🔒 Secure Free Fire API (Express.js)

A secure **Express.js API wrapper** that hides the original API source and protects your server with API key authentication, rate limiting, and clean structure.

---

## 🚀 Features

* 🔐 Hide real API endpoint
* 🛡️ API Key protection
* 🚫 Rate limiting (anti-spam)
* 🌐 Clean REST API
* ⚡ Fast & lightweight
* 🔒 Environment-based config

---

## 📁 Project Structure

```
secure-api/
│
├── package.json
├── .env
├── server.js
│
├── routes/
│   └── api.js
│
├── controllers/
│   └── apiController.js
│
├── services/
│   └── externalService.js
│
├── middlewares/
│   ├── apiKey.js
│   ├── rateLimit.js
│   └── hideServer.js
│
└── utils/
    └── helper.js
```

---

## 📦 Installation

```bash
git clone <your-repo>
cd secure-api
npm install
```

---

## ⚙️ Environment Setup

Create `.env` file:

```
PORT=3000
API_KEY=your_secret_key
TARGET_API=https://joyhitpro.com/ff.php
```

⚠️ Never share your `.env` file publicly.

---

## ▶️ Run Server

```bash
node server.js
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Usage

### Endpoint

```
GET /api/player?uid=12345678
```

### Headers

```
x-api-key: your_secret_key
```

---

## ✅ Example Request

```bash
curl -H "x-api-key: your_secret_key" \
http://localhost:3000/api/player?uid=12345678
```

---

## 📥 Example Response

```json
{
  "status": true,
  "data": {
    "...": "response from external API"
  }
}
```

---

## 🔒 Security Features

* API key required for all requests
* Rate limiting (max requests per minute)
* Hidden backend API (via `.env`)
* Removed `X-Powered-By` header
* Structured backend layers

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Axios
* dotenv
* express-rate-limit

---

## ⚠️ Notes

* This uses a third-party API (unofficial)
* The external API may go offline anytime
* Do not rely on it for critical systems

---

## 🚀 Future Improvements

* 🔐 JWT authentication
* 🌍 Deploy with domain + SSL
* ⚡ Redis caching
* 📊 Admin dashboard
* 💰 Paid API system

---

## 👨‍💻 Author

Your Name

---

## 📄 License

MIT License
