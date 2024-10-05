// src/components/Register.js
import React from 'react';

const Register = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('path/to/image.jpg')" }}></div>
            <div className="w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6">Kayıt Ol</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Kullanıcı Adı</label>
                            <input type="text" id="username" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
                            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Şifre</label>
                            <input type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Kayıt Ol</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
