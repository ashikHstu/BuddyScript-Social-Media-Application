"use client";

import React from 'react';
import Image from 'next/image';

export default function LoadingPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <Image 
          src="/assets/images/logo-copy.svg" 
          alt="Buddy Script Logo"
          width={120}
          height={120}
          priority 
        />
      </div>

      <h1 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#333', 
        margin: '0 0 10px 0' 
      }}>
        Buddy Script
      </h1>

      {/* Spinner/Loading Indicator */}
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />

      {/* CSS Animation for the spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}