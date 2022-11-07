import React, { useState, useContext,useEffect } from 'react'
import { CatageoryContext } from '../context/AppContext'
export default function Bidder() {

  const { item,setItem,socket,SubmitBids,setSubmitBids} = useContext(CatageoryContext);
  
  const [name, setName] = useState("");
  const [bidprice,setbidPrice]=useState(0);
  
  const [bidHigh,setBidHigh]=useState();
  
  const [pri,setPri]=useState(0);
  const [nam,setNam]=useState("No One");
  
  
  let input={
    name:0,
    bidderName:"",
    price:0,
  }
  const [dataa,setDataa]=useState(input);
  
  const [bid, setBid] = useState(item);
  const handleSubmitBid=()=>{
    
  if(name=="" || bidprice==0){
      alert("Enter your name and price");
    }
      let input={
        name:bid.name,
        bidderName:name,
        price:bidprice,
      }
      let a=SubmitBids;
      a.push(input);
      setSubmitBids(a);
      
    console.log(SubmitBids);
      socket.current.emit("sendBid", SubmitBids);
    
    
  }
  // useEffect(() => {
  //   socket.current.on("getMessage", data => {
  //     setItem(item);
  //   })
  // }, [])
  let a={
    
  }
  setInterval(function(){ 
    
   //console.log( item);
    socket.current.on("getMessage", dataa => {
      //console.log(dataa);
      setBid(dataa);
      //setItem(dataa);
     })
     socket.current.on("getBid", data => {
     
      setSubmitBids(data);
      setBidHigh(data);
     })
     setPri(SubmitBids[0].price)
     setNam(SubmitBids[0].bidderName);
    // console.log(SubmitBids);
    // let higest = SubmitBids.reduce((acc, shot) => acc = acc > shot.price ? acc : shot.price, 0);
    // //console.log(higest)
    // const bidHigh = SubmitBids.filter(bid => {
    //     return bid.price == higest
    // })
    //  setNam(bidHigh[0].name);
    //  setPri(bidHigh[0].price);
    //  console.log(pri);
  }, 1000);
  
  return (
    <div style={{
      display: "flex",
      minHeight: '100vh',
      backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
      position: "fixed",
      width: '220vh',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    >
      <div style={{
        marginTop: '10px',
        display: 'flex',
        width: "30%",
        height: "70px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'black',
        borderRadius: '15px',
        alignItems: 'center',
        justifyContent: "center",

      }}>
        <p style={{
          color: 'white',
          fontSize: "45px",
          fontFamily: "serif",
        }}>Bidder</p>
      </div>
      <div style={{
        marginTop: '20px',
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
      }}>
        <textarea
          style={{
            width: "30%",
            borderRadius: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: '2px',
            padding: '10px',
            fontSize: '20px',
            borderRadius: '15px'
          }}
          placeholder="Enter Your name"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        {bid.timeLimit!=0 && (
          <p
            style={{
              width: "50%",
              height: "50px",
              borderRadius: "45px",
              background: "blue",
              borderColor: 'blue',
              fontSize: '35px',
              borderWidth: '2px',
              color: 'green',
              marginTop: '15px',
              alignItems: 'center',
              paddingLeft: '100px',
              backgroundColor: 'black'
            }}
          >Heighest bidded by {nam}  with price {pri}</p>
        )}
        {bid.timeLimit==0 && (
          <p
            style={{
              width: "50%",
              height: "50px",
              borderRadius: "45px",
              background: "blue",
              borderColor: 'blue',
              fontSize: '35px',
              borderWidth: '2px',
              color: 'white',
              marginTop: '15px',
              alignItems: 'center',
              paddingLeft: '100px',
              backgroundColor: 'red'
            }}
          >Waiting for the next action to begin...</p>
        )}
        {bid.timeLimit!=0 && (
                <div style={{
                    marginTop:"-20px",
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
                        color: bid.timeLimit == 0 ? 'red' : 'white',
                        fontSize: "45px",
                        fontFamily: "serif",
                        marginLeft: 10
                    }}
                    >{bid.timeLimit}</p>
                </div>
          )}
          {bid.timeLimit!=0 && (
          <div style={{
                marginTop:'5px',
                display:'flex',
                flexDirection:'column',
                height:'150px',
                width:'550px',
                backgroundColor:'black',
                padding:"5px",
                borderRadius:'10px'
            }}>
                <p style={{
                        marginTop:'-10px',
                        color: 'white',
                        fontSize: '30px',
                        borderWidth: '0px',
                        alignContent:'center',
                        justifyContent:'center',
                        marginLeft:"220px"
                    }}>Current Auction</p>
                <div style={{
                  
                  marginTop:'-20px',
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
                    >{bid.name}</p>
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
            )}
            {bid.timeLimit!=0 && (
            <textarea
          style={{
            width: "30%",
            borderRadius: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: '2px',
            padding: '10px',
            fontSize: '20px',
            borderRadius: '15px'
          }}
          placeholder="Enter bid price"
          onChange={(e) => setbidPrice(e.target.value)}
          type="text"
        />
        )}
            {bid.timeLimit!=0 && (
            <button
                    style={{
                        width: "30%",
                        height:"70px",
                        borderRadius: "45px",
                        background: "blue",
                        borderColor: 'blue',
                        fontSize: '30px',
                        borderWidth: '2px',
                        color: 'white',
                        marginTop: '15px'
                    }}
                    onClick={() =>handleSubmitBid()}
                >Submit Bid</button>
            )}
      </div>
    </div>
  )
}
