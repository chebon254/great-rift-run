import { CheckCircle2 } from "lucide-react";

export function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fadeIn">
      <CheckCircle2 className="w-16 h-16 text-green-500 animate-scaleIn" />
      <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
      <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
    </div>
  );
}