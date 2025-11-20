'use client';

import { useState } from 'react';
import { Shield } from 'lucide-react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check credentials
    if (username === 'admin' && password === 'campus@admin2025') {
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminUser', 'admin');
        
        // Redirect using window.location
        window.location.href = '/admin';
      }
    } else {
      setError('خطأ في اسم المستخدم أو كلمة المرور');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #10b981, #14b8a6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      direction: 'rtl'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        background: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: '#d1fae5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem'
          }}>
            <Shield color="#10b981" size={32} />
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
            تسجيل دخول المشرف
          </h1>
          <p style={{ color: '#6b7280' }}>لوحة التحكم الإدارية</p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1rem',
            color: '#dc2626'
          }}>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              اسم المستخدم
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#1f2937'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              كلمة المرور
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #d1d5db',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#1f2937'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: '#10b981',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            تسجيل الدخول
          </button>
        </form>

        {/* Credentials Info */}
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '0.5rem'
        }}>
          <p style={{ fontWeight: 'bold', color: '#166534', marginBottom: '0.5rem' }}>
            🔐 معلومات الدخول:
          </p>
          <p style={{ color: '#166534', fontSize: '0.875rem' }}>اسم المستخدم: admin</p>
          <p style={{ color: '#166534', fontSize: '0.875rem' }}>كلمة المرور: campus@admin2025</p>
        </div>
      </div>
    </div>
  );
}