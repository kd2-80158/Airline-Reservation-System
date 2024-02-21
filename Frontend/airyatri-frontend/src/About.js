import CEOImage from './images/ceo.jpeg'; // Import image of CEO
import DirectorImage1 from './images/ceo.jpeg'; // Import image of Director 1
import DirectorImage2 from './images/ceo.jpeg'; // Import image of Director 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './images/background1.jpeg';

function About() {
    // Define the milestones for the company's growth
    const milestones = [
        { year: 'Year 2023', event: 'Company founded', description: 'The company was founded in November 2023.' },
        { year: 'Year 2024', event: 'Expanded operations', description: 'The company expanded its operations in January 2024.' },
        // Add more milestones as needed
    ];

    return (
        <div className="container-fluid bg-light" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="container py-5">
                <h1 className="text-center mb-5" style={{ color: 'brown', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>About Us</h1>
                <div>
                    <p className="mt-4" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333' }}>At AirYatri, we are dedicated to providing a seamless and convenient experience for travelers seeking flights and accommodations. Our platform serves as a one-stop destination for customers to search for flights, check their availability, and book tickets with ease.</p>
                </div>
                {/* Company growth timeline */}
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <h2 className="text-center" style={{ color: 'brown', fontSize: '2rem' }}>Company Growth</h2>
                        <ul className="list-group">
                            {milestones.map((milestone, index) => (
                                <li key={index} className="list-group-item">
                                    <h3 style={{ color: 'brown', fontSize: '1.5rem' }}>{milestone.year}</h3>
                                    <p><strong style={{ fontSize: '1.2rem' }}>{milestone.event}</strong></p>
                                    <p style={{ fontSize: '1.2rem', color: '#333' }}>{milestone.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CEO and Directors description */}
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={CEOImage} className="card-img-top" alt="CEO" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'brown', fontSize: '1.5rem' }}>CEO</h5>
                                <p><b style={{ fontSize: '1.2rem' }}>Saurabh Chimmwal</b></p>
                                <p className="card-text" style={{ fontSize: '1.2rem', color: '#333' }}>Saurabh Chimmwal, our CEO, leverages 15 years of tech experience to drive our success. His visionary leadership and passion for excellence propel our global growth. Saurabh's dedication to our mission inspires our team daily, making him instrumental to our achievements.</p>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={DirectorImage1} className="card-img-top" alt="Director 1" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'brown', fontSize: '1.5rem' }}>Director</h5>
                                <p><b style={{ fontSize: '1.2rem' }}>Apurva Telang</b></p>
                                <p className="card-text" style={{ fontSize: '1.2rem', color: '#333' }}>Apurva Telang, our Director, brings extensive finance and strategic planning expertise to our team, guiding our financial decisions and growth strategies. Her strong leadership and dedication to excellence drive our success, inspiring our team and shaping our future.</p>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={DirectorImage2} className="card-img-top" alt="CTO" />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'brown', fontSize: '1.5rem' }}>CTO</h5>
                                <p><b style={{ fontSize: '1.2rem' }}>Madhur Gupta</b></p>
                                <p className="card-text" style={{ fontSize: '1.2rem', color: '#333' }}>Madhur Gupta, our CTO, is a tech visionary with a proven track record of innovation. His leadership drives our company's technological advancements, inspiring our team to reach new heights. With expertise in software development and strategy, Madhur plays a key role in shaping our future.</p>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
