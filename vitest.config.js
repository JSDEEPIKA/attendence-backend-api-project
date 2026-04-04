import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: [
            '**/node_modules/**',
            '**/public/admin/assets/plugins/**',
            '**/public/**'
        ]
    }
})
