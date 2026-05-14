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
    "explanation": "DBMS stands for Database Management System — software that lets users create, store, organize, and retrieve data from a database. It acts as a bridge between the user and the actual data, handling everything from security to query processing. Examples include MySQL, Oracle, and Microsoft SQL Server.",
    "why_wrong": "Option (a) is fabricated — 'Binary' has no place in this acronym. Option (c) changes 'System' to 'Service', which alters the meaning entirely; a DBMS is a full software system, not just a service. Option (d) confuses DBMS with backup software — while a DBMS can support backups, its core role is data management, not data backup."
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
    "explanation": "Oracle Database is classified as a Relational Database Management System (RDBMS). In a relational model, data is stored in structured tables made of rows and columns, and tables can be linked to each other through keys. Oracle has been one of the world's leading RDBMS platforms since the 1970s.",
    "why_wrong": "Options (b) ADBMS and (c) MDBMS are not recognized standard categories in database architecture. Oracle's entire design is built on the relational model, making RDBMS the only accurate classification here."
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
    "explanation": "A database is an organized collection of structured data stored so it can be easily accessed, managed, and updated. Think of it as a digital filing cabinet. It is the data itself — not the software that manages it (that is the DBMS) and not the hardware it runs on.",
    "why_wrong": "Option (a) describes an application suite or a program package, not a database. Option (b) describes the DBMS — the software tool used to interact with the database — not the database itself. Option (d) is hardware, which simply hosts the database but is not the database."
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
    "explanation": "Database design is the process of structuring a database by deciding which tables to create, what columns each table should have, and how tables relate to one another through keys. Good database design ensures data is accurate, consistent, and easy to query. It encompasses both logical design (how data is organized conceptually) and physical design (how it is stored on disk).",
    "why_wrong": "Option (a) Data mining is about discovering hidden patterns and insights from existing data — it happens after the database is built. Option (b) Data modeling is the earlier, more abstract phase of planning data structures, before actual implementation. Option (c) Data warehousing is the large-scale storage of historical data for reporting and analytics, not the act of designing tables and relationships."
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
    "explanation": "The INSERT INTO statement adds a new row of data into a table. For example: INSERT INTO students (name, age) VALUES ('Alice', 22); — this creates a brand new record. It is part of DML (Data Manipulation Language), the set of SQL commands used to handle the content of a database.",
    "why_wrong": "Option (a) SELECT only reads and retrieves existing data — it never adds or changes anything. Option (b) UPDATE modifies data that already exists in a row; it does not create new rows. Option (d) DELETE removes existing rows from a table — the opposite of inserting."
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
    "explanation": "Modern databases are not limited to just numbers or text. They can store structured data (like names and dates), semi-structured data (like JSON), and unstructured data such as images, audio, and video files — stored as BLOBs (Binary Large Objects). This flexibility makes databases suitable for a wide range of applications, from banking systems to multimedia platforms.",
    "why_wrong": "Choosing only option (a), (b), or (c) is too narrow. Each of those options describes just one category of data that a database can store. Modern DBMS platforms support all these types simultaneously, so limiting the answer to any single option ignores the full capability of contemporary database systems."
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
    "explanation": "In database theory, the recognized types include Hierarchical (data in a tree structure), Network (data with many-to-many relationships), Relational (data in tables), and Distributed (data spread across multiple locations). 'Decentralized' is a general concept in system design or governance — it is not an established category in database models.",
    "why_wrong": "Option (a) Hierarchical is a classic database model where data is organized as a parent-child tree. Option (b) Network is a database model that extends hierarchical by allowing multiple parent relationships. Option (c) Distributed describes a database whose data is stored and managed across multiple computers or locations — all three are legitimate, well-defined database types."
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
    "explanation": "Google is a technology company most widely known for its search engine, advertising platform, and cloud services. While Google does develop internal and cloud-based database tools (like BigQuery and Spanner), 'Google' itself is not a DBMS. A DBMS is a specific software product designed to manage databases.",
    "why_wrong": "Option (a) MySQL is an open-source RDBMS widely used in web applications. Option (b) Microsoft Access is a desktop DBMS bundled with Microsoft Office, suitable for small-scale databases. Option (c) IBM DB2 is an enterprise-grade RDBMS developed by IBM. All three are real, purpose-built database management software products."
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
    "explanation": "One of the major advantages of a DBMS over flat-file systems is its ability to support multiple users accessing the database at the same time. The DBMS uses concurrency control mechanisms to ensure that simultaneous access does not corrupt data. 'Single-user access only' is therefore not a feature — it is actually the limitation of simpler, older file-based systems.",
    "why_wrong": "Option (a) reducing data duplication and redundancy is a core DBMS goal, achieved through normalization. Option (b) security features like authentication, authorization, and encryption are standard in all major DBMS platforms. Option (d) ACID properties — Atomicity, Consistency, Isolation, and Durability — are the foundation of reliable transaction management in any DBMS."
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
    "explanation": "An RDBMS (Relational Database Management System) organizes data into tables, also called relations. Each table has rows (records) and columns (fields). The relational model, introduced by Edgar F. Codd, defines the database as a set of these tables that can be related to each other using common key columns.",
    "why_wrong": "Option (a) Records (rows) exist inside tables — they are a component of a table, not the primary structure of the database itself. Option (b) Keys (like primary keys and foreign keys) are attributes within tables used to establish relationships — they are not the main containers of an RDBMS. Option (d) Fields (columns) are individual data attributes within a table, not the overarching structure."
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
    "explanation": "Third Normal Form (3NF) is the normalization level at which each table stores information about exactly one entity, and every non-key column is directly and solely dependent on the primary key — not on any other non-key column (this removes 'transitive dependencies'). For example, a Students table should only store student data, not course names, which belong in a separate Courses table.",
    "why_wrong": "Option (b) 2NF removes partial dependencies — where a non-key attribute depends on only part of a composite key — but does not yet fully isolate single-entity data. Option (a) 4NF and Option (c) 5NF deal with more advanced multi-valued and join dependencies, going beyond the single-entity concern that 3NF directly addresses."
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
    "explanation": "The HAVING clause filters results after rows have been grouped and aggregated. For example, if you group employees by department and calculate the average salary, HAVING lets you show only departments where that average exceeds a certain value. It was introduced specifically because WHERE cannot work with aggregate functions like COUNT(), SUM(), or AVG().",
    "why_wrong": "Option (a) WHERE filters individual rows before any grouping or aggregation occurs — it cannot reference aggregate values. Option (c) GROUP BY groups rows by a specified column so aggregates can be calculated per group — it organizes the data but does not filter it. Option (d) ORDER BY simply sorts the final result set and has nothing to do with filtering."
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
    "explanation": "Oracle Database is a powerful, enterprise-grade relational database management system (RDBMS) developed and marketed by Oracle Corporation. It is one of the most widely used database platforms in the world, especially for large-scale business applications, financial systems, and data warehousing. It supports SQL for querying and PL/SQL for procedural programming within the database.",
    "why_wrong": "Option (a) Oracle is not a programming language like Python, Java, or C — though it uses SQL and PL/SQL internally. Option (c) Oracle is not a scripting language like JavaScript or Bash. Option (d) Oracle is not an operating system like Windows or Linux; it runs on top of an operating system."
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
    "explanation": "Oracle Database 10g was the first database platform specifically architected for enterprise grid computing — where computing resources (servers, storage) are shared and dynamically allocated across an organization. The 'g' in 10g stands for 'Grid'. This design allows companies to use low-cost modular hardware and scale resources up or down as needed.",
    "why_wrong": "Option (b) SQL is a query language, not a database product — it cannot be designed for any computing model. Option (c) MongoDB, a NoSQL document database, was released in 2009 and was designed for scalability and flexibility, not specifically for grid computing. Option (d) 'Google database' is too vague to refer to any specific product, and Google's internal database systems were built for different purposes."
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
    "explanation": "Oracle Database has several well-known disadvantages compared to lighter alternatives. First, cost: Oracle licensing fees are among the highest in the industry, making it expensive for smaller organizations. Second, complexity: setting up, tuning, and optimizing an Oracle database requires significant expertise. Third, difficult to manage: ongoing administration — including patching, backups, and performance tuning — often requires a dedicated Oracle DBA (Database Administrator).",
    "why_wrong": "Selecting only option (a), (b), or (c) is incomplete. All three are widely recognized drawbacks of Oracle in practice. Oracle's strengths (reliability, features, scalability) come alongside these real-world costs and challenges, which is why many smaller companies opt for free alternatives like PostgreSQL or MySQL."
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
    "explanation": "A tablespace is a logical storage container in Oracle that groups related database objects — such as tables and indexes — together. It creates a layer of abstraction between the logical structure of the database and the physical files on disk. For example, you might have separate tablespaces for user data, temporary data, and system data to manage storage more efficiently.",
    "why_wrong": "Option (b) Datafiles are the actual physical files stored on the operating system's disk — they are the storage medium that tablespaces use, not the logical grouping layer itself. Option (c) an Object refers to individual database items like a single table, view, or index — it is a member of a tablespace, not a grouping container. Option (d) a Database is the entire system encompassing all tablespaces, users, and configurations — it is the top-level structure, not a specific logical grouping tool."
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
    "explanation": "Undo Data (also known as rollback data) is a copy of the original, pre-change data that Oracle saves before applying any modifications. It serves three key purposes: (1) rolling back a transaction if it fails or is cancelled, (2) providing read consistency so other users see a stable view of data while a transaction is in progress, and (3) supporting Oracle's Flashback features to query past data states.",
    "why_wrong": "Option (a) Redo Data is the opposite — it records what changes were made so Oracle can replay them during crash recovery. Option (b) 'Undone Data' is not a technical Oracle term. Option (d) Archive Data refers to archived redo logs — historical copies of redo logs used for media recovery — not the pre-change snapshot of individual transactions."
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
    "explanation": "In SQL*Plus, placing a semicolon (;) at the end of a SQL statement and pressing Enter tells the tool that the statement is complete and should be sent to the Oracle database for execution. This is the standard SQL statement terminator used across virtually all SQL environments. Note: a forward slash (/) on its own line also executes the statement buffer, but the semicolon is the most common method.",
    "why_wrong": "Option (a) a backslash has no special SQL*Plus meaning for statement execution. Option (b) a colon (:) is used in SQL*Plus for bind variables (placeholders for values passed in at runtime) — it does not terminate or execute a statement. Option (d) a period (.) ends a PL/SQL block in some contexts but does not execute a plain SQL statement."
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
    "explanation": "The Oracle Database Configuration Assistant (DBCA) is a graphical wizard that walks you through every step of creating a database — choosing templates, setting memory parameters, configuring storage, and more. It automates much of the complex underlying work, significantly reducing the chance of errors. Oracle officially recommends DBCA for most installations, especially for those who are not Oracle experts.",
    "why_wrong": "Option (b) Oracle-supplied creation scripts and procedures still require manual editing of parameter files and careful sequencing of steps — this is more error-prone and time-consuming than using DBCA. Option (c) the SQL CREATE DATABASE command is the most manual and low-level approach, requiring the DBA to correctly configure dozens of parameters by hand — one mistake can result in a broken database."
  },
  {
    "question": "Money is defined in Oracle with the Currency data type.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "answer": "b",
    "explanation": "This statement is false. Oracle does not have a 'Currency' data type. To store monetary values in Oracle, developers use the NUMBER data type with defined precision and scale — for example, NUMBER(15, 2) can store a value up to 999,999,999,999,999 with two decimal places. The 'Currency' data type exists in some other platforms like Microsoft Access, which may cause this confusion.",
    "why_wrong": "Option (a) True is incorrect. Accepting this statement without verification would lead to errors when designing Oracle schemas. Oracle's data type system includes NUMBER, VARCHAR2, DATE, TIMESTAMP, BLOB, and others — but 'Currency' is not among them."
  },
  {
    "question": "The default extension for SQL*Plus scripts is .sql.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "answer": "a",
    "explanation": "This statement is true. When you use the START or @ command in SQL*Plus to run a script file without specifying a file extension, SQL*Plus automatically appends '.sql' and looks for a file with that extension. For example, @myscript is interpreted as @myscript.sql. This is a universal convention across SQL tools and environments.",
    "why_wrong": "Option (b) False is incorrect. The .sql extension is the established and documented default for SQL*Plus. Claiming it is false could lead to confusion when creating, saving, or referencing script files in an Oracle environment."
  },
  {
    "question": "Oracle allows the ORDER BY clause in view definitions.",
    "options": {
      "a": "True",
      "b": "False"
    },
    "answer": "a",
    "explanation": "This statement is true for modern Oracle versions. Oracle allows the ORDER BY clause inside a CREATE VIEW statement, which defines a default sort order when the view is queried without an explicit ORDER BY in the SELECT statement. This is different from some other databases (like older SQL Server versions) where ORDER BY in a view definition is restricted.",
    "why_wrong": "Option (b) False would have been technically accurate under very early SQL standards or in certain other RDBMS platforms that prohibit ORDER BY in views. However, in Oracle's current implementation, this is permitted, making 'False' the wrong answer in an Oracle-specific context."
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
    "explanation": "The fundamental purpose of any database, including Oracle, is to store data persistently and retrieve it efficiently when needed. Oracle is used by organizations worldwide to manage critical business data — from financial records and customer information to inventory and employee data. It provides fast, reliable, and secure data storage and retrieval through SQL queries.",
    "why_wrong": "Option (a) while Oracle supports backup and recovery features, backup creation is a maintenance task — not the primary reason for using a database. Option (b) accessing database servers is a network and connectivity concern, not a function the database itself performs. Option (d) combining 'a' and 'c' would incorrectly elevate backup as a core purpose equal to storage and retrieval."
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
    "explanation": "Note: The standard Oracle term for this schema object is Database Link (option a). A Database Link defines a connection path from one Oracle database to another remote database, allowing you to query or manipulate remote data as if it were local. You create one with CREATE DATABASE LINK and reference it using the @ symbol in SQL. Some learning materials label this a 'Data Link', which is why option (c) is marked correct here.",
    "why_wrong": "Option (b) a Sequence is a schema object that generates unique, sequential numbers — typically used for auto-incrementing primary keys. It has no connection to remote database access. Option (d) 'Remote Link' is not a standard Oracle schema object name — the correct Oracle terminology is Database Link."
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
    "explanation": "DML (Data Manipulation Language) is the subset of SQL that application programs use to interact with stored data. It includes four core commands: SELECT (read), INSERT (add), UPDATE (modify), and DELETE (remove). When a web application loads your profile or saves an order, it is issuing DML statements in the background.",
    "why_wrong": "Option (a) DDL (Data Definition Language) defines and modifies the structure of the database — commands like CREATE TABLE, ALTER TABLE, and DROP TABLE. It manages structure, not the data content that applications request. Option (b) 'Query language' is a broad, informal umbrella term; DML is the precise, standard classification for this role. Option (d) since DDL does not serve the data-requesting role of applications, 'All of the above' is incorrect."
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
    "explanation": "expdp stands for Export Data Pump and is the command-line utility introduced in Oracle 10g to export database objects and data into a proprietary binary dump file. It is significantly faster and more flexible than its predecessor, offering features like parallel export, network-mode export, and fine-grained object filtering. The companion command impdp (Import Data Pump) is used to load the resulting dump files back into a database.",
    "why_wrong": "Option (a) exp is the original legacy export utility from earlier Oracle versions. It still works in some older environments but has been superseded by expdp and lacks its advanced features. Option (c) 'dump' is a generic informal term, not an executable Oracle command. Option (d) 'export' is also not a valid Oracle Data Pump command-line executable — the correct command is specifically expdp."
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
    "explanation": "The DROP TABLE command permanently removes a table from the database — including all its rows, column definitions, indexes, triggers, and constraints. It is a DDL (Data Definition Language) command. Note: in Oracle, dropped tables are moved to a recycle bin and can sometimes be recovered using FLASHBACK TABLE ... TO BEFORE DROP, unless the table was dropped with the PURGE option.",
    "why_wrong": "Option (a) DELETE TABLE is not valid SQL syntax. DELETE alone removes rows from within a table but leaves the table structure completely intact — it cannot remove the table itself. Option (b) REMOVE TABLE is not a recognized SQL or Oracle command and does not exist in the SQL standard. Option (d) DISCARD TABLE is also not valid SQL syntax in Oracle or any major RDBMS."
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
    "explanation": "Oracle Flashback is a suite of features that lets you view and recover data from the past without restoring from a traditional backup. For example, Flashback Query lets you see what data looked like at a specific time, and Flashback Table lets you rewind a table to an earlier state. It works by using the undo data retained in the database, making recovery from accidental changes fast and straightforward.",
    "why_wrong": "Option (b) Rollback only undoes changes from the current active, uncommitted transaction — once a transaction is committed, Rollback cannot undo it. Option (c) a Restore Point is a named marker in time used to define a target point for flashing back — it is a component used within the Flashback process, not the overarching feature itself. Option (d) 'Recovery Point' is not a standard Oracle feature name; it loosely describes a concept but does not correspond to any specific Oracle functionality."
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
    "explanation": "Data mining is the process of analyzing large volumes of data — typically stored in a data warehouse — to discover patterns, correlations, anomalies, and trends that can drive business decisions. Techniques include classification, clustering, regression, and association rule learning. Data mining tools read from the warehouse and extract meaningful information without altering the stored data.",
    "why_wrong": "Option (a) Data redundancy refers to the unwanted duplication of data across a database — it is a storage problem to be minimized, not a method to extract or filter information. Option (b) a Data recovery tool is designed to restore lost or corrupted data after a failure — its purpose is database repair, not analytical extraction. Option (d) combining recovery with mining is incorrect because data recovery serves a completely different purpose from data analysis and extraction."
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
    "explanation": "COMMIT is a Transaction Control Language (TCL) command that permanently saves all changes made during the current transaction to the database. Once committed, the changes are visible to all other users and sessions and cannot be undone with a ROLLBACK. In practice, COMMIT is used after a group of related DML operations — for example, after debiting one account and crediting another — to ensure all changes are finalized together as a single atomic unit.",
    "why_wrong": "Option (b) ROLLBACK does the opposite — it cancels all changes in the current transaction and restores data to its state before the transaction began. Option (c) SAVEPOINT creates a named checkpoint within a transaction that you can partially roll back to — but it does not permanently save data. A SAVEPOINT only helps manage partial rollbacks within an ongoing transaction; data is only permanently committed when COMMIT is issued."
  }
]