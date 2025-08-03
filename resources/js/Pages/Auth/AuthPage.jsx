import { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const googleLogin = () => {
    window.location.href = '/auth/google';
  };

  const submit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      post(route('login'), {
        onFinish: () => reset('password'),
      });
    } else {
      post(route('register'), {
        onFinish: () => reset('password', 'password_confirmation'),
      });
    }
  };

  return (
    <>
      <Head title={isLogin ? 'Log In' : 'Register'} />
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
            {isLogin ? 'Task Manager | Log In' : 'Task Manager | Register'}
          </h2>

          <form onSubmit={submit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-green-500"
                />
                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
              </div>
            )}

            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-green-500"
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-green-500"
              />
              {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
              
              {/* Forgot Password Link - Only show in login mode */}
              {isLogin && (
                <div className="text-right mt-2">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-green-700 hover:text-green-900 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm">Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  required
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-green-500"
                />
                {errors.password_confirmation && <div className="text-red-500 text-sm mt-1">{errors.password_confirmation}</div>}
              </div>
            )}

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition disabled:opacity-50"
            >
              {processing ? 'Processing...' : (isLogin ? 'Log In' : 'Register')}
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-500">or</div>

          <button
            onClick={googleLogin}
            className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition flex items-center justify-center space-x-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>

          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account?" : 'Already registered?'}{' '}
            <button onClick={toggleForm} className="text-green-700 hover:underline">
              {isLogin ? 'Register' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
