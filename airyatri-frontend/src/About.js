import CEOImage from './images/ceo.jpeg'; // Import image of CEO
import DirectorImage1 from './images/ceo.jpeg'; // Import image of Director 1
import DirectorImage2 from './images/ceo.jpeg'; // Import image of Director 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './images/background1.jpeg';
function AboutPage() {
    // Define the milestones for the company's growth
    const milestones = [
        { year: 'Year 1', event: 'Company founded', description: 'The company was founded in year 1.' },
        { year: 'Year 2', event: 'Expanded operations', description: 'The company expanded its operations in year 2.' },
        // Add more milestones as needed
    ];

    return (
      <div className="container-fluid bg-light" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="container py-5">
                <h1 className="text-center mb-5">About Us</h1>

                {/* Company growth timeline */}
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <h2 className="text-center">Company Growth</h2>
                        <ul className="list-group">
                            {milestones.map((milestone, index) => (
                                <li key={index} className="list-group-item">
                                    <h3>{milestone.year}</h3>
                                    <p><strong>{milestone.event}</strong></p>
                                    <p>{milestone.description}</p>
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
                                <h5 className="card-title">CEO</h5>
                                <p className="card-text">Description of CEO...</p>
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
                                <h5 className="card-title">Director 1</h5>
                                <p className="card-text">Description of Director 1...</p>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={DirectorImage2} className="card-img-top" alt="Director 2" />
                            <div className="card-body">
                                <h5 className="card-title">Director 2</h5>
                                <p className="card-text">Description of Director 2...</p>
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

export default AboutPage;
