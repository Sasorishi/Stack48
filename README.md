# Stack48 Digital Agency

Welcome to the Stack48 Digital Agency project! This project is a website showcasing the services offered 
by Stack48, including Coding, Online Acquisition, and Content Strategy.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installing Node.js and npm

#### For Windows:

1. **Download Node.js:**
   - Visit the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/)
   - Download the recommended version for most users, typically the LTS (Long-Term Support) version, by clicking 
the corresponding download button.

2. **Install Node.js:**
   - Once the download is complete, run the downloaded installation file.
   - Follow the installation instructions provided by the installer.

#### For macOS:

1. **Using Homebrew (recommended):**
   - Open Terminal.
   - Install Homebrew if you haven't already by running the following command:
     ```
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Once Homebrew is installed, you can install Node.js and npm by running:
     ```
     brew install node
     ```

2. **Using the official installer:**
   - Visit the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/)
   - Download the macOS installer package (.pkg) for the recommended version.
   - Run the downloaded installer and follow the installation instructions.

#### For Linux (using package manager):

- You can install Node.js and npm using your distribution's package manager. The exact command may vary depending 
on your Linux distribution. Here's an example for Ubuntu:
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```

After installing Node.js and npm, you can verify the installation by opening a terminal and running the following 
commands:

```bash
node --version
npm --version
```

These commands should print out the installed versions of Node.js and npm respectively.

## Getting Started

1. **Clone this repository to your local machine:**

    ```bash
    git clone this-repository-url
    ```

2. **Navigate into the project directory:**

    ```bash
    cd stack48
    ```

3. **Install JavaScript dependencies using npm:**

    ```bash
    npm install
    ```

## Commands

- `npm run dev`: Start the development server with Vite.
- `npm run build`: Build the application for production with Vite.
- `npm run lint`: Lint JavaScript and JSX files using ESLint.
- `npm run preview`: Preview the production build locally with Vite.

## Project Structure

- `src/`: Contains your React components and application logic.
- `public/`: Contains static assets and HTML entry point.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

