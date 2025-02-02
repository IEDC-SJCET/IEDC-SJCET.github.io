import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-100 bg-black p-3">
      <div className="container mx-auto m-0 p-0 d-flex flex-column gap-5">
        <div id="footer" className="d-flex flex-column flex-md-row gap-5 gap-md-3 justify-content-center">
          <div className="d-flex flex-column gap-3 flex-grow-1">
            <h3 className="text-white fs-6 fw-bold text-center">REACH US</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503167.5740352092!2d76.23294812656607!3d9.85064521519969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai!5e0!3m2!1sen!2sin!4v1617135156377!5m2!1sen!2sin"
              className="flex-grow-1"
              title="St. Joseph's College of Engineering and Technology, Palai"
              aria-label="St. Joseph's College of Engineering and Technology, Palai"
            />
          </div>
          <div className="text-center border-1 border-white d-flex flex-column gap-3 flex-grow-1">
            <h3 id="ABOUTUS" className="text-white fs-6 fw-bold text-center">GIVE US FEEDBACK</h3>
            <form id="feedbackFORM" className="d-flex flex-column text-white-50 gap-3">
              <input name="name" type="text" minLength={2} maxLength={20} className="form-field bg-dark" placeholder="Your Name" required />
              <input name="email" type="email" minLength={2} maxLength={30} className="form-field bg-dark" placeholder="Email" required />
              <textarea name="feedback" minLength={2} maxLength={200} className="form-field bg-dark py-4" placeholder="Message" required style={{minHeight: '100px'}} />
              <span>
                <button id="btnSubmit" className="btn-outline-light btn px-5" type="submit">
                  SUBMIT <i className="bi bi-chevron-right"></i>
                </button>
              </span>
            </form>
          </div>
        </div>
        {}
      </div>
    </div>
  );
} 