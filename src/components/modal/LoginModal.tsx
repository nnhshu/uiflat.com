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
import { FcGoogle } from "react-icons/fc";

interface LoginModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSignupClick: () => void;
}

export default function LoginModal({ open, setOpen, onSignupClick }: LoginModalProps) {
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
            className="w-full px-3 py-2.5 bg-[#121212] border-gray-700 text-white hover:text-white hover:bg-[#1f1f1f] rounded-4xl"
          >
            Login by Google
            <FcGoogle className="mr-2 text-lg" />
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
