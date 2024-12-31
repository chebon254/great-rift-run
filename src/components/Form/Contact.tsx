"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { FormInput } from "./FormInput";
import { SuccessMessage } from "./SuccessMessage";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending your message");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-screen-sm mx-auto bg-white shadow-md rounded-lg p-8">
        <SuccessMessage />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-sm mx-auto my-10 bg-white shadow-md rounded-[10px] p-8 space-y-6 
                transform transition-all duration-300 ease-in-out"
    >
      <div className="space-y-2">
        <h1 className="font-bold text-2xl text-gray-800">Contact Us</h1>
        <p className="text-gray-600">Reach us today!</p>
      </div>
      
      <FormInput
        label="Name"
        name="name"
        placeholder="Enter name(s)"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormInput
        label="Phone"
        name="phone"
        type="tel"
        placeholder="Enter phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <div className="group">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-500 transition-colors"
        >
          Subject
        </label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                   transition-all duration-200 ease-in-out"
        >
          <option value="">Select a subject</option>
          <optgroup label="Events">
            <option value="Great Rift Run">Great Rift Run</option>
          </optgroup>
          <optgroup label="Programs">
            <option value="RUN WITH LEGENDS">RUN WITH LEGENDS</option>
            <option value="OPEN SEASON COURSE">OPEN SEASON COURSE</option>
            <option value="SCHOOL CAMP">SCHOOL CAMP</option>
          </optgroup>
        </select>
      </div>

      <div className="group">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-500 transition-colors"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Enter message"
          rows={4}
          className="w-full px-4 py-2 border rounder-[4px] border-gray-300 rounded-md shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                   transition-all duration-200 ease-in-out outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center space-x-2
          ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}
          text-white font-medium py-3 px-4 rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          transform transition-all duration-200 ease-in-out
          ${isSubmitting ? "scale-95" : "hover:scale-[1.02]"}`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
}