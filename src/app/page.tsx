import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/documents/123">here</Link> to view a document.
    </div>
  );
}

export default Home;