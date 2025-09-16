import { useState } from "react";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { HiOutlineCursorClick } from "react-icons/hi";
import { AiFillAlert } from "react-icons/ai";

export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [price_package, setPackage] = useState("")
  const [checked, setChecked] = useState(false)
  const [form_status, setFormStatus] = useState(false)

  const variant = "standard"

  const package_options = [
    "Starter Package",
    "Professional Package",
    "Enterprise Package",
    "Undecided"
  ]

  const handleSubmit = () => {
    if (name === "" || email === "" || phone === "" || price_package === "" || checked === false) {
      console.log("Please fill in all the fields.")
      setFormStatus(true)
    } else {
      setFormStatus(false)
      console.log('Sending...')
    }
  }

  return (
    <>
      {form_status && 
        <div className="w-full mb-4">
          <Card>
            <CardContent className="flex flex-row justify-start items-center gap-4 bg-red-200">
             <AiFillAlert className="text-red-700" size={32} /> <p className="text-base leading-none text-red-700">Please fill in all the fields.</p>
            </CardContent>
          </Card>
        </div>
      }
      <div className="w-full flex flex-row flex-wrap gap-4">
        <TextField
          required
          variant={variant}
          id="outlined-required"
          type="text"
          label="Name"
          helperText="Enter your full name."
          defaultValue=""
          className="max-w-[100%]"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: '100%' }}
        />
        <div className="w-full flex flex-row  gap-4">
          <TextField
            variant={variant}
            type="email"
            label="Email"
            helperText="Enter your email"
            defaultValue=""
            className="max-w-[50%]"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '50%',maxWidth: '50%' }}
          />
          <TextField
            variant={variant}
            type="tel"
            label="Phone"
            helperText="Enter your phone number."
            defaultValue=""
            onChange={(e) => setPhone(e.target.value)}
            sx={{ width: '50%', maxWidth: '50%' }}
          />
        </div>
        <InputLabel id="demo-simple-select-label">Select Package</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Select Package"
          value={price_package}
          onChange={(e) => setPackage(e.target.value)}
          sx={{ width: '100%', maxWidth: '100%' }}
        >
          {package_options.map((selected_package, index) => (
            <MenuItem key={index} value={selected_package}>{selected_package}
            </MenuItem>
          ))}
        </Select>

        <div className="w-full">
            <FormControlLabel required control={<Checkbox />} label="I agree to the Privacy Policy and Terms and Conditions" />
        </div>

        <div className="flex justify-center w-full">
          <div className="w-[60%] flex justify-center align-center">
            <Button color="primary" size="large" fullWidth={true} onClick={handleSubmit} variant="contained" className="flex flex-row justify-center items-center gap-4 px-8 py-4">
              <span className="text-xl font-semibold">Sign Up Now</span>
              <HiOutlineCursorClick size={32} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}



