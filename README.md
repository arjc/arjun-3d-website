### 1.Vite:-

`npm create vite@latest`

### 2.Tailwind for vite:-

Step 1: `npm install tailwindcss @tailwindcss/vite`

Step 2:
[vite.config.js]
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})

```
Step 3:
index.css
`@import "tailwindcss";`
# arjun-3d-website
