import React, { useContext, useState, useEffect } from 'react'
import { CatageoryContext } from '../context/AppContext'
import { Navigate } from "react-router-dom";
import { bids } from '../constants/data';
export default function ActionerPage() {

    const { item, socket,SubmitBids ,setSubmitBids} = useContext(CatageoryContext);
    const [remainingSeconds, setRemainingSeconds] = useState(item.timeLimit);
    const [move, setMove] = useState(false);
    const [move2, setMove2] = useState(false);
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            
            socket.current.emit("sendMessage", item);
            setRemainingSeconds(item.timeLimit);
            socket.current.on("getBid", data => {
     
                setSubmitBids(data);
               })
           // console.log(item)
            // just for presentation
            //console.log(item.timeLimit);
            console.log(SubmitBids);

            // time is up
            if (item.timeLimit == 0) {
                clearInterval(interval);
                return;
            }
            item.timeLimit = item.timeLimit - 1;
        }, 1000);
         
    }, [])

    let higest = SubmitBids.reduce((acc, shot) => acc = acc > shot.price ? acc : shot.price, 0);
    //console.log(higest)
    const bidHigh = bids.filter(bid => {
        return bid.price == higest
    })
   // console.log(bidHigh)


    const RenderItem = ({ bid }) => {


        return (
            <div

            >
                <p>{bid.price}</p>
            </div>
        )
    }
    return (
        <div style={{
            display: "flex",
            backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
            position: "fixed",
            width: '220vh',
            flexDirection: 'column',
            minHeight: "100vh",
            alignItems: 'center',
            justifyContent: "center",
        }}>
            {!remainingSeconds == 0 && (
                <div style={{
                    width: "35%",
                    height: "70px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    backgroundColor: 'black',
                    borderRadius: '15px',
                }}>
                    <p style={{
                        color: 'white',
                        fontSize: "45px",
                        fontFamily: "serif",
                    }}>Remaining Time</p>

                    <p style={{
                        color: remainingSeconds == 0 ? 'red' : 'white',
                        fontSize: "45px",
                        fontFamily: "serif",
                        marginLeft: 10
                    }}
                    >{remainingSeconds}</p>
                </div>
            )}
            {remainingSeconds == 0 && (
                <div style={{
                    marginTop: '40px',
                    width: "35%",
                    height: "70px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    backgroundColor: 'blue',
                    borderRadius: '15px'
                }}>
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            fontSize: '30px',
                            borderWidth: '0px'
                        }}
                        onClick={() => setMove(true)}
                    >Create Auction</button>
                    {move && <Navigate to="/auctioneer" replace={true} />}
                </div>
            )}

            {remainingSeconds == 0 && (

                <div style={{
                    marginTop: '40px',
                    width: "35%",
                    height: "70px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    borderRadius: '15px',
                    backgroundColor: 'black'
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingRight: '10px',
                        paddingLeft: '10px'
                    }}
                    >
                        <p style={{
                            color: 'white',
                            fontSize: '30px',
                            borderWidth: '0px'
                        }}>Total Bids</p>
                        <p
                            style={{
                                color: 'white',
                                fontSize: '30px',
                                marginLeft: '10px'
                            }}
                        >{SubmitBids.length + 1}</p>
                    </div>
                </div>
            )}


            {remainingSeconds == 0 && (

                <div style={{
                    marginTop: '40px',
                    width: "35%",
                    height: "70px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    borderRadius: '15px',
                    backgroundColor: 'black',
                }}>
                    <div style={{
                        width: "50%",
                        height: "100%",
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingRight: '10px',
                        paddingLeft: '10px'
                    }}
                    >
                        <p style={{
                            color: 'white',
                            fontSize: '30px',
                            borderWidth: '0px'
                        }}>Heighest Bid</p>

                    </div>

                </div>
            )}
            {remainingSeconds == 0 && (

                <div style={{
                    marginTop: '10px',
                    width: "35%",
                    height: "60px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    borderRadius: '15px',
                    backgroundColor: 'black'
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingRight: '10px',
                        paddingLeft: '10px'
                    }}
                    >
                        <p style={{
                            color: 'white',
                            fontSize: '20px',
                            borderWidth: '0px'
                        }}>Bidder Name</p>
                        <p
                            style={{
                                color: 'white',
                                fontSize: '20px',
                                marginLeft: '10px'
                            }}
                        >{SubmitBids[0].bidderName}</p>
                    </div>
                </div>
            )}

            {remainingSeconds == 0 && (

                <div style={{
                    marginTop: '10px',
                    width: "35%",
                    height: "60px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    borderRadius: '15px',
                    backgroundColor: 'black'
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingRight: '10px',
                        paddingLeft: '10px'
                    }}
                    >
                        <p style={{
                            color: 'white',
                            fontSize: '20px',
                            borderWidth: '0px'
                        }}>Bid Price</p>
                        <p
                            style={{
                                color: 'white',
                                fontSize: '20px',
                            }}
                        >{SubmitBids[0].price}</p>
                    </div>
                </div>
            )}

            {/* All Bidders */}

            {remainingSeconds == 0 && (
                <div style={{
                    marginTop: '40px',
                    width: "35%",
                    height: "70px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    backgroundColor: 'blue',
                    borderRadius: '15px'
                }}>
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            fontSize: '30px',
                            borderWidth: '0px'
                        }}
                        onClick={() => setMove2(true)}
                    >All Bids Bids Details</button>
                    {move2 && <Navigate to="/bidsDetails" replace={true} />}
                </div>
            )}
        </div>

    )
}
