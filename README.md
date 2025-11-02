# Ticketing Microservice Platform  
A full-featured microservices based ticketing platform built with Docker, Kubernetes & Skaffold.

## 🧩 Overview  
This project is a multi-service ticketing system handling user authentication, ticket creation, event management, and notifications. It’s designed for scalability, resilience and deployment on container orchestration platforms.

Key features:  
- User registration & authentication (JWT, refresh tokens)  
- Ticket/event creation, updating, listing & deleting  
- Service-to-service communication via NATS  
- Deployed via Docker containers, orchestrated using Kubernetes; development workflows supported via Skaffold  
- Multi-module / polyglot architecture (TypeScript / JavaScript )  

## 📁 Architecture & Modules  

## 🚀 Technologies  
- Docker & Docker Compose (for local dev)  
- Kubernetes (for staging/production)  
- Skaffold (local development experience)  
- Node.js / TypeScript (services written in TS/JS)  
- (Optional) Go for performance-critical services  
- Messaging NATS
- MongoDB / PostgreSQL / MySQL for persistence  

## 🔧 Getting Started  
### Prerequisites  
- Docker installed  
- Kubernetes cluster (minikube / kind / remote)  
- Skaffold installed  
- (Optional) `kubectl` access  

### Local Dev Workflow  
1. Clone the repository  
   ```bash
   git clone https://github.com/Sahadat20/ticketing-microservice.git
   cd ticketing-microservice
   skaffold run dev

Access services in browser / via curl (check your local Kubernetes port-forwarding or ingress).