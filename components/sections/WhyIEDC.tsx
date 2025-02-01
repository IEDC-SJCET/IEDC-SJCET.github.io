import Image from 'next/image';

const basePath = '/IEDC-SJCET.github.io';

export default function WhyIEDC() {
  const imagePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <>
      {}
      <section className="bg-white" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }} data-aos="fade-up" data-aos-duration="1200">
              WHY IEDC <span className="greencolor"><i className="bi bi-intersect"></i></span>
            </h2>
            <p className="text-secondary mb-5" data-aos="fade-up" data-aos-duration="1200">
              Here students take their first step as innovators and entrepreneurs
            </p>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="text-center">
                <Image 
                  className="mb-3" 
                  src="/IEDC-SJCET.github.io/entreprenuer.png"
                  alt="Mentoring" 
                  width={100} 
                  height={100}
                  priority 
                />
                <h5 className="fw-bold mb-2">MENTORING</h5>
                <p className="text-secondary small">
                  Startup bootcamp provides mentoring support to help students develop innovative ideas.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="1500">
              <div className="text-center">
                <Image 
                  className="mb-3" 
                  src="/IEDC-SJCET.github.io/bulb.png"
                  alt="Innovation" 
                  width={100} 
                  height={100}
                  priority 
                />
                <h5 className="fw-bold mb-2">INNOVATION</h5>
                <p className="text-secondary small">
                  We help students develop innovative ideas and transform them into ventures.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2000">
              <div className="text-center">
                <Image 
                  className="mb-3" 
                  src="/IEDC-SJCET.github.io/startup.png"
                  alt="Startup Support" 
                  width={100} 
                  height={100}
                  priority 
                />
                <h5 className="fw-bold mb-2">STARTUP SUPPORT</h5>
                <p className="text-secondary small">
                  We provide guidance to students interested in starting ventures.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="2500">
              <div className="text-center">
                <Image 
                  className="mb-3" 
                  src="/IEDC-SJCET.github.io/network.png" 
                  alt="Networking" 
                  width={100} 
                  height={100}
                  priority 
                />
                <h5 className="fw-bold mb-2">NETWORKING</h5>
                <p className="text-secondary small">
                  Connect with industry leaders to expand opportunities.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-duration="3000">
              <div className="text-center">
                <Image 
                  className="mb-3" 
                  src="/IEDC-SJCET.github.io/incubation.png" 
                  alt="Incubation" 
                  width={100} 
                  height={100}
                  priority 
                />
                <h5 className="fw-bold mb-2">INCUBATION</h5>
                <p className="text-secondary small">
                  Access resources to turn ideas into working prototypes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }} data-aos="fade-up" data-aos-duration="1200">
              SJCET BOOTCAMP - IEDC <span className="greencolor"><i className="bi bi-rocket-takeoff"></i></span>
            </h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="text-secondary" data-aos="fade-up" data-aos-duration="1200">
                  The SJCET Startup Bootcamp- IEDC was established on 9th March 2015 as part of the Kerala Startup Mission (KSUM) initiative. We aim to foster a startup culture among students by providing platforms for experimentation and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-duration="1400">
              <div className="card h-100 p-4">
                <h3 className="fw-bold h4 mb-3">VISION</h3>
                <p className="text-secondary">
                  To create an innovation culture among Innovators by introducing them to state-of-the-art technologies and positioning the Institution as a Learning and Innovation Platform.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-duration="1600">
              <div className="card h-100 p-4">
                <h3 className="fw-bold h4 mb-3">MISSION</h3>
                <p className="text-secondary">
                  To establish IEDC as an Innovation Platform and create future founders by promoting Innovation, Technology, and Business Learning among the student community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
