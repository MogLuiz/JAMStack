// Packages
import Head from "next/head";
import Image from "next/image";
import { usePageQuery } from "../generated/graphql";

export default function Home() {
  const [{ data }] = usePageQuery({ 
    variables: {
      slug: "about"
    }
   }) 
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <h1>{data?.page.title}</h1>;
}
