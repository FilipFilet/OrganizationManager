import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './InputForms'
import OrgList from './OrganizationList'

function App() {
  return (
    <main>
      <Forms />
      <OrgList />
    </main>
  )
}

export default App
