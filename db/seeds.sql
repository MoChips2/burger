USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES
	("Cheeseburger", false),
    ("Bacon burger", false),
    ("California burger", false);
    
    
USE burgers_db;   

UPDATE burgers
SET burger_name = "Bacon burger"
WHERE id = 2; 

SELECT * FROM burgers;