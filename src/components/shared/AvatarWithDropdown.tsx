"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LayoutDashboard, UserCircle, LogOut } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IProfile } from "@/interface/profile";
import { setLogOut } from "@/redux/features/auth/authSlice";
import Link from "next/link";

interface AvatarWithDropdownProps {
  url?: string;
  alt?: string;
  size?: number;
  username?: string;
}

export default function AvatarWithDropdown({
  alt = "User avatar",

  username = "User",
}: AvatarWithDropdownProps) {
  const [open, setOpen] = useState(false);
  //   redux
  const dispatch = useAppDispatch();
  const profileInfo = useAppSelector((state) => state.auth.profile) as IProfile;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            {profileInfo?.user?.profilePhoto ? (
              <AvatarImage src={profileInfo?.user?.profilePhoto} alt={alt} />
            ) : (
              <AvatarFallback>
                <span className="sr-only">{username}</span>
                <User className="h-4 w-4" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              Welcome, {profileInfo?.user?.name.firstName}!
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {/* {username.toLowerCase()}@example.com */}
              {profileInfo?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/dashboard"}>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <Link href={"/dashboard/profile"}>
          <DropdownMenuItem>
            <UserCircle className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(setLogOut())}>
          <LogOut className="mr-2 h-4 w-4" />
          <>Log out</>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
