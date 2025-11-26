'use client';

import { cn, theme } from '@/lib/theme';

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className={cn("py-20 ", theme.bg.secondary)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn("text-4xl font-bold text-center mb-12 ", theme.text.heading)}>
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={cn("block text-sm font-medium mb-2 ", theme.text.body)}>
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={cn("w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent  ", theme.text.heading, theme.bg.control, theme.border.control)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={cn("block text-sm font-medium mb-2 ", theme.text.body)}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={cn("w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent  ", theme.text.heading, theme.bg.control, theme.border.control)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className={cn("block text-sm font-medium mb-2 ", theme.text.body)}>
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className={cn("w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent  ", theme.text.heading, theme.bg.control, theme.border.control)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
