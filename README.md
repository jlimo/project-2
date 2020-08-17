# project-2

think of basics before
 Original Design: https://imgur.com/HMFG5OY

wireframes: https://imgur.com/RE9I3uP

You can create a profile with a username, and password.
you can edit what is inside of your user profile, and logout whenever.
you can search up wallpapers from the site,
add in your own wallpapers only to your user page, 


     
'*'= extra routes if time allows

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
I would have not done authenticator or make photos from within the database.
I would have made it like a art museum type of project that lets people put description and names of each photo for fun.
I would have tried to let people add in there own photo urls to a database and have it pull out the photos.
I also would have asked more questions in general during this, I keep trying to solve things myself when I just can't or it takes to long.
