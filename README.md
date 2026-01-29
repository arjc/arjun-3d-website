# TUTS

> I just like keeping these for future reference 

### 1. Vite: `npm create vite@latest`

### 2. Tailwind for Vite: `npm install tailwindcss @tailwindcss/vite`

Edit **vite.config.js**:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite' <== Add this

export default defineConfig({
  plugins: [
    react(),

    tailwindcss() <============================ And this
  
  ],
})

```

Add `@import "tailwindcss";` to **index.css** 
