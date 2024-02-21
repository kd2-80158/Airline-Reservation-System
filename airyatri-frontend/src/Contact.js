function Contact() {
    return ( <div>
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="mb-3">
                        <h3>Contact Information</h3>
                        <p><strong>Email:</strong> contactairyatri@airyatri.com</p>
                        <p><strong>Phone:</strong> 987-654-3210</p>
                        <p><strong>Address:</strong> Pune, India</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3">
                        <h3>Send us a message</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Contact;