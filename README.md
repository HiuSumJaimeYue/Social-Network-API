# Social-Network-API

## Description       
This is a Social Network API made by Hiu Sum Jaime Yue.         
In this Social Network API, it allows you to read, create, update and delete data of .         
When you run this Social Network API, you can open the API GET, POST, PUT and DELETE routes 
of .       

The technologies I used in this project are Express.js, Mongoose and NoSQL.

Below are the links to this repository and the video of demostration.                  
Github repository: https://github.com/HiuSumJaimeYue/Social-Network-API           
Video of demonstration: 

## Table of Contents               
-[Installation](#installation)          
-[Usage](#usage)          
-[License](#license)          
-[Contributing](#contributing)          
-[Tests](#tests)        
-[Questions](#questions)        

## Installation         
If you are setting the project up in your local computer, run "npm i" in your terminal after downloading the files. Then, set up your .env file, an example of .env file is in the Tests Section. Run "mysql -u root" in your terminal if you did not set up a password for mysql. If you set a password for mysql, type "mysql -u root -p " in your terminal and enter your password. After the terminal showed "mysql>", type "source db/schema.sql". After seeing "Query OK, ...", type "quit" to get out of mysql. Next, type "npm run seeds". Finally, type "npm start". After seeing "Now listening" in the terminal, open Insomnia and start your changes.                

## Usage    
You can read all the .                
You can read or change or delete a  using the Id at the end of the route.           
An example of HTTP request URL for  is in the Tests Section, including an example for using the Id at the end of the route.                 
You can also create a new .         
An example of JSON that you can put in the body for creating a new  is in the Tests Section.            

            
## License         
&copy; 2022 by Hiu Sum Jaime Yue       
         
## Contributing         
Hiu Sum Jaime Yue --  Social Network API   

## Tests        
The following is an example of .env file.           
// DB_PASSWORD is the password you set for your mysql.          
DB_NAME='ecommerce_db'          
DB_USER='root'                  
DB_PASSWORD=''          

The following is an example of HTTP request URL for  respectively.              
:  http://localhost:3001/api/                  
: http://localhost:3001/api/            
: http://localhost:3001/api/                 

The following is an example of HTTP request URL for  using Id at the end of the route.          
http://localhost:3001/api//5

The following is an example of JSON that you can put in the body for creating a new .               
`{
  
}`

The following is an example of JSON that you can put in the body for creating a new .               
`{
	
}`

The following is an example of JSON that you can put in the body for creating a new .               
`{
	
}`

## Questions         
If you have any questions about the project, 
the GitHub link and email address of the author are shown below.                   
GitHub: [GitHub](https://github.com/HiuSumJaimeYue) 
& Email: [hiusumjaimeyue@cmail.carleton.ca](mailto:hiusumjaimeyue@cmail.carleton.ca)
