module.exports = {
    // Where are your vue tests located?
    cache: false,
    roots: [
        '<rootDir>/resources/js/tests/unit'
    ],
    // vue: transform vue with vue-jest to make jest understand Vue's syntax
    // js: transform js files with babel, we can now use import statements in tests
    transform: {
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!@vue)'
    ],
    // (optional) with that you can import your components like
    // import Counter from '@/Counter.vue'
    // (no need for a full path)
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/resources/js/$1'
    }
}