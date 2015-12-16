# funny-friends
This is a blind contour drawing application 

## problem
The goal is to recreate a simple and fun drawing project that was done in classrooms with standard art supplies, using the computer, and ultimately with ipad and touch screens.

#### simple instructions for the project
1. paper, pencil and subject
2. DO NOT LOOK at your paper - look at the subject the ENTIRE TIME
3. Draw your subject in one single line - following the outlines of the shapes of their features.  Their Contours.
4. Color your drawings by assigning different colors to the enclosed spaces

### technical problems
* Initially I started with p5.js and yet to color in the spaces would require calculated the area of each irregular shape created by the squiggly line that was drawn.  
* so I moved into HTML5-canvas.  Canvas has a Flood Fill algorithm that recursively checks the data information in each pixel to determine if it is the white, black or the target color.  If it is white it assigns it the target color, then checks north south east and west - assigning the target color until it hits a black pixel.  This is the function that is utilized in programs like photoshops' paint bucket and MS Paint.

##Process
This is a big undertaking in a short time.  I am linking to my Trello Board - which is being used to keep me from circling the drain - and staying focused on victories.  (https://trello.com/b/ww7F6oz2/funnyfriends)

