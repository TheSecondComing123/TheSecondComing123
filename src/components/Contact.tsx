'use client'

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
    <section id="contact" className="py-20 bg-[#1a1c23]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-[#1e2028] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-[#1e2028] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-[#1e2028] text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
