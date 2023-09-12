import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import ImageIcon from '@mui/icons-material/Image'
import Typography from '@mui/material/Typography'

function DecryptForm() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [decryptedText, setDecryptedText] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(URL.createObjectURL(file))
  }

  const handleDecrypt = () => {
    // Implement decryption logic based on the selected image
  }

  return (
    <div className='formContainer'>
      <Typography variant='h5'>Decrypt</Typography>
      <div>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id='image-upload-decrypt'
        />
        <label htmlFor='image-upload-decrypt'>
          <input
            id='image-upload-decrypt'
            type='file'
            inputProps={{ accept: 'image/*' }}
            className='fileInput'
          />
          <Button
            style={{ marginTop: '16px' }}
            variant='outlined'
            component='span'
          >
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
        style={{ marginTop: '16px' }}
        variant='contained'
        color='primary'
        onClick={handleDecrypt}
      >
        Decrypt
      </Button>
      <div>
        <Typography style={{ marginTop: '16px' }} variant='h6'>
          Decrypted Text:
        </Typography>
        <div style={{ marginTop: '16px' }}>{decryptedText}</div>
      </div>
    </div>
  )
}

export default DecryptForm
