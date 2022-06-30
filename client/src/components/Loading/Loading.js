import React from 'react'
import './Loading.css'

export default function Loading() {
  return (
      <div className="loading-container">
        <p>Getting data. Please wait a sec...</p>
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
      </div>
    
  )
}
