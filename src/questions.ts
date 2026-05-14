export interface Question {
  question: string;
  options: {
    [key: string]: string;
  };
  answer: string;
  explanation: string;
  why_wrong: string;
}

export const QUESTIONS: Question[] = [
  {
    "question": "What is the full form of DBMS?",
    "options": {
      "a": "Data of Binary Management System",
      "b": "Database Management System",
      "c": "Database Management Service",
      "d": "Data Backup Management System"
    },
    "answer": "b",
    "explanation": "DBMS stands for Database Management System. It is a software suite designed to define, manipulate, retrieve, and manage data in a database.",
    "why_wrong": "Options (a), (c), and (d) are incorrect because they use terms like 'Binary', 'Service', or 'Backup' which do not represent the standard industry definition of the system used to manage entire databases."
  },
  {
    "question": "An Oracle database is an ____ from Oracle Corporation.",
    "options": {
      "a": "RDBMS",
      "b": "ADBMS",
      "c": "MDBMS",
      "d": "None"
    },
    "answer": "a",
    "explanation": "Oracle is a Relational Database Management System (RDBMS). It organizes data into tables which can be linked—or related—based on data common to each.",
    "why_wrong": "ADBMS and MDBMS are not standard classifications for Oracle's primary database architecture, which has been built on the relational model for decades."
  },
  {
    "question": "Which of the following best defines a database?",
    "options": {
      "a": "A collection of programs",
      "b": "A type of software",
      "c": "A collection of data",
      "d": "A type of computer"
    },
    "answer": "c",
    "explanation": "A database is a structured collection of data stored electronically. It is the actual data container, while the DBMS is the software used to interact with it.",
    "why_wrong": "A database is not the program itself (that is the DBMS) nor is it the hardware (computer). It specifically refers to the organized information."
  },
  {
    "question": "The process of organizing data into tables and establishing relationships between them is known as:",
    "options": {
      "a": "Data mining",
      "b": "Data modeling",
      "c": "Data warehousing",
      "d": "Database design"
    },
    "answer": "d",
    "explanation": "Database design is the process of producing a detailed data model of a database. This logical design includes all the needed logical and physical design choices to generate the tables and relationships.",
    "why_wrong": "Data mining is about finding patterns; data modeling is the conceptual phase; and data warehousing is the storage of large amounts of historical data."
  },
  {
    "question": "Which of the following SQL statements is used to insert a new record into a table?",
    "options": {
      "a": "SELECT",
      "b": "UPDATE",
      "c": "INSERT INTO",
      "d": "DELETE"
    },
    "answer": "c",
    "explanation": "The INSERT INTO statement is used to add new rows of data to a table in a database.",
    "why_wrong": "SELECT is for retrieving data, UPDATE is for modifying existing data, and DELETE is for removing data."
  },
  {
    "question": "Which type of data can be stored in the database?",
    "options": {
      "a": "Image oriented data",
      "b": "Text, files containing data",
      "c": "Data in the form of audio or video",
      "d": "All of the above"
    },
    "answer": "d",
    "explanation": "Modern databases are capable of storing various data types including structured text, BLOBs (Binary Large Objects) for images, and multimedia files like audio and video.",
    "why_wrong": "Restricting the answer to only one type (a, b, or c) ignores the versatile storage capabilities of modern database systems."
  },
  {
    "question": "Which of the following is not a type of database?",
    "options": {
      "a": "Hierarchical",
      "b": "Network",
      "c": "Distributed",
      "d": "Decentralized"
    },
    "answer": "d",
    "explanation": "Decentralized refers to a network architecture or a system of control, but it is not one of the traditional technical 'models' of a database (like Relational, Hierarchical, or Network).",
    "why_wrong": "Hierarchical, Network, and Distributed are all recognized technical classifications for how database data is structured or stored."
  },
  {
    "question": "Which of the following is not an example of DBMS?",
    "options": {
      "a": "MySQL",
      "b": "Microsoft Access",
      "c": "IBM DB2",
      "d": "Google"
    },
    "answer": "d",
    "explanation": "Google is a multinational technology company and a search engine, not a specific Database Management System software package.",
    "why_wrong": "MySQL, Microsoft Access, and IBM DB2 are all well-known software platforms specifically designed to manage databases."
  },
  {
    "question": "Which of the following is not a feature of DBMS?",
    "options": {
      "a": "Minimum Duplication and Redundancy of Data",
      "b": "High Level of Security",
      "c": "Single-user Access only",
      "d": "Support ACID Property"
    },
    "answer": "c",
    "explanation": "DBMS systems are designed for multi-user access, allowing multiple users to access and manipulate data simultaneously while maintaining integrity.",
    "why_wrong": "Minimizing redundancy, providing security, and supporting ACID (Atomicity, Consistency, Isolation, Durability) are all core features of a robust DBMS."
  },
  {
    "question": "What does an RDBMS consist of?",
    "options": {
      "a": "Collection of Records",
      "b": "Collection of Keys",
      "c": "Collection of Tables",
      "d": "Collection of Fields"
    },
    "answer": "c",
    "explanation": "In the Relational model, the database is perceived by the user as a collection of tables (relations) where data is stored in rows and columns.",
    "why_wrong": "While RDBMS uses records, keys, and fields, the fundamental building block that holds everything together in the relational model is the table."
  },
  {
    "question": "Which forms have a relation that contains information about a single entity?",
    "options": {
      "a": "4NF",
      "b": "2NF",
      "c": "5NF",
      "d": "3NF"
    },
    "answer": "d",
    "explanation": "Third Normal Form (3NF) ensures that all the attributes in a table are functionally dependent only on the primary key, effectively isolating information about a single entity and removing transitive dependencies.",
    "why_wrong": "While 2NF, 4NF, and 5NF are levels of normalization, 3NF is the standard industry goal to ensure entities are cleanly separated without redundant non-key dependencies."
  },
  {
    "question": "Which SQL clause is used to filter groups of rows that have been aggregated?",
    "options": {
      "a": "WHERE",
      "b": "HAVING",
      "c": "GROUP BY",
      "d": "ORDER BY"
    },
    "answer": "b",
    "explanation": "The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions. It is used to filter the results after a GROUP BY clause.",
    "why_wrong": "WHERE filters individual rows before aggregation; GROUP BY organizes the rows; and ORDER BY sorts the final output."
  },
  {
    "question": "What is Oracle?",
    "options": {
      "a": "Oracle is a programming language",
      "b": "Oracle is a database",
      "c": "Oracle is a scripting language",
      "d": "Oracle is an operating system"
    },
    "answer": "b",
    "explanation": "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation.",
    "why_wrong": "Oracle is not a language like Python (a) or a script (c), nor is it a system like Windows or Linux (d)."
  },
  {
    "question": "Which of the following databases was designed first for enterprise grid computing?",
    "options": {
      "a": "Oracle database",
      "b": "SQL",
      "c": "MongoDB",
      "d": "Google database"
    },
    "answer": "a",
    "explanation": "Oracle 10g (the 'g' stands for Grid) was the first database designed specifically for enterprise grid computing, allowing for a flexible, on-demand computing infrastructure.",
    "why_wrong": "SQL is a language, not a database brand. MongoDB and Google's internal databases were developed much later or for different initial architectural purposes."
  },
  {
    "question": "Which of the following is a disadvantage of Oracle database?",
    "options": {
      "a": "Difficult to manage",
      "b": "Cost",
      "c": "Complexity",
      "d": "All of the mentioned"
    },
    "answer": "d",
    "explanation": "Oracle is known for being expensive (licensing fees), complex to set up (requires specialized knowledge), and can be difficult to manage compared to lightweight databases.",
    "why_wrong": "Selecting only one ignores the combined challenges of high price, steep learning curve, and management overhead that characterize Oracle environments."
  },
  {
    "question": "Which of the following is used to logically group data together?",
    "options": {
      "a": "Tablespace",
      "b": "Datafiles",
      "c": "Object",
      "d": "Database"
    },
    "answer": "a",
    "explanation": "A tablespace is a logical storage unit within an Oracle database that groups related logical structures (like tables and indexes) together.",
    "why_wrong": "Datafiles are physical files on the disk; Objects are specific items like tables; 'Database' refers to the entire system."
  },
  {
    "question": "When a transaction modifies data, Oracle copies the original data before modifying it. What is this original copy called?",
    "options": {
      "a": "Redo Data",
      "b": "Undone Data",
      "c": "Undo Data",
      "d": "Archive Data"
    },
    "answer": "c",
    "explanation": "Undo Data is used to roll back transactions, provide read consistency, and recover from failed transactions by keeping a record of how the data looked before the change.",
    "why_wrong": "Redo Data is for replaying changes during recovery; 'Undone' is not a technical term; Archive data is for long-term storage of logs."
  },
  {
    "question": "SQL*Plus will finish the statement and execute it when the user types in this:",
    "options": {
      "a": "A left slash ( \\ ) followed by [Enter]",
      "b": "A colon ( : ) followed by [Enter]",
      "c": "A semicolon ( ; ) followed by [Enter]",
      "d": "A period ( . ) followed by [Enter]"
    },
    "answer": "c",
    "explanation": "In the SQL*Plus environment, the semicolon (;) is the standard character used to terminate a SQL statement and send it to the server for execution.",
    "why_wrong": "The slash (\\) is a backslash and is incorrect; the colon and period do not trigger the execution of the SQL buffer."
  },
  {
    "question": "Of the three ways to create an Oracle database, which one is the easiest and most recommended?",
    "options": {
      "a": "Using the Oracle Database Configuration Assistant",
      "b": "Using the Oracle-supplied database creation procedures",
      "c": "Using the SQL CREATE DATABASE command",
      "d": "None of the above is correct"
    },
    "answer": "a",
    "explanation": "The Oracle Database Configuration Assistant (DBCA) provides a graphical user interface (GUI) that guides you through the process, making it much easier than manual scripting.",
    "why_wrong": "Manual SQL commands (c) are prone to error and complex, and supplied procedures (b) still require more manual effort than the DBCA tool."
  },
  {
    "question": "Money is defined in Oracle with the Currency data type.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "answer": "b",
    "explanation": "Oracle does not have a specific 'Currency' data type. It uses the NUMBER data type to store monetary values, often specified with precision and scale (e.g., NUMBER(10,2)).",
    "why_wrong": "The statement is false because 'Currency' is a data type in other systems like MS Access, but not in Oracle."
  },
  {
    "question": "The default extension for SQL*Plus scripts is .sql.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "answer": "a",
    "explanation": "By default, when you save or run scripts in SQL*Plus without specifying an extension, it looks for or creates files with the .sql extension.",
    "why_wrong": "This is a standard convention in nearly all SQL environments, including Oracle's SQL*Plus."
  },
  {
    "question": "Oracle allows the ORDER BY clause in view definitions.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "answer": "a",
    "explanation": "Modern versions of Oracle allow the ORDER BY clause within a CREATE VIEW statement, which determines the order of the rows when the view is queried.",
    "why_wrong": "In very old SQL standards, ORDER BY was restricted in views, but Oracle has supported this functionality for many versions."
  },
  {
    "question": "What is Oracle database used for?",
    "options": {
      "a": "Creating backup for data",
      "b": "Accessing database servers",
      "c": "Store and retrieve relevant data",
      "d": "Both a & c"
    },
    "answer": "c",
    "explanation": "The primary purpose of any database, including Oracle, is to efficiently store and retrieve data as requested by users or applications.",
    "why_wrong": "While it can facilitate backups, the *core use* is storage and retrieval. Accessing servers (b) is a networking task, not the database's primary function."
  },
  {
    "question": "Which schema object instructs Oracle to connect to remotely access an object of a database?",
    "options": {
      "a": "Database Link",
      "b": "Sequence",
      "c": "Data Link",
      "d": "Remote Link"
    },
    "answer": "c",
    "explanation": "A Database Link (often referred to as a Data Link in certain contexts or tools) is a pointer that defines a one-way communication path from an Oracle Database server to another database server.",
    "why_wrong": "A Sequence is for generating numbers; 'Remote Link' is not the standard terminology for this Oracle object."
  },
  {
    "question": "Which of the following is referred to as the language used by application programs to request data from the DBMS?",
    "options": {
      "a": "DDL",
      "b": "Query language",
      "c": "DML",
      "d": "All of the Mentioned"
    },
    "answer": "c",
    "explanation": "DML (Data Manipulation Language) includes commands like SELECT, INSERT, UPDATE, and DELETE, which application programs use to handle data content.",
    "why_wrong": "DDL (Data Definition Language) is used for defining structure (tables), not for the daily requesting of data records by applications."
  },
  {
    "question": "Which command is used to export data using Oracle Data Pump?",
    "options": {
      "a": "exp",
      "b": "expdp",
      "c": "dump",
      "d": "export"
    },
    "answer": "b",
    "explanation": "expdp stands for Export Data Pump. It is the modern command-line utility for exporting data and metadata in Oracle.",
    "why_wrong": "'exp' is the legacy/original export tool; 'dump' and 'export' are not the actual executable commands for Data Pump."
  },
  {
    "question": "In Oracle, which command is used to remove a table from the database?",
    "options": {
      "a": "DELETE TABLE",
      "b": "REMOVE TABLE",
      "c": "DROP TABLE",
      "d": "DISCARD TABLE"
    },
    "answer": "c",
    "explanation": "The DROP TABLE command deletes the table structure, all its data, and any associated indexes or triggers from the database.",
    "why_wrong": "DELETE is for removing rows within a table, not the table itself. 'REMOVE' and 'DISCARD' are not valid SQL syntax for this action."
  },
  {
    "question": "Which Oracle feature helps in recovering the database to a previous state without using backups?",
    "options": {
      "a": "Flashback",
      "b": "Rollback",
      "c": "Restore Point",
      "d": "Recovery Point"
    },
    "answer": "a",
    "explanation": "Flashback technology allows you to view past states of data or wind the database back in time to recover from logical errors without needing a full restore from backup.",
    "why_wrong": "Rollback only works for the current uncommitted transaction. Restore points are markers used *within* the flashback process, but Flashback is the overall feature."
  },
  {
    "question": "Which of the following can be used to extract or filter the data & information from the data warehouse?",
    "options": {
      "a": "Data redundancy",
      "b": "Data recovery tool",
      "c": "Data mining",
      "d": "Both B and C"
    },
    "answer": "c",
    "explanation": "Data mining is the process of analyzing large datasets (data warehouses) to find patterns and extract useful information.",
    "why_wrong": "Data redundancy is a problem (duplicate data), and recovery tools are for fixing broken databases, not for extracting business information."
  },
  {
    "question": "Which of the following commands is used to save any transaction permanently into the database?",
    "options": {
      "a": "Commit",
      "b": "Rollback",
      "c": "Savepoint",
      "d": "None of the above"
    },
    "answer": "a",
    "explanation": "The COMMIT command saves all changes made during the current transaction to the database, making them permanent and visible to other users.",
    "why_wrong": "Rollback undoes changes; Savepoint creates a marker within a transaction to roll back to, but does not save the data permanently."
  }
];
