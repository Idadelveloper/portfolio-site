import React, { useState, useEffect } from "react"
import './Cursor.css'

export default function Cursor() {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })

    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX - 16
            const y = e.clientY - 16
            setCursorXY({x, y})
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
          window.removeEventListener('mousemove', moveCursor)
        }
      }, [])

    return (
        <div className="cursor" style={{
            transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
          }}>
        </div>
    )
}
