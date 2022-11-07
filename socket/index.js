import {  Server } from "socket.io";

const io=new Server(9000,{
    cors:{
        origin:"http://localhost:3000"
    }
})
//console.log("User Connected");
let users=[];//Active users
let dataa=[];
let bids=[];
const addUser=(userData,socketId)=>{
    !users.some(user=>user.sub==userData.sub) && users.push({...userData,socketId});
}
const getUser = (userId) => {
    return dataa;
}

io.on('connection', (socket) => {
    console.log("User Connected ");

    socket.on("addUsers",userData=>{
        addUser(userData,socket.id);
        io.emit("getUsers",users);
    })
     
    socket.on("sendMessage", (data) => {
        console.log(data);
        dataa=data;
        const user = getUser(data.receiverId);
        io.emit("getMessage", dataa);
    })
    socket.on("sendBid", (data) => {
        console.log(data);
        bids=data;
        const user = getUser(data.receiverId);
        io.emit("getBid", bids);
    })
})