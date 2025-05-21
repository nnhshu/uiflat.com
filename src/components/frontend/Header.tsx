"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/modal/LoginModal";
import SignupModal from "@/components/modal/SignupModal";
import { FiSearch } from "react-icons/fi";

export default function Header() {
const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      <header className="flex items-center justify-between p-4 px-20 bg-[--bg-header]">
        <div className="flex items-center gap-2">
          <Image src="/uiflat_logo.svg" alt="UIFlat" width={135} height={52} />
        </div>
        <div className="flex-1 max-w-2xl mx-8 relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
          <Input
            placeholder="Search by apps, screens, flows"
            className="bg-[--background] rounded-4xl text-white border border-[#2B2E37] focus:border-[#2B2E37] pl-10 h-11"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="text-white border border-border rounded-4xl cursor-pointer h-11"
            onClick={() => setActiveModal("login")}
          >
            Log in
          </Button>
        </div>
      </header>

      <LoginModal
        open={activeModal === "login"}
        onSignupClick={() => setActiveModal("signup")}
        setOpen={(val) => setActiveModal(val ? "login" : null)}
      />
      <SignupModal
        open={activeModal === "signup"}
        onLoginClick={() => setActiveModal("login")}
        setOpen={(val) => setActiveModal(val ? "signup" : null)}
      />
    </>
  );
}
