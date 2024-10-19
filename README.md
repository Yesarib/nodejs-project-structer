# Node.js Project Structure

## Description

This project provides a structured template for building scalable Node.js applications. It follows a modular architecture, promoting code reusability and maintainability. Developers can choose from various templates, each designed for different architectural patterns such as DDD, Event-Driven, and Microservices.

## Installation

To use the project structure templates globally, install the package:

```bash
npm install -g @yesari/nodestruct
```

## Usage

You can create a sample project:

```
npx node-structer create [template] [project-name]
```

### Available Templates:
Each template offers a unique architectural design:

- js-base: A simple, minimal JavaScript structure.
- js-DDD: Domain-Driven Design in JavaScript.
- js-EventDriven: Event-Driven architecture for JS apps.
- js-Hexagonal: Follows Hexagonal architecture principles.
- js-microservices: Microservice-based structure for JS.
- ts-base: Basic TypeScript structure.
- ts-DDD: Domain-Driven Design using TypeScript.
- ts-EventDriven: Event-Driven pattern for TS.
- ts-Hexagonal: Hexagonal architecture in TypeScript.
- ts-microservices: Microservice setup with TS.

### Example:
To create a new project using the JavaScript base template:
```
npx node-structer create js-base demo
```


## Development:
If you want to contribute or make modifications, clone the repository:

1. Clone the repository:
   ```bash
   git clone https://github.com/Yesarib/nodejs-project-structer.git
2. Install dependencies:
    ```bash
    npm install
    ```
3. Build the project:
    ```bash
    npm run build
    ```

## License

This project is licensed under the MIT License.
You can modify this as needed for more details or additional instructions!
