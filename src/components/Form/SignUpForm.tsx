import { useState } from "react";
import {Button, Card, CardBody, Checkbox, Input, Select, SelectItem, Spacer} from "@nextui-org/react";
import { HiOutlineCursorClick } from "react-icons/hi";
import { AiFillAlert } from "react-icons/ai";

export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [price_package, setPackage] = useState("")
  const [checked, setChecked] = useState(false)
  const [form_status, setFormStatus] = useState(false)

  const variant = "flat"

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
            <CardBody className="flex flex-row justify-start items-center gap-4 bg-red-200">
             <AiFillAlert className="text-red-700" size={32} /> <p className="text-base leading-none text-red-700">Please fill in all the fields.</p>
            </CardBody>
          </Card>
        </div>
      }
      <div className="w-full flex flex-row flex-wrap gap-4">
        <Input
          variant={variant}
          type="text"
          label="Name"
          placeholder="Enter your full name."
          defaultValue=""
          className="max-w-[100%]"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="w-full flex flex-row  gap-4">
          <Input
            variant={variant}
            type="email"
            label="Email"
            placeholder="Enter your email"
            defaultValue=""
            className="max-w-[50%]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            variant={variant}
            type="tel"
            label="Phone"
            placeholder="Enter your phone number."
            defaultValue=""
            className="max-w-[50%]"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Select
          label="Select Package"
          placeholder="Select a reason"
          className="max-w-[100%]"
          onChange={(e) => setPackage(e.target.value)}
        >
          {package_options.map((selected_package, index) => (
            <SelectItem key={index}>
              {selected_package}
            </SelectItem>
          ))}
        </Select>

        <div className="w-full">
            <Checkbox onChange={(e) => setChecked(e.target.checked)}>I agree to the <u>Privacy Policy</u> and <u>Terms and Conditions</u></Checkbox>
        </div>

        <Spacer y={4} />

        <div className="flex justify-center w-full">
          <div className="w-[60%] flex justify-center align-center">
            <Button color="primary" size="lg" fullWidth={true} onPress={(e) => handleSubmit()}>
              <span className="text-xl font-semibold">Sign Up Now</span>
              <HiOutlineCursorClick size={32} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}



