# 🎮 Free Fire UID Info API 

A secure **Express.js API** to fetch **complete Free Fire player data using UID** with structured JSON output.

---

## 🚀 Features

* 🔍 Get full player profile by UID
* 📊 Detailed structured response (account, clan, pet, stats, etc.)
* 🔒 Hidden external API
* 🛡️ API key protection
* 🚫 Rate limiting
* ⚡ Fast & clean JSON

---

## 📡 Endpoint

```
GET /api/player?uid=PLAYER_UID
```

---

## 🔐 Headers

```
x-api-key: your_secret_key
```

---

## 📥 Example Request

```bash
curl -H "x-api-key: your_secret_key" \
"http://localhost:3000/api/player?uid=12345678"
```

---

## 📤 Example Response (Full Detail)

```json
{
  "status": true,
  "data": {
    "basicInfo": {
      "accountId": "12345678",
      "nickname": "FB: @GMRemyX",
      "level": "68",
      "region": "SG",
      "liked": "3778277",
      "rank": "323",
      "rankingPoints": "4648",
      "csRank": "316",
      "csRankingPoints": "64",
      "createAt": "2017-12-06 13:19:29",
      "lastLoginAt": "2026-04-04 10:05:09"
    },
    "clanBasicInfo": {
      "clanId": "60893361",
      "clanName": "MUMMYEATTEAM",
      "clanLevel": "7",
      "memberNum": "35"
    },
    "petInfo": {
      "name": "SiNo",
      "level": "7",
      "exp": "6000"
    },
    "creditScoreInfo": {
      "creditScore": "100"
    },
    "profileInfo": {
      "avatarId": "902000154",
      "equipedSkills": "5306"
    },
    "socialInfo": {
      "signature": "FB : GM Remy | TikTok : gmremyx | IG GM Remy"
    }
  },
  "server_used": "EUROPE",
  "timestamp": "2026-04-04 22:15"
}
```

---

## 📊 Field Explanation

### 👤 basicInfo

* `accountId` → Player UID
* `nickname` → Player name
* `level` → Account level
* `region` → Server region
* `liked` → Total likes
* `rank` → Battle Royale rank
* `csRank` → Clash Squad rank

---

### 🏰 clanBasicInfo

* `clanName` → Guild name
* `clanLevel` → Guild level
* `memberNum` → Members count

---

### 🐾 petInfo

* `name` → Pet name
* `level` → Pet level
* `exp` → Pet experience

---

### 💯 creditScoreInfo

* Player behavior score (0–100)

---

### 🎨 profileInfo

* Avatar ID
* Equipped skills

---

### 🌐 socialInfo

* Player bio / signature

---

## 🔒 Security

* API key required
* Rate limit enabled
* External API hidden
* No direct access to source

---

## ⚠️ Disclaimer

* This API is **not official**
* Data depends on external provider
* Not affiliated with Garena Free Fire

---

## 🚀 Future Plans

* 🔐 JWT authentication
* 📊 Advanced stats endpoints
* 🌍 Deploy with domain
* 💰 Paid API system

---

## 🧪 Test

```bash
curl -H "x-api-key: your_secret_key" \
"http://localhost:3000/api/player?uid=12345678"
```

---

## 📄 License

MIT
