import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="page-footer blue darken-1">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Git</a>
            </div>
          </div>
        </footer>
    </div>
  )
}
