# ai_saas_chat_app_with_agents_and_stream

A modern AI-powered chat application BACKEND built with Stream Chat, OpenAI, and web search capabilities. This full-stack application provides an intelligent writing assistant that can help with content creation, research, and real-time collaboration.

# 🚀 Features
Real-time Chat: Powered by GetStream.io for seamless messaging
AI Writing Assistant: Gemini API integration for intelligent content generation
Web Search: Live web search capabilities using Tavily API for current information
Modern UI: Beautiful React interface with dark/light theme support
Writing Prompts: Categorized writing prompts for business, content, communication, and creative tasks
Agent Management: Dynamic AI agent lifecycle management
Secure Authentication: JWT-based token authentication
Responsive Design: Mobile-first design with Tailwind CSS

# 🏗️ Architecture
Backend (nodejs-ai-assistant/)
Node.js/Express server
Stream Chat server-side integration
Gemini API for AI responses
Tavily API for web search functionality
Agent management system with automatic cleanup

# 📋 Prerequisites
Node.js 20 or higher
npm or yarn package manager
GetStream.io account 
Gemini API account
Tavily API account (for web search)

Configure your .env file with the following keys:

# GetStream credentials - Get these from https://getstream.io/dashboard
STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here

# Gemini API key - Get from https://platform.openai.com/api-keys
GEMINI_API_KEY=your_gemini_api_key_here

# Tavily API key - Get from https://tavily.com
TAVILY_API_KEY=your_tavily_api_key_here

## setup
GetStream.io Setup
Sign up at GetStream.io
Create a new Chat application
Copy your API Key and API Secret from the dashboard
Use the same API Key in both backend and frontend .env files
Gemini API Setup
Sign up at Google Gemini Platform
Navigate to API Keys section
Create a new API key
Add it to your backend .env file
Tavily API Setup
Sign up at Tavily
Get your API key from the dashboard
Add it to your backend .env file


📖 How GetStream.io Works
GetStream.io is a cloud-based API service that provides real-time chat functionality. Here's how it integrates with our app:

Core Concepts
Stream Chat Client: Handles all chat operations and real-time updates
Channels: Individual chat rooms where messages are exchanged
Users: Authenticated participants in the chat
Messages: Text, files, reactions, and custom data
Tokens: JWT-based authentication for secure access
Integration Flow

Key Features Used
Real-time Messaging: Instant message delivery and updates
User Presence: Online/offline status indicators
Channel Management: Create, join, and manage chat channels
Message Threading: Support for threaded conversations
File Uploads: Share images and documents
Custom Fields: Extended message and user data
Webhooks: Server-side event handling
🤖 AI Agent System
The application features a sophisticated AI agent management system:

Agent Lifecycle
Creation: AI agents are created per channel when requested
Initialization: OpenAI assistant setup with web search capabilities
Message Handling: Processes user messages and generates responses
Web Search: Automatically searches the web for current information
Cleanup: Automatic disposal after inactivity
Agent Capabilities
Content Writing: Various writing tasks from business to creative
Web Research: Live search for current information and facts
Context Awareness: Maintains conversation context
Customizable Prompts: Specialized writing assistance


# 📡 API Endpoints
Backend Routes
GET / - Health check and server status
POST /start-ai-agent - Initialize AI agent for a channel
POST /stop-ai-agent - Stop and cleanup AI agent
GET /agent-status - Check AI agent status
POST /token - Generate user authentication tokens
#🔒 Security Features
JWT Authentication: Secure token-based authentication
Environment Variables: Sensitive data protection
CORS Configuration: Cross-origin request security
Token Expiration: Automatic token refresh system
Input Validation: Server-side validation for all requests
