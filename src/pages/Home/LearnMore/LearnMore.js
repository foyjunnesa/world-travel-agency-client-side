import React from 'react';
import { Container } from 'react-bootstrap';
import './LearnMore.css'

const LearnMore = () => {
    return (
        <div>
            <Container>
                <p className="more-fun text-center text-success">More Discount More Fun !! <hr /></p>
                <h3 className="text-muted mb-5"> <span className="fw-bold text-danger" style={{ fontSize: "30px", fontFamily: 'cursive' }}>DEALS AND</span> DISCOUNTS</h3>

                <div>
                    <div className='discount-name d-flex'>

                        <div className=''>
                            <img className='' src="https://image.freepik.com/free-photo/destinations-city-downtown-beautiful-space_1127-2403.jpg" alt="" />
                            <h5 className="card-title">Kiwiana Panorama $3500 <span><del>$5000</del></span></h5>
                            <p className="text-danger"> <i className="fas fa-clock"></i> 2 DAYS-1 NIGHT</p>
                            <p className="card-text mt-2 text-muted">Panorama interdum nunc massa. Velit. <br />
                                Nonummy penatibus luctus. <br /> Aliquam. Massa aptent <br /> senectus elementum taciti.</p>
                            <br />
                            <button className="btn btn-warning"><span className="fw-bold">PRE-BOOK</span> </button>
                        </div>

                        <div>
                            <img src="https://image.freepik.com/free-photo/sunrise-dal-lake-kashmir-india_1232-4765.jpg" alt="" />
                            <h5 className="card-title">Jammu and Kashmir $10,000 <span><del>$15000</del></span></h5>
                            <p className="text-danger"><i className="fas fa-clock"></i> 2 DAYS-1 NIGHT</p>
                            <p className="card-text text-muted">Anchorage interdum nunc massa. Velit. <br /> Nonummy penatibus luctus. <br /> Aliquam. Massa aptent <br /> senectus elementum taciti.</p>
                            <button className="btn btn-warning"><span className="fw-bold">PRE-BOOK</span> </button>
                        </div>

                        <div>
                            <img src="https://image.freepik.com/free-photo/granite-egypt-sphinx-neva-river-embankment_1398-525.jpg" alt="" />
                            <h5 className="card-title">Cairo to Luxor $25,000 <span><del>$50,000</del></span></h5>
                            <p className="text-danger"><i className="fas fa-clock"></i> 2 DAYS-1 NIGHT</p>
                            <p className="card-text text-muted">Africa interdum nunc massa. Velit. <br />
                                Nonummy penatibus luctus. <br /> Aliquam. Massa aptent <br /> senectus elementum taciti.</p>
                            <button className="btn btn-warning"><span className="fw-bold">PRE-BOOK</span> </button>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LearnMore;