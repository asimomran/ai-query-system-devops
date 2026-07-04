# Monitoring

## Overview

Amazon CloudWatch is used to monitor the health and performance of the deployed application.

---

## Dashboard

The CloudWatch dashboard contains the following metrics:

- CPU Utilization
- Network In
- Network Out

These metrics provide real-time visibility into the application's resource usage.

---

## Alarm

A CloudWatch alarm is configured to monitor CPU utilization.

Configuration:

- Metric: CPU Utilization
- Threshold: 70%
- Evaluation Period: 5 Minutes

The alarm helps identify unusually high CPU usage, allowing administrators to investigate performance issues.

---

## Benefits

CloudWatch monitoring provides:

- Real-time infrastructure monitoring
- Performance analysis
- Early issue detection
- Better operational visibility