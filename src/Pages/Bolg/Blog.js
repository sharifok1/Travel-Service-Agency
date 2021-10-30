import React from 'react';

const Blog = () => {
    return (
        <div className="ms-4 me-4" id="#Blog">
            <div className="row m-0 ">
                 <div className="col-md-8 mt-4">
                    <h3 className="text-start">The Best Destinations of 2021</h3>
                    <small className="text-start"> By admin || posted April 16, 2021</small>
                    <img className="img-fluid w-100" src="https://ld-wp.template-help.com/wordpress_free/23563/wp-content/uploads/2019/04/background-02-1920x900-1170x650.jpg" alt="" />
                    <p className="text-start">Before visiting last month, my friends painted a picture of a city hot, filled with malls and expensive stores, restaurants, lots of expats, and a bit soulless. “It’s artificial and fake like Vegas and doesn’t demand more than a day or two,” they told me. But when people tell me to zig, I always love to zag, so I decided to spend five days there, determined to find something redeeming about the city. (I picked an excellent time to visit too: an English friend had just moved to the city, so I had a place to stay and a tour guide!)

                   <h3>Dubai:</h3>  The Las Vegas of the Middle East?
                    It’s a city that conjures up images of Vegas-like glitz (minus the gambling and drinking). Before visiting last month, my friends painted a picture of a city hot, filled with malls and expensive stores, restaurants, lots of expats, and a bit soulless. “It’s artificial and fake like Vegas and doesn’t demand more than a day or two,” they told me.</p>
                    <img className="img-fluid w-100" src="https://ld-wp.template-help.com/rockthemes/18709/wp-content/uploads/2017/04/background-40-1920x900-660x371.jpg" alt="" />
                    <p className="text-start">In a way, Dubai reminded me of most expat-heavy places in the world. It seems whenever cities attract a lot of foreigners from various nations around the world, they in large part tend to live in a little alcohol-fueled bubble — going to a small selection of restaurants, bars, and neighborhoods, often with scant interaction with locals. Dubai is still a mystery to me. I can’t wrap my head around it and am determined to return, turn over more stones, and get under this city’s skin. But one thing is for certain – this city is more than a stopover destination!</p>
                    <div>
                        <hr />
                       <div className="d-flex align-items-center w-50 mt-4">
                       <img className="w-25 me-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ2pdRFQNGZRLDnCdtiYBUZs1PvaxiAZDbA&usqp=CAU" alt="" />
                        <h1>Admin</h1>
                       </div>
                        <hr />
                        <h4 className="text-start">Comments</h4>
                        <p className="text-start">Your email address will not be published. </p>
                        <form className="mb-5">
                        
                        <div>
                        <textarea className="w-100 pb-4" name="comments" id="comments" placeholder="comments">
                        your comments...
                        </textarea>
                        <input className="w-100" type="name" placeholder="name" />
                        <input className="w-100 mt-2" type="email" placeholder="email"/>
                        </div>
                        <input className="d-block mt-1"  type="submit" value="Submit"/>
                        </form>
                                                
                    </div>
                 </div>
                 <div className="col-md-4 mt-5">
                     <hr className="mt-5" />
                     <br />
                     <h3>RECENT POSTS</h3>
                     <br />
                     <p>The best destination 2021</p>
                     <p>72 Hours in Toronto</p>
                     <p> Visiting the UAE</p>
                     <br />
                     <hr />
                     <br />
                     <h3>
                         RECENT COMMENT 
                         </h3>
                         <br />
                         <hr />
                      
                             <br />
                             <h3>
                             ARCHIVES
                             </h3>
                             <p>April 2021</p>
                             <br />
                             <hr />
                             
                 </div>
             </div>    
        </div>
    );
};

export default Blog;