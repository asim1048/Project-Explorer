import React,{useContext} from 'react';

import { bids } from '../constants/data';

import { CatageoryContext } from '../context/AppContext'
export default function BidsDetails() {
    

    const { item, socket,SubmitBids ,setSubmitBids} = useContext(CatageoryContext);
    const RenderItem = ({ bid }) => {
        return (
            <div style={{
                marginTop:'5px',
                display:'flex',
                flexDirection:'column',
                height:'100%',
                width:'350px',
                backgroundColor:'black',
                padding:"5px",
                borderRadius:'10px'
            }}>
                <div style={{
                    marginBottom:'-20px',
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center',

                }}
                >
                    <p style={{
                        color: 'white',
                        fontSize: '20px',
                        borderWidth: '0px'
                    }}>Bider Name</p>
                    <p
                        style={{
                            color: 'white',
                            fontSize: '20px',
                        }}
                    >{bid.bidderName}</p>
                </div>
                <div style={{
                    marginTop:'-10px',
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center',

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
                    >{bid.price}</p>
                </div>
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
        }}

        >

            <div style={{
                height: '100%',
                with:"100%"
            }}>{(
                SubmitBids.map((bid) =>
                    <RenderItem bid={bid} />)
            )}
            </div>

        </div>
    )
}
