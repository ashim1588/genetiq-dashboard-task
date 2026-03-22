# Genetiq Dashboard Enhancements

This repository contains the implementation of **language switching** and **theme (color) switching** features for the Genetiq dashboard.

---

##  Overview

The task was to enhance the dashboard by adding:

-  Multi-language support
-  Dynamic theme switching

The implementation focuses on **clean architecture, scalability, and maintainability**, aligning with the existing project structure.

---

##  Tech Stack

- React 18 + TypeScript
- Vite
- Redux Toolkit
- SCSS Modules
- i18next (for internationalization)

---

##  Features Implemented

### 1.  Language Switching

- Integrated **i18next + react-i18next**
- Supports multiple languages:
  - English
  - Spanish
  - French
  - German
  - Chinese
  - Arabic
- Language selection:
  - Automatically detected (browser/localStorage)
  - Persisted using `localStorage`
- Clean translation structure for scalability

---

### 2.  Theme / Color Switching

- Implemented global theme management using **Redux Toolkit**
- Themes available:
  - Light
  - Dark
  - Blue
  - Green
  - Purple
- Theme system powered by **CSS variables**
- Real-time UI updates on theme change
- Theme persistence using `localStorage`

---

##  Architecture Decisions

- **Feature-based structure** for scalability
- Separate modules for:
  - `I18n` (language system)
  - `Theme` (theme system)
  - `Dashboard Controls` (UI layer)
- Global state managed via Redux for consistency
- CSS variables used instead of class toggling for clean theming

---


##  Key Additions
~~~
src/
├── App/
│ ├── I18n/ # i18n configuration and language files
│ ├── Theme/ # Theme system (Redux + CSS variables)
│
├── Features/
│ └── Dashboard/
│ ├── LanguagePicker/ # Language switch UI
│ ├── ThemePicker/ # Theme switch UI
│ └── DashboardControls/ # Wrapper for settings controls
~~~


##  Screenshots

### Dashboard (Default)
<img width="2558" height="1291" alt="Screenshot 2026-03-21 at 1 12 11 AM" src="https://github.com/user-attachments/assets/bf304ea6-6038-4fc4-a618-b695cb051700" />

### Language Switching
<img width="420" height="69" alt="Screenshot 2026-03-22 at 11 46 00 AM" src="https://github.com/user-attachments/assets/b60d4734-fc65-4abc-924e-f6914c1928ed" />

### Blue Theme
<img width="2560" height="1312" alt="Screenshot 2026-03-22 at 11 46 28 AM" src="https://github.com/user-attachments/assets/00990bc7-562a-4d03-be1b-52efc6eb0f40" />

### Dark Theme
<img width="2560" height="1317" alt="Screenshot 2026-03-22 at 11 46 13 AM" src="https://github.com/user-attachments/assets/f5a82b4b-b83a-41e5-97dd-ac2cc693dd57" />

### Spanish Language
<img width="403" height="73" alt="Screenshot 2026-03-22 at 11 45 38 AM" src="https://github.com/user-attachments/assets/3671b042-ae10-4b8b-b8a0-028b243dc224" />
