import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid fcontainer">
        <div className="row  frow">
            <div className="col-md-4 p-5">
            <h1 className='fh1' >Useful Link</h1>
                <ul className='ful' >
                    <li>Home</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div className="col-md-4  p-5">
            <h1 className='fh1' >Useful Link</h1>
                <ul className='ful' >
                    <li>Home</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="col-md-4  p-5">
            <iframe title='Our Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.508011136956!2d74.35820931462991!3d31.50686228137945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918f9d1c4f4f4f7%3A0x3b5b7f8b0e8c3b1e!2sArfa%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1633611517557!5m2!1sen!2s" width="300" height="250" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
