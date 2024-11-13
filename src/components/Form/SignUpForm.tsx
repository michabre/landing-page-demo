import {Button, Checkbox, Input, Select, SelectItem} from "@nextui-org/react";
import { HiOutlineCursorClick } from "react-icons/hi";

export default function SignUpForm() {
  const variant = "flat"

  const reason_for_contact = [
    "Starter Package",
    "Professional Package",
    "Enterprise Package",
    "Undecided"
  ]

  return (
    <>
      <div className="w-full flex flex-row flex-wrap gap-4">
        <Input
          variant={variant}
          type="text"
          label="Name"
          placeholder="Enter your full name."
          defaultValue=""
          className="max-w-[100%]"
        />
        <div className="w-full flex flex-row  gap-4">
          <Input
            variant={variant}
            type="email"
            label="Email"
            placeholder="Enter your email"
            defaultValue=""
            className="max-w-[50%]"
          />
          <Input
            variant={variant}
            type="tel"
            label="Phone"
            placeholder="Enter your phone number."
            defaultValue=""
            className="max-w-[50%]"
          />
        </div>
        <Select
          label="Select Package"
          placeholder="Select a reason"
          className="max-w-[100%]"
        >
          {reason_for_contact.map((reason, index) => (
            <SelectItem key={index}>
              {reason}
            </SelectItem>
          ))}
        </Select>

        <div className="w-full">
            <Checkbox defaultSelected>I agree to the <u>Privacy Policy</u> and <u>Terms and Conditions</u></Checkbox>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-[60%] flex justify-center align-center">
            <Button color="primary" size="lg" fullWidth={true}>
              <span className="text-xl font-semibold">Sign Up Now</span>
              <HiOutlineCursorClick size={32} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}