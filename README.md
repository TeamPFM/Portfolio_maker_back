# Project : Portfolio Maker
### ๐ 23.02 ~ 23.03

# Portfolio-maker ๋ชฉ์ฐจ

1. [ํ๋ฐํธ์๋ ํ์ด์ง ์ฃผ์](#ํ๋ฐํธ์๋-ํ์ด์ง-์ฃผ์)
2. [Postman API ๋ฐฐํฌ ์ฃผ์](#postman-api-๋ฐฐํฌ-์ฃผ์)
3. [Architecture](#architecture)
4. [์๋น์ค ์๊ฐ](#์๋น์ค-์๊ฐ)
5. [Demo Image](#demo-image)
6. [ํ์ ์๊ฐ](#ํ์-์๊ฐ)
7. [Git Branching](#git-branching)
8. [์ฌ์ฉ ๊ธฐ์ ](#์ฌ์ฉ-๊ธฐ์ )

---

# ํ๋ฐํธ์๋ ํ์ด์ง ์ฃผ์

https://github.com/TeamPFM/Portfolio_maker_front

---

# Postman API ๋ฐฐํฌ ์ฃผ์

https://documenter.getpostman.com/view/25353027/2s93CNPDiT

---

# Architecture

<img width="578" alt="pfm-server" src="https://user-images.githubusercontent.com/98637739/222732950-1d356ea8-82ed-42ef-805a-7e7721c80fe1.png">

Github Actions๋ฅผ ์ด์ฉํด CI/CD ํ์ดํ๋ผ์ธ์ ๊ตฌ์ถํ์์ต๋๋ค.

Docker๋ฅผ ์ด์ฉํด Server์ DB๋ฅผ ์ปจํ์ด๋ํ ํ์ฌ EBS ์๋น์ค์ ์๋ก๋ ํ์ต๋๋ค.

RDS๋ฅผ ์ด์ฉํด Server์ ์์์น ๋ชปํ ์ข๋ฃ์ ๋๋นํด DB ํด๋ผ์ฐ๋ํ๋ฅผ ํ์ต๋๋ค.

Winston๊ณผ Daily Logger๋ฅผ ์ด์ฉํด Log ํ์ผ์ ๊ด๋ฆฌํ๋๋ก ํ์ต๋๋ค.

Grafana์ CloudWatch๋ฅผ ์ด์ฉํด ์ธํ๋ผ ๋ชจ๋ํฐ๋ง ์ฒด๊ณ๋ฅผ ๊ตฌ์ถ ํ์ต๋๋ค (๋น์ฉ๋ฌธ์ ๋ก ํ์ฌ๋ ์ญ์ )

---

# ์๋น์ค ์๊ฐ

์ทจ์์ ์ค๋นํ๋ฉด์ ์์ ์ ์ด๋ ฅ์๋ฅผ ๊ฐ๊ด์ ์ผ๋ก ํ๋จํ๊ธฐ ํ๋ค๋ค๋ ์๊ฐ์ ๋ง์ด ํ์ต๋๋ค.

ํฌํธํด๋ฆฌ์ค๋ฅผ ์ง์  ๋ง๋ค๊ณ  ๊ฒ์ํ์ ํตํด ์์ ์ ํฌํธํด๋ฆฌ์ค๋ฅผ ์ ๋ฌธ๊ฐ๋ค์๊ฒ ํ๊ฐ๋ฐ์ ์ ์๋ ์๋น์ค๊ฐ ์๋ค๋ฉด 

๋ง์ ๋์์ด ๋  ๊ฒ์ด๋ผ ์๊ฐํด์ ํด๋น ํ๋ก์ ํธ๋ฅผ ๋ง๋ค์์ต๋๋ค.

---

# Demo Image  

Front Page

<img width="946" alt="image" src="https://user-images.githubusercontent.com/98637739/222773602-f156c90d-013c-4e11-b8b5-9ed49d972409.gif">

Signup Page 

<img width="946" alt="image" src="https://user-images.githubusercontent.com/58792751/222392565-a0c2ba81-5f23-4f5b-9cd3-84a45049c0a5.png">

Login Page  

<img width="946" alt="image" src="https://user-images.githubusercontent.com/58792751/222393775-23dcc8ef-9805-4368-934a-e593f23124cc.png">

Portfolio Page 1

<img width="946" alt="image" src="https://user-images.githubusercontent.com/58792751/222400718-fc331ba4-c00d-45ba-9fe6-3889b9abffe2.png">


Portfolio Page 2

<img width="946" alt="ํฌํธํด๋ฆฌ์ค3" src="https://user-images.githubusercontent.com/98637739/222241539-07f8309a-4ec6-4d01-a913-7e8c56f52f52.png">

Board Page 1

<img width="946" alt="Board" src="https://user-images.githubusercontent.com/98637739/222241886-7f5af1a2-2b8d-48d7-89bf-21239f4e1562.png">

Board Page 2

<img width="946" alt="image" src="https://user-images.githubusercontent.com/98637739/222263086-f1cd740a-075b-4b32-b951-9be3280ffc38.png">

---

# ํ์ ์๊ฐ

[Team Notion Page](https://worried-parrotfish-2f5.notion.site/PortFolio-Maker-b86ebb8ca6b64e8ebf665a12757d163f)

Backend(Nest.js) - [Backend Github](https://github.com/TeamPFM/Portfolio_maker_back)

[Postman Document](https://documenter.getpostman.com/view/25353027/2s93CNPDiT)

- ์ด์ฐฝ์(ํ์ฅ): https://github.com/ChangSuLee00

- ๋ฐ์ฃผํ: https://github.com/Zero-Human

Froentend(React.js) - [Froentend Github](https://github.com/TeamPFM/Portfolio_maker_front)

<details>
<summary>Figma</summary>
<div markdown="1">

<img width="959" alt="image" src="https://user-images.githubusercontent.com/98637739/222242447-b09fe0f8-d260-4d72-a2cc-86ec8072017e.png">

</div>
</details>

- ๋ธ๊ธฐํ: https://github.com/Ropung

- ์ด๋ํ: https://github.com/donghyunami

- ๊ถ์์ฑ: https://github.com/tnstjd120

---

# Git Branching

Git Flow ์ ๋ต์ ์ ๊ทน์ ์ผ๋ก ํ์ฉํ์ฌ ํจ์จ์ ์ผ๋ก ํ์ํ์์ต๋๋ค.

<details>
<summary>Git Flow</summary>
<div markdown="1">

<img width="268" alt="image" src="https://user-images.githubusercontent.com/98637739/222243861-cede10fd-48be-4653-acfc-d4b9c680b16a.png">

</div>
</details>

<details>
<summary>Source Tree</summary>
<div markdown="1">

<img width="427" alt="image" src="https://user-images.githubusercontent.com/98637739/222243324-998e87ac-4958-4c87-a293-c6ed4ad22cdb.png">

</div>
</details>

---

# ์ฌ์ฉ ๊ธฐ์ 

## Backend: Nest.js (9.0.0)

- Database: MySql (3.1.2)

- DB Validation: Joi (17.7.1)

- ORM: TypeORM (0.3.12)

- Login: Json Web Token (passport-jwt 3.0.8)

- Encrypt: Bcrypt (5.1.0)

- Logger: Winston logger (3.8.2)

- Security: Helmet (6.0.1)

## Frontend: React.js (18.0.0)

 - Typescript (4.6.3)
 
 - React Router (6.8.1)
 
 - Axios (1.3.3)
 
 - Tailwindcss (3.2.6)
 
 - React Query (4.24.10)
 
 - Zustand (3.7.2)
 
 - framer-motion (9.0.3)
