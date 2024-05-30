import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SignupType } from "@msaadg/common";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: ""
  })

  async function sendRequest(event: React.FormEvent) {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupInputs);
      const jwt = response.data.jwt;
      localStorage.setItem("Authorization", `Bearer ${jwt}`);
      navigate("/blogs")
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex justify-center py-12 bg-gray-50 min-h-screen">
      <div className="flex max-w-4xl w-full mx-4 bg-white shadow rounded-lg overflow-hidden">
        <div className="w-full md:w-3/5 p-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2">Create an account</h2>
            <div className="flex justify-right text-sm g gap-1">
              <div className="text-sm g">
                Already have an account?
              </div>
              <div className="text-sm g">
                <a className="text-gray-400" href="/signin">
                  Signin
                </a>
              </div>
            </div>
          </div>
          <form className="mt-8">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" onChange={(e) => {
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
            <Button onClick={sendRequest} className="w-full bg-black text-white">Sign Up</Button>
          </form>
        </div>
        <div className="w-2/5 bg-gray-100 p-8 hidden md:block">
          <blockquote className="text-lg italic">
            “The customer service I received was exceptional. The support team went above and beyond to address my concerns.”
          </blockquote>
          <p className="mt-4 font-semibold">Jules Winnfield</p>
          <p className="text-gray-400">CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
}