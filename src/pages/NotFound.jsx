import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <main className="grid min-h-[68vh] place-items-center bg-[linear-gradient(135deg,#fbf7f0,#edf2ed)] py-20 text-center">
      <Container><p className="eyebrow">404</p><h1 className="page-title mt-3">Page Not Found</h1><p className="body-copy mx-auto mt-5 max-w-lg">The page you are looking for may have moved. Return to the portfolio home page to continue exploring.</p><Link to="/" className="btn-primary mt-7"><ArrowLeft size={17} className="mr-2" />Back to Home</Link></Container>
    </main>
  );
}
