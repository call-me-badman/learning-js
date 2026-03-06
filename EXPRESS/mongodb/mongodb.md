Instead of tables like SQL databases, MongoDB uses:

SQL	MongoDB
Database	Database
Table	    Collection
Row	        Document

Express → handles routes
Mongoose → talks to MongoDB
MongoDB → stores data
So the flow is:

Client → Express API → Mongoose → MongoDB