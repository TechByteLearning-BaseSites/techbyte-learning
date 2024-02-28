import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from "../components/Button";


const Receipt = ({ details }) => {

    const navigate = useNavigate();

    // if empty receipt //
    useEffect(() => {
        if (details.length === 0) {
            console.log("NO DATA!!")
            navigate("/");
        }
    }, [details, navigate]);

    return (
        <div> 
            {/* ternary checking if details data exists */}
            { details.length === 0 ?
                // if empty receipt //
                null
                :
            <main>
                <div className="wrapper">
                    {/* recepit container */}
                    <div className="receipt_container">
                        <div className='receipt_title'>
                            <h2>
                                Receipt
                            </h2>
                            <br />
                            <h5>
                                Invoice#: { details.id }
                            </h5>
                        </div>
                        <div className="receipt_header">
                            {/* left header */}
                            <div className="receipt_left">
                                <h4>
                                    TechByte Learning
                                </h4>
                                <br />
                                <h5>
                                    1014 Lasalle Street
                                </h5>
                                <h5>
                                    Berwick, PA 18603
                                </h5>
                            </div>
                            {/* right header */}
                            <div className="receipt_right">
                                <h4>
                                    Customer Info:
                                </h4>
                                <br />
                                <h5>
                                    { details.payer.name.given_name } { details.payer.name.surname }
                                </h5>
                                <h5>
                                    { details.purchase_units[0].shipping.address.address_line_1 }, { details.purchase_units[0].shipping.address.admin_area_2 }, { details.purchase_units[0].shipping.address.admin_area_1 },
                                </h5>
                                <h5>
                                    { details.purchase_units[0].shipping.address.admin_area_2 }, { details.purchase_units[0].shipping.address.admin_area_1 }, { details.purchase_units[0].shipping.address.postal_code } { details.purchase_units[0].shipping.address.country_code }
                                </h5>
                            </div>
                        </div>
                        {/* receipt table*/}
                        <table className="receipt_table">
                            <thead>
                                <tr className="receipt_row">
                                    <th>
                                        Item Desc.
                                    </th>
                                    <th>
                                        Each
                                    </th>
                                    <th>
                                        Qty
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                details.purchase_units[0].items.map((item, index) =>{
                                return(
                                <tr key ={ index }>
                                    <td>
                                        { item.name }
                                    </td>
                                    <td>
                                        ${ item.unit_amount.value }
                                    </td>
                                    <td>
                                        { item.quantity }
                                    </td>
                                    <td>
                                        ${ (item.unit_amount.value * item.quantity).toFixed(2) }
                                    </td>
                                </tr>
                            )})}
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <b>Total:</b>
                                    </td>
                                    <td>
                                        <h3>
                                            ${ details.purchase_units[0].amount.value }
                                        </h3> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* notes */}
                        <h5>
                            Print and keep this receipt for your records
                        </h5>
                        <br />
                        <p><b>
                            Thank You For Joining The TechByte Learning Hive!
                        </b></p>
                    </div>
                    <Button to="/" text="CLOSE" />
                </div>
            </main>
            }
        </div>
    );
}

export default Receipt;