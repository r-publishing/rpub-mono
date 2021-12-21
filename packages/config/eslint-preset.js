module.exports = {
  extends: ["next", "prettier"],
  rules: {
    "import/no-anonymous-default-export": "off",
  },
  settings: {
    next: {
      rootDir: ["ui/", "config/", "tsconfig/"],
    },
  },
};
