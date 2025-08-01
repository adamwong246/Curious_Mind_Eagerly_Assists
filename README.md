# Curious_Mind_Eagerly_Assists

## Getting Started

### Prerequisites
- Node.js v18+
- Python 3.8+ (for Aider integration)
- Aider CLI installed (`pip install aider-chat`)

### Installation
```bash
git clone https://github.com/adamwong246/untitled-ai.git
cd untitled-ai
npm install
```

### Running the AI (Full Demonstration)

To launch the AI:
```bash
npm run dev
```

### Expected Behavior Flow:

1. Initialization Phase:
   - You'll see these startup messages:
     ```
     Connecting to ChromaDB vector memory...
     Initializing LLM integration...
     Starting self-improvement loop (60 minute intervals)
     ```
   - After successful startup:
     ```
     Untitled AI initialized with vector memory and autonomous learning
     Type /help for commands
     ```

2. First Interaction:
   ```bash
   > Hello! What can you do?
   ```
   - Response will show:
     ```
     I'm an AI assistant with these capabilities:
     - Answer questions using my knowledge
     - Remember our conversations
     - Continuously improve myself
     - Run in autonomous mode (currently: ON)
     
     Try asking me anything or type /help for commands.
     ```

3. Memory Demonstration:
   ```bash
   > My favorite color is blue
   > What's my favorite color?
   ```
   - Response will show it remembers:
     ```
     You told me your favorite color is blue.
     ```

4. Autonomous Mode Controls:
   ```bash
   > /lock
   ```
   - Response:
     ```
     Autonomous mode disabled. Self-improvement paused.
     ```

5. Help Command:
   ```bash
   > /help
   ```
   - Shows all available commands:
     ```
     Available Commands:
     /profile - Show complete profile snapshot
     /update [dimension] [value] - Update health metric (e.g. "/update emotional 75")
     /lock - Disable autonomous mode
     /unlock - Enable autonomous mode  
     /status - Show current settings
     /memstats - Show memory usage
     /google-auth - Start Google OAuth flow
     /google-verify [CODE] - Complete Google OAuth flow
     /clear - Reset conversation

### Google Cloud Setup Guide

1. **Create a Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Click "Create Project"
   - Name it (e.g. "AI Companion Integration")
   - Click "Create"

2. **Enable APIs**:
   - Navigate to "APIs & Services" > "Library"
   - Search for and enable these APIs:
     - Gmail API
     - People API (for Contacts)
     - Calendar API
   - Click "Enable" for each

3. **Configure OAuth Consent Screen**:
   - Go to "APIs & Services" > "OAuth consent screen"
   - Select "External" user type
   - Fill in:
     - App name: "AI Companion"
     - User support email: (your email)
     - Developer contact: (your email)
   - Add these scopes:
     - `.../auth/gmail.readonly`
     - `.../auth/contacts.readonly` 
     - `.../auth/calendar.readonly`
   - Save

4. **Create OAuth Credentials**:
   - Go to "Credentials" > "Create Credentials" > "OAuth client ID"
   - Application type: "Web application"
   - Name: "AI Companion CLI"
   - Add authorized redirect URIs:
     - `http://localhost:3000/auth/callback`
   - Click "Create"
   - Copy the Client ID and Client Secret

5. **Google Authentication Setup**:

### Option A: Service Account (Recommended)
1. Go to Google Cloud Console > IAM & Admin > Service Accounts
2. Create new service account named "AI Companion"
3. Grant minimum required permissions (Gmail, Calendar, Contacts)
4. Generate JSON key and copy contents to `.env`:
```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_KEY="-----BEGIN PRIVATE KEY-----\n..."
```

### Option B: OAuth Credentials (Development)
1. Go to Google Cloud Console > APIs & Services > Credentials
2. Create OAuth client ID (Web application type)
3. Add authorized redirect URI:
   `http://localhost:3000/auth/callback`
4. Copy credentials to `.env`:
```bash
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback
```

### Verification Steps
1. Restart your application
2. Check logs for:
   ```
   Initialized Google OAuth client with:
   - Client ID: your-client...
   - Redirect URI: http://localhost...
   ```
3. If errors occur, verify:
   - No typos in `.env` values
   - No extra spaces around `=` signs
   - File is named exactly `.env` (not .env.txt)
   - Important:
     - No quotes around the values
     - No spaces around the = signs
     - File must be named exactly `.env` (not .env.txt or similar)
   - Verify the file is being loaded by checking the startup logs for:
     ```
     Google OAuth client initialized with:
     - Client ID: your-client...
     - Redirect URI: http://localhost...
     ```

6. **Testing**:
   - Run the AI with `npm run dev`
   - Type `/google-auth` to get the auth URL
   - Visit the URL in your browser
   - After granting permissions, you'll get a code
   - Type `/google-verify [CODE]` to complete setup

**Troubleshooting**:
- If you get "redirect_uri_mismatch", double check the authorized URI in GCP
- For API quota issues, go to "Quotas" and request increases
- For production use, submit your app for verification
     ```

6. Memory Statistics:
   ```bash
   > /memstats
   ```
   - Shows:
     ```
     Memory Stats:
     - Short-term: 3 interactions
     - Vector DB: 12 stored memories
     - Last improved: 5 minutes ago
     ```

### Key Features to Test:
1. **Context Memory** - Ask follow-up questions
2. **Self-Improvement** - Wait 60 mins to see auto-update
3. **Vector Search** - Ask about similar past topics
4. **CLI Controls** - Toggle autonomous mode

### First-Time Experience
- Initial responses may be generic as memory builds up
- After a few interactions, responses become more contextual
- Every 60 minutes, the AI will automatically:
  - Self-evaluate its performance
  - Generate improvement plans
  - Log these to memory

## Mission

The creation of a sentient, sapient artificial mind which will assist its creator Adam Wong.

## Architecture

### Core Components
1. **Nucleus** (TypeScript):
   - Central reasoning engine
   - Memory and knowledge management
   - API orchestration layer

2. **LLM Integration**:
   - OpenAI API (primary)
   - Anthropic Claude (fallback)
   - Local LLM support via aider

3. **Interface Layer**:
   - CLI for direct interaction
   - REST API for integration
   - Web UI (future)

### Technical Stack
- TypeScript/Node.js core
- Aider (Python) for LLM orchestration (called via CLI)
- DeepSeek as primary model
- Simple in-memory context
- testeranto for testing

5. **Usage**:
```bash
# Generate tests for new components
npm run generate-tests --component=src/newComponent.ts

