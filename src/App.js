import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import EncryptForm from './components/EncryptForm'
import DecryptForm from './components/DecryptForm'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Container>
      <h1>Image Steganography Application</h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label='Encrypt' />
          <Tab label='Decrypt' />
        </Tabs>
      </Box>
      <TabPanel value={activeTab} index={0}>
        <EncryptForm />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <DecryptForm />
      </TabPanel>
    </Container>
  )
}

function TabPanel(props) {
  const { children, value, index } = props

  return (
    <div role='tabpanel' hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default App
