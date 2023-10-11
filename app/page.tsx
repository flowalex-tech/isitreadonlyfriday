"use client"

import { useEffect } from "react";
import { text } from "stream/consumers";

var changeAllowed: string | undefined;

const currentDay = new Date().getDay();

if (currentDay == 5) {
  changeAllowed = "Yes, don't make production changegs"
} else {
  changeAllowed = "No, Change Away"
}

console.log(changeAllowed);

export default function Home() {
  return (
    <main>
      <h1 align="center">Is it Read Only Friday</h1>
      <h2 align="center">
        {changeAllowed}
      </h2>
    </main>
  )
}