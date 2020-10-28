<!--
.. title: Znajdywanie i zabijanie kwerend w Postgresie
.. slug: znajdywanie-zabijanie-kwerend-postgres
.. date: 2020-10-16 22:09:41 UTC+02:00
.. tags: postgres
.. category: snippet
.. link:
.. description:
.. type: text
-->

Znajdywanie aktywnych kwerend:

```sql
SELECT pid, age(clock_timestamp(), query_start), usename, state, query
FROM pg_stat_activity
WHERE query != '<IDLE>' AND query NOT ILIKE '%pg_stat_activity%'
ORDER BY query_start DESC;
```

Mając PID z poprzedniej kwerendy, możemy zabić kwerendę:

```sql
SELECT pg_cancel_backend(PID);
```

Powyższa operacja może chwilę potrwać, jeżeli chcemy zrobić to brutalniej:

```sql
SELECT pg_terminate_backend(PID);
```
