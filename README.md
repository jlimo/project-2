# project-2

 Schema Diagram: https://imgur.com/HMFG5OY

wireframes: https://imgur.com/RE9I3uP

Userframe:
You can create a profile with a username, and password.
you can edit what is inside of your user profile, and logout whenever.
you can search up wallpapers from the site,
add in your own wallpapers only to your user page, 

Heroku deploy: https://obscure-scrubland-11528.herokuapp.com/
     
'*'= extra routes if time allows
Routes:
intial page: get, '/'
sign into account: GET 'auth/login',
signout of account: GET 'auth/logout',
creating user: POST, /users/:id,
this is first time account: POST, '/users',
already existing account page: POST,'/auth/login', 
exiting account = DELETE, '/auth/logout',
create account: POST, '/auth/register',
search taking us to selection: GET, '/wallpapers', 
take wallpaper selected and put in user page: POST, /wallpaper/:id/favorites,
take wallpaper out of user page: DELETE, /favorites/:id/wallpaper,
add in wallpapers: PUT /favorites/user/:id

Biggest Problem:
the login and register pages gave me a insanely hard time with me thinking I have the fix.
within the next second when messing around with things to see how to fix something else login and register would go back to being broken.

What would I do different:
I would have started with my main page instead of auth and register since those 2 gave me the hard time.
I would do it similar to how I have them now with them on the top as like a you can if you would like to, not make them necessary.
I would have tried to let people add in there own photo urls to a database and have it pull out the photos.
I also would have asked more questions in general during this, I keep trying to solve things myself when I just can't or it takes to long.

