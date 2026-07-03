# 03 - IAM Setup

## Objective

Create a dedicated IAM user following the Principle of Least Privilege instead of using the AWS root account.

## User Details

**IAM User**
- devops-intern

**User Group**
- DevOpsInternGroup

## Permissions Assigned

The following AWS managed policies were attached to the group:

- AmazonEC2FullAccess
- AmazonS3FullAccess
- CloudWatchFullAccess
- IAMReadOnlyAccess

## Why IAM?

Using an IAM user instead of the root account improves security by limiting permissions and following AWS security best practices.

## Outcome

Successfully created an IAM user and assigned it to a least-privilege user group.