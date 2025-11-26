'use client';

import { cn, theme } from '@/lib/theme';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className={cn(" rounded-xl p-8 border border-red-500/20 max-w-lg", theme.bg.card)}>
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Something went wrong
            </h2>
            <p className={cn(" mb-4", theme.text.body)}>
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className={cn("text-sm  mb-4", theme.text.muted)}>
                <summary className={cn("cursor-pointer ", theme.hover.text)}>
                  Error details
                </summary>
                <pre className={cn("mt-2 p-4  rounded overflow-auto", theme.bg.page)}>
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
