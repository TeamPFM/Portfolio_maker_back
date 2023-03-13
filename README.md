# Project : Portfolio Maker
### 📆 23.02 ~ 23.03

# Portfolio-maker 목차

1. [프런트엔드 페이지 주소](#프런트엔드-페이지-주소)
2. [Postman API 배포 주소](#postman-api-배포-주소)
3. [Architecture](#architecture)
4. [서비스 소개](#서비스-소개)
5. [Demo Image](#demo-image)
6. [팀원 소개](#팀원-소개)
7. [Git Branching](#git-branching)
8. [사용 기술](#사용-기술)

---

# 프런트엔드 페이지 주소

https://github.com/TeamPFM/Portfolio_maker_front

---

# Postman API 배포 주소

https://documenter.getpostman.com/view/25353027/2s93CNPDiT

---

# Architecture

<img width="578" alt="pfm-server" src="https://user-images.githubusercontent.com/98637739/222732950-1d356ea8-82ed-42ef-805a-7e7721c80fe1.png">

Github Actions를 이용해 CI/CD 파이프라인을 구축하였습니다.

Docker를 이용해 Server와 DB를 컨테이너화 하여 EBS 서비스에 업로드 했습니다.

RDS를 이용해 Server의 예상치 못한 종료에 대비해 DB 클라우드화를 했습니다.

Winston과 Daily Logger를 이용해 Log 파일을 관리하도록 했습니다.

Grafana와 CloudWatch를 이용해 인프라 모니터링 체계를 구축 했습니다 (비용문제로 현재는 삭제)

---

# 서비스 소개

취업을 준비하면서 자신의 이력서를 객관적으로 판단하기 힘들다는 생각을 많이 했습니다.

포트폴리오를 직접 만들고 게시판을 통해 자신의 포트폴리오를 전문가들에게 평가받을 수 있는 서비스가 있다면 

많은 도움이 될 것이라 생각해서 해당 프로젝트를 만들었습니다.

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

<img width="946" alt="포트폴리오3" src="https://user-images.githubusercontent.com/98637739/222241539-07f8309a-4ec6-4d01-a913-7e8c56f52f52.png">

Board Page 1

<img width="946" alt="Board" src="https://user-images.githubusercontent.com/98637739/222241886-7f5af1a2-2b8d-48d7-89bf-21239f4e1562.png">

Board Page 2

<img width="946" alt="image" src="https://user-images.githubusercontent.com/98637739/222263086-f1cd740a-075b-4b32-b951-9be3280ffc38.png">

---

# 팀원 소개

[Team Notion Page](https://worried-parrotfish-2f5.notion.site/PortFolio-Maker-b86ebb8ca6b64e8ebf665a12757d163f)

Backend(Nest.js) - [Backend Github](https://github.com/TeamPFM/Portfolio_maker_back)

[Postman Document](https://documenter.getpostman.com/view/25353027/2s93CNPDiT)

- 이창수(팀장): https://github.com/ChangSuLee00

- 박주현: https://github.com/Zero-Human

Froentend(React.js) - [Froentend Github](https://github.com/TeamPFM/Portfolio_maker_front)

<details>
<summary>Figma</summary>
<div markdown="1">

<img width="959" alt="image" src="https://user-images.githubusercontent.com/98637739/222242447-b09fe0f8-d260-4d72-a2cc-86ec8072017e.png">

</div>
</details>

- 노기훈: https://github.com/Ropung

- 이동현: https://github.com/donghyunami

- 권순성: https://github.com/tnstjd120

---

# Git Branching

Git Flow 전략을 적극적으로 활용하여 효율적으로 협업하였습니다.

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

# 사용 기술

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
