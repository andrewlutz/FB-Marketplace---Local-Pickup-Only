# Facebook Marketplace - Local Pickup Only Quick Access

## Description
Ever get annoyed that Facebook Marketplace defaults it's Delivery Method filter to "All" as opposed to "Local Pickup"? Here is a solution to that problem.
This bookmarklet

https://mrcoles.com/bookmarklet/

## How to Install/Use?
1. In Chrome, right-click on the Bookmark Bar and select "Add Page..."
2. Enter a name for this bookmark
3. Enter the code below into the URL field:
```
javascript:(function()%7Bconst%20localDeliveryParamName%20%3D%20'deliveryMethod'%3Bconst%20localDeliveryParamVal%20%3D%20'local_pick_up'%3Bconst%20url%20%3D%20window.location.toString()%3Bconst%20appendOperator%20%3D%20url.includes('%3F')%20%3F%20'%26'%20%3A%20'%3F'%3Bconst%20newUrl%20%3D%20url.concat(appendOperator%2C%20localDeliveryParamName%2C%20'%3D'%2C%20localDeliveryParamVal)%3Bwindow.open(newUrl%2C%20'_self')%7D)()
```
