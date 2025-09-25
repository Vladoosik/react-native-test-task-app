# Test Project – White Digital  
Author: **Vlad Khrushchov**  

This repository contains a **test assignment** for **White Digital**.  

---

## 🚀 Tech Stack
- [React Native CLI 0.74.3](https://reactnative.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Zustand](https://github.com/pmndrs/zustand) — state management  
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) — fast key-value storage  

There is no backend, but the project uses a public endpoint:  
👉 [API Docs](https://test-task-server-production-3257.up.railway.app/openApi)  

---

## ⚙️ Installation & Setup

### 1. Install dependencies
```sh
yarn install
cd ios && pod install && cd ..
```

### 2. Run the project
```sh
yarn ios      # Run on iOS
yarn android  # Run on Android
yarn start    # Start Metro Bundler
```

---

## 🔑 Configuration
The project uses an `.env` file.  
⚠️ Note: `.env` **is not included in `.gitignore`** on purpose, to simplify the review of this test project.  

---

## 📂 Project Structure
The project follows a **classic React Native CLI structure**:  
```
src/
  components/
  screens/
  store/
```

---

## 📌 Notes
- Since this is a **React Native CLI project**, running `pod install` is required for iOS.  
- No CI/CD or testing setup is included, as this is a test project.  
