import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground/70 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
