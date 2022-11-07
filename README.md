<h1 align="center">Project Explorer</h1>
<h2>Intoduction</h2>

<h4>
It is a real-time web application that allows auctioneers to create an auction for an item and that allows multiple bidders to bid on that item in real-time.
</h4>


https://user-images.githubusercontent.com/68283718/200291754-8c761552-f756-463e-88be-2e23ca2601d2.mp4


<h3>Auctioneer</h3>
<h4>When the auctioneer page first loads they should be presented with form elements that allow them to enter a name, price and time limit.  The auctioneer should be able to enter a time-limit in seconds using a rangeLinks to an external site. form element, with a minimum time of 10 seconds, a maximum time of 80 seconds, and 10 second steps between minimum and maximum times.  Other input types can be used for the name and price (e.g. text boxes).  Do some front-end form validation (either with HTML or JavaScript) to ensure the price is a number greater than 0.  After the auctioneer has entered the data required for the auction, the auctioneer should be able to click a "start" button to start the auction.
After the auctioneer starts the auction a timer should be displayed on the auctioneer page and it should countdown each second from the specified time limit to zero. Once the timer reaches zero, the auctioneer should have the option of starting a new auction (by clicking a button or link). Before the timer reaches zero, the auctioneer should not have the option of creating a new auction (i.e. only one auction can take place at a time).
After the auctioneer submits an auction, the interface for creating an auction itself should disappear, and the results of the bidding should be displayed and updated in real-time as each bidder submits bids. The following information should be displayed in real-time:
Highest bid and bidder name (display this most prominently on the page)
Total number of bids received
A table with a row of data for each bidder that has submitted a bid so far, including the following columns of data updated in real-time:
Bidder name
Highest bid price from this bidder so far
Number of bids from this bidder
A table with a history of all bids received in chronological order (most recent first), updated in real-time, including the following information:
Bidder name
Bid price
You can assume for simplicity's sake that all bidders will have unique names.
When the auction first begins, the highest bid will be the price initially set by the auctioneer, and the highest bidder name can be set to "auctioneer".
This results information should remain displayed until the auctioneer utilizes the option to creates a new auction, at which point the interface for doing so should appear again.  When the auctioneer creates a new auction, none of the data from the old auction should be present (e.g. highest bidder, history table, etc.), it should be the same as if an auction is taking place for the first time.</h4>

<h3>Bidder</h3>
<h4>
When the bidder initially visits the bidder page, it should give them the option to enter their name. They should not be able to participate in an auction until they have entered their name. After the bidder submits their name, the bidder should be able to receive the next auction, and the page should only display the text "Waiting for the next auction to begin..." in a large font (30px or greater).
When the auctioneer starts an auction, all the bidders who have already submitted their name and are on the "Waiting for the next auction to begin..." status should be presented with a new interface that allows them to submit bids. The "Waiting for the next auction to begin..." text should disappear, and an interface that allows the bidder to submit bids should appear.  The item name, the name of the current highest bidder, and the current highest bid price should be displayed (and this should be updated in real-time whenever there is a new highest bid).  An HTML form with an input for price and a submit button should allow the bidder to submit bids.  
When the new interface is presented to the bidder, a timer should also start and be presented on the bidder's page that counts down from the allotted auction time to zero. When the timer hits zero the bidder should no longer be able to submit bids (i.e. disable or hide the submit button, or somehow otherwise prevent the bidder from submitting a new bid).
When a bidder submits a bid that is lower than the current highest auction-wide bid, the bidder should be informed with red text on the webpage that their bid is too low (e.g. "Bid too low").  When a bidder submits a bid that is higher than the current highest bid price, this bid should become the new highest bid, and the bidder should be informed with green text that they have the current highest bid ("You are the current highest bidder!").
When the timer reaches zero, the name of the auction winner and price should be displayed on the bidder's page, along with the text "Waiting for the next auction to begin...".  The bidder should be able to participate in any subsequent auctions.  
</h4>
<p>
The core funionality of the app that it sends the automatic pretyped user message reply on the missed call between two time slites.
And between time slots, it also reminds the remninder and enable the Do Not Disturb mode if it is allowed.
<p>



