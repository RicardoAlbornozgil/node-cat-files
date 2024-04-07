# Cat Command

## Introduction to original `cat` command

The cat command is a utility in Unix-like operating systems used to concatenate and display the content of files. Its primary function is to read one or more files and then write their content to the standard output (usually the terminal screen). 
cat is often used to quickly view the contents of text files, but it can also be used to concatenate multiple files together, create new files, or append content to existing files.

Here's a brief summary of its main functionalities:

  1. Viewing File Content: cat can be used to display the contents of one or more files to the terminal. 

  2. Concatenating Files: It can concatenate multiple files together and display them as a single continuous stream.

  3. Creating New Files: By providing input from the terminal, cat can create new files.

  4. Appending to Files: With the redirection operator (>>), cat can append the content it reads from the standard input to an existing file.

## How to use THIS version of cat:

This version of cat uses Node.js to manage packages such as axios. Therefore, you'll need to have __npm__ and __Node.js__ installed.
1. __Clone the Repository:__ Start by creating a target folder in your local workspace and then initialize Git and clone this repository using the following commands:
   
```bash
git init
git clone https://github.com/RicardoAlbornozgil/node-cat-files
```

2. __Initialize npm:__ Navigate to the cloned repository and initialize the Node Package Manager using the following command:
```bash
npm init
```

3. __Install Dependencies:__ Install the required dependencies by running:
```bash
npm install
```
### Display contents of file.
To display the contents of a file in the terminal, use the following command:
```bash
node step3.js <path>
```
For Example:
```bash
node step3.js one.txt
```
This command will display the contents of one.txt.

You can also provide a URL:
```bash
node step3.js https://www.google.com
```
This will print out the HTML content of google.com.

### Concatenate to a file
To concatenate the content of a source file onto a destination file, use the --out argument:
```bash
node step3.js --out <dest file> <source file>
```

For instance:
```bash
node step3.js --out new.txt https://google.com
```
This will create a new file named new.txt and concatenate the HTML content of google.com into it.
