'use client';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Header from "@/components/ui/Header";
import Sidenav from "@/components/ui/Sidenav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  const { data: session } = useSession();

  return (
    <>
    <Header/>
      {children}
    </>
  );
}
