var express    = require("express");
var app        = express();
var port       = 3000;
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

//create yelp_camp database inside of mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp");

// SCHEMA SETUP (will be break into separate files later)
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 	name: "Salmon Creek", 			          
//     image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg"
//     }, function(err, result){
// 		if(err) {
// 			console.log("Something went wrong");
// 			console.log(err);
// 		}else {
// 			console.log("Newly created campground");
// 			console.log(result);
// 		}
// 	});










var campgrounds = [
		{name: "Salmon Creek", image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg"},
		{name: "Waterloo Park", image:" https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg"},
		{name: "219 Park", image:"https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg "}
	]



app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

// add landing page -- rout page
app.get("/",function(req,res){
	res.render("landing");
});

// add campground page
app.get("/campgrounds", function(req,res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, results){
		if(err){
			console.log(err);
		}else{
			res.render("campgrounds", {campgrounds: results});
		}
	})
	
	
});

// add post route. where we send a post request to /campgrounds
app.post("/campgrounds", function(req, res) {
	
	//get data from form and add them to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	
	var newCampground = {name: name, image:image};
	//  create a new campground and save to DB
	Campground.create(newCampground, function(err, result){
		if(err) {
			console.log(err)
		}else{
			// redirect to campgrounds
			res.redirect("/campgrounds");
		}
	})
	
	
})
// show the form that will pass the data to post/campgrounds
app.get("/campgrounds/new", function(req, res) {
	res.render("new");
})



app.listen(port, function(req,res){
	console.log("YelpCamp Has Started!");

})
	