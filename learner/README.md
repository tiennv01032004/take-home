# Learner Dashboard - SWE Intern Take-home Assignment

## Mục Lục (Table of Contents)

1. [Giới Thiệu Chung (Introduction)](#giới-thiệu-chung-introduction)
2. [Công Nghệ (Tech Stack)](#công-nghệ-tech-stack)
3. [Cách Cài Đặt và Chạy (How to Run Locally)](#cách-cài-đặt-và-chạy-how-to-run-locally)
4. [Tổng Quan Thiết Kế và Kiến Trúc (Design/Architecture Overview)](#tổng-quan-thiết-kế-và-kiến-trúc-designarchitecture-overview)
   - [Cấu Trúc Dự Án (Folder Structure)](#cấu-trúc-dự-án-folder-structure)
   - [Quản Lý State (State Management)](#quản-lý-state-state-management)
5. [Mô Hình Dữ Liệu Giả Định (Mock Data)](#mô-hình-dữ-liệu-giả-định-mock-data)
6. [Những Việc Cải Thiện Tiếp Theo (Future Improvements)](#những-việc-cải-thiện-tiếp-theo-future-improvements)
7. [Demo Đã Triển Khai (Deployed Demo)](#demo-đã-triển-khai-deployed-demo)

## 1. Giới Thiệu Chung (Introduction)

- Đây là bài tập về nhà dành cho vị trí SWE Intern - Front End của Edtronaut, tập trung vào việc xây dựng Learner Dashboard cho nền tảng Mô phỏng Công việc do AI hỗ trợ.
- Dashboard giúp người học theo dõi tiến trình, hiểu rõ điểm mạnh/điểm yếu về kỹ năng, và nhận các khuyến nghị hành động tiếp theo.

---

## 2. Công Nghệ (Tech Stack)

- Framework: Next.js
- Language: TypeScript
- Styling: TailwindCSS
- Charting: Recharts
- Testing: Jest + React Testing Library

---

## 3. Cách Cài Đặt và Chạy (How to Run Locally)

Thực hiện theo các bước sau để chạy dự án trên máy cục bộ của bạn:

1.  Clone repository:
    git clone https://github.com/tiennv01032004/take-home.git
    cd learner
2.  Cài đặt dependencies:
    npm install hoặc yarn install
3.  Chạy dự án ở chế độ phát triển:
    npm run dev hoặc yarn dev
4.  Truy cập ứng dụng: Mở trình duyệt và truy cập vào http://localhost:3000.

## 4. Tổng Quan Thiết Kế và Kiến Trúc (Design/Architecture Overview)

### A. Cấu Trúc Dự Án (Folder Structure)

    ├── app/
    │ └── dashboard/
    │ ├── page.tsx
    │ └── layout.tsx
    ├── components/
    │ ├── HeaderSnapshot.tsx
    │ ├── Recommendations.tsx
    │ ├── SimulationCard.tsx
    │ ├── SimulationList.tsx
    │ ├── SkillsOverview.tsx
    │ └── StatCard.tsx
    ├── contexts/
    │ └── SkillOverview.tsx
    ├── data/
    │ └── user.json
    ├── hooks
    ├── lib
    ├── node_modules
    ├── public/
    │ ├── icons
    │ └── images
    ├── styles
    ├── testing/
    │ └── HeaderSnapshot.test.tsx
    └── types/
    └── learner.ts

### B. Quản Lý State (State Management)

- **State cục bộ**: quản lý bằng React hooks (`useState`)
- **State toàn cục**: quản lý bằng `useContext`
- **Componentization**: Dashboard chia thành các component nhỏ, tái sử dụng (HeaderSnapshot, SimulationList, SkillsOverview, StatCard) để đảm bảo chất lượng mã nguồn.

## 5. Mô Hình Dữ Liệu Giả Định (Explanation of Data Model)

    Do không có API backend, tôi đã tạo các mock data để mô phỏng dữ liệu người dùng.

    ```json
    {
      "name": "Nguyen Van Tien",
      "avatar": "/images/avatar1.png",
      "tagline": "Aspiring Frontend Developer",
      "simsStarted": 8,
      "simsCompleted": 5,
      "avgScore": 78,
      "streak": 3,
      "careerActivationRate": 65,
      "simulations": [
        {
          "id": 1,
          "title": "React Basics Simulation",
          "company": "Edtronaut",
          "logo": "/images/react.png",
          "role": "Frontend Intern",
          "difficulty": "Easy",
          "lastActivity": "2025-11-28T10:30:00Z",
          "progress": 100,
          "skills": ["React", "TypeScript"],
          "status": "Completed"
        },
        {
          "id": 2,
          "title": "Advanced TypeScript Challenge",
          "company": "Edtronaut",
          "logo": "/images/typescript.png",
          "role": "Frontend Intern",
          "difficulty": "Medium",
          "lastActivity": "2025-11-29T14:00:00Z",
          "progress": 60,
          "skills": ["TypeScript", "React"],
          "status": "In Progress"
        }
      ],
      "skills": [
        { "name": "React", "value": 80 },
        { "name": "TypeScript", "value": 70 },
        { "name": "TailwindCSS", "value": 60 }
      ],
      "recommendations": [
        {
          "id": 101,
          "title": "Frontend Developer Intern",
          "company": "Edtronaut",
          "difficulty": "Medium",
          "estimate": "2 weeks",
          "reason": "Matches your React & TypeScript skills",
          "skills": ["React", "TypeScript", "TailwindCSS"]
        },
        {
          "id": 102,
          "title": "UI/UX Simulation",
          "company": "DesignHub",
          "difficulty": "Easy",
          "estimate": "1 week",
          "reason": "Good for improving TailwindCSS skills",
          "skills": ["TailwindCSS", "CSS", "HTML"]
        }
      ]
    }
    ```

## 6. Những Việc Cải Thiện Tiếp Theo (Future Improvements)

Nếu có thêm thời gian, các cải tiến ưu tiên:

- **Tính năng Bookmark/Lưu**: Cho phép người dùng lưu các Job hoặc Simulation Recommendations quan tâm để xem sau.

- **Chế độ Sáng/Tối**: Tùy chỉnh giao diện Dashboard để xem thoải mái hơn.

- **Gợi ý Simulation dựa trên hành vi người dùng**: AI/ML đề xuất simulation phù hợp dựa trên lịch sử hoàn thành và kỹ năng còn thiếu.

- **Thông báo & Nhắc nhở**: Nhắc người dùng hoàn thành simulation hoặc xem các gợi ý còn bỏ dở.

- **Thống kê tiến trình & Báo cáo**: Biểu đồ hiển thị kỹ năng, simulation đã hoàn thành, có thể xuất PDF.

## 7. Demo Đã Triển Khai (Deployed Demo - Optional)

    Link Vercel/Demo: https://take-home-fe1u.vercel.app/dashboard
