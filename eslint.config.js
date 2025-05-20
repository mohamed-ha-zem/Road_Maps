import { defineConfig } from "eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig({
  extends: [
    "eslint:recommended", // القواعد العامة
    "plugin:react/recommended", // قواعد خاصة بـ React
    "plugin:react-hooks/recommended", // قواعد خاصة بـ React Hooks
  ],
  parserOptions: {
    ecmaVersion: 2020, // لتمكين الـ JS الحديث
    sourceType: "module", // لدعم الـ ES Modules
  },
  rules: {
    // القواعد الخاصة بـ React
    "react/jsx-uses-react": "off", // في React 17+ ما فيش حاجة لاستيراد React
    "react/jsx-uses-vars": "error", // لازم تتأكد أن المتغيرات مستخدمة

    // القواعد الخاصة بالـ hooks
    "react-hooks/rules-of-hooks": "error", // للتحقق من قواعد الـ hooks
    "react-hooks/exhaustive-deps": "warn", // للتأكد من أن الـ deps في الـ useEffect صحيحة

    // قواعد حول المتغيرات الغير مستخدمة
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // تجاهل المتغيرات التي تبدأ بـ _
        varsIgnorePattern: "^_", // تجاهل المتغيرات التي تبدأ بـ _
      },
    ],
    "no-undef": "error", // يجب أن يكون كل المتغيرات مستوردة أو معرفة
    "no-console": "warn", // يحذر عند وجود console.log أو console.debug

    // القواعد الخاصة بالـ semicolons
    "semi": ["error", "always"], // فرض وجود ; في النهاية

    // القواعد الخاصة بالمسافات بين الأقواس
    "space-in-parens": ["error", "never"], // يجب أن لا يكون هناك مسافات داخل الأقواس

    // القواعد الخاصة بالترتيب داخل الـ imports
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],

    // تحديد كيفية التعامل مع الـ PropTypes
    "react/prop-types": "off", // لو مش مهتم بـ PropTypes (تقدر تعطلها)
  },
  settings: {
    react: {
      version: "detect", // لازم يكتشف الإصدار الصحيح لـ React
    },
  },
});
