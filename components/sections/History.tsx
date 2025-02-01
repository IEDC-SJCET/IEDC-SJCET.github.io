import Image from 'next/image';

export default function History() {
  return (
    <div className="container p-0 d-flex flex-column text-center">
      <div className="the-past py-4 p-md-5 bg-transparent m-0">
        <h2 id="history" className="fw-bolder display-6 text-black" data-aos="fade-up" data-aos-duration="1400">
          BOOTCAMP REWIND <span className="greencolor"><i className="bi bi-skip-backward-circle-fill"></i></span>
        </h2>
        <br />
        <div className="timeline w-100">
          <div className="conbox left" data-aos="fade-up" data-aos-duration="1400">
            <div className="content p-3 text-center">
              <h3 className="fw-bold fs-6 m-0">IEDC SUMMIT 2022</h3><br />
              <p className="text-black-50 fw-light fs-7 m-0">
                It's the 6th edition of IEDC summit. It was a 2 day long summit conducted on 5th March 2022.
                Hosted by St Joseph's College of Engineering and Technology
              </p>
            </div>
          </div>
          {}
        </div>
      </div>
    </div>
  );
} 