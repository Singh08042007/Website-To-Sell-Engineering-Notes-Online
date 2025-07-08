import React from 'react';
import { ContactForm as ContactFormType } from '../types';

interface ContactFormProps {
  formData: ContactFormType;
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  updateField: (field: keyof ContactFormType) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ContactForm({ 
  formData, 
  isSubmitting, 
  handleSubmit, 
  updateField 
}: ContactFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.name}
          onChange={updateField('name')}
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.email}
          onChange={updateField('email')}
          required
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.message}
          onChange={updateField('message')}
          required
          disabled={isSubmitting}
        />
      </div>
      <button 
        type="submit" 
        className={`w-full bg-indigo-600 text-white px-6 py-2 rounded-lg ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}