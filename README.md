# AI Query System - DevOps Assignment

## Project Overview

AI Query System is a Spring Boot web application that allows users to interact with an AI model through a simple web interface. The application is integrated with the OpenRouter API for AI responses and demonstrates a complete DevOps workflow, including cloud deployment, continuous integration and continuous deployment (CI/CD), monitoring, and load testing using AWS services and GitHub Actions.

---

## Project Objectives

- Develop a Spring Boot web application.
- Deploy the application on AWS EC2.
- Automate deployments using GitHub Actions.
- Configure monitoring using Amazon CloudWatch.
- Perform load testing using k6.
- Apply basic cloud security best practices.
- Document the complete DevOps implementation.

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Language | Java 21 |
| Framework | Spring Boot 3 |
| Build Tool | Maven |
| Frontend | HTML, CSS, JavaScript |
| AI API | OpenRouter API |
| Version Control | Git & GitHub |
| CI/CD | GitHub Actions |
| Cloud Platform | AWS |
| Compute | Amazon EC2 |
| Storage | Amazon S3 |
| Monitoring | Amazon CloudWatch |
| Load Testing | k6 |
| Operating System | Ubuntu Server |

---

## Project Features

- AI powered question answering using OpenRouter.
- Responsive web interface.
- Automated deployment using GitHub Actions.
- AWS EC2 based hosting.
- CloudWatch monitoring and alarms.
- Load testing using k6.
- Secure deployment using GitHub Secrets.
- Production deployment using systemd service.

---

## Repository Structure

```
ai-query-system-devops
│
├── application/
├── docs/
├── reports/
├── screenshots/
├── .github/workflows/
├── README.md
└── CHANGELOG.md
```

---

## System Architecture

```
Developer
    │
git push
    │
GitHub Repository
    │
GitHub Actions
    │
SSH into EC2
    │
git pull
    │
Maven Build
    │
Restart Spring Boot Service
    │
Spring Boot Application
    │
OpenRouter API
```

> *(Architecture diagram image will be added here later.)*

---

## AWS Services Used

- Amazon EC2
- Amazon S3
- Amazon CloudWatch
- AWS IAM

---

## CI/CD Workflow

1. Developer pushes code to GitHub.
2. GitHub Actions automatically starts.
3. Workflow builds the Spring Boot application.
4. GitHub Actions connects to EC2 using SSH.
5. Latest source code is pulled.
6. Maven builds the application.
7. The JAR file is updated.
8. The Spring Boot service is restarted automatically.

---

## Monitoring

Amazon CloudWatch is used to monitor the deployed application.

Configured monitoring includes:

- CPU Utilization
- Network In
- Network Out
- CPU Alarm

---

## Load Testing

Load testing was performed using k6.

Configuration:

- Virtual Users: 10
- Duration: 30 Seconds

Results:

- Total Requests: 300
- Failed Requests: 0
- Average Response Time: 29.39 ms
- Maximum Response Time: 44.7 ms
- Throughput: 9.7 requests/second

The application successfully handled all requests without failures.

---

## Security

The project follows basic cloud security best practices.

- IAM User with least privilege access
- GitHub Secrets for sensitive credentials
- SSH based EC2 access
- Security Groups configured for required ports
- Encrypted Amazon S3 bucket

---

## Future Improvements

- Docker containerization
- HTTPS using Nginx
- Custom domain configuration
- Auto Scaling
- Infrastructure as Code using Terraform
- Blue-Green deployment

---

## Author

Mohammed Asim Omran

DevOps Internship Assignment