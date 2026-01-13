📚 Book Management REST API
A Book Management REST API built with Node.js, Express, and TypeScript.
This API allows you to perform CRUD operations on books and supports bulk CSV import with validation. It includes logging, centralized error handling, and a clean service-based architecture.
________________________________________
✨ Features
•	CRUD operations for books:
	o	GET /books – List all books
	o	GET /books/:id – Get a specific book by ID
	o	POST /books – Add a new book
	o	PUT /books/:id – Update an existing book
	o	DELETE /books/:id – Delete a book
•	Bulk CSV import:
	o	POST /books/import – Upload a CSV file of books
	o	Manual validation for each row
	o	Returns the number of books added and a list of errors
•	TypeScript for type safety
•	Logging with morgan
•	Centralized error handling with middleware
•	Environment variables for configuration (e.g., PORT)
•	Unit testing with Jest
•	Service-based / MVC project structure
________________________________________
🚀 Getting Started
Prerequisites
	•	Node.js
	•	npm
	•	Git
________________________________________
📦 Installation
	1.	Clone the repository:
				git clone https://github.com/Rakesh14052000/book-management-api.git
				cd book-management-api
	2.	Install dependencies:
				npm install
	3.	Create a .env file based on .env.example:
				PORT=3000
________________________________________
▶️ Running the API
	npm run dev    # Start in development mode with hot reload
	The API will run on 'http://localhost:3000' by default.
________________________________________
📌 API Endpoints
	Method		Endpoint				Description
	GET				/books					Get all books
	GET				/books/:id			Get a specific book by ID
	POST			/books					Add a new book
	PUT				/books/:id			Update a book
	DELETE		/books/:id			Delete a book
	POST			/books/import		Bulk import books via CSV file
________________________________________
📂 CSV Import Format
	The CSV file should include the following columns:
		title,author,publishedYear
		Book Title 1,Author 1,2020
		Book Title 2,Author 2,2018
	CSV Location
			project-root/
		│
		├─ sample-data/
		│  └─ books.csv
	The API validates each row and returns:
		•	Number of books successfully added
		•	List of rows with errors (e.g., missing fields, invalid data)
________________________________________
🗂 Project Structure
		project-root/
	│
	├─ src/
	│  ├─ controllers/		# Route handlers
	│  ├─ services/       # Business logic
	│  ├─ routes/         # API routes
	│  ├─ middleware/     # Error handling & logging
	│  ├─ models/         # Type definitions
	│  ├─ utils/          # Helper functions
	│  ├─ app.ts          # Express app setup
	│  └─ server.ts       # Server entry point
	├─ tests/           	# Unit & integration tests
	├─ package.json
	├─ tsconfig.json
	├─ jest.config.ts
	├─ .env
	└─ README.md
________________________________________
🧪 Testing
	Unit tests are written using Jest.
	npm run test
________________________________________
🔐 Environment Variables
	Variable			Description							Default
	PORT					Server port number			3000
________________________________________
🛠 Tools Used
	•	Node.js
	•	Express
	•	TypeScript
	•	Multer (file uploads)
	•	Morgan (logging)
	•	Jest (testing)
________________________________________
📮 Postman Collection
	You can use the included Postman collection to test all API endpoints:
	Book Management API Postman Collection
			https://drive.google.com/drive/folders/1_p5E9tQtLZSQqf5WKdU9y28O9SRhhCZo?usp=sharing
________________________________________
👤 Author
	Rakesh Kumar Sahoo
	GitHub: https://github.com/Rakesh14052000


