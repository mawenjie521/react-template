module.exports = {
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript',
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    plugins: ["prettier", "react-hooks"],
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        "@typescript-eslint/explicit-member-accessibility": "off",
        "no-console": process.env.NODE_ENV === 'production' ? 'off' : ["warn", { allow: ["warn", "error", "debug"] }],
        "@typescript-eslint/no-invalid-this": "off",
        "default-case-last": "off",
        "no-useless-backreference": "off",
        "no-loss-of-precision": "off",
        "react/jsx-no-script-url": "off",
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "error", // 检查 effect 的依赖
        "no-undef": "off",
    }
};
