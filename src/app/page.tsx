
'use client';
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye,EyeOff } from "lucide-react";
import { Icon } from 'lucide-react';

export default function login() {
  const router = useRouter()

  const [password, setPassword] = useState<string>("");

  const [visible, setVisible] = useState<boolean>(false);



  return (
    <div className="w-full h-screen lg:grid  lg:grid-cols-2 ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>

          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {/* <Label htmlFor="email">Username</Label> */}
              <Input
                id="email"
                type="email"
                placeholder="Username"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                {/* <Label htmlFor="password">Password</Label> */}
                {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
         
              <Input value={password} id="password" type={visible ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          
           
            </div>
            <Button type="submit" className="w-full" onClick={() => router.push('/dashboard')}>
              Login
            </Button>

          </div>

        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
