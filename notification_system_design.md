# Notification System Design

## Overview

The Notification System is designed to fetch, prioritize, and display notifications for users. Notifications are retrieved from the provided API and presented in an organized manner based on priority and recency.

## Architecture

The system consists of three main parts:

1. **Frontend (React + Material UI)**
   Responsible for displaying notifications and user interactions.

2. **Logging Middleware**
   Records important application events and errors for monitoring and debugging.

3. **Notification Service API**
   Provides notification data to the application.

## Data Flow

1. User opens the application.
2. Frontend requests notification data from the API.
3. Notifications are processed and sorted based on priority.
4. The UI displays all notifications and priority notifications.
5. Important actions are recorded through the logging middleware.

## Priority Logic

Notifications are prioritized in the following order:

```text
Placement > Result > Event
```

For notifications with the same priority, the most recent notification is displayed first.

## Error Handling

* API request failures are handled gracefully.
* Errors are logged through the logging middleware.
* Users receive appropriate feedback when data cannot be loaded.

## Logging Strategy

The logging middleware records:

* API requests and responses
* Page loads
* User actions
* Application errors

This helps in debugging and monitoring system behavior.

## Scalability

The design separates UI, business logic, and logging functionality, making it easier to maintain and extend with additional notification types and features in the future.
