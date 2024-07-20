"use client"

import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

export default function Home() {
  return (
    <>
    <AddUser />
    <DisplayUser />
    </>
  );
}
