import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id="navbarfloat" className="navbar navbar-expand-md w-100 navbar-dark bg-transparent mt-md-1 mt-3">
      <div className="container mt-md-3">
        <Link href="/" className="navbar-brand lead fs-3 fw-bolder m-0 p-0 col-4 col-md-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bootcamp-white.png`}
            alt="Bootcamp"
            className="img-fluid"
            width={180}
            height={38}
            priority
          />
        </Link>

        <button 
          className="navbar-toggler border-0 rounded-1 p-0" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-1 text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="ms-auto mt-3 navbar-nav gap-md-4 gap-3 fs-6 fw-bold">
            <li className="nav-item" data-aos="fade-left" data-aos-duration="500">
              <Link className="nav-link active text-white" href="#whyiedc">WHY IEDC</Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-duration="700">
              <Link className="nav-link active text-white" href="#EVENTS">EVENTS</Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-duration="900">
              <Link className="nav-link active text-white" href="#SUMMIT2022">SUMMIT</Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-duration="1100">
              <Link className="nav-link active text-white" href="#EXECOM">EXECOM</Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-duration="1300">
              <Link className="nav-link active text-white" href="#ABOUTUS">ABOUT US</Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-duration="1300">
              <Link className="nav-link active text-white" href="https://iedc-admin.vercel.app">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 