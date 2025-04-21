import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
//import styles from "@/styles/Home.module.css"; messes with tailwind import

import { useState } from 'react'; //to store user input



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [emailText, setEmailText] = useState('');
  return (
    <main className="min-h-screen bg-red-500 p-6">
      {/* Your email form will go here */}
      <div className="flex justify-center mt-48">
        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          className="w-1/3 h-40 p-5 border rounded-md resize-none"
          placeholder="Paste your email here..."
        />
      </div>  
    </main>
  );
}



