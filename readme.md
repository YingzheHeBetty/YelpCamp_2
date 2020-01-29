# YelpCamp Web App Version 2

> Version 2 components and functions:

- a landing page
- a campground page  						INDEX
- add a new campsite 						CREATE && NEW
- add mongoose database called Yelp_camp	
- add a show page 						 	SHOW

> Mongoose DB 

- connect mongoose to yelp_camp database
- schema setup: campgroundSchema
- complie schema into a model: Campground
- retrieve all the campgrounds in the databae: Campground.find({}, function{err, results})
- create a new campground based on the data parsed from the form
- retrieve a campground by id : Campground.findById(req.params.id)

> RESTful Routing
- INDEX
- CREATE
- NEW
- SHOW