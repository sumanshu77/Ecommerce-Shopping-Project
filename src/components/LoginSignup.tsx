import React, { useState, useEffect } from 'react';

const X = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
);

interface LoginSignupProps {
  open: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup' | 'forgot';
}

const LoginSignup: React.FC<LoginSignupProps> = ({ open, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [message, setMessage] = useState<string | null>(null);
  const [resetEmail, setResetEmail] = useState<string>('');

  useEffect(() => {
    if (open) {
      setMode(initialMode);
      setMessage(null);
      setResetEmail('');
    }
  }, [open, initialMode]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (mode === 'forgot') {
      // Placeholder: pretend we sent a reset email
      setMessage(`If an account exists for ${resetEmail}, a password reset link has been sent.`);
      return;
    }
    setMessage(`${mode === 'login' ? 'Login' : 'Signup'} successful! This is a design placeholder.`);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white shadow-xl rounded-xl p-8 max-w-lg w-full transition-all duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-emerald-600">DealTree</h1>
            <p className="mt-2 text-sm text-gray-500">Your one-stop shop for amazing deals</p>
        </div>

        {message && (
          <div className="mt-6 mb-4 p-4 rounded-md text-sm text-center bg-green-50 text-green-700">{message}</div>
        )}

        {mode === 'login' ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Log in to your account</h2>
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="login-email" name="email" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors duration-200" />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="login-password" name="password" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors duration-200" />
            </div>
            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <button type="button" onClick={() => setMode('forgot')} className="font-medium text-emerald-600 hover:text-emerald-500">Forgot your password?</button>
                </div>
            </div>
            <div>
              <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                Log in
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button type="button" onClick={() => setMode('signup')} className="font-medium text-emerald-600 hover:text-emerald-500 underline">
                Sign up
              </button>
            </p>
          </form>
        ) : mode === 'signup' ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Create a new account</h2>
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="signup-name" name="name" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors duration-200" />
            </div>
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="signup-email" name="email" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors duration-200" />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="signup-password" name="password" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors duration-200" />
            </div>
            <div>
              <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                Sign up
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button type="button" onClick={() => setMode('login')} className="font-medium text-emerald-600 hover:text-emerald-500 underline">
                Log in
              </button>
            </p>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Reset your password</h2>
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700">Enter your email address</label>
              <input value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} type="email" id="reset-email" name="resetEmail" required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-colors duration-200" />
            </div>
            <div>
              <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                Send reset link
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Remembered your password?{' '}
              <button type="button" onClick={() => setMode('login')} className="font-medium text-emerald-600 hover:text-emerald-500 underline">
                Log in
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;


