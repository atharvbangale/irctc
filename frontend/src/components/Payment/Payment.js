import React from 'react'
import Paypath from './Paypath';
import {Link} from 'react-router-dom'

export default function Payment() {
    
    return (
        <div>
            <Paypath />
            <div className="row">
            <script src="https://cdn.phonepe.com/sdk/js/2.0.0/phonepe.min.js"></script>
                <div className="col-9">
                    <div className="container">
                        <h2 className='fw-bold'>Payment Mode</h2>
                        <div className="container d-flex mt-5 mb-5">
                        <form action="https://securegw-stage.paytm.in/theia/processTransaction" method="POST">
                            <input type="hidden" name="MID" value="your_mid_here" />
                            <input type="hidden" name="WEBSITE" value="WEBSTAGING" />
                            <input type="hidden" name="ORDER_ID" value="your_order_id_here" />
                            <input type="hidden" name="CUST_ID" value="your_customer_id_here" />
                            <input type="hidden" name="INDUSTRY_TYPE_ID" value="Retail" />
                            <input type="hidden" name="CHANNEL_ID" value="WEB" />
                            <input type="hidden" name="TXN_AMOUNT" value="your_transaction_amount_here" />
                            <input type="hidden" name="CALLBACK_URL" value="your_callback_url_here" />
                            <input type="hidden" name="CHECKSUMHASH" value="your_checksum_hash_here" />
                            <input type="submit" className='btn btn-primary rounded-0 shadow fw-bold btn-lg' value="Pay Through Paytm" />
                        </form>
                        
                            <a href="https://phonepe.freshdesk.com/en/support/login" className="btn btn-lg fw-bold btn-primary rounded-0 shadow ms-4">Pay Through PhonePay</a>
                            <Link to="/ticket" className="btn btn-lg fw-bold btn-success rounded-0 shadow ms-4">Skip Payment</Link>

                        </div>
                      
                        <hr />
                        <div className="container mt-4 mb-5">
                            <h2 className='fw-bold  mb-4'>Learn How To Make Payment</h2>
                            <iframe width="1300" height="600" src="https://www.youtube.com/embed/MLLITMBUZUw" title="YouTube video player" className='shadow-lg rounded-2' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="container p-4">
                        <img src="https://gumlet.assettype.com/knocksense%2F2022-09%2F8291dda3-72a3-471e-97f7-73d04496f4f9%2FScreenshot_2022_09_28_at_4_27_15_PM.png?auto=format%2Ccompress&format=webp&w=400&dpr=2.6" className='img-fluid' alt="" />
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoe-sale-design-template-2bea24cb193c0c2557940ab355f16de2_screen.jpg?ts=1637038192" className='img-fluid mt-5 pt-5' alt="" />


                    </div>
                </div>
            </div>
        </div>
    )
}

