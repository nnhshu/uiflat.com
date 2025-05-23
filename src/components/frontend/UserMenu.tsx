"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

export default function UserMenu({ user, onLogout }: UserMenuProps) {
  const initials = user.name ? user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() : "";

    

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold cursor-pointer hover:opacity-90"
          title={'AB'}
        >
          {initials}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 bg-[var(--color-background)] text-white border border-[var(--color-border)] rounded-xl shadow-lg p-4"
      >
        <DropdownMenuItem
          onClick={() => alert("Go to profile")}
          className="cursor-pointer px-4 py-2 rounded-2xl hover:bg-[var(--color-background)]"
        >
          My profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onLogout}
          className="cursor-pointer px-4 py-2 rounded-2xl hover:bg-[var(--color-background)]"
        >
          Log-out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