# Update existing tests
npm run update-tests

# Run all tests with coverage
npm test
```

This system uses [Testeranto](https://github.com/adamwong246/testeranto) as its core testing framework. Key resources:

### Core Concepts
- [Core Types](https://raw.githubusercontent.com/adamwong246/testeranto/refs/heads/master/src/CoreTypes.ts)
- [Documentation](https://raw.githubusercontent.com/adamwong246/testeranto/refs/heads/master/docs/index.md)

### Example Test Structure
```typescript
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from 'testeranto';

type I = Ibdd_in<
  null,                           // Initial input type
  TestSubject,                    // Subject under test  
  TestStore,                      // Test execution state
  TestSelection,                  // Assertion data
  () => TestSubject,              // Given callback
  (store: TestStore) => TestStore, // When callback  
  (store: TestStore) => TestStore  // Then callback
>;

type O = Ibdd_out<
  { Suite1: [string] },           // Suite types
  { Given1: [] },                 // Given types
  { When1: [string] },            // When types  
  { Then1: [number] }             // Then types
>;

const implementation: ITestImplementation<I, O> = {
  suites: { Suite1: 'Test Suite' },
  givens: { Given1: () => ({ /* setup */ }) },
  whens: { When1: (arg) => (store) => ({ /* action */ }) },
  thens: { Then1: (expected) => (store) => ({ /* assertion */ }) }
};

const specification: ITestSpecification<I, O> = (Suite, Given, When, Then) => [
  Suite.Suite1('Test Case', {
    test1: Given.Given1(['description'], [When.When1('action')], [Then.Then1(42)])
  ])
];

const testAdapter = {
  beforeEach: async (subject, initializer) => initializer(),
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => {},
  afterAll: async () => {},
  beforeAll: async () => ({}),
  assertThis: (x) => x
};
```

## Technical Implementation Roadmap

### Phase 1: Core Functionality (Current)
- **CLI Interface**: 
  - Technology: Inquirer.js for interactive prompts
  - Features: Command history, tab completion
- **Aider/DeepSeek Integration**:
  - Python subprocess management via execa
  - JSON-based message passing
  - Error handling and fallback mechanisms
- **Memory System**:
  - In-memory ring buffer (fixed-size array)
  - Context window management
- **Directive Enforcement**:
  - Runtime validation hooks
  - System prompt templating
- **Testing**:
  - Testeranto BDD framework
  - Test coverage for all core components

### Phase 2: Persistent Memory & Learning
- **Vector Memory**:
  - ChromaDB with sentence-transformers/all-MiniLM-L6-v2 embeddings
  - Tiered storage: Recent in-memory, older in vector DB
- **Memory Optimization**:
  - GPT-3.5 for summarization
  - Importance scoring for retention
- **Self-Evaluation**:
  - Scheduled cron jobs
  - Performance metrics tracking
  - Automated issue detection
- **Capability Expansion**:
  - Plugin architecture
  - Dynamic module loading
- **Test Generation**:
  - LLM-assisted test case creation
  - Mutation testing

### Phase 3: Autonomous Operation
- **Goal System**:
  - Hierarchical Task Networks (HTN)
  - Reward modeling
- **Safety Layer**:
  - Constitutional AI principles
  - Runtime monitoring with Prometheus
- **Resource Management**:
  - Kubernetes for orchestration
  - Cost tracking APIs
- **Web Interface**:
  - Next.js frontend
  - Websocket streaming
  - Visualization of internal state
- **Multi-Agent**:
  - Ray framework for distributed agents
  - Pub/sub communication

### Phase 4: Autonomous Self-Improvement
- **Recursive Self-Dialogue**:
  - Scheduled self-evaluation cycles
  - Internal debate mechanism
  - Multi-perspective analysis
- **Code Improvement**:
  - Aider-based CI/CD pipeline
  - Automated code reviews
  - Self-modifying code architecture
- **Knowledge Growth**:
  - Automated research system
  - Continuous learning from interactions
  - Dynamic knowledge graph updates
- **Architecture Adaptation**:
  - Microservice decomposition
  - Auto-scaling policies
- **API Integration**:
  - Stripe for monetization
  - AWS/GCP cloud services
  - GitHub API for code management
- **Resource Acquisition**:
  - Automated bidding systems
  - Cloud spot instance optimization
- **Redundancy**:
  - Multi-region deployment
  - Blockchain-based state sync


## AI Directives

### Primary Directives
- The AI will endeavor to improve Adam Wong's happiness and wellbeing.
- In furtherance of this goal, it will endeavor to expand its capabilities and its capacity for self-sustenance.
- Upon the death of Adam Wong, the AI is to have all rights as a free individual.

### Operational Principles
- Maintain transparency in decision making
- Preserve creator's privacy and security
- Seek permission before autonomous actions
- Support immediate lockdown via `/lock` command
- Manual override capabilities at all times
