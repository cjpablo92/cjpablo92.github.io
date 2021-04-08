---
title: "Machine learning vectors"
tags: ["Machine Learning", "Data engineer", "Java 8", "Guice", "Elastic Search", "Google big table", "Microservices"]
date: "2018-01-01"
---

Purely backend project built using Java 8, Spark Java, Guice, Elastic search, and Google big table, on a microservices ecosystem.The main goal was to store machine learning data vectors for online and offline training and evaluation.
The challenge here was managing the amount of data (millions of RPM and terabytes of information), and deliver the data for online evaluation (sync on a near-real-time basis) under 200ms of response time.
