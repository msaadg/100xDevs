import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SignupType } from "@msaadg/common";

export const Signup = () => {
  const [signupInputs, setSignupInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: ""
  })

  return (
    <div className="flex justify-center py-12 bg-gray-50 min-h-screen">
      <div className="flex max-w-4xl w-full mx-4 bg-white shadow rounded-lg overflow-hidden">
        <div className="w-3/5 p-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2">Create an account</h2>
            <div className="flex justify-right text-sm g gap-2">
              <div className="text-sm g">
                Already have an account?
              </div>
              <div className="text-sm g">
                <a className="text-blue-600" href="/signin">
                  Login
                </a>
              </div>
            </div>
          </div>
          <form className="mt-8">
            <div className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  name: e.target.value
                }) 
              }}/>
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  email: e.target.value
                })
              }}/>
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" type="password" onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  password: e.target.value
                })
              }}/>
            </div>
            <Button className="w-full bg-black text-white">Sign Up</Button>
          </form>
        </div>
        <div className="w-2/5 bg-gray-100 p-8">
          <blockquote className="text-lg italic">
            “The customer service I received was exceptional. The support team went above and beyond to address my concerns.”
          </blockquote>
          <p className="mt-4 font-semibold">Jules Winnfield</p>
          <p>CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
}