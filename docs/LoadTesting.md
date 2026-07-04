# Load Testing

## Objective

Load testing was performed to evaluate the application's performance under concurrent user requests.

---

## Tool Used

k6

---

## Test Configuration

| Parameter | Value |
|-----------|-------|
| Virtual Users | 10 |
| Duration | 30 Seconds |

---

## Results

| Metric | Result |
|---------|--------|
| Total Requests | 300 |
| Failed Requests | 0 |
| Average Response Time | 29.39 ms |
| 95th Percentile | 39 ms |
| Maximum Response Time | 44.7 ms |
| Throughput | 9.7 requests/sec |

---

## Observations

- All requests completed successfully.
- No request failures occurred during testing.
- Average response time remained below 30 ms.
- The application remained stable throughout the test.
- The deployed application handled concurrent requests efficiently.

---

## Conclusion

The application successfully handled the configured workload with consistent response times and zero request failures, demonstrating stable performance under moderate load.