import { cn, theme } from '@/lib/theme';

export default function Footer() {
  return (
    <footer className={cn('border-t', theme.bg.page, theme.border.default)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className={cn(" mb-4 md:mb-0", theme.text.muted)}>
            © 2025 Alan Bagel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/TheSecondComing123" target="_blank" rel="noopener noreferrer" className={cn(" hover:text-green-500 transition-colors", theme.text.muted)} aria-label="Visit Alan Bagel's GitHub profile">
              GitHub
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              Twitter
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
