# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A customizable React starter template with Tailwind@3, Redux Toolkit@2, React Router Dom@7, Prettier & other useful tools and folders
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
   extends: [
      // Remove ...tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,
   ],
   languageOptions: {
      // other options...
      parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
      },
   },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
   plugins: {
      // Add the react-x and react-dom plugins
      'react-x': reactX,
      'react-dom': reactDom,
   },
   rules: {
      // other rules...
      // Enable its recommended typescript rules
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
   },
})
```

# Volta Setup for Your Project

Volta is a tool for managing your Node.js versions and packages with ease. It ensures that the correct versions of Node.js and npm are used in your projects, providing consistent environments across machines. This guide will help you set up Volta for your project.

## 1. Install Volta

First, you need to install Volta. You can download and install Volta from [here](https://volta.sh/). For detailed installation instructions, please visit the official website.

After installing Volta, you can verify the installation by running:
bash
volta --version

## 2. Setting the Node.js Version for Your Project

You can set a specific Node.js version for your project by using the following command:
volta pin node@<version>

## 3. Installing npm (Optional)

If you'd like to specify a specific version of npm or node as well, you can pin packages in the same way:

volta pin npm@<version>

## 5. Managing packages Versions

To see all versions of a package, run `volta list <PackageName>`.
Example: volta list node

```

```
