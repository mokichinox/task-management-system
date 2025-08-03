import { Head, useForm, Link } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            
            <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-50 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-green-800 mb-2">
                            Forgot Password
                        </h2>
                        <p className="text-sm text-gray-600">
                            No problem. Just let us know your email address and we will email you a password reset link.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 p-4 text-sm font-medium text-green-600 bg-green-100 rounded-lg">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                className="mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-green-500"
                                placeholder="Enter your email address"
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition disabled:opacity-50"
                        >
                            {processing ? 'Sending...' : 'Email Password Reset Link'}
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <Link
                            href="/"
                            className="text-sm text-green-700 hover:text-green-900 hover:underline"
                        >
                            ← Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
