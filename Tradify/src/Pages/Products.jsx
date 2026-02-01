import React from 'react';
import PublicLayout from '../layouts/PublicLayout';

export default function Products() {
    return (
        <PublicLayout>
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl text-gray-800 font-semibold mb-4">Technology</h1>
                <p className="text-xl text-gray-500 mb-8">Sleek, modern, and intuitive trading platforms</p>
                <p className="text-gray-600">Check back soon for our full product lineup.</p>
            </div>
        </PublicLayout>
    );
}
