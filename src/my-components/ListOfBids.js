


function ListOfBids({ bids }) {

    return (

        <div className="bids-form-container">
            <div className="bids-section">
                <h2>Bids</h2>
                {bids.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Bid Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid) => (
                                <tr key={bid._id}>
                                    <td>{bid.name}</td>
                                    <td>{bid.email}</td>
                                    <td>${bid.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No bids available for this painting.</p>
                )}
            </div>
        </div>

    );
}

export default ListOfBids;