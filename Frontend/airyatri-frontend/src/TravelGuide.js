import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './newstyle.css';
function TravelGuide() {
    return ( <div className='container'>
                <div className='table-responsive'>
                    <table className='table table-bordered image-table'>
                        <thead>
                            <tr>
                                <th><h5>Cabin or Carry-On-Baggage</h5></th>
                                <th><h5>Restricted Items</h5></th>
                                <th><h5>Excess Baggage</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src='cabin.png' alt='Cabin Logo'></img></td>
                                <td><img src='resitem.png' alt='Restricted Item Logo'></img></td>
                                <td><img src='excbag.png' alt='Excess Baggage Logo'></img></td>
                            </tr>
                            <tr>
                                <td><p><b>Planning to fly with us soon?</b><br></br>
                                    Then, here’s what you need to know about what is permitted onboard and what is not. 
                                    You can bring a carry-on bag and a personal item, such as a satchel for your devices. 
                                    To avoid any hassle, we recommend checking the dimensions, weight, items allowed onboard, and excess baggage charges before packing..</p></td>
                                    
                                <td><p>While packing your bags, ensure that you only carry what is considered safe for air travel. 
                                    Be it in your carry-on or cabin baggage, such hazardous items may pose a threat to you, other passengers and crew onboard.
                                    To make it easier for you, here is a quick guide to the list of items that are unsafe for flight travel. 
                                </p></td>
                                
                                <td><p><b>Packing heavy? We’ve got your back</b><br></br>
                                Fly without baggage worries. Pay an additional fee to carry all your baggage, be it heavy or larger than allowed, in both our international and domestic sectors. 
                                If your luggage exceeds the weight limit of 32 kg/70lb per bag, you will be charged a fee for the excess baggage based on your ticket.</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> );
}

export default TravelGuide;