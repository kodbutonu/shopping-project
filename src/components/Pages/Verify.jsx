// src/components/Verify.js
import React from 'react';

const Verify = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('path/to/image.jpg')" }}></div>
            <div className="w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6">E-posta Doğrulama</h2>
                    <p className="mb-4">Lütfen doğrulama kodunuzu giriniz:</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">Doğrulama Kodu</label>
                            <input type="text" id="verificationCode" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Doğrula</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Verify;
