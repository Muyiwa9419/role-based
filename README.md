The role-based project can register users as Admins, Managers or Users. 
The user registered as an admin can access all routes e.g the admin role, manager role and the user role.
The user registered as a manager has access to a manager role and the user role and when he tries to login as an admin, he gets the "Access denied" error message
The user registered as a user can only access th user role. He gets "Access denied" when he tries to login as admin or manager
Access token is being generated with the help of jsonwebtoken to access the route based on your role as admin, manager or user
You have to register to have access as all informations is stored in the MongoDB database and it keeps records of registered users
A user can be logged in for only 1hr and after then, you might need to login again for security reasons
