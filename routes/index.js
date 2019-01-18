
// app.get('/',function(req,res)
// {
//    // res.send("hello page");
//    res.render('home',{ //just for calling view i.e home i used render.
//        title1:"This is my Title",//i m just sending parameter
//        movies:["one","two","three"]//i m just sending the array
//    });//no need to add "view/home.ejs" such url of view.Just type 'home'.It will unertsnad that this is view name
// });
// app.get('/ana',function(req,res)
// {
//     res.send("<h1>hello page anagha</h1>");
// });
// app.get('/episode/:episod_no?',function(req,res)
// {
//     var episod_no=req.params.episod_no;
//     res.send("This is episod number"+episod_no);
// });
// app.get('*',function(req,res)
// {
//     res.send("oops!!!!");
// });

var moviejson=require('../movies.json');
exports.home=function(req,res)
{
    var movies123=moviejson.movies12;//movies12 this is array name in movies.json
   // res.send("hello page");
    res.render('home',{
       title1:"This is my Title",//i m just sending parameter
     //movies:["one","two","three"]//i m just sending the array
     moviesxx:movies123
   });//no need to add "view/home.ejs" such url of view.Just type 'home'.It will unertsnad that home is view name
};

exports.single_movie=function(req,res)
{
    var episod_no=req.params.episod_no;
    //res.send("This is episod number"+episod_no);
    var movies123=moviejson.movies12;
   

    // Only render the movie_single template for episodes that exist
	if (episod_no >= 1 && episod_no <= 6) {

        var my=movies123[episod_no-1];
        var title=my.title;

		var main_characters = my.main_characters;
        res.render('single_movie',{
        
            moviesxx:movies123,
            titlem:title,
            mm1:my,
            
			main_characters : main_characters
        });
	
	} else {
        res.render("notfound",{
            moviesxx: movies123,
            title:"not this isssssssssssss"
        });
	}
 
};
exports.notfound1=function(req,res)
{
    res.send("oops!!!!");
};