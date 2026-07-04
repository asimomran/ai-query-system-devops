# Security Summary

## Overview

Security best practices were followed during the implementation of this project.

---

## IAM

An IAM user with least-privilege permissions was created to manage AWS resources.

---

## SSH Authentication

The EC2 instance is accessed securely using an SSH key pair instead of password-based authentication.

---

## GitHub Secrets

Sensitive information required by GitHub Actions is stored securely using GitHub Secrets.

Examples:

- EC2 Host
- EC2 Username
- SSH Private Key

---

## Security Groups

The EC2 Security Group allows access only to the required ports:

- SSH (22)
- Application Port (8080)

Restricting unnecessary ports reduces the attack surface.

---

## S3 Security

Amazon S3 is used for project-related storage.

Bucket access follows AWS security best practices.

---

## Best Practices Followed

- Least Privilege Principle
- Secret Management
- Secure Remote Access
- Controlled Network Access