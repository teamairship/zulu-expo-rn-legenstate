# ERD

```mermaid
---
title: Zulu Entity Relation Diagram
---
erDiagram
    USER ||--|{ PROJECT : assigned
    PROJECT ||--|{ ACTIVITY : contains
    USER }|--|{ TIME-ENTRY : has
    TIME-ENTRY }|--|{ PROJECT : contains
    ACTIVITY ||--|| ISSUE : may_have

    USER {
      uuid id pk
      string redmine_key uk
      string name
    }

    PROJECT {
      uuid id pk
      string name
    }

    ISSUE {
      uuid id pk
      subject name
    }

    ACTIVITY {
      uuid id pk
      string name
      uuid project_key fk
    }

    TIME-ENTRY {
      uuid id pk
      string redmine_key fk
      uuid project_id fk
      uuid activity_id fk
      string note
      number hours
      timestamp start_time
      issue id fk
    }
```

# FLOW

```mermaid
graph LR
    A[Click ] --> B[Is it raining?]
    B -- Yes --> C[Take umbrella]
    B -- No --> D[Go outside without umbrella]
    C --> E[Reach destination]
    D --> E[Reach destination]
```

## Timer

1. Click start timer
2. Set `start_time` to current timestamp
3. In UI compare the start time to the current time and add elapsed time
4. Click Stop timer
5. Calculate and save the `hours` columns.
6. Set start time to null
