import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { FcGoogle } from "react-icons/fc";
  
  interface SignupModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onLoginClick: () => void;
  }
  
  export default function SignupModal({ open, setOpen, onLoginClick }: SignupModalProps) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1a1a1a] text-white rounded-2xl px-6 py-8 w-[380px]">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-4">Sign up</DialogTitle>
          </DialogHeader>
  
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
  
            <div>
              <label className="text-sm mb-1 block">Password</label>
              <Input type="password" placeholder="Create a password" />
            </div>
  
            <div className="flex items-center justify-between text-gray-500 my-3">
              <hr className="flex-1 border-gray-700" />
              <span className="px-2 text-sm">Or</span>
              <hr className="flex-1 border-gray-700" />
            </div>
  
            <Button variant="outline" className="w-full">
              <FcGoogle className="mr-2 text-lg" />
              Sign up with Google
            </Button>
  
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Continue</Button>
  
            <p className="text-center text-sm text-gray-400 mt-2">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setOpen(false);
                  onLoginClick();
                }}
                className="text-white underline hover:text-blue-400"
              >
                Log in!
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  