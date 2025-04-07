import Image from "next/image";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Images from "./components/Images";

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array if the fetch fails
  }
}

export default async function Home() {
  const posts = await fetchProducts(); // Fetch products on the server side
  console.log("Fetched Posts in Home:", posts); // Debugging

  return (
    <div className="flex items-start justify-center">
      <Navbar />
      <div className="flex flex-col w-full items-center justify-center">
        <Images/>
        <Container posts={posts} />
      </div>
    </div>
  );
}
