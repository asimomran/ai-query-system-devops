# Deployment Guide

## Overview

The AI Query System is deployed on an Amazon EC2 Ubuntu instance. The deployment process is automated using GitHub Actions, which builds and deploys the application whenever changes are pushed to the main branch.

---

## Prerequisites

- AWS Account
- IAM User with required permissions
- Ubuntu EC2 Instance
- Java 21
- Maven
- Git
- GitHub Repository
- SSH Key Pair

---

## EC2 Setup

1. Launch an Ubuntu EC2 instance.
2. Configure the Security Group:
    - SSH (22)
    - HTTP (80) (optional)
    - Custom TCP (8080)
3. Connect to the instance using SSH.

---

## Install Required Software

```bash
sudo apt update
sudo apt install openjdk-21-jdk maven git -y
```

---

## Clone the Repository

```bash
git clone https://github.com/asimomran/ai-query-system-devops.git
```

---

## Build the Application

```bash
cd application/ai-query-system
mvn clean package
```

---

## Configure systemd Service

The application is deployed as a systemd service to ensure automatic startup and easier management.

Useful commands:

```bash
sudo systemctl start ai-query-system
sudo systemctl stop ai-query-system
sudo systemctl restart ai-query-system
sudo systemctl status ai-query-system
```

---

## Automated Deployment

Deployment is automated using GitHub Actions.

Pipeline Steps:

1. Push code to GitHub.
2. GitHub Actions starts automatically.
3. Connect to EC2 using SSH.
4. Pull the latest source code.
5. Build the project using Maven.
6. Replace the deployed JAR.
7. Restart the Spring Boot service.

The updated application becomes available immediately after the deployment completes successfully.