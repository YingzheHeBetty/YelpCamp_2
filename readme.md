# YelpCamp Web App Version 2

> Version 2 components and functions:

- a landing page
- a campground page
- add a new campsite 
- add mongoose database called Yelp_camp

> Mongoose DB set up process

- connect mongoose to yelp_camp database
- schema setup: campgroundSchema
- complie schema into a model: Campground
- retrieve all the campgrounds in the databae: Campground.find({}, function{err, results})
- create a new campground based on the data parsed from the form
 