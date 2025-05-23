// components/LoginModal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"

import { FcGoogle } from "react-icons/fc";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface LoginModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSignupClick: () => void;
}

export default function LoginModal({
  open,
  setOpen,
  onSignupClick,
}: LoginModalProps) {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  // const REDIRECT_URI = "http://localhost:3839/google-callback";

  // const handleGoogleLogin = () => {
  //   const oauthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  //   oauthUrl.searchParams.set("client_id", GOOGLE_CLIENT_ID);
  //   oauthUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  //   oauthUrl.searchParams.set("response_type", "code");
  //   oauthUrl.searchParams.set("scope", "openid email profile");
  //   oauthUrl.searchParams.set("access_type", "offline");
  //   oauthUrl.searchParams.set("prompt", "consent");
  //   window.location.href = oauthUrl.toString();
  // };
  const { setUser } = useAuth();
  const router = useRouter();


  const handleGoogleLogin = () => {
    const client_id = GOOGLE_CLIENT_ID;
    const redirect_uri = "https://uiflat.com/google-callback.html";

    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${encodeURIComponent(
      redirect_uri
    )}&response_type=code&scope=profile email&prompt=select_account`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const popup = window.open(oauthUrl, "_blank", "width=500,height=600");

    const receiveCode = async (event: MessageEvent) => {
      if (event.data?.type === "GOOGLE_CODE") {
        const paramsObj = event.data.params;
        const params = new URLSearchParams(paramsObj);
        params.append("callback", "https://uiflat.com/google-callback.html");

        const url = `https://api.uiflat.com/v1/api/auth/google/callback?${params.toString()}`;

        try {
          const res = await fetch(url); // GET request
          const result = await res.json();
          if (result?.token) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            setUser(result.user);
            toast("Login successful!",{
              description: `Welcome back, ${result.user.name || 'user'}.`,
            });

            setOpen(false);
            router.push('/');
          } else {
            toast("Login failed",{
              description: "Unable to login with Google. Please try again.",
            });
            console.error('Login failed');
          }
        } catch (err) {
          toast("Login error",{
            description: "An error occurred during login. Please try again.",
          });
          console.error("Lỗi đăng nhập:", err);
        }
      }
    };

    window.addEventListener("message", receiveCode, { once: true });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#1a1a1a] text-white rounded-2xl px-6 py-8 w-[380px]">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">Log in</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm mb-1 block">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[#121212] text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="text-sm mb-1 block">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="bg-[#121212] text-white border border-gray-700"
            />
          </div>
          <Button className="w-full px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-4xl">
            Login
          </Button>
          <div className="flex items-center justify-between text-gray-500 mb-3">
            <hr className="flex-1 border-gray-700" />
            <span className="px-2 text-sm">Or</span>
            <hr className="flex-1 border-gray-700" />
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full px-3 py-2.5 bg-[#121212] border-gray-700 text-white hover:text-white hover:bg-[#1f1f1f] rounded-4xl flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-lg" />
            Login by Google
          </Button>
          <p className="text-center text-sm font-bold text-white mt-2">
            Don’t have account?{" "}
            <button
              onClick={() => {
                setOpen(false);
                onSignupClick();
              }}
              className="text-white underline hover:text-blue-400"
            >
              Sign up!
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
