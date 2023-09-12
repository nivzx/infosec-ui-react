import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import '../styles.scss'

function EncryptForm() {
  const [plaintext, setPlaintext] = useState('')
  const [encryptionMethod, setEncryptionMethod] = useState('RSA')
  const [selectedImage, setSelectedImage] = useState(null)

  const encryptionMethods = [
    { value: 'RSA', label: 'RSA' },
    { value: 'AES', label: 'AES' },
  ]

  const handlePlaintextChange = (e) => {
    setPlaintext(e.target.value)
  }

  const handleEncryptionMethodChange = (e) => {
    setEncryptionMethod(e.target.value)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(URL.createObjectURL(file))
  }

  const handleEncrypt = () => {
    // Implement encryption logic based on the selected method and plaintext
  }

  return (
    <div className='formContainer'>
      <Typography variant='h5'>Encrypt</Typography>
      <TextField
        label='Plaintext'
        multiline
        rows={4}
        variant='outlined'
        fullWidth
        value={plaintext}
        onChange={handlePlaintextChange}
        margin='normal'
      />
      <FormControl fullWidth variant='outlined' margin='normal'>
        <InputLabel>Encryption Method</InputLabel>
        <Select
          value={encryptionMethod}
          onChange={handleEncryptionMethodChange}
          label='Encryption Method'
        >
          {encryptionMethods.map((method) => (
            <MenuItem key={method.value} value={method.value}>
              {method.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='fileInput'
          id='image-upload'
        />
        <label htmlFor='image-upload'>
          <input
            id='image-upload'
            type='file'
            inputProps={{ accept: 'image/*' }}
            style={{ display: 'none' }}
          />
          <Button variant='outlined' component='span'>
            Upload Image
          </Button>
        </label>
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              alt='Selected'
              style={{ maxWidth: '100px', maxHeight: '100px' }}
              className='imagePreview'
            />
          </div>
        )}
      </div>
      <Button
        className='button'
        variant='contained'
        color='primary'
        style={{ marginTop: '16px' }}
        onClick={handleEncrypt}
      >
        Encrypt
      </Button>
    </div>
  )
}

export default EncryptForm
