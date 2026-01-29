
# HIGHLIGHTED FUNCTIONS

29th Jan 2026

A function which returns &lt;li&gt; from an array of objects which contains information including name `p`, link `a` and mui icon names `i` (all icons imported directly on `constants/index.js`)

>Make sure to contain these in either &lt;ul&gt; or &lt;ol&gt; as the function returns &lt;li&gt; 

```
// Cnotain in ul or ol  
const makeObjectList = (arr, useOnlyText) => (
  arr.map(({ p, a, i: I }) => (
    <li key={p}>
      <a href={a} target="_blank" rel="noreferrer" className='flex items-center gap-2'>
          {
            useOnlyText >= 2 
            ? <><I fontSize="inherit" />{p}</> 
            : useOnlyText ? p : <I fontSize="inherit" />
          }
      </a>
    </li>
  ))
)

```
`makeObjectList(array, value)`
Where, 
`value = 0` then `ico`; else `text` 
`value > 1` then both `ico` and `text`


# SETUP

> Just incase I delete the entire src code (again)

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

### 3. MUI Icons: `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`
