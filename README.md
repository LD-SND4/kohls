**Project Overview**

This repository contains the development files for an interactive animated banner ad (300x600) created as part of the Workana technical assessment. 
The banner features an interactive tile layout with product carousel functionality, designed to showcase multiple product categories.

**Features**

Interactive Tile System: Four animated tiles that switch between two images each
Product Carousel: Dynamic product display populated from external data feed
User Interactions: Click tiles to open product carousel, return to main view via "Back to Checklist" button
Dynamic Content: All content elements controlled via JavaScript variables for easy updates

**Technical Implementation**

Size: 300x600 pixels
Framework: Custom JavaScript with dynamic variables
Data Source: External product feed integration using fetch API
Animation: Custom CSS/JS animations for tile transitions and carousel display

**Animation Flow**

Initial state displays all elements (except green checkmark)
Green checkmark animation initiates the tile animation sequence
Each tile transitions from Image1 to Image2 in sequence (Tile1→Tile2→Tile3→Tile4)
After all tile animations complete, product carousel automatically displays
User can manually trigger carousel by clicking any tile
"Back to Checklist" button returns to main tile view

**Development Notes**

Feed data is retrieved using fetch API 
Animation timing follows specific sequence as shown in reference materials
All design elements aligned with provided PSDs

Small assestmen repo Created By
Leonardo Diaz - 04-25

Contact via:
leodiazgarcia4050@gmail.com
https://www.linkedin.com/in/leoddev/
