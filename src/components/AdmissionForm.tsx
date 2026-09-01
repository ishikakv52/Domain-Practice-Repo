"use client";

import { useState } from "react";

const GRADES = [
  "Nursery",
  "KG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
];

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      }}
      className="bg-white rounded-2xl shadow-[var(--shadow-md)] border border-ink/[0.05] p-8 md:p-10 max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label
            htmlFor="student-name"
            className="block font-semibold text-sm mb-1.5"
          >
            Student&apos;s Full Name
          </label>
          <input
            id="student-name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          />
        </div>

        <div>
          <label htmlFor="dob" className="block font-semibold text-sm mb-1.5">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            required
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          />
        </div>

        <div>
          <label
            htmlFor="grade"
            className="block font-semibold text-sm mb-1.5"
          >
            Applying for Grade
          </label>
          <select
            id="grade"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          >
            <option value="" disabled>
              Select grade
            </option>
            {GRADES.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="parent-name"
            className="block font-semibold text-sm mb-1.5"
          >
            Parent/Guardian Name
          </label>
          <input
            id="parent-name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-semibold text-sm mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="email" className="block font-semibold text-sm mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block font-semibold text-sm mb-1.5"
          >
            Additional Message (optional)
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full px-4 py-3 rounded-[10px] border border-ink/15 bg-paper focus:bg-white focus:outline-none focus:border-indigo-soft focus:ring-4 focus:ring-indigo-soft/15 transition"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-7 rounded-full bg-marigold hover:bg-marigold-light transition-colors text-ink font-semibold py-3.5"
      >
        Submit Application
      </button>

      {submitted && (
        <div className="mt-5 rounded-[10px] bg-teal/10 border border-teal/30 text-teal font-semibold px-4 py-3.5 text-sm">
          Application submitted! Our admissions team will contact you
          shortly.
        </div>
      )}
    </form>
  );
}
