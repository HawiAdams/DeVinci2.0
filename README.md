# DeVinci - AI and ICP blockchain Innovation

## Developer's Guide to DeVinci and the ICP-SMS AI Project

DeVinci is an open-source, decentralized AI that runs in the browser and is powered by the Internet Computer Protocol (ICP) blockchain. Here’s a detailed guide for developers looking to contribute to this cutting-edge AI platform and its new **ICP-SMS AI Project**—an innovation inspired by DeVinci.

### Architecture Overview

**1. Frontend Canister:**
The frontend is built using **HTML, CSS, and JavaScript**. It integrates with the Web LLM (Language Learning Model) library to load AI models directly into the user’s browser. This setup ensures that AI interactions remain local, enhancing both **security** and **privacy**. The browser-based AI runs on WebGPU, allowing high-performance computations without relying on external servers.

Developers can modify the frontend by working on the JavaScript files within the canister. Updates to the UI can be tested locally using Vite for hot reloading.

**2. Backend Canister:**
The backend stores chat logs and user settings, if users opt in. Built on the ICP blockchain, the backend is highly scalable and decentralized. The canister's controllers are responsible for deploying updates and managing stored data. All data interactions are encrypted and secured with SHA-224.

**3. Security Integration (SHA-224 and ICP Blockchain):**
DeVinci uses **SHA-224 encryption** to ensure data integrity. This cryptographic function is fast and highly secure, making it ideal for protecting sensitive AI interactions. Since the project is hosted on the decentralized Internet Computer, it benefits from **blockchain-level security**.

### How to Extend and Customize the AI Model

**Web LLM** enables developers to integrate their own machine learning models into DeVinci. For those looking to modify the AI:

1. **Selecting Models**: You can switch the AI model by updating the Web LLM npm library configuration.
2. **Model Size**: If the target device struggles with performance, developers can use smaller or quantized models that reduce the computational load.
3. **Custom AI Functions**: Developers can train and upload their custom models to work with DeVinci’s framework.

### ICP-SMS AI Project: A Step Further

Inspired by DeVinci, the **ICP-SMS AI project** was developed to make AI accessible even in regions with limited or unreliable internet. The concept revolves around a USSD interface, where users send AI queries through SMS, and responses are delivered via SMS as well. This makes AI available to users who may not have access to powerful devices or consistent connectivity.

#### Architecture of ICP-SMS AI:
1. **Backend on ICP**: The SMS service is linked to a backend canister that processes AI queries and responses. This backend is powered by the same blockchain technology as DeVinci, ensuring decentralization and security.
2. **SMS Gateway**: An external SMS gateway connects the mobile network to the ICP canister, enabling the flow of data.
3. **AI Interaction**: SMS queries are parsed, processed through the AI engine, and responses are sent back to the user via SMS, ensuring AI accessibility from any mobile phone.

### How to Get Started with DeVinci

1. **Install Dependencies**: 
   Install the necessary dependencies using npm:
   ```bash
   npm install
   ```
   
2. **Run a Local Replica**:
   Start a local replica of the Internet Computer:
   ```bash
   npm run dev
   ```

3. **Deploying Canisters Locally**:
   Deploy the frontend and backend canisters to the local replica:
   ```bash
   dfx deploy --network local
   ```

4. **Customizing the UI**:
   Run the Vite development server to make and test changes in real-time:
   ```bash
   npm run vite
   ```

### Contributing to DeVinci and ICP-SMS AI

1. **Fork the Repository**: Clone and fork the DeVinci repository from GitHub.
2. **Feature Requests**: Developers can suggest new features through the GitHub issue tracker.
3. **Pull Requests**: Contributions are welcome, especially for improving AI models, security, or expanding SMS functionalities.

